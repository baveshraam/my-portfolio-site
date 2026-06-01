# Deployment Guide for Vercel

## Prerequisites
- Sanity account with a project created
- Vercel account

## Environment Variables Setup

### Required Variables
Add these to your Vercel project settings (Settings > Environment Variables):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=ql48k2tp
NEXT_PUBLIC_SANITY_DATASET=production
```

## Deployment Steps

### 1. Connect Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js configuration

### 2. Configure Build Settings
Vercel will automatically use these settings:
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Add Environment Variables
In Vercel project settings:
1. Go to Settings > Environment Variables
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` with your Sanity project ID
3. Add `NEXT_PUBLIC_SANITY_DATASET` with value `production`

### 4. Deploy
1. Click "Deploy"
2. Vercel will build and deploy your site
3. Your site will be live at `https://your-project.vercel.app`

## Post-Deployment

### Custom Domain
1. Go to Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Monitoring
- Check deployment logs in Vercel dashboard
- Monitor performance in Vercel Analytics
- Check errors in real-time

## Troubleshooting

### Build Fails with Environment Variable Error
**Solution**: Ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in Vercel environment variables

### Images Not Loading
**Solution**: Verify Sanity CDN hostname is in `next.config.mjs` remotePatterns

### Stale Data
**Solution**: Adjust `revalidate` value in page files or use on-demand revalidation

### Performance Issues
- Enable Vercel Analytics
- Check bundle size with `npm run build`
- Optimize images and reduce animation complexity

## Additional Resources
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Sanity Docs](https://www.sanity.io/docs)
