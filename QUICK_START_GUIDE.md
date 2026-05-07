# Quick Start Guide - Shabaky Client Portal

## 🎯 What Was Built

A complete, fully functional client portal system for the Shabaky marketing website that allows clients to:
- Login securely with email/password
- View their website status and details
- Manage billing and view payment history
- Update account settings and change passwords
- Request website changes

## 🚀 How to Access

### 1. Start the Development Server

```bash
cd /home/libertyai/shabaky-frontend
npm run dev
```

The site will be available at:
- **Local:** http://localhost:5162
- **Network:** http://217.17.230.91:5162

### 2. Login to the Portal

Visit: **http://217.17.230.91:5162/login**

Use any of these test accounts:

| Business | Email | Password | Plan |
|----------|-------|----------|------|
| Hessa Holding Company | info@hessa.bh | client123 | Premium (BD 88/mo) |
| Creative Marketing | dana@marketing.bh | client123 | Starter (BD 38/mo) |
| Zayani Financial | mohammed@finance.bh | client123 | Professional (BD 58/mo) |
| Modern Retail Co. | salman@retail.bh | client123 | Starter (BD 38/mo) |

### 3. Explore the Portal

After login, you'll be redirected to the dashboard with access to:

- **📊 Dashboard** (`/portal/dashboard`)
  - Account overview
  - Website status
  - Payment status
  - Quick actions

- **🌐 Website** (`/portal/website`)
  - Website details
  - Analytics
  - Request changes

- **💳 Billing** (`/portal/billing`)
  - Current plan
  - Payment history
  - Update payment method

- **⚙️ Settings** (`/portal/settings`)
  - Update contact info
  - Change password
  - Account details

## 🔐 Security Features

✅ **Password Hashing** - bcrypt with 10 salt rounds  
✅ **JWT Authentication** - HTTP-only cookies  
✅ **Protected Routes** - Automatic redirect to login  
✅ **Session Management** - 7-day expiration (30 days with "Remember Me")  
✅ **CSRF Protection** - SameSite cookies  

## 📁 Key Files Created/Modified

### Authentication & Database
- `src/lib/auth.ts` - Authentication utilities
- `src/lib/db.ts` - PostgreSQL connection
- `src/lib/client-context.tsx` - Client state management
- `src/middleware.ts` - Route protection
- `database/migrations/001_add_client_passwords.sql` - Database migration

### API Routes
- `src/app/api/auth/login/route.ts` - Login endpoint
- `src/app/api/auth/logout/route.ts` - Logout endpoint
- `src/app/api/auth/session/route.ts` - Session check
- `src/app/api/client/info/route.ts` - Update client info
- `src/app/api/client/password/route.ts` - Change password

### Portal Pages
- `src/app/(auth)/login/page.tsx` - Login page (updated)
- `src/app/portal/layout.tsx` - Portal layout with sidebar
- `src/app/portal/dashboard/page.tsx` - Dashboard
- `src/app/portal/website/page.tsx` - Website management
- `src/app/portal/billing/page.tsx` - Billing & payments
- `src/app/portal/settings/page.tsx` - Account settings

### UI Components
- `src/components/ui/textarea.tsx` - Textarea component
- `src/components/providers.tsx` - Added toast notifications

## 📊 Database Changes

```sql
-- Added password_hash column
ALTER TABLE clients ADD COLUMN password_hash TEXT;

-- Created index for faster lookups
CREATE INDEX idx_clients_email ON clients(email);

-- All test clients now have hashed passwords (password: "client123")
```

## 🎨 Design Features

- **Premium Yellow/Gold Theme** (#F59E0B)
- **Mobile Responsive** - Works on all devices
- **Dark Mode Support** - Inherits from theme provider
- **Smooth Animations** - Tailwind transitions
- **Professional UI** - shadcn/ui components
- **Toast Notifications** - Sonner for user feedback

## 🧪 Testing the Portal

### Test Login
1. Go to http://217.17.230.91:5162/login
2. Enter: `info@hessa.bh` / `client123`
3. Click "Sign in"
4. You should be redirected to the dashboard

### Test Dashboard
- View account overview with real data from database
- See website status (Live, Building, Pending, or Paused)
- Check payment status and next billing date

### Test Settings
1. Go to Settings
2. Update contact name/phone/address
3. Click "Save Changes"
4. Should see success toast notification

### Test Password Change
1. Go to Settings
2. Enter current password: `client123`
3. Enter new password (min 6 chars)
4. Confirm new password
5. Click "Change Password"
6. Logout and login with new password

## 📝 Environment Variables

Located in `.env.local`:

```env
PORT=5162
DATABASE_URL=postgres://shabaky:ShabakyDev2026!@127.0.0.1:5434/shabaky_dev
NEXT_PUBLIC_MARKETING_URL=http://217.17.230.91:5162
NEXT_PUBLIC_PORTAL_URL=http://217.17.230.91:5163
NEXT_PUBLIC_ADMIN_URL=http://217.17.230.91:5161
JWT_SECRET=shabaky-dev-secret-key-change-in-production
NODE_ENV=development
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
sudo fuser -k 5162/tcp
npm run dev
```

### Cannot Login
- Check database connection (port 5434)
- Verify password hash exists in database
- Check browser console for errors

### Session Not Persisting
- Check browser allows cookies
- Verify JWT secret is set
- Check middleware configuration

### Database Connection Error
```bash
# Test database connection
PGPASSWORD='ShabakyDev2026!' psql -h 127.0.0.1 -p 5434 -U shabaky -d shabaky_dev -c "SELECT COUNT(*) FROM clients;"
```

## 📚 Additional Documentation

See `CLIENT_PORTAL_DOCUMENTATION.md` for:
- Detailed API documentation
- Security features
- Project structure
- Future enhancements
- Complete feature list

## ✅ Completed Features

- [x] Client authentication system
- [x] Login page with real auth
- [x] Session management with JWT
- [x] Password hashing (bcrypt)
- [x] Protected routes middleware
- [x] Client dashboard with real data
- [x] Website management page
- [x] Billing & payment history
- [x] Account settings
- [x] Password change functionality
- [x] Contact info updates
- [x] Mobile responsive design
- [x] Toast notifications
- [x] Database migrations
- [x] Test client passwords set
- [x] Complete documentation

## 🎉 Ready to Use!

The client portal is now fully functional and ready for testing and deployment!

**Test it now:** http://217.17.230.91:5162/login

Login with: `info@hessa.bh` / `client123`

---

Built with ❤️ using Next.js 15, TypeScript, PostgreSQL, and shadcn/ui
