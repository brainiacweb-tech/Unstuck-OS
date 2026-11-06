$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Drawing
$assetRoot=Join-Path (Get-Location) 'store-assets\exports'
New-Item -ItemType Directory -Force -Path $assetRoot | Out-Null
$sourcePath=(Resolve-Path -LiteralPath 'store-assets\brand\icon-1024.png').Path
$sourceImage=[System.Drawing.Image]::FromFile($sourcePath)
try {
$items=@(@('Square44x44Logo',44),@('Square150x150Logo',150),@('StoreLogo',50),@('Icon16',16),@('Icon24',24),@('Icon32',32),@('Icon48',48),@('Icon64',64),@('Icon128',128),@('Icon256',256),@('Icon512',512),@('Icon1024',1024))
foreach($item in $items){
$size=[int]$item[1]
$bitmap=[System.Drawing.Bitmap]::new($size,$size,[System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics=[System.Drawing.Graphics]::FromImage($bitmap)
try {
$graphics.Clear([System.Drawing.Color]::Transparent)
$graphics.CompositingQuality=[System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphics.InterpolationMode=[System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.PixelOffsetMode=[System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.DrawImage($sourceImage,0,0,$size,$size)
$bitmap.Save((Join-Path $assetRoot ($item[0]+'.png')),[System.Drawing.Imaging.ImageFormat]::Png)
} finally {$graphics.Dispose();$bitmap.Dispose()}
}
} finally {$sourceImage.Dispose()}
node scripts/brand-assets.cjs
if($LASTEXITCODE -ne 0){exit $LASTEXITCODE}
