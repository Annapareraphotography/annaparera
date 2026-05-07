# Edge Runtime Fix - Authentication System

## Problem
The initial middleware.ts implementation used `jsonwebtoken` and `bcryptjs` which depend on Node.js `crypto` module. This caused the error:
```
Edge runtime does not support Node.js 'crypto' module
```

## Solution

### 1. Simplified Edge-Compatible Middleware
**File:** `src/middleware.ts`

The middleware now only:
- ✅ Checks if `shabaky_token` cookie EXISTS (not validates it)
- ✅ Redirects unauthenticated users from `/portal/*` to `/login`
- ✅ Redirects authenticated users (with cookie) from `/login` to `/portal/dashboard`
- ✅ No crypto operations = Edge Runtime compatible

**What it does NOT do:**
- ❌ Verify JWT token signature (moved to API routes)
- ❌ Check token expiration (moved to API routes)
- ❌ Decode token payload (moved to API routes)

### 2. Token Verification Moved to Node.js Runtime
**Where token verification happens:**

#### API Routes (Node.js Runtime)
All API routes verify tokens using Node.js crypto:
- `src/app/api/auth/session/route.ts` - Verifies token and returns client data
- `src/app/api/client/info/route.ts` - Verifies token before updating
- `src/app/api/client/password/route.ts` - Verifies token before password change

#### Client Components
Client components use the `/api/auth/session` endpoint:
- `src/lib/client-context.tsx` - Calls `/api/auth/session` to verify and get client data
- All portal pages use `useClient()` hook which depends on session API

### 3. Server-Side Auth Helper (Optional)
**File:** `src/lib/server-auth.ts`

For Server Components that need auth:
```typescript
import { getServerClient } from '@/lib/server-auth';

export default async function MyServerComponent() {
  const client = await getServerClient();
  if (!client) {
    redirect('/login');
  }
  // ... rest of component
}
```

## How It Works Now

### Flow 1: Accessing Protected Route
1. User navigates to `/portal/dashboard`
2. **Middleware (Edge):** Checks if `shabaky_token` cookie exists
   - If NO cookie → Redirect to `/login`
   - If cookie exists → Allow through (no verification yet)
3. **Client Component (Browser):** `ClientProvider` calls `/api/auth/session`
4. **API Route (Node.js):** Verifies JWT token using Node.js crypto
   - If invalid → Returns 401
   - If valid → Returns client data
5. **Client Component:** Displays data or redirects to login

### Flow 2: Login
1. User submits login form
2. **API Route (Node.js):** `/api/auth/login` verifies credentials
   - Hashes password with bcrypt (Node.js)
   - Generates JWT token with jsonwebtoken (Node.js)
   - Sets HTTP-only cookie
3. **Client:** Redirects to `/portal/dashboard`
4. **Middleware (Edge):** Sees cookie, allows access
5. **Client Component:** Fetches and displays data

### Flow 3: Logout
1. User clicks logout
2. **API Route (Node.js):** `/api/auth/logout` clears cookie
3. **Client:** Redirects to `/login`
4. **Middleware (Edge):** No cookie, allows login page

## Security Still Maintained

Even though middleware doesn't verify tokens:

✅ **Cookies are HTTP-only** - JavaScript can't steal them
✅ **Tokens are verified in API routes** - Before any data access
✅ **Client-side checks token** - Via `/api/auth/session` on load
✅ **Expired tokens are rejected** - By API routes
✅ **Invalid tokens are rejected** - By API routes

The only "risk" is someone could have an invalid cookie and briefly see the portal before being redirected. This is acceptable because:
- No data is loaded without valid token
- API routes still verify everything
- User is immediately redirected when session check fails

## Files Modified

### Created/Updated
- ✅ `src/middleware.ts` - Edge-compatible, cookie-only check
- ✅ `src/lib/server-auth.ts` - Optional server-side helpers
- ✅ `EDGE_RUNTIME_FIX.md` - This documentation

### No Changes Needed
- ✅ `src/lib/auth.ts` - Still uses Node.js crypto (API routes only)
- ✅ `src/app/api/auth/**` - All API routes use Node.js runtime
- ✅ `src/lib/client-context.tsx` - Uses API route for verification
- ✅ All portal pages - Use client-side context

## Testing Checklist

- [x] Marketing site loads without errors
- [x] Can access `/login` page
- [x] Can login with valid credentials
- [x] Redirected to `/portal/dashboard` after login
- [x] Portal loads client data correctly
- [x] Cannot access portal without login (redirects to login)
- [x] Invalid/expired tokens are rejected by API
- [x] Logout works correctly
- [x] No Edge Runtime errors in console

## Environment Requirements

### Edge Runtime (Middleware)
- ✅ No Node.js modules
- ✅ No crypto operations
- ✅ Simple cookie checks only

### Node.js Runtime (API Routes)
- ✅ Full Node.js support
- ✅ jsonwebtoken for JWT
- ✅ bcryptjs for password hashing
- ✅ PostgreSQL queries

## Future Considerations

If you need token verification in middleware for some reason, options are:

1. **Use @edge-runtime/jwt** - Edge-compatible JWT library
2. **Use Jose** - Modern JWT library with Edge support
3. **Use Auth.js (NextAuth)** - Built for Next.js Edge Runtime
4. **Keep current approach** - It's simpler and works perfectly

Current approach is recommended because:
- ✅ Simpler code
- ✅ No additional dependencies
- ✅ Token verification still happens (in API routes)
- ✅ Edge Runtime limitations don't affect security

## Verification

Test that everything works:

```bash
# Start the server
cd /home/libertyai/shabaky-frontend
npm run dev

# Test marketing site
curl http://localhost:5162/

# Test login redirect
curl -I http://localhost:5162/portal/dashboard
# Should see: Location: /login

# Test login
curl -X POST http://localhost:5162/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"info@hessa.bh","password":"client123"}' \
  -c cookies.txt

# Test session with cookie
curl http://localhost:5162/api/auth/session -b cookies.txt
# Should return client data

# Test portal access with cookie
curl -I http://localhost:5162/portal/dashboard -b cookies.txt
# Should NOT redirect (cookie exists)
```

## Summary

✅ **Problem Fixed** - No more Edge Runtime errors
✅ **Security Maintained** - Token verification in API routes
✅ **Simple Solution** - Minimal code changes
✅ **Production Ready** - Works on all Next.js platforms

The authentication system is now fully compatible with Next.js Edge Runtime while maintaining all security features.
