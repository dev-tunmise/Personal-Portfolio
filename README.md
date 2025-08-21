# Personal Portfolio - Deployment Ready

## Quick Setup for Vercel Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Tailwind CSS
```bash
npm run build
```

### 3. Setup Formspree
1. Go to [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in `contact.html` with your actual form ID

### 4. Update HTML Files
Replace the Tailwind CDN link in all HTML files:

**FROM:**
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config = {...}</script>
```

**TO:**
```html
<link rel="stylesheet" href="./dist/output.css">
```

### 5. Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Deploy!

## File Structure
```
├── dist/
│   └── output.css          # Compiled Tailwind CSS
├── src/
│   └── input.css          # Source CSS with custom styles
├── images/                # Project images
├── *.html                # HTML pages
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
└── build.bat            # Windows build script
```

## Features Ready for Production
- ✅ Tailwind CLI setup
- ✅ Custom CSS animations
- ✅ Formspree integration ready
- ✅ Responsive design
- ✅ Real project images
- ✅ Professional content
