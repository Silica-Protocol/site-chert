# Chert Coin Website

Official website for Chert Coin - Next-generation blockchain with sub-second finality, unlimited scalability, and useful scientific work.

## 🚀 Overview

This is the over-the-top, design-heavy website for Chert Coin, featuring:
- **Bold Visual Design**: Dramatic animations, gradients, and particle effects
- **Real-time Performance Metrics**: Live TPS, finality times, and network statistics
- **Community Focus**: Global node distribution, scientific partnerships, and achievements
- **Token Information**: APY rates, staking opportunities, and participation guides

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) - Static site generator with optimal performance
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework with custom design system
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth, performant animations
- **Interactive Charts**: [Chart.js](https://www.chartjs.org/) - Performance visualization
- **3D Elements**: [Three.js](https://threejs.org/) - Advanced visual effects

## 📁 Project Structure

```
chert-website/
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layout templates
│   ├── pages/          # Website pages (file-based routing)
│   └── styles/         # Global styles and utilities
├── public/             # Static assets (favicon, images)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chert-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:4321
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Type checking with Astro
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 🎨 Design System

### Color Palette

**Primary Brand Colors**
- Chert Blue: `#1E40AF` - Primary brand color
- Quantum Gold: `#F59E0B` - Accents and highlights
- Silica White: `#FAFAFA` - Clean backgrounds
- Carbon Black: `#111827` - Text and dark elements

**Semantic Colors**
- Speed Blue: `#3B82F6` - Performance indicators
- Science Green: `#10B981` - Research and science
- Security Purple: `#7C3AED` - Security features

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Hierarchy**: H1 (4xl), H2 (3xl), H3 (2xl), H4 (xl)
- **Body Text**: Regular (base), Small (sm)

### Components

- **Buttons**: Gradient primary, outline secondary
- **Cards**: Hover effects with shadow transitions
- **Animations**: Smooth transitions, particle effects
- **Charts**: Interactive performance visualizations

## 📊 Performance Features

### Real-time Metrics
- Live TPS counter with animated updates
- Finality time monitoring
- Active node statistics
- APY rate calculations

### Interactive Elements
- Animated performance comparison charts
- Global node distribution map
- Scientific partnership showcases
- Community achievement timelines

## 🌐 Deployment

### Production Build

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

### Environment Variables

Create a `.env` file for production:

```env
# API endpoints for live data
CHERT_API_URL=https://api.chert.coin
SILICA_API_URL=https://api.silica.network

# Analytics (optional)
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

- React integration for interactive components
- Tailwind CSS with custom design tokens
- Static output for optimal performance
- Image optimization enabled

### Tailwind Config (`tailwind.config.mjs`)

- Custom color palette
- Extended animation utilities
- Responsive breakpoints
- Typography plugin integration

## 📈 Performance Optimization

### Animated Logo (Performance)

The homepage logo animation is designed to run as a **pregenerated raster animation** for performance:

- Preferred: `public/logo-animated-lite.webp` (animated WebP, supports alpha)
- Fallback: `public/logo-animated-lite.png` (APNG, supports alpha)
- Safe fallback: `public/logo-animated-lite.svg` (SMIL SVG animation)
- Reduced motion: `public/generated/logo-static-512.png`

To regenerate the reduced-motion static logo:

```bash
rsvg-convert "public/logo-animated-lite.svg" -w 512 -h 512 -a -f png -o "public/generated/logo-static-512.png"
```

Animated WebP/APNG generation is intentionally a separate step (it requires frame capture; keep the output at ~512px and 24fps).

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 1.2s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Strategies

- Image optimization with WebP/AVIF
- Critical CSS inlining
- JavaScript code splitting
- Service worker for caching
- CDN deployment for global performance

## 🔗 Integration Points

### Cross-site Linking
- Links to Silica Protocol for technical details
- Shared design system consistency
- Coordinated messaging and branding

### API Integration
- Real-time performance data
- Community statistics
- Scientific research metrics
- Market data and pricing

## 🤝 Contributing

1. Follow the existing code style
2. Run linting and formatting before committing
3. Test across different devices and browsers
4. Update documentation for significant changes

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Support

- **Discord**: Join our community
- **Twitter**: Follow for updates
- **GitHub**: Report issues and contribute
- **Email**: support@chert.coin

---

Built with ❤️ for the future of blockchain technology.