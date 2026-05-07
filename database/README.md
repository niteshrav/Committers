# Commiters Database (Supabase PostgreSQL + Prisma)

This folder contains the Prisma schema used to create/query the database in Supabase.

## Local development

Supabase usually requires connection strings from the Supabase project.

1. Create a Supabase project.
2. Copy the Postgres connection string into `database/.env.example` (and then into `.env`).
3. Generate Prisma client and run migrations from the backend folder:

```bash
cd backend
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
```

## Model

- `Lead` stores website inquiries submitted via the contact form.

