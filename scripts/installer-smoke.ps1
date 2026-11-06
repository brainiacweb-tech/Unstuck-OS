$ErrorActionPreference='Stop'
Add-Type -AssemblyName UIAutomationClient
Add-Type -AssemblyName UIAutomationTypes
$installerPath=(Resolve-Path -LiteralPath 'release\Unstuck OS Setup 1.0.0.exe').Path
$installerProcess=Start-Process -FilePath $installerPath -PassThru -WindowStyle Hidden
$cancelInvoked=$false
$quitConfirmed=$false
$deadline=[DateTime]::UtcNow.AddSeconds(20)
try {
while([DateTime]::UtcNow -lt $deadline){
$installerProcess.Refresh()
if($installerProcess.HasExited){break}
$condition=[System.Windows.Automation.PropertyCondition]::new([System.Windows.Automation.AutomationElement]::ProcessIdProperty,$installerProcess.Id)
$windows=[System.Windows.Automation.AutomationElement]::RootElement.FindAll([System.Windows.Automation.TreeScope]::Children,$condition)
foreach($window in $windows){
$buttons=$window.FindAll([System.Windows.Automation.TreeScope]::Descendants,[System.Windows.Automation.PropertyCondition]::new([System.Windows.Automation.AutomationElement]::ControlTypeProperty,[System.Windows.Automation.ControlType]::Button))
foreach($button in $buttons){
if((-not $cancelInvoked) -and $button.Current.AutomationId -eq '2'){$pattern=$button.GetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern);$pattern.Invoke();$cancelInvoked=$true;break}
if($cancelInvoked -and $button.Current.AutomationId -eq '6'){$pattern=$button.GetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern);$pattern.Invoke();$quitConfirmed=$true;break}
}
}
Start-Sleep -Milliseconds 200
}
$installerProcess.Refresh()
$result=[pscustomobject]@{at=[DateTime]::UtcNow.ToString('o');launched=$true;cancelInvoked=$cancelInvoked;quitConfirmed=$quitConfirmed;exited=$installerProcess.HasExited;installed=$false;note='Only Cancel/Yes-to-quit controls were considered. No Next or Install control was invoked. Clean installation/update/uninstall remains a manual VM check.'}
$result | ConvertTo-Json | Set-Content 'docs\INSTALLER-LAUNCH.json'
if(-not $installerProcess.HasExited){Stop-Process -Id $installerProcess.Id -ErrorAction SilentlyContinue;Write-Output 'Installer launched; automatic cancellation was inconclusive. Process stopped before installation.'}elseif($cancelInvoked){Write-Output 'PASS: actual installer launched and cancelled before installation.'}else{Write-Output 'Installer process launched and exited; wizard cancellation requires manual verification.'}
} finally { $installerProcess.Refresh();if(-not $installerProcess.HasExited){Stop-Process -Id $installerProcess.Id -ErrorAction SilentlyContinue} }
