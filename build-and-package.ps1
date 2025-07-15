# Portfolio Build and Package Script
Write-Host "🚀 Building Faizan's Portfolio..." -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# Install dependencies if needed
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
    npm install
}

# Build the project
Write-Host "🏗️  Building Next.js project..." -ForegroundColor Blue
$buildResult = npm run build
$buildExitCode = $LASTEXITCODE

# Check if build was successful
if ($buildExitCode -eq 0 -and (Test-Path "out")) {
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    
    # Create deployment package
    Write-Host "📁 Creating deployment package..." -ForegroundColor Blue
    if (Test-Path "portfolio-deployment.zip") {
        Remove-Item "portfolio-deployment.zip" -Force
    }
    Compress-Archive -Path "out\*" -DestinationPath "portfolio-deployment.zip" -Force
    
    $zipSize = (Get-Item "portfolio-deployment.zip").Length
    $zipSizeKB = [math]::Round($zipSize / 1KB, 2)
    
    Write-Host "✅ Deployment package created: portfolio-deployment.zip ($zipSizeKB KB)" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎯 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to Azure Portal (portal.azure.com)" -ForegroundColor White
    Write-Host "2. Create a Static Web App" -ForegroundColor White
    Write-Host "3. Upload the contents of the 'out' folder" -ForegroundColor White
    Write-Host "   OR extract and upload portfolio-deployment.zip" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Alternative: Deploy to other platforms:" -ForegroundColor Cyan
    Write-Host "   - Netlify: netlify deploy --prod --dir out" -ForegroundColor White
    Write-Host "   - Vercel: vercel --prod --yes" -ForegroundColor White
    Write-Host "   - GitHub Pages: Use GitHub Actions (already configured)" -ForegroundColor White
    Write-Host ""
    Write-Host "📁 Files ready for deployment in: ./out/" -ForegroundColor Yellow
    Write-Host "📦 Deployment package: ./portfolio-deployment.zip" -ForegroundColor Yellow
    
} else {
    Write-Host "❌ Build failed! Check the output above for errors." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 Your portfolio is ready for deployment!" -ForegroundColor Green
