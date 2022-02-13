# Fabian Bao's Personal Website & Blog

Welcome to the repository for my personal website and blog, built with [Astro](https://astro.build/).

## 🛠️ Project Structure

```text
├── public/          # Static assets (fonts, icons)
├── src/
│   ├── assets/      # Images and other processed assets
│   ├── components/  # Reusable Astro components
│   ├── content/     # Blog posts and page content (Markdown/MDX)
│   ├── layouts/     # Page templates
│   ├── pages/       # Site routes
│   └── styles/      # Global CSS styles
├── astro.config.mjs # Astro configuration
└── package.json     # Project dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `make dev`                | Starts local dev server at `localhost:4321`      |
| `make build`              | Build the production site to `./dist/`           |
| `make test`               | Run checks (astro check)                         |
| `make clean`              | Remove build artifacts                           |
| `make help`               | Show all available commands                      |