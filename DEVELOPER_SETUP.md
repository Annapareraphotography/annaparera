# Developer Setup Guide

## Prerequisites
- Node.js 18+ and npm
- Git

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/lgm-s/shabakydev.git
cd shabakydev
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env.local
```

**Important:** The `.env.example` file is pre-configured to connect to the **remote development database** at `217.17.230.91:5434`. This allows you to use the same database as the production environment without setting up PostgreSQL locally.

**Database Credentials:**
- Host: `217.17.230.91`
- Port: `5434`
- Database: `shabaky_dev`
- Username: `shabaky`
- Password: `ShabakyDev2026!`

### 4. Run the development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or whatever port you configured in `.env.local`).

### 5. Login to the portal
Use one of the test client accounts:

**Test Client 1 (Premium):**
- Email: `info@hessa.bh`
- Password: `client123`
- Plan: Premium (88 BHD/month)

**Test Client 2 (Starter):**
- Email: `dana@marketing.bh`
- Password: `client123`
- Plan: Starter (38 BHD/month)

**Test Client 3 (Professional):**
- Email: `mohammed@finance.bh`
- Password: `client123`
- Plan: Professional (58 BHD/month)

## Alternative: Local Database Setup

If you prefer to run PostgreSQL locally instead of connecting to the remote database:

### 1. Install PostgreSQL
```bash
# Ubuntu/Debian
sudo apt install postgresql postgresql-contrib

# macOS
brew install postgresql
```

### 2. Create local database
```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE shabaky_dev;
CREATE USER shabaky WITH PASSWORD 'ShabakyDev2026!';
GRANT ALL PRIVILEGES ON DATABASE shabaky_dev TO shabaky;
\q
```

### 3. Update .env.local
```env
DATABASE_URL=postgres://shabaky:ShabakyDev2026!@127.0.0.1:5432/shabaky_dev
```

### 4. Import database schema
Contact the team lead for the latest database dump or schema file.

## Project Structure

```
shabaky-frontend/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── (public)/        # Public marketing pages
│   │   ├── (auth)/          # Authentication pages (login, signup)
│   │   ├── portal/          # Client portal pages
│   │   └── api/             # API routes
│   ├── components/          # React components
│   │   └── ui/              # shadcn/ui components
│   ├── lib/                 # Utility functions, auth, database
│   └── styles/              # Global styles
├── public/                  # Static assets (images, logos)
├── .env.local               # Environment variables (DO NOT COMMIT)
├── .env.example             # Example environment file
└── next.config.ts           # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Key Technologies

- **Next.js 16.2.4** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **PostgreSQL** - Database
- **Framer Motion** - Animations
- **next-themes** - Dark mode support

## Common Issues

### Login doesn't work on localhost
Make sure your `.env.local` file has the correct `DATABASE_URL` pointing to `217.17.230.91:5434`. The database must be accessible from your machine.

### Port 3000 already in use
Change the `PORT` variable in `.env.local` to any available port (e.g., 3001, 3002, etc.).

### Database connection timeout
Check your internet connection and firewall. The remote database at `217.17.230.91:5434` must be accessible from your network.

### Build errors
Delete the `.next` folder and `node_modules`, then reinstall:
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Git Workflow

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

3. Push to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

## Need Help?

Contact the team lead or check the main project documentation.

## Production Deployment

The production site runs at:
- Marketing: https://shabaky.libertygulf.com
- Portal: https://shabaky.libertygulf.com/portal

Production deployment is handled automatically via systemd service. Do not deploy manually unless instructed.
