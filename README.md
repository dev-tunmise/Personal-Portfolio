# Personal Portfolio - Oluwatunmise Awomoyi

🚀 **Ready for Cloudflare Pages Deployment**

A clean, modern portfolio website showcasing web development skills and projects. Optimized for performance and hosted on Cloudflare Pages.

## 🌟 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern Stack** - TailwindCSS + Vanilla JavaScript
- **Fast Loading** - Optimized images and minified assets
- **SEO Optimized** - Structured data and meta tags
- **Contact Form** - Integrated with Formspree
- **Dark Theme** - Professional orange accent color scheme

## 🚀 Quick Deploy to Cloudflare Pages

### 1. Fork/Clone Repository
```bash
git clone https://github.com/dev-tunmise/Personal-Portfolio.git
cd Personal-Portfolio
```

### 2. Setup Contact Form (Optional)
1. Go to [Formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `contact.html`

### 3. Deploy to Cloudflare Pages
1. Push to your GitHub repository
2. Connect repository to Cloudflare Pages
3. Set build command: `npm run build` (optional)
4. Set output directory: `/` (root)
5. Deploy!

## 📁 Project Structure
```
├── Images/               # Optimized project images
├── src/                 # Source files
│   └── input.css       # TailwindCSS source
├── index.html          # Homepage
├── about.html          # About page
├── portfolio.html      # Projects showcase
├── contact.html        # Contact form
├── thank-you.html      # Form success page
├── style.min.css       # Compiled & minified CSS
├── script.min.js       # Optimized JavaScript
├── tailwind.config.js  # TailwindCSS configuration
└── package.json        # Dependencies
```

## 🛠️ Development

### Local Development
```bash
# Serve locally
python -m http.server 8000
# or
npx serve .
```

### Build CSS (if needed)
```bash
npm install
npm run build-css
```

## ✨ What's Cleaned Up

- ❌ Removed all Vercel configuration files
- ❌ Deleted empty JavaScript files
- ❌ Removed duplicate images
- ❌ Cleaned package dependencies
- ❌ Removed test/backup files
- ✅ Optimized for Cloudflare Pages
- ✅ Clean, production-ready codebase

## 📱 Contact

- **Portfolio**: [Your Website URL]
- **Email**: [Your Email]
- **Twitter**: [@devtunmise](https://x.com/devtunmise)
- **GitHub**: [dev-tunmise](https://github.com/dev-tunmise)

---

**Ready to deploy!** 🚀 Your website is now clean and optimized for Cloudflare Pages hosting.
