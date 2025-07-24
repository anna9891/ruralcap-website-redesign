#!/bin/bash

echo "🚀 RurAL CAP Website - Vercel Deployment Script"
echo "=============================================="
echo

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project directory!"
    exit 1
fi

echo "📝 Step 1: Login to Vercel"
echo "-------------------------"
npx vercel login

echo
echo "🚀 Step 2: Deploy to Production"
echo "------------------------------"
npx vercel --prod --yes

echo
echo "✅ Deployment complete!"
echo
echo "📝 Step 3: Update your proposal"
echo "------------------------------"
echo "Run: ./update-proposal-url.sh"
echo "And enter your Vercel URL when prompted."