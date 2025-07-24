# Deployment Instructions for RurAL CAP Website

## Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel:**
   ```bash
   npx vercel login
   ```
   Choose your preferred authentication method.

2. **Deploy to Vercel:**
   ```bash
   npx vercel --prod
   ```
   
   When prompted:
   - Set up and deploy: **Y**
   - Which scope: Choose your account
   - Link to existing project?: **N**
   - Project name: `ruralcap-redesign` (or accept default)
   - Directory: `.` 
   - Auto-detected Next.js: **Y**

3. **After deployment, you'll receive a URL like:**
   ```
   https://ruralcap-redesign.vercel.app
   ```

4. **Update the HTML proposal:**
   Open `149035-RurAL-CAP-Website-Restructure-Proposal.html` and replace the demo URL with your deployment URL.

## Option 2: Deploy via GitHub + Vercel

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name: `ruralcap-website-redesign`
   - Description: "Website restructure for The Rural Alaska Community Action Program"
   - Keep it public or private as desired

2. **Push the code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ruralcap-website-redesign.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. Click **"Add New..."** → **"Project"**
3. **Import Git Repository**
4. Select your GitHub repository
5. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **"Deploy"**

## Option 3: Direct Upload to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. Click **"Add New..."** → **"Project"**
3. Click **"Continue with CLI"** or **"Upload"**
4. Drag and drop this entire project folder
5. Configure as above and deploy

## Post-Deployment Tasks

### 1. Update the HTML Proposal

Edit `149035-RurAL-CAP-Website-Restructure-Proposal.html`:

Find this line (around line 165):
```html
<p><a href="https://ruralcap-redesign.vercel.app" class="demo-link" target="_blank">https://ruralcap-redesign.vercel.app</a></p>
```

Replace with your actual URL:
```html
<p><a href="https://YOUR-DEPLOYMENT-URL.vercel.app" class="demo-link" target="_blank">https://YOUR-DEPLOYMENT-URL.vercel.app</a></p>
```

### 2. Test the Deployment

Verify all features work correctly:
- [ ] Homepage loads properly
- [ ] All three program pages (Education, Housing, Health & Well-Being)
- [ ] Resource library filtering
- [ ] Event calendars display
- [ ] Appointment scheduler opens
- [ ] Intake forms load for each program
- [ ] Mobile responsive design
- [ ] Accessibility features (keyboard navigation, screen reader support)

### 3. Custom Domain (Optional)

To add a custom domain:
1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

No environment variables are required for this prototype.

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 404 Errors on Dynamic Routes
The dynamic routes are already configured with `getStaticPaths`. If you see 404s, ensure the program names match exactly:
- `education`
- `housing`
- `health-wellbeing`

### Slow Performance
- Enable Vercel Edge Network in project settings
- Ensure images are optimized (consider converting to WebP)

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Project Repository: [Your GitHub URL]

## Quick Deploy Script

If you prefer, use the included deploy script:
```bash
./deploy.sh
```

This will attempt to deploy and automatically update the proposal HTML with the deployment URL.