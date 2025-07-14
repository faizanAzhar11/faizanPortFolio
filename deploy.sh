#!/bin/bash

echo "🚀 Deploying Faizan's Portfolio to Azure Static Web Apps"
echo "=================================================="

# Check if Azure CLI is installed
if ! command -v az &> /dev/null
then
    echo "❌ Azure CLI could not be found"
    echo "Please install Azure CLI from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Login to Azure
echo "🔐 Logging in to Azure..."
az login

# Create resource group
echo "📦 Creating resource group..."
RESOURCE_GROUP="rg-faizan-portfolio"
LOCATION="eastus"

az group create --name $RESOURCE_GROUP --location $LOCATION

# Deploy Bicep template
echo "🏗️  Deploying infrastructure..."
az deployment group create \
  --resource-group $RESOURCE_GROUP \
  --template-file infra/main.bicep \
  --parameters environmentName=faizan-portfolio \
               location=$LOCATION \
               resourceGroupName=$RESOURCE_GROUP

# Get the Static Web App details
echo "📄 Getting deployment details..."
STATIC_WEB_APP_NAME=$(az staticwebapp list --resource-group $RESOURCE_GROUP --query "[0].name" -o tsv)
DEFAULT_HOSTNAME=$(az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP --query "defaultHostname" -o tsv)

echo "✅ Deployment completed!"
echo "🌐 Your portfolio is available at: https://$DEFAULT_HOSTNAME"
echo "🔧 Configure GitHub repository connection in Azure Portal for continuous deployment"
