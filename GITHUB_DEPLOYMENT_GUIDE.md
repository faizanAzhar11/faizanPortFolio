# Azure Static Web Apps Deployment Guide

## Overview
This guide will help you deploy your Faizan Portfolio to Azure Static Web Apps using GitHub Actions for continuous deployment.

## Prerequisites
- GitHub account with access to the repository
- Azure account
- Administrative access to configure GitHub secrets

## Deployment Steps

### Step 1: Create Azure Static Web App
1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App" and select it
4. Click "Create"
5. Fill in the details:
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or use existing (e.g., "rg-faizan-portfolio")
   - **Name**: Choose a unique name (e.g., "faizan-portfolio-swa")
   - **Plan type**: Free (for development)
   - **Region**: Choose closest to your users (e.g., East US)
   - **Source**: GitHub
   - **GitHub account**: Link your GitHub account
   - **Organization**: faizanAzhar11
   - **Repository**: faizanPortFolio
   - **Branch**: main
   - **Build preset**: Custom
   - **App location**: /
   - **Api location**: (leave empty)
   - **Output location**: out

### Step 2: Configure Build Settings
During Azure Static Web App creation, Azure will automatically:
- Generate a deployment token
- Create the GitHub Action workflow
- Add the deployment token as a repository secret

### Step 3: Verify GitHub Integration
1. Go to your GitHub repository: https://github.com/faizanAzhar11/faizanPortFolio
2. Check that the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN` has been added:
   - Go to Settings → Secrets and variables → Actions
   - You should see `AZURE_STATIC_WEB_APPS_API_TOKEN`

### Step 4: Commit and Push Your Changes
The GitHub Actions workflow is already set up in your repository. To deploy:

1. Commit the workflow file:
   ```bash
   git add .github/workflows/azure-static-web-apps-deploy.yml
   git commit -m "Add Azure Static Web Apps deployment workflow"
   ```

2. Push to the main branch:
   ```bash
   git push origin main
   ```

### Step 5: Monitor Deployment
1. Go to your GitHub repository
2. Click on the "Actions" tab
3. You should see the workflow running
4. Wait for the deployment to complete (usually 2-5 minutes)

### Step 6: Access Your Deployed Portfolio
Once deployment is complete:
1. Go to your Azure Static Web App in the Azure Portal
2. Copy the URL from the "Overview" page
3. Your portfolio will be available at that URL

## Troubleshooting

### Common Issues:
1. **Build fails**: Check the Actions log for detailed error messages
2. **Deployment token missing**: Re-create the Static Web App to regenerate the token
3. **Wrong build output**: Ensure `output_location` is set to "out" in the workflow

### Environment Variables
If your portfolio needs environment variables:
1. Go to Azure Portal → Your Static Web App → Configuration
2. Add application settings as needed:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_USER_ID`

## File Structure
```
.github/
  workflows/
    azure-static-web-apps-deploy.yml  # GitHub Actions workflow
infra/
  main.bicep                         # Infrastructure as Code (optional)
src/                                 # Your source code
staticwebapp.config.json            # Static Web App configuration
package.json                        # Node.js dependencies
next.config.js                      # Next.js configuration
```

## Next Steps
1. Complete the Azure Static Web App creation in the portal
2. Verify the GitHub integration
3. Push your code to trigger the first deployment
4. Customize the domain name if needed
5. Set up custom domain (optional)

## Benefits of This Approach
- ✅ Automatic deployments on every push to main
- ✅ Preview deployments for pull requests
- ✅ No need for local Azure CLI setup
- ✅ Built-in CDN and SSL certificate
- ✅ Free tier available for personal projects

---

**Note**: This approach bypasses the device management issues you encountered with Azure CLI, as all deployment happens in GitHub's cloud environment.
