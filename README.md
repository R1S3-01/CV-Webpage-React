# Joseph Garner Portfolio

This repository contains the source for my portfolio website built with React and Tailwind CSS.

To update the site served via GitHub Pages:

1. Install dependencies (only required once):
   ```bash
   npm install
   ```
2. Build the production files and copy them to the `docs/` directory:
   ```bash
   npm run build
   cp -r build/* docs/
   ```
   GitHub Pages is configured to use the `docs/` folder as the site root.

The `build/` directory is not committed to git. The compiled files inside `docs/` are what gets served on GitHub Pages.
