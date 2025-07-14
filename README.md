# Faizan Azhar - Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 15, React, TypeScript, and Tailwind CSS.

## ?? Features

- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **SEO Optimized**: Complete meta tags, Open Graph, structured data, sitemap
- **Performance**: Optimized images, lazy loading, Core Web Vitals
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Dark/Light Theme**: Built-in theme switching
- **Animations**: Smooth animations with Framer Motion
- **Contact Form**: Functional contact form with validation
- **Blog Ready**: Blog section with dynamic content

## ??? Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Deployment**: Azure Static Web Apps ready

## ?? Prerequisites

- Node.js 18+ 
- npm or yarn

## ?? Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

## ?? Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## ?? Project Structure

```
??? src/
?   ??? app/
?   ?   ??? layout.tsx
?   ?   ??? page.tsx
?   ?   ??? globals.css
?   ??? components/
?       ??? layout/
?       ?   ??? header.tsx
?       ?   ??? footer.tsx
?       ??? sections/
?       ?   ??? hero.tsx
?       ?   ??? about.tsx
?       ?   ??? tech-stack.tsx
?       ?   ??? experience.tsx
?       ?   ??? projects.tsx
?       ?   ??? certifications.tsx
?       ?   ??? contact.tsx
?       ?   ??? blog-preview.tsx
?       ??? providers/
?           ??? theme-provider.tsx
??? public/
?   ??? faizanpic.jpg
?   ??? resume.pdf
?   ??? robots.txt
??? package.json
```

## ?? Customization

1. **Profile Picture**: Replace `/public/faizanpic.jpg` with your photo
2. **Resume**: Add your resume as `/public/resume.pdf`
3. **Contact Info**: Update contact details in the hero section
4. **Projects**: Modify project data in the projects section
5. **Experience**: Update experience data to match your background

## ?? Deployment

### Azure Static Web Apps

1. Push code to GitHub repository
2. Create Azure Static Web App resource
3. Connect to your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `out` (if using static export)

### Other Platforms

- **Vercel**: Connect GitHub repository
- **Netlify**: Connect GitHub repository  
- **GitHub Pages**: Use static export mode

## ?? SEO Features

- Complete meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Performance optimized
- Semantic HTML structure

## ?? Performance

- Next.js App Router for optimal performance
- Image optimization with next/image
- Code splitting and lazy loading
- Optimized fonts and assets
- Core Web Vitals optimized

## ?? Contact

- **Email**: faziazhar1@gmail.com
- **Phone**: +923435391151
- **LinkedIn**: [linkedin.com/in/faizanazhar](https://linkedin.com/in/faizanazhar)
- **GitHub**: [github.com/faizanazhar](https://github.com/faizanazhar)

## ?? License

This project is open source and available under the [MIT License](LICENSE).