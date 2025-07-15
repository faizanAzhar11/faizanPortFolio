# Command Line Deployment Instructions

## 🚀 Easy Command Line Deployment for Your Portfolio

Since Azure CLI is having connectivity issues, here are the **simplest command line options**:

### Option 1: Check GitHub Actions (Recommended - Already Set Up!)
Your deployment might already be running automatically! 

1. **Check GitHub Actions Status:**
   - Go to: https://github.com/faizanAzhar11/faizanPortFolio/actions
   - Look for running workflows
   - If you see a workflow with ✅ green checkmark, your site is deployed!

2. **Find Your Live URL:**
   - Go to Azure Portal (portal.azure.com)
   - Search for "Static Web Apps"
   - Click on your app
   - Copy the URL from the Overview page

### Option 2: Use SWA CLI (If you have the deployment token)
```bash
# Build the project (already done ✅)
npm run build

# Deploy using SWA CLI
swa deploy ./out --deployment-token YOUR_DEPLOYMENT_TOKEN
```

### Option 3: Force GitHub Actions Deployment
```bash
# Make a small change to trigger deployment
echo "# Deploy $(date)" >> README.md
git add README.md
git commit -m "Trigger deployment"
git push origin main
```

### Option 4: Manual Upload to Azure Portal
1. Go to Azure Portal → Your Static Web App
2. Click "Overview" → "Manage deployment token"
3. Use the deployment token with SWA CLI
4. Or upload the `out` folder manually through the portal

## 🔍 Check Current Status

**Your build is ready!** The `out` folder contains your static files.

**Next step:** Choose one of the options above. Option 1 (GitHub Actions) is likely already working!

## 💡 Pro Tip
The GitHub Actions approach is the most reliable because:
- ✅ No local network issues
- ✅ Automatic on every push
- ✅ Built-in Azure integration
- ✅ Preview deployments for PRs

## 🚨 Quick Check
Run this to see if your build output is ready:
```bash
ls -la out/
```
