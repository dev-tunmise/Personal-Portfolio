@echo off
echo Building Tailwind CSS...
npm run build
echo Build complete! Files are ready for deployment.
echo.
echo Next steps:
echo 1. Replace YOUR_FORM_ID in contact.html with your actual Formspree form ID
echo 2. Update all HTML files to use ./dist/output.css instead of CDN
echo 3. Deploy to Vercel
pause
