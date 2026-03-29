# jiazhenzhu.com

Personal site and blog for Jiazhen Zhu — writing about AI productivity systems, data infrastructure, and shipping AI to production.

**Live:** [jiazhenzhu.com](https://jiazhenzhu.com)

## Tech Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [MDX](https://mdxjs.com) — blog content with component support
- [Shiki](https://shiki.style) — syntax highlighting (dual light/dark theme)
- [satori](https://github.com/vercel/satori) — auto-generated OG images
- [Netlify](https://netlify.com) — hosting and deployment

## Local Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
  content/blog/     MDX blog posts
  layouts/          Base and Blog layouts
  pages/            Home, Blog, Lab, About, Contact, 404
  components/       Header, Footer, ThemeToggle, PostCard, etc.
  styles/           Global CSS with light/dark theme
public/
  avatar.jpeg       Profile photo
  favicon.svg       Site favicon
```

## Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```yaml
---
title: "Your Post Title"
description: "A one-line summary for social previews."
date: 2026-03-29
tags: ["ai", "startup"]
---

Your content here.
```

An OG image is auto-generated at `/og/[slug].png` for social sharing.

## Deployment

Pushes to `master` auto-deploy via Netlify. Build config is in `netlify.toml`.
