# Client Portal Documentation

## Overview
A fully functional client portal for the Shabaky marketing website, allowing clients to manage their websites, billing, and account settings.

## Features Implemented

### 1. **Authentication System**
- ✅ Login page with real authentication
- ✅ JWT-based session management with HTTP-only cookies
- ✅ Password hashing using bcryptjs
- ✅ Protected routes using Next.js middleware
- ✅ Auto-redirect for authenticated users

### 2. **Client Dashboard** (`/portal/dashboard`)
- ✅ Account overview with key metrics
- ✅ Website status (pending/building/live/paused)
- ✅ Payment status (pending/active/overdue/etc.)
- ✅ Current plan and monthly fee display
- ✅ Next billing date with countdown
- ✅ Quick action cards for navigation
- ✅ Full account information display

### 3. **Website Management** (`/portal/website`)
- ✅ View website status and details
- ✅ Display subdomain and custom domain
- ✅ Direct links to live website
- ✅ Website analytics dashboard (placeholder with sample data)
- ✅ Change request form for website updates
- ✅ Recent activity timeline

### 4. **Billing Management** (`/portal/billing`)
- ✅ Payment status overview
- ✅ Current plan details with features
- ✅ Monthly fee and next billing date
- ✅ Payment history with invoices
- ✅ Payment method management (placeholder)
- ✅ Plan upgrade option
- ✅ Billing information display

### 5. **Account Settings** (`/portal/settings`)
- ✅ Update contact information (name, phone, address)
- ✅ Change password with current password verification
- ✅ View business information (read-only)
- ✅ Account status and creation date

## Tech Stack
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Database:** PostgreSQL (shabaky_dev on port 5434)
- **Authentication:** JWT with HTTP-only cookies
- **Password Hashing:** bcryptjs
- **UI Components:** shadcn/ui + Tailwind CSS
- **Icons:** lucide-react
- **Notifications:** Sonner (toast notifications)
- **Date Formatting:** date-fns

## Database Changes

### Migration Applied
```sql
-- Added password_hash column to clients table
ALTER TABLE clients ADD COLUMN password_hash TEXT;

-- Created index for faster email lookups
CREATE INDEX idx_clients_email ON clients(email);
```

### Test Client Credentials
All test clients have been set up with the password: **`client123`**

1. **Hessa Holding Company**
   - Email: `info@hessa.bh`
   - Password: `client123`
   - Plan: Premium (BD 88/month)

2. **Creative Marketing**
   - Email: `dana@marketing.bh`
   - Password: `client123`
   - Plan: Starter (BD 38/month)

3. **Zayani Financial**
   - Email: `mohammed@finance.bh`
   - Password: `client123`
   - Plan: Professional (BD 58/month)

4. **Modern Retail Co.**
   - Email: `salman@retail.bh`
   - Password: `client123`
   - Plan: Starter (BD 38/month)

## Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   └── login/
│   │       └── page.tsx          # Login page
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts    # Login API
│   │   │   ├── logout/route.ts   # Logout API
│   │   │   └── session/route.ts  # Session check API
│   │   └── client/
│   │       ├── info/route.ts     # Update client info API
│   │       └── password/route.ts # Change password API
│   ├── portal/
│   │   ├── layout.tsx            # Portal layout with sidebar
│   │   ├── page.tsx              # Redirect to dashboard
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Main dashboard
│   │   ├── website/
│   │   │   └── page.tsx          # Website management
│   │   ├── billing/
│   │   │   └── page.tsx          # Billing & payments
│   │   └── settings/
│   │       └── page.tsx          # Account settings
│   └── layout.tsx
├── lib/
│   ├── auth.ts                   # Authentication utilities
│   ├── db.ts                     # Database connection
│   └── client-context.tsx        # Client context provider
├── components/
│   ├── ui/                       # UI components (shadcn)
│   └── providers.tsx             # App providers
└── middleware.ts                 # Route protection
```

## API Routes

### Authentication

#### POST `/api/auth/login`
Login with email and password.

**Request:**
```json
{
  "email": "info@hessa.bh",
  "password": "client123",
  "rememberMe": false
}
```

**Response:**
```json
{
  "success": true,
  "client": {
    "id": "uuid",
    "businessName": "Hessa Holding Company",
    "email": "info@hessa.bh",
    "plan": "premium"
  }
}
```

#### POST `/api/auth/logout`
Logout and clear session.

#### GET `/api/auth/session`
Get current session and client data.

### Client Management

#### PATCH `/api/client/info`
Update client contact information.

**Request:**
```json
{
  "contact_name": "John Doe",
  "phone": "+973-1234-5678",
  "address": "123 Business St"
}
```

#### POST `/api/client/password`
Change password.

**Request:**
```json
{
  "currentPassword": "client123",
  "newPassword": "newpassword456"
}
```

## Security Features

1. **Password Security**
   - Passwords hashed with bcrypt (10 salt rounds)
   - Minimum 6 characters required
   - Current password verification for changes

2. **Session Management**
   - JWT tokens with 7-day expiration
   - HTTP-only cookies (XSS protection)
   - Secure flag in production (HTTPS only)
   - SameSite=Lax (CSRF protection)

3. **Route Protection**
   - Middleware checks authentication
   - Auto-redirect to login for protected routes
   - Token validation on every request
   - Invalid tokens cleared automatically

## How to Access the Portal

### Development
1. Start the development server:
   ```bash
   cd /home/libertyai/shabaky-frontend
   npm run dev
   ```

2. Access the portal:
   - Marketing Site: http://217.17.230.91:5162
   - Login Page: http://217.17.230.91:5162/login
   - Portal: http://217.17.230.91:5162/portal/dashboard

3. Login with test credentials:
   - Email: `info@hessa.bh`
   - Password: `client123`

### Production
- Deploy using `npm run build && npm start`
- Update environment variables for production
- Enable SSL/HTTPS for secure cookies

## Environment Variables

```bash
# Port configuration
PORT=5162

# Database
DATABASE_URL=postgres://shabaky:ShabakyDev2026!@127.0.0.1:5434/shabaky_dev

# App URLs
NEXT_PUBLIC_MARKETING_URL=http://217.17.230.91:5162
NEXT_PUBLIC_PORTAL_URL=http://217.17.230.91:5163
NEXT_PUBLIC_ADMIN_URL=http://217.17.230.91:5161

# JWT Secret (change in production!)
JWT_SECRET=shabaky-dev-secret-key-change-in-production

# Dev settings
NODE_ENV=development
```

## Features to Extend (Future)

1. **Email Notifications**
   - Welcome emails
   - Password reset
   - Billing reminders
   - Website status updates

2. **File Uploads**
   - Logo upload
   - Business documents
   - Content images

3. **Support System**
   - Live chat integration
   - Ticket system
   - Knowledge base

4. **Analytics Integration**
   - Real Google Analytics data
   - Website visitor tracking
   - Performance metrics

5. **Payment Integration**
   - Stripe/Benefit Pay
   - Invoice generation
   - Automatic billing

6. **Multi-language**
   - Arabic translation
   - RTL support for portal

## Testing Checklist

- [x] Login with valid credentials
- [x] Login with invalid credentials (error handling)
- [x] Protected route access without auth (redirect to login)
- [x] Dashboard displays correct client data
- [x] Website management shows correct status
- [x] Billing page shows correct plan and fees
- [x] Settings update contact information
- [x] Settings change password
- [x] Logout functionality
- [x] Session persistence (remember me)
- [x] Mobile responsive design
- [x] Dark mode support (inherited from theme)

## Troubleshooting

### Cannot login
- Check database connection
- Verify client email exists in database
- Ensure password hash is set
- Check browser console for errors

### Session not persisting
- Verify cookies are enabled
- Check middleware configuration
- Ensure JWT secret is set

### Database errors
- Verify PostgreSQL is running on port 5434
- Check database credentials in .env.local
- Ensure migrations have been applied

## Support

For issues or questions:
- Check the console logs for detailed error messages
- Verify database connectivity
- Ensure all dependencies are installed (`npm install`)
- Check that the dev server is running on port 5162

---

**Built with ❤️ by Liberty Gulf Management Solutions**
**Last Updated:** May 3, 2026
