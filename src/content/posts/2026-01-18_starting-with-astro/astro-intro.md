---
title: "Astro: A Sensible Choice for a Simple Blog"
date: 2026-01-18
description: "Why this blog is built with Astro and how it was set up"
---

## Why Astro

This blog is intentionally simple.

It contains:
- a short introduction about me
- engineering notes I want to keep around
- a CV that doesn’t live in a forgotten folder

That simplicity heavily influenced the technology choice.

Astro stood out for a few very pragmatic reasons.

### Content-first by design

Most personal blogs are text. Astro treats Markdown as a first-class citizen and generates static HTML by default.

There is no unnecessary JavaScript, no client-side rendering, and no framework runtime unless explicitly requested.

This makes Astro ideal for writing-focused sites.

### Static by default, interactive only when needed

Astro’s island architecture ensures that the site ships as plain HTML unless interactivity is deliberately added.

This avoids the common mistake of turning a blog into a single-page application without intending to.

### Low maintenance and future-proof

Astro does not lock you into a specific frontend framework.

If I ever need Vue, React, or something else, I can introduce it locally and intentionally.
If I never need it, nothing is lost.

### A natural fit for GitHub Pages

Astro produces static output with a simple build process and no backend requirements.

That makes it a perfect match for GitHub Pages.

## Installation and Setup

The setup process was deliberately kept minimal.

### 1. Create the project

Using the official Astro initializer:

```bash
npm create astro@latest my-blog
cd my-blog
npm install



```

```bash
npm create astro@latest . -- --template blog --install --yes
```

During setup, the following options were selected:
- Static site
- Minimal template
- TypeScript (optional, but recommended)

### 2. Run locally

```bash
npm run dev
```

Astro starts a local development server with fast hot reloads.

### 3. Project structure

Blog content lives in Markdown files under the `content` directory, while pages and layouts remain thin and reusable.

A simplified structure looks like this:

```
src/
  content/
    blog/
      astro-intro.md
  pages/
  layouts/
```

Markdown files contain the content.
Astro handles turning them into static HTML pages.

### 4. Build and deploy

To generate the static site:

```bash
npm run build
```

The output is a set of static files that can be deployed directly to GitHub Pages.

## Closing thoughts

This blog is not meant to impress.

It’s meant to last.

Astro provides just enough structure without getting in the way of writing and thinking.
For a personal blog, that is exactly the point.
