# Vercel Deployment Guide

## Environment Variables to Set in Vercel

### Required (Optional but recommended)

```
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

### Email Service (Optional)

```
RESEND_API_KEY=your_resend_api_key
EMAIL_USER=your_email@example.com
```

## Deployment Steps

1. **Push to GitHub**: Make sure all changes are pushed to your main branch
2. **Connect to Vercel**: Link your GitHub repository to Vercel
3. **Set Environment Variables**: Add the above variables in Vercel dashboard
4. **Deploy**: Vercel will automatically deploy on push

## Troubleshooting

### If deployment fails:

1. **Retry**: Click "Redeploy" in Vercel dashboard
2. **Check Logs**: Review build logs for specific errors
3. **Environment Variables**: Ensure all required variables are set
4. **Build Locally**: Run `npm run build` locally to test

### Common Issues:

- **Spotify API**: If you don't have Spotify credentials, the app will work without recent tracks
- **Email Service**: Contact form will work without Resend API key (logs to console)
- **Image Optimization**: All images are optimized for production

## Performance Optimizations Applied

- ✅ Next.js Image optimization
- ✅ Static generation where possible
- ✅ CSS optimization
- ✅ Console removal in production
- ✅ WebP/AVIF image formats
