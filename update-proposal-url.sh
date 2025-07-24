#!/bin/bash

# Script to update the proposal HTML with the actual Vercel deployment URL

echo "RurAL CAP Proposal URL Updater"
echo "==============================="
echo

# Check if proposal file exists
if [ ! -f "149035-RurAL-CAP-Website-Restructure-Proposal.html" ]; then
    echo "Error: Proposal HTML file not found!"
    exit 1
fi

# Prompt for the Vercel URL
echo "Please enter your Vercel deployment URL:"
echo "(Example: https://ruralcap-redesign.vercel.app)"
read -p "URL: " VERCEL_URL

# Validate URL format
if [[ ! "$VERCEL_URL" =~ ^https://.*\.vercel\.app$ ]]; then
    echo "Warning: URL doesn't match expected Vercel format (https://name.vercel.app)"
    read -p "Continue anyway? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        echo "Cancelled."
        exit 1
    fi
fi

# Create backup
cp "149035-RurAL-CAP-Website-Restructure-Proposal.html" "149035-RurAL-CAP-Website-Restructure-Proposal.html.bak"
echo "Created backup: 149035-RurAL-CAP-Website-Restructure-Proposal.html.bak"

# Update the URL in the proposal
sed -i '' "s|https://ruralcap-redesign.vercel.app|$VERCEL_URL|g" "149035-RurAL-CAP-Website-Restructure-Proposal.html"

# Verify the update
if grep -q "$VERCEL_URL" "149035-RurAL-CAP-Website-Restructure-Proposal.html"; then
    echo "✅ Success! Proposal updated with URL: $VERCEL_URL"
    echo
    echo "The demo link in your proposal now points to your live deployment."
else
    echo "❌ Error: Failed to update the proposal. Restoring from backup..."
    mv "149035-RurAL-CAP-Website-Restructure-Proposal.html.bak" "149035-RurAL-CAP-Website-Restructure-Proposal.html"
    exit 1
fi

# Offer to remove backup
read -p "Remove backup file? (y/n): " remove_backup
if [ "$remove_backup" = "y" ]; then
    rm "149035-RurAL-CAP-Website-Restructure-Proposal.html.bak"
    echo "Backup removed."
fi

echo
echo "Done! Your proposal is ready to submit."