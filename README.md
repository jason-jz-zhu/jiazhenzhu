# jiazhenzhu.com

Personal site and blog for Jiazhen Zhu — writing about AI productivity systems, data infrastructure, and shipping AI to production.

**Live:** [jiazhenzhu.com](https://jiazhenzhu.com)

## Tech Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [MDX](https://mdxjs.com) — blog content with component support
- [Shiki](https://shiki.style) — syntax highlighting (dual light/dark theme)
- [satori](https://github.com/vercel/satori) — auto-generated OG images

## Infrastructure

| Layer | Service | Notes |
|-------|---------|-------|
| Hosting | [Vercel](https://vercel.com) (Hobby/free) | Auto-deploys from `master` branch |
| DNS | [Netlify DNS](https://app.netlify.com) | Nameservers: `dns1-4.p08.nsone.net` |
| Email | [ImprovMX](https://improvmx.com) (free) | `*@jiazhenzhu.com` → Gmail |
| Domain | External registrar | `jiazhenzhu.com` |

### DNS Records (managed at Netlify DNS)

| Type | Name | Value |
|------|------|-------|
| A | @ | `216.198.79.1` (Vercel) |
| CNAME | www | `7f76986d8a89c938.vercel-dns-017.com` |
| MX | @ | `mx1.improvmx.com` (priority 10) |
| MX | @ | `mx2.improvmx.com` (priority 20) |
| TXT | @ | `v=spf1 include:spf.improvmx.com ~all` |

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

Pushes to `master` auto-deploy via Vercel. Netlify config (`netlify.toml`) is kept for reference but no longer used for production.
