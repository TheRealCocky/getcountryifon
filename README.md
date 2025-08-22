#!/usr/bin/env bash
set -euo pipefail

# ---------- CONFIG ----------
APP_NAME="Country Info"
APP_URL="https://getcountryifon.vercel.app"   # <- ajusta se necessário
REPO_URL="https://github.com/your-user/country-info"  # <- opcional
AUTHOR="Euclides Baltazar"
# ----------------------------

mkdir -p assets
: > assets/banner.png
: > assets/screenshot-home.png
: > assets/screenshot-mobile.png

cat > README.md <<'MD'
<!-- Banner -->
<p align="center">
  <img src="assets/banner.png" alt="Country Info Banner" width="900">
</p>

<h1 align="center">🌍 Country Info</h1>
<p align="center">
  Explore countries worldwide with flags, capitals, regions, and populations — built with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>.
</p>

<p align="center">
  <a href="https://getcountryifon.vercel.app"><strong>Live Demo</strong></a> ·
  <a href="#features">Features</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#getting-started">Getting Started</a> ·
  <a href="#roadmap">Roadmap</a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwindcss&logoColor=white">
  <img alt="Vercel" src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white">
  <img alt="Status" src="https://img.shields.io/badge/Status-Active-success">
</p>

---

## ✨ Features
- 🔍 **Instant search** to find any country by name
- 🏳️ **Flags** + key facts: capital, region, population
- ⚡ **Fast & responsive UI** (TailwindCSS)
- ☁️ **Deployed on Vercel**
- 📡 Powered by the public **REST Countries API**

<p align="center">
  <img src="assets/screenshot-home.png" alt="Home screenshot" width="420" />
  <img src="assets/screenshot-mobile.png" alt="Mobile screenshot" width="420" />
</p>

---

## 🧰 Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Data:** REST Countries API (`v3.1` with `?fields=...`)
- **Deploy:** Vercel

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run
```bash
npm install
npm run dev
# open http://localhost:3000


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
