# Commiters Website (React + Node + Supabase)

This repo is split into 3 folders:

- `frontend/` - React website (routing, UI, contact form)
- `backend/` - Node.js API (contact/leads endpoint)
- `database/` - Prisma schema for Supabase PostgreSQL

## Domain

- Public website URL: `https://www.commiters.com`
- Email: `hello@commiters.com`

## Run locally (after dependencies are installed)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Contact form behavior (MVP)

The frontend posts inquiry data to the backend API, which stores it in Supabase (Prisma).

Email notifications are optional and only work if SMTP env vars are enabled in `backend/.env`.

## Next steps to deploy

1. Deploy `frontend/` to Vercel.
2. Deploy `backend/` to Render.
3. Configure `backend/` to connect to Supabase Postgres.
4. Map domains:
   - `www.commiters.com` -> frontend
   - `api.commiters.com` -> backend
