@description('The name of the environment. Used to generate resource names.')
param environmentName string

@description('The Azure region where resources will be deployed.')
param location string = resourceGroup().location

@description('Name of the resource group')
param resourceGroupName string

// Environment variables for the static web app
@description('EmailJS Service ID for contact form')
param emailjsServiceId string = ''

@description('EmailJS Template ID for contact form')
param emailjsTemplateId string = ''

@description('EmailJS User ID for contact form')
param emailjsUserId string = ''

// Generate a unique resource token
var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))

// Define resource names using the token
var staticWebAppName = 'swa-${resourceToken}'
var logAnalyticsName = 'log-${resourceToken}'
var applicationInsightsName = 'appinsights-${resourceToken}'

// Create Log Analytics Workspace
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: logAnalyticsName
  location: location
  tags: {
    'azd-env-name': environmentName
  }
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    features: {
      enableLogAccessUsingOnlyResourcePermissions: true
    }
  }
}

// Create Application Insights
resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: applicationInsightsName
  location: location
  kind: 'web'
  tags: {
    'azd-env-name': environmentName
  }
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
    IngestionMode: 'LogAnalytics'
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

// Create Static Web App
resource staticWebApp 'Microsoft.Web/staticSites@2024-04-01' = {
  name: staticWebAppName
  location: location
  tags: {
    'azd-env-name': environmentName
    'azd-service-name': 'web'
  }
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: 'https://github.com/faizanAzhar11/faizanPortFolio'
    branch: 'main'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'GitHub'
    enterpriseGradeCdnStatus: 'Disabled'
    buildProperties: {
      appLocation: '/'
      apiLocation: ''
      outputLocation: 'out'
      appBuildCommand: 'npm run build'
      skipGithubActionWorkflowGeneration: false
    }
  }
}

// Configure Static Web App settings
resource staticWebAppSettings 'Microsoft.Web/staticSites/config@2024-04-01' = {
  parent: staticWebApp
  name: 'appsettings'
  properties: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: emailjsServiceId
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: emailjsTemplateId
    NEXT_PUBLIC_EMAILJS_USER_ID: emailjsUserId
    APPLICATIONINSIGHTS_CONNECTION_STRING: applicationInsights.properties.ConnectionString
  }
}

// Outputs for reference
output AZURE_STATIC_WEB_APP_NAME string = staticWebApp.name
output AZURE_STATIC_WEB_APP_URL string = 'https://${staticWebApp.properties.defaultHostname}'
output AZURE_LOG_ANALYTICS_WORKSPACE_NAME string = logAnalyticsWorkspace.name
output AZURE_APPLICATION_INSIGHTS_NAME string = applicationInsights.name
output AZURE_APPLICATION_INSIGHTS_CONNECTION_STRING string = applicationInsights.properties.ConnectionString
