# First Store publication

Official references checked 2026-11-06:
- https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/create-app-submission
- https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/app-package-requirements
- https://www.electron.build/docs/msix/ (next/v27; beta target, not assumed stable)
- https://learn.microsoft.com/en-us/windows/apps/develop/launch/launch-settings
- https://www.electronjs.org/docs/latest/tutorial/security

1. Register or sign in to Microsoft Partner Center yourself. Do not paste credentials into chat or source.
2. Reserve Unstuck OS, verify name availability, copy Package/Identity/Name, Publisher and PublisherDisplayName from Product identity.
3. Configure those exact values in a Store packaging manifest. Use version 1.0.0.0, architecture x64, desktop full-trust entry point and only required runFullTrust capability. Assess media/privacy requirements with current certification guidance.
4. Install the Windows SDK packaging and Windows App Certification Kit tools. Check current stable packaging support. Generate the MSIX using MakeAppx or a maintained verified MSIX builder.
5. Validate manifest, package installation and WACK. Test clean Windows 10/11 VMs, fresh user profile, permission denial, shortcut conflicts, offline use, upgrades and uninstall. Record actual results.
6. Complete properties, free pricing, markets and age ratings accurately. Do not guess privacy answers.
7. Add real publisher support email, public privacy URL, Store identity, original icons and actual screenshots. Upload the x64 MSIX and listing through Partner Center for the first submission.
8. Review certification notes and submit only after release blockers close. Wait for Microsoft certification; publication is not automatic evidence of testing.

No authenticated Partner Center connection is available here. No package has been uploaded or certified. Store CLI update support must not be treated as proof that first publication can be automated. Store re-signing means no publisher certificate information should be fabricated for submission.
