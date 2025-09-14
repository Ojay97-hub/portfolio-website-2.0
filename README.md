# Owen Cotter - Portfolio Website

A modern, responsive portfolio website built with React, TailwindCSS, and Framer Motion. Showcasing full-stack development and UI design skills.

## 🚀 Features

- **Modern Stack**: React 18 + Vite for fast development
- **Beautiful Design**: Custom color palette with dark theme
- **Responsive**: Mobile-first design (360px - 1440px+)
- **Animations**: Smooth Framer Motion animations with reduced motion support
- **Accessible**: WCAG compliant with proper focus management and semantic HTML
- **Performance**: Optimized builds with code splitting
- **SEO Ready**: Meta tags and Open Graph support
- **Typography**: Outfit font family for modern, clean appearance

## 🛠️ Tech Stack

- **Framework**: React (JavaScript only)
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Outfit (Google Fonts)
- **Development**: ESLint + Prettier

## 📋 Getting Started

### Prerequisites

- Node.js 16+ (recommended: Node.js 18+)
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit `http://localhost:5174`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Personal Information

Edit `/src/data/profile.js` to update:

- **Personal Info**: Name, title, location, email, social links
- **Skills**: Add/remove your technical skills
- **Projects**: Update project showcases (replace placeholder images)
- **Services**: Modify service offerings and pricing
- **Education**: Add educational background and certifications
- **Benefits**: Highlight your unique value propositions

### Assets to Replace

Replace these placeholder files with your actual content:

- `public/owen-profile.jpg` - Profile photo (✅ Added)
- `public/project-jungle-peaks.jpg` - Project screenshots
- `public/project-eventory.jpg` - Project screenshots
- `public/project-blackjack.jpg` - Project screenshots
- `public/project-dinosaur-quiz.jpg` - Project screenshots
- `public/project-winchester.jpg` - Project screenshots
- `public/project-hackathon.jpg` - Project screenshots
- `public/ui-mobile-*.jpg` - UI design screenshots (9 total)
- `public/og-image.png` - Social media preview image
- `public/vite.svg` - Favicon (or add your own)

### Contact Form Integration

The contact form includes commented adapters for:

1. **EmailJS Integration**:
   ```javascript
   // Uncomment and configure in ContactForm.jsx
   const emailJSConfig = {
     serviceId: 'your_service_id',
     templateId: 'your_template_id',
     publicKey: 'your_public_key'
   }
   ```

2. **Netlify Forms**:
   ```javascript
   // Uncomment the hidden input in ContactForm.jsx
   <input type="hidden" name="form-name" value="contact" />
   ```

### Color Customization

Modify the color palette in `tailwind.config.js`:

```javascript
colors: {
  background: '#000814',  // Main background
  surface: '#001D3D',     // Card backgrounds
  primary: '#003566',     // Primary blue
  accent: '#FFC300',      // Gold accent
  accentSoft: '#FFD60A',  // Light gold
  text: '#E6EDF7',        // Main text
  muted: '#8FA3BF',       // Muted text
  card: '#001A31',        // Input backgrounds
  border: 'rgba(255,255,255,0.08)', // Borders
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1440px+

## ♿ Accessibility Features

- Semantic HTML landmarks
- Skip-to-content link
- Keyboard navigation support
- Focus management with visible focus rings
- Screen reader friendly
- Reduced motion support
- High contrast ratios

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. For contact form: Enable Netlify Forms in site settings

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts

### Other Platforms

The built files are static and can be deployed to any static hosting service:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- DigitalOcean App Platform

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Section.jsx
│   └── ...
├── sections/           # Page sections
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── UIDesigns.jsx
│   ├── Education.jsx
│   └── ...
├── data/              # Content and configuration
│   └── profile.js     # Personal information
├── hooks/             # Custom React hooks
│   └── useScrollSpy.js
├── lib/               # Utility functions
│   └── utils.js
├── assets/            # Static assets (images, etc.)
├── App.jsx            # Main app component
├── main.jsx          # React entry point
└── index.css         # Global styles
```

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Images**: Use WebP format for better compression
- **Animations**: Respect user motion preferences
- **Loading**: Smooth loading states and transitions
- **Fonts**: Optimized Google Fonts loading

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

**Built with ❤️ by Owen Cotter**

For questions or collaborations, reach out at [owenjames97@outlook.com](mailto:owenjames97@outlook.com)