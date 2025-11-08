/**
 * Renders Nunjucks templates from src/templates/pages/*.njk
 * into dist/ (preserving filenames as .html).
 * Also copies src/assets -> dist/assets
 */

const nunjucks = require('nunjucks');
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src');
const TEMPLATES = path.join(SRC, 'templates');
const ASSETS = path.join(SRC, 'assets');
const DIST = path.join(__dirname, '..', 'dist');

async function renderAll() {
  // Clean dist
  await fs.remove(DIST);
  await fs.mkdirp(DIST);

  // Configure nunjucks to search in templates folder
  nunjucks.configure(TEMPLATES, { autoescape: false, watch: false });

  // Provide a context (edit data.json or inline here)
  const context = fs.readJsonSync(path.join(SRC, 'templates', 'data.json'), { throws: false }) || {
    site: {
      title: "Internship Task — Your Name",
      description: "Recreated Internship Task Document (Task 1) with Nunjucks + Vite",
      author: "GS Keerthana"
    }
  };

  // Copy assets first
  if (await fs.pathExists(ASSETS)) {
    await fs.copy(ASSETS, path.join(DIST, 'assets'));
    console.log('Copied assets -> dist/assets');
  }

  // Find page templates
  const pages = glob.sync('pages/**/*.njk', { cwd: TEMPLATES });

  for (const page of pages) {
    const pagePath = path.join(TEMPLATES, page);
    const outName = page.replace(/\.njk$/, '.html').replace(/^pages\//, '');
    const outputPath = path.join(DIST, outName);
    const rendered = nunjucks.render(pagePath, context);
    await fs.mkdirp(path.dirname(outputPath));
    await fs.writeFile(outputPath, rendered, 'utf8');
    console.log('Rendered', page, '->', outName);
  }

  // Optionally copy root-level static files (like CNAME)
  const staticFiles = ['robots.txt', 'favicon.ico'];
  for (const f of staticFiles) {
    const fp = path.join(SRC, f);
    if (await fs.pathExists(fp)) {
      await fs.copy(fp, path.join(DIST, f));
    }
  }

  console.log('Render complete. HTML files are in dist/');
}

renderAll().catch(err => {
  console.error(err);
  process.exit(1);
});
