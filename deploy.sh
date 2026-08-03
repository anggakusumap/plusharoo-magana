#!/bin/bash

# Exit immediately if any command fails
set -e

echo "=============================================="
echo "🚀 PlushAroo - Production Deployment Script"
echo "=============================================="

# Step 1: Build assets locally
echo "📦 Step 1: Compiling frontend assets..."
npm run build

# Step 2: Deploy to Vercel
echo "☁️ Step 2: Deploying static builds and serverless backend to Vercel..."
npx vercel --prod --yes

echo "=============================================="
echo "🎉 Adoption Center is Live! 🎉"
echo "👉 Live URL: https://plusharoo-magana.vercel.app"
echo "=============================================="
