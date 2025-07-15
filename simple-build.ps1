# Simple Portfolio Build and Package Script
Write-Host "🚀 Building Faizan's Portfolio..." -ForegroundColor Green

# Build the project
npm run build

# Create deployment package if build exists
if (Test-Path "out") {
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    
    if (Test-Path "portfolio-deployment.zip") {
        Remove-Item "portfolio-deployment.zip" -Force
    }
    
    Compress-Archive -Path "out\*" -DestinationPath "portfolio-deployment.zip" -Force
    
    $zipSize = (Get-Item "portfolio-deployment.zip").Length
    $zipSizeKB = [math]::Round($zipSize / 1KB, 2)
    
    Write-Host "✅ Package created: portfolio-deployment.zip ($zipSizeKB KB)" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎯 Ready for deployment!" -ForegroundColor Cyan
    Write-Host "Files in ./out/ or extract portfolio-deployment.zip" -ForegroundColor White
    Write-Host "💡 Push to main branch to trigger automatic deployment" -ForegroundColor Yellow
}
