# BUSINESS ADD-ON – Event Management Platform

**Think Fast. Create Big. Build the Future.**

A complete, reusable full-stack event management website configured for the **BUSINESS ADD-ON** three-day business, innovation & entertainment festival in Mumbai.

Designed so college students with **no programming experience** can deploy it using only GitHub’s website and Vercel.

---

## What is included

- Premium dark + gold public website (Home, registration, ticket QR view)
- Dynamic ticket categories & registration with unique QR codes
- SPOC (Single Point of Contact) assignment shown on tickets
- PostgreSQL schema (Neon) covering events, tickets, speakers, sponsors, artists, challenges, RBAC, email logs, reminders, audit
- Seed data for BUSINESS ADD-ON (tickets, challenges, admin user)
- Auth.js (NextAuth) credentials login + role field
- Admin dashboard overview
- Vercel-ready configuration
- Vercel Blob ready for image uploads

---

## Student deployment (no terminal required)

### Step 1 – Download & extract
Download the project ZIP and extract it on your computer.

### Step 2 – Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in.
2. Click **New repository**.
3. Name it e.g. `business-add-on` (public or private).
4. **Do not** initialise with README.
5. Click **Create repository**.
6. On the empty repo page click **uploading an existing file**.
7. Drag **all** the extracted project files and folders into the browser and commit.

### Step 3 – Create a Neon database
1. Go to [neon.tech](https://neon.tech) and create a free account.
2. Create a new project (choose a region close to India if available).
3. Click **Connect** and copy both:
   - **Pooled** connection string → `DATABASE_URL`
   - **Direct** connection string → `DATABASE_URL_UNPOOLED`

### Step 4 – Import into Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New… → Project**.
3. Import the GitHub repository you just created.
4. Before deploying, open **Environment Variables** and add:

| Name | Value | Notes |
|------|-------|-------|
| `DATABASE_URL` | (Neon pooled string) | Required |
| `DATABASE_URL_UNPOOLED` | (Neon direct string) | Required for Prisma |
| `AUTH_SECRET` | long random string | e.g. use a password generator |
| `NEXT_PUBLIC_APP_URL` | `https://your-project.vercel.app` | Update after first deploy |
| `RESEND_API_KEY` | (from resend.com) | Optional for email |
| `RESEND_FROM_EMAIL` | verified sender | Optional |
| `RESEND_FROM_NAME` | BUSINESS ADD-ON | Optional |
| `BLOB_READ_WRITE_TOKEN` | (from Vercel Blob) | For image uploads |
| `CRON_SECRET` | another random string | Optional |

5. Click **Deploy**.

### Step 5 – Initialise the database
After the first successful deploy:

**Option A (recommended when you have Node later)**  
Run `npx prisma db push` and `npx prisma db seed` against the production `DATABASE_URL`.

**Option B (browser)**  
The project includes `/api/setup`. You can call it with the secret you set in `CRON_SECRET` / `AUTH_SECRET` to create the super-admin and base event if the database is empty.

Default admin after seed:
- **Email:** `admin@businessaddon.in`
- **Password:** `Admin@12345`  
**Change this password immediately.**

### Step 6 – Update `NEXT_PUBLIC_APP_URL`
Once you know your Vercel URL, add/update the environment variable and redeploy so QR codes point to the correct domain.

---

## Local development (optional, for developers)

```bash
npm install
cp .env.example .env.local
# fill in DATABASE_URL etc.
npx prisma db push
npx prisma db seed
npm run dev
```

---

## Architecture summary

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15 App Router, React 19, Tailwind |
| Auth | Auth.js (NextAuth v5) credentials + Prisma adapter |
| Database | PostgreSQL (Neon) + Prisma ORM |
| Email | Resend |
| Storage | Vercel Blob |
| Hosting | Vercel |

---

## Project structure

```
src/
  app/           # App Router pages & API routes
  components/    # UI components
  lib/           # auth, prisma, utils
prisma/
  schema.prisma
  seed.ts
```

---

## License

For the BUSINESS ADD-ON event and educational use.

Build logs for Prisma generate errors.

---

**Tagline:** Think Fast. Create Big. Build the Future.
