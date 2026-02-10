# Environment Files

| File | Purpose |
|------|---------|
| `.env.local` | Local development (`npm run dev`) |
| `.env.production` | Production deployment (Vercel) |

## Usage

**Local dev:** Copy to project root:
```bash
cp envs/.env.local .env.local
```

**Vercel production:** Env vars are set via `vercel env` CLI or Vercel dashboard.

## Required Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | API key for contact form submissions (get at https://web3forms.com) |
