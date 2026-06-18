# Rickhy Siswanto — Personal Portfolio

React + Vite personal website with blog (markdown) and gallery grid.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Build untuk Production

```bash
npm run build
npm run preview
```

## Struktur Proyek

```
src/
  components/
    Navbar.jsx        — Navigasi sticky dengan dark mode toggle
    Hero.jsx          — Landing section dengan profil & CTA
    Skills.jsx        — Tech stack dengan animated progress bar
    Blog.jsx          — Featured article + card grid, modal reader
    Gallery.jsx       — Grid gallery dengan filter kategori
    Contact.jsx       — Social media & kontak cards
    Modal.jsx         — Reusable modal component
    renderMarkdown.js — Markdown renderer sederhana
  data/
    index.js          — Data blog, gallery, skills, socials
  hooks/
    useDarkMode.js    — Dark mode hook
  App.jsx
  main.jsx
  index.css           — CSS variables (light/dark theme)
```

## Kustomisasi

### Ganti Konten
Edit `src/data/index.js` untuk:
- Tambah/edit artikel blog (dengan konten markdown)
- Tambah foto gallery (ganti `emoji` dengan `img` tag)
- Update skills dan link sosial

### Ganti Foto Profil
Di `src/components/Hero.jsx`, ganti `<div>RS</div>` dengan:
```jsx
<img src="/foto.jpg" alt="Rickhy" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
```
Taruh file foto di folder `public/`.

### Deploy ke GitHub Pages
```bash
npm install --save-dev gh-pages
# Tambah di package.json: "homepage": "https://rickhysis.github.io/portfolio"
npm run build
npx gh-pages -d dist
```
