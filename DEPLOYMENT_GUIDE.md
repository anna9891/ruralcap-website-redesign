# Vercel Deployment Guide for RurAL CAP Website

## Quick Deployment Steps

1. **Install Vercel CLI (if not already installed):**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```
   - Choose your preferred authentication method (GitHub, Google, Email, etc.)

3. **Deploy the Project:**
   ```bash
   vercel
   ```
   - When prompted:
     - Set up and deploy: **Yes**
     - Which scope: Choose your account
     - Link to existing project?: **No** (create new)
     - Project name: `ruralcap-redesign` (or press enter for default)
     - Directory: `.` (current directory)
     - Auto-detected Next.js - confirm with **Yes**

4. **Production Deployment:**
   ```bash
   vercel --prod
   ```

## Alternative: Deploy via Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import Git Repository → "Import Third-Party Git Repository"
4. Upload the project folder
5. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: **./**
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

## Update HTML Proposal with Live URL

Once deployed, update the demo link in `149035-RurAL-CAP-Website-Restructure-Proposal.html`:

1. Open the HTML proposal file
2. Find the demo section (around line 165)
3. Replace the placeholder URL with your actual Vercel URL:
   ```html
   <p><a href="https://YOUR-PROJECT-NAME.vercel.app" class="demo-link" target="_blank">https://YOUR-PROJECT-NAME.vercel.app</a></p>
   ```

## Environment Variables (if needed)

No environment variables are required for this prototype deployment.

## Post-Deployment

1. Test all functionality:
   - Program pages navigation
   - Resource library filtering
   - Event calendar
   - Appointment scheduler
   - Forms submission (prototype mode)

2. Share the live URL with RurAL CAP for review

## Troubleshooting

If you encounter build errors:

1. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules .next
   npm install
   npm run build
   ```

2. **Check Node version:**
   - Required: Node.js 18.17 or later
   - Check with: `node --version`

3. **For CSS optimization errors:**
   - Already disabled in next.config.js

## Support

For Vercel-specific issues, visit: https://vercel.com/docs