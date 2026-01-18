---
title: 'Starting with Astro'
description: 'Scaffold notes for the new site and why Astro is a good fit.'
pubDate: 'Jan 18 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

I started this site as a fresh Astro project and will keep adding Markdown notes here.

## Commands used

```bash
npm create astro@latest . -- --template blog --install --yes
```

Because the repo already had files, the scaffold created a temporary folder first:

```bash
cd lunar-luminosity
```

Then I moved it into the repo root so the project lives at the top level:

```bash
cp -r lunar-luminosity/* .
rm -rf lunar-luminosity
```

## Why Astro

- Fast by default: ships minimal JS unless I opt in.
- Markdown-first: easy notes and posts without extra tooling.
- Great for static hosting: perfect fit for GitHub Pages with a custom domain.
- Flexible: I can add MDX, React, or other integrations later without a rebuild.
