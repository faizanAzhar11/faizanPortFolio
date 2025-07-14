# Faizan's Portfolio Deployment Script for Azure Static Web Apps
Write-Host "🚀 Deploying Faizan's Portfolio to Azure Static Web Apps" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green

# Check if Azure CLI is installed
try {
    az --version | Out-Null
} catch {
    Write-Host "❌ Azure CLI could not be found" -ForegroundColor Red
    Write-Host "Please install Azure CLI from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" -ForegroundColor Yellow
    exit 1
}

# Login to Azure
Write-Host "🔐 Logging in to Azure..." -ForegroundColor Blue
az login

# Set variables
$RESOURCE_GROUP = "rg-faizan-portfolio"
$LOCATION = "eastus"
$ENV_NAME = "faizan-portfolio"

# Create resource group
Write-Host "📦 Creating resource group..." -ForegroundColor Blue
az group create --name $RESOURCE_GROUP --location $LOCATION

# Deploy Bicep template
Write-Host "🏗️  Deploying infrastructure..." -ForegroundColor Blue
az deployment group create `
  --resource-group $RESOURCE_GROUP `
  --template-file "infra/main.bicep" `
  --parameters environmentName=$ENV_NAME `
               location=$LOCATION `
               resourceGroupName=$RESOURCE_GROUP

# Get the Static Web App details
Write-Host "📄 Getting deployment details..." -ForegroundColor Blue
$STATIC_WEB_APP_NAME = az staticwebapp list --resource-group $RESOURCE_GROUP --query "[0].name" -o tsv
$DEFAULT_HOSTNAME = az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP --query "defaultHostname" -o tsv

Write-Host "✅ Deployment completed!" -ForegroundColor Green
Write-Host "🌐 Your portfolio is available at: https://$DEFAULT_HOSTNAME" -ForegroundColor Cyan
Write-Host "🔧 Configure GitHub repository connection in Azure Portal for continuous deployment" -ForegroundColor Yellow

# Open the Static Web App in browser
Write-Host "🌐 Opening your portfolio in the browser..." -ForegroundColor Blue
$portfolioUrl = "https://$DEFAULT_HOSTNAME"
Start-Process $portfolioUrl
