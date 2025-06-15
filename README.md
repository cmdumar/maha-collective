# MAHA Collective Website

A modern, responsive website for MAHA Collective, built with Next.js and Tailwind CSS. This site is designed for a yoga and wellness brand, featuring custom fonts, beautiful imagery, and interactive sections.

## Features
- Next.js 14 app directory structure
- Tailwind CSS for rapid, responsive styling
- Custom font integration (Tan Meringue)
- Fully responsive layouts for all devices
- Instagram & TikTok social media showcase section
- Animated marquees and banners
- Testimonial carousel with navigation dots
- Newsletter signup form
- Accessible, semantic HTML

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (recommended) or npm/yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/maha-collective.git
   cd maha-collective
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development
- All main pages are in the `app/` directory.
- Global styles and Tailwind config are in `styles/` and `tailwind.config.js`.
- Fonts are located in `public/fonts/`.
- Images are in `public/images/`.
- Update content and sections in `app/page.tsx` as needed.

## Deployment
This project is ready for deployment on platforms like **Vercel** or **Netlify**.
- For Netlify, use the following build settings:
  - Build command: `pnpm build` or `npm run build`
  - Publish directory: `.next`
- Environment variables can be set in the Netlify/Vercel dashboard if needed.

## License
This project is licensed under the MIT License.

---

**MAHA Collective** — Live greatly, every day.
