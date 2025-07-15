# Quick Deployment Script for Alternative Platforms
param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("netlify", "vercel", "surge", "firebase")]
    [string]$Platform = ""
)

Write-Host "🚀 Quick Deploy Script for Faizan's Portfolio" -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Green

# Ensure build exists
if (!(Test-Path "out")) {
    Write-Host "⚠️  No build found. Running build first..." -ForegroundColor Yellow
    .\build-and-package.ps1
}

if ($Platform -eq "") {
    Write-Host "📋 Available deployment platforms:" -ForegroundColor Cyan
    Write-Host "1. Netlify   - ./quick-deploy.ps1 -Platform netlify" -ForegroundColor White
    Write-Host "2. Vercel    - ./quick-deploy.ps1 -Platform vercel" -ForegroundColor White  
    Write-Host "3. Surge.sh  - ./quick-deploy.ps1 -Platform surge" -ForegroundColor White
    Write-Host "4. Firebase  - ./quick-deploy.ps1 -Platform firebase" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 For Azure Static Web Apps:" -ForegroundColor Yellow
    Write-Host "   Go to portal.azure.com and upload the 'out' folder manually" -ForegroundColor White
    exit 0
}

switch ($Platform) {
    "netlify" {
        Write-Host "🌐 Deploying to Netlify..." -ForegroundColor Blue
        if (Get-Command netlify -ErrorAction SilentlyContinue) {
            netlify deploy --prod --dir out
        } else {
            Write-Host "❌ Netlify CLI not found. Install it with:" -ForegroundColor Red
            Write-Host "npm install -g netlify-cli" -ForegroundColor Yellow
        }
    }
    "vercel" {
        Write-Host "▲ Deploying to Vercel..." -ForegroundColor Blue
        if (Get-Command vercel -ErrorAction SilentlyContinue) {
            vercel --prod --yes
        } else {
            Write-Host "❌ Vercel CLI not found. Install it with:" -ForegroundColor Red
            Write-Host "npm install -g vercel" -ForegroundColor Yellow
        }
    }
    "surge" {
        Write-Host "⚡ Deploying to Surge.sh..." -ForegroundColor Blue
        if (Get-Command surge -ErrorAction SilentlyContinue) {
            Set-Location out
            surge . "faizan-portfolio-$(Get-Random).surge.sh"
            Set-Location ..
        } else {
            Write-Host "❌ Surge CLI not found. Install it with:" -ForegroundColor Red
            Write-Host "npm install -g surge" -ForegroundColor Yellow
        }
    }
    "firebase" {
        Write-Host "🔥 Deploying to Firebase..." -ForegroundColor Blue
        if (Get-Command firebase -ErrorAction SilentlyContinue) {
            firebase deploy
        } else {
            Write-Host "❌ Firebase CLI not found. Install it with:" -ForegroundColor Red
            Write-Host "npm install -g firebase-tools" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "✅ Deployment command executed!" -ForegroundColor Green
Write-Host "Check the output above for your live URL 🌐" -ForegroundColor Cyan
