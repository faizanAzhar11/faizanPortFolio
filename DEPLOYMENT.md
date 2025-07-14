# Faizan's Portfolio - Azure Static Web Apps Deployment

This guide will help you deploy your Next.js portfolio to Azure Static Web Apps.

## 🚀 Quick Deployment Options

### Option 1: Using Azure Portal (Recommended for First-Time Deployment)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Deploy to Azure Static Web Apps"
   git push origin main
   ```

2. **Go to Azure Portal**:
   - Navigate to [portal.azure.com](https://portal.azure.com)
   - Search for "Static Web Apps" and click "Create"

3. **Configure the Static Web App**:
   - **Subscription**: Choose your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `faizan-portfolio` (or your preferred name)
   - **Plan Type**: Free (for personal projects)
   - **Region**: East US (or closest to your users)
   - **Source**: GitHub
   - **GitHub Account**: Connect and authenticate
   - **Repository**: `faizanAzhar11/faizanPortFolio`
   - **Branch**: `main`
   - **Build Presets**: Next.js
   - **App location**: `/`
   - **Output location**: `out`

4. **Click "Review + Create"** and then **"Create"**

### Option 2: Using Azure CLI (Advanced Users)

1. **Install Azure CLI** (if not already installed):
   ```powershell
   winget install Microsoft.AzureCLI
   ```

2. **Run the deployment script**:
   ```powershell
   # For PowerShell (Windows)
   .\deploy.ps1
   
   # For Bash (Linux/macOS)
   chmod +x deploy.sh
   ./deploy.sh
   ```

### Option 3: Using Azure Developer CLI (azd)

1. **Install Azure Developer CLI**:
   ```bash
   # Windows
   winget install Microsoft.AzureDeveloperCLI
   
   # macOS
   brew install azure-cli
   ```

2. **Initialize and deploy**:
   ```bash
   azd auth login
   azd init
   azd up
   ```

## 🔧 Configuration

### Environment Variables

The following environment variables are used for the contact form functionality:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID  
- `NEXT_PUBLIC_EMAILJS_USER_ID`: Your EmailJS user ID

These can be configured in:
1. **Azure Portal**: Static Web App → Configuration → Application settings
2. **Environment file**: Create `.env.local` for local development

### Build Configuration

The project is configured for static export with these settings in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

## 📁 Project Structure

```
faizanPortFolio/
├── src/                    # Source code
├── public/                 # Static assets
├── out/                    # Build output (generated)
├── infra/                  # Infrastructure as Code
│   ├── main.bicep         # Bicep template
│   └── main.parameters.json # Parameters
├── azure.yaml             # Azure Developer CLI config
├── staticwebapp.config.json # Static Web App routing
├── swa-cli.config.json    # SWA CLI configuration
├── deploy.ps1             # PowerShell deployment script
├── deploy.sh              # Bash deployment script
└── README.md              # This file
```

## 🔄 Continuous Deployment

Once deployed, Azure Static Web Apps automatically creates a GitHub Actions workflow that:

1. **Triggers on push** to the main branch
2. **Builds the application** using `npm run build`
3. **Deploys to Azure** automatically
4. **Creates preview environments** for pull requests

## 🌐 Custom Domain (Optional)

To add a custom domain:

1. Go to Azure Portal → Your Static Web App
2. Navigate to "Custom domains"
3. Click "Add" and follow the DNS configuration steps

## 📊 Monitoring

The deployment includes:

- **Application Insights** for monitoring and analytics
- **Log Analytics Workspace** for centralized logging
- **GitHub Actions** for deployment status

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test static export locally
npx serve out
```

## 🔧 Troubleshooting

### Common Issues:

1. **Build fails**: Check `package.json` scripts and dependencies
2. **Images not loading**: Ensure `images.unoptimized: true` in `next.config.js`
3. **Routing issues**: Verify `staticwebapp.config.json` configuration
4. **Environment variables**: Configure in Azure Portal application settings

### Support Resources:

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions for Azure](https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow)

## 🎉 Success!

After successful deployment, your portfolio will be available at:
`https://<your-static-web-app-name>.azurestaticapps.net`

The exact URL will be provided in the Azure Portal or deployment output.

---

*Happy coding! 🚀*
