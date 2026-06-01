# Quick Reference Commands

## Development
```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Access Sanity Studio
# Navigate to http://localhost:3000/studio
```

## Build & Test
```bash
# Build for production
npm run build

# Test production build locally
npm start

# Run linter
npm run lint
```

## Environment Setup
```bash
# 1. Copy example env file
cp .env.local.example .env.local

# 2. Edit .env.local and add your Sanity credentials:
# NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
# NEXT_PUBLIC_SANITY_DATASET=production
```

## Vercel Deployment

### First Time Setup
```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Environment Variables in Vercel
Add these in Vercel Dashboard > Settings > Environment Variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `ql48k2tp`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`

### Auto Deployment
Push to main branch, Vercel auto-deploys:
```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

## Common Issues

### Build fails with "Missing NEXT_PUBLIC_SANITY_PROJECT_ID"
**Solution**: Add environment variable to Vercel project settings

### Images not loading
**Solution**: Check Sanity CDN configuration in next.config.mjs

### Stale content
**Solution**: Adjust revalidate time in src/app/page.tsx or use on-demand revalidation

### Studio not accessible
**Solution**: Ensure you're accessing /studio route and environment variables are set

## Performance Testing
```bash
# Run production build
npm run build

# Check bundle size
npm run build -- --profile

# Lighthouse test
# Use Chrome DevTools > Lighthouse tab
```

## Maintenance

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

### Clear Cache
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules
npm install
```

## Monitoring

### Check Deployment
- Vercel Dashboard: https://vercel.com/dashboard
- Build logs: Vercel > Project > Deployments > [Latest]
- Runtime logs: Vercel > Project > Logs

### Performance
- Vercel Analytics: Enable in project settings
- Core Web Vitals: Check in Vercel dashboard
- Error tracking: Consider adding Sentry

## Support
- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs
- Vercel Docs: https://vercel.com/docs
