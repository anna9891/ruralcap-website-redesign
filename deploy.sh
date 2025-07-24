#!/bin/bash

# Deploy to Vercel script
echo "Deploying to Vercel..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Deploy to Vercel with automatic settings
npx vercel --yes --prod \
    --name ruralcap-redesign \
    --build-env NODE_ENV=production \
    --public \
    --no-clipboard \
    2>&1 | tee deploy.log

# Extract the URL from the deployment log
DEPLOY_URL=$(grep -o 'https://[^[:space:]]*\.vercel\.app' deploy.log | head -1)

if [ -n "$DEPLOY_URL" ]; then
    echo "Deployment successful!"
    echo "URL: $DEPLOY_URL"
    
    # Update the HTML proposal with the new URL
    sed -i '' "s|https://ruralcap-redesign.vercel.app|$DEPLOY_URL|g" "149035-RurAL-CAP-Website-Restructure-Proposal.html"
    echo "Updated proposal HTML with deployment URL"
else
    echo "Deployment may have failed. Check deploy.log for details."
fi