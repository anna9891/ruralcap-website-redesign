# 🚀 Deploy to Vercel & GitHub - Quick Steps

## Step 1: Deploy to Vercel (2 minutes)

Open your terminal in this directory and run:

```bash
# Login to Vercel (if not already logged in)
npx vercel login

# Deploy to production
npx vercel --prod --yes
```

When deployment completes, you'll get a URL like: `https://rural-alaska-cap-website-asdf1234.vercel.app`

## Step 2: Update the Proposal (30 seconds)

Run the update script with your Vercel URL:

```bash
./update-proposal-url.sh
```

Enter your Vercel URL when prompted.

## Step 3: Push to GitHub (1 minute)

### Option A: Using GitHub CLI (if installed)
```bash
gh repo create ruralcap-website-redesign --public --source=. --remote=origin --push
```

### Option B: Manual GitHub Setup
1. Create a new repo at https://github.com/new
   - Name: `ruralcap-website-redesign`
   - Keep it public or private as desired
   
2. Push the code:
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/ruralcap-website-redesign.git
git branch -M main
git push -u origin main
```

## That's it! 🎉

Your website is now:
- ✅ Live on Vercel
- ✅ Proposal updated with live URL
- ✅ Code on GitHub

## Troubleshooting

If `npx vercel` doesn't work:
1. Install Vercel CLI: `npm install -g vercel`
2. Then run: `vercel --prod`

If you get authentication errors:
1. Run: `vercel logout`
2. Then: `vercel login`
3. Try deployment again