# Rural Alaska Community Action Program Website

A modern, accessible website for the Rural Alaska Community Action Program (RurAL CAP), built with Next.js 14, React 18, and Tailwind CSS v3.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fanna9891%2Fruralcap-website-redesign)

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS v3
- **Accessibility**: WCAG 2.1 AA compliant with comprehensive accessibility features
- **Performance**: Optimized for fast loading and Core Web Vitals
- **SEO Ready**: Built-in SEO optimizations and meta tag management
- **Calendar Integration**: Event management with React Big Calendar
- **Search Functionality**: Powered by Fuse.js for fast client-side search
- **Form Handling**: React Hook Form with validation
- **Animation**: Smooth animations with Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ruralcap/website.git
cd website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration values.

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── components/          # React components
│   ├── common/         # Shared components (Header, Footer, etc.)
│   ├── home/           # Homepage-specific components
│   └── accessibility/  # Accessibility components
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── services/      # Service pages
│   ├── about/         # About pages
│   └── ...
├── public/            # Static assets
├── styles/            # Global styles
├── utils/             # Utility functions
├── hooks/             # Custom React hooks
└── types/             # TypeScript type definitions
```

## 🎨 Design System

### Colors

The color palette is defined in `tailwind.config.js`:

- **Primary**: Blue shades for main brand colors
- **Secondary**: Yellow/amber for accents
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Font**: Inter (system font stack fallback)
- **Sizes**: Responsive typography scale from xs to 5xl

### Components

All components follow a consistent pattern:
- TypeScript for type safety
- Accessibility attributes (ARIA labels, roles)
- Responsive design with Tailwind classes
- Keyboard navigation support

## ♿ Accessibility Features

- **Skip Links**: Skip to main content functionality
- **Screen Reader Support**: Proper ARIA labels and live regions
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Clear focus indicators and focus trap in modals
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects user's motion preferences
- **Alternative Text**: All images have descriptive alt text

### Testing Accessibility

```bash
# Run accessibility tests
npm run test:a11y
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run accessibility tests
npm run test:a11y

# Generate coverage report
npm run test:coverage
```

## 📦 Building for Production

```bash
# Create production build
npm run build

# Start production server
npm run start

# Analyze bundle size
npm run analyze
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with automatic CI/CD

### Manual Deployment

```bash
# Build the application
npm run build

# The build output will be in .next directory
# Deploy this directory to your hosting provider
```

## 🔧 Configuration

### Next.js Configuration

Edit `next.config.js` to modify:
- Image domains
- Redirects and rewrites
- Headers for security
- Internationalization settings

### Tailwind Configuration

Edit `tailwind.config.js` to customize:
- Color palette
- Typography settings
- Spacing scale
- Custom animations

## 📱 Progressive Web App

The site is PWA-ready with:
- Service worker for offline functionality
- Web app manifest
- Installable on mobile devices

## 🔐 Security

- Content Security Policy headers
- XSS protection
- HTTPS enforcement
- Secure cookie handling

## 📈 Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Prefetching for faster navigation
- Optimized fonts with next/font

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email tech@ruralcap.org or call (907) 279-1251.

## 🙏 Acknowledgments

- Rural Alaska Community Action Program team
- All contributors and community members
- Open source projects that made this possible