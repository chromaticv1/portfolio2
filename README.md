# Khalid Muntasir Sawad — Personal Portfolio & Academic Resume

A modern, high-performance, modular portfolio and academic resume website built with **Svelte 5**, **SvelteKit**, **Bun**, and **Tailwind CSS**. Designed with an ethereal deep dark aesthetic, subtle glowing mesh gradients, and crispy serif typography.

![Deep Dark Theme](https://img.shields.io/badge/Theme-Deep%20Dark-08090F?style=for-the-badge)
![Built With Svelte 5](https://img.shields.io/badge/Framework-Svelte%205-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Runtime Bun](https://img.shields.io/badge/Runtime-Bun%201.4-FBF0DF?style=for-the-badge&logo=bun&logoColor=black)
![Deploy Ready](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🌟 Key Features

- **Deep Dark Aesthetic**: Low-light surface colors (`#07080c`, `#0c0f18`), glassmorphism panels, and glowing radial mesh backgrounds.
- **Crispy Serif Typography**: Hand-crafted font pairing with Google Fonts (*Cinzel*, *Playfair Display*, *Cormorant Garamond* for display headlines, *Plus Jakarta Sans* for body readability, and *JetBrains Mono* for metrics & code).
- **100% Modular Data Architecture**: All portfolio data (projects, experiences, skills, education, faculty references, bio) is decoupled into [`src/lib/data/portfolio.ts`](src/lib/data/portfolio.ts). Updating content takes seconds.
- **GitHub Pages Ready**: Fully static pre-rendered output using `@sveltejs/adapter-static` with automated GitHub Actions CI/CD workflow (`.github/workflows/deploy.yml`).
- **Interactive Micro-Interactions**:
  - Filterable projects showcase with category tabs
  - One-click copy email & phone buttons with toast notifications
  - Real-time local Bangladesh Standard Time (BST) clock
  - Integrated PDF resume download and viewer
  - Direct mail client composer with pre-filled message templates

---

## 📂 Project Structure

```text
├── .github/workflows/deploy.yml   # Automatic GitHub Pages CI/CD workflow
├── src/
│   ├── app.html                  # HTML shell, Google Fonts & SEO OpenGraph tags
│   ├── routes/
│   │   ├── +layout.svelte        # Root layout wrapper & theme styles
│   │   ├── +layout.ts            # Prerendering configuration (SSR/Static)
│   │   ├── +page.svelte          # Main landing page assembling all sections
│   │   └── layout.css            # Tailwind CSS v4 setup, variables & animations
│   └── lib/
│       ├── data/
│       │   └── portfolio.ts      # ⚡ MODULAR DATA FILE (Edit your info here!)
│       ├── types/
│       │   └── portfolio.ts      # Strict TypeScript interfaces
│       ├── components/
│       │   ├── Navbar.svelte     # Glass sticky header with navigation
│       │   ├── Footer.svelte     # Modern footer & back-to-top button
│       │   ├── icons/            # Optimized SVG icon components
│       │   ├── ui/               # Reusable UI elements (Toast, SectionHeading)
│       │   └── sections/
│       │       ├── Hero.svelte        # High-impact introduction & headline
│       │       ├── StatsStrip.svelte  # Key metrics & highlight stats
│       │       ├── About.svelte       # Academic narrative & core pillars
│       │       ├── Experience.svelte  # Career & research assistant timeline
│       │       ├── Projects.svelte    # Filterable project showcase
│       │       ├── Skills.svelte      # Categorized skill matrix
│       │       ├── Education.svelte   # University of Rajshahi statistics degree
│       │       ├── References.svelte  # Professor & executive endorsements
│       │       └── Contact.svelte     # Direct contact channels & message form
├── static/
│   ├── favicon.svg               # Custom monogram brand favicon
│   ├── resume.pdf                # Static PDF resume download
│   └── .nojekyll                 # GitHub Pages asset routing helper
├── svelte.config.js              # SvelteKit static adapter configuration
└── vite.config.ts                # Vite build pipeline
```

---

## 🚀 Quick Start (Local Development)

Ensure you have [Bun](https://bun.sh) installed.

```bash
# 1. Install dependencies
bun install

# 2. Start the local development server
bun run dev

# 3. Open your browser
# Navigate to http://localhost:5173
```

---

## 🛠️ How to Update Your Information (Modularity)

All content is centralized in **[`src/lib/data/portfolio.ts`](src/lib/data/portfolio.ts)**. You do **not** need to touch any HTML or Svelte components to update your information:

1. **Add / Edit Projects**: Modify the `projects` array in `src/lib/data/portfolio.ts`.
2. **Add / Edit Experience**: Modify the `experiences` array in `src/lib/data/portfolio.ts`.
3. **Update Skills**: Add or remove entries under `skillCategories`.
4. **Update References**: Update faculty or employer contacts under `references`.
5. **Update PDF Resume**: Replace `static/resume.pdf` with your updated resume file.

---

## 🚢 Deploying to GitHub Pages

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. Create a new repository on GitHub (e.g. `site` or `portfolio` or `<your-username>.github.io`).
2. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

### Option 2: Manual Static Build

```bash
# Build static output to the `build/` folder
bun run build

# Preview static production build locally
bun run preview
```

---

## 📜 License

Created with precision for **Khalid Muntasir Sawad**. Open for personal and academic adaptation.
# portfolio2
# portfolio2
