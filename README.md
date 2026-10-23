# ILASTRA — Landing Page

Landing page resmi **ILASTRA (Ikatan Alumni Politeknik Astra)**: profil, program kerja, event, recap kegiatan, dan Magang Hub.

- Rancangan lengkap (sitemap, wireframe, copywriting, palet warna & tipografi): [`docs/RANCANGAN.md`](docs/RANCANGAN.md)
- Halaman: [`index.html`](index.html) (HTML + Tailwind CSS)

## Menjalankan lokal

```bash
npm install
npm run build     # kompilasi Tailwind → assets/styles.css
# buka index.html di browser, atau:
npx serve .
```

Saat mengedit class Tailwind di `index.html`, jalankan `npm run dev` (watch mode).

## Deploy

Workflow `.github/workflows/pages.yml` men-deploy otomatis ke GitHub Pages setiap push ke `main`.
Pastikan **Settings → Pages → Source = GitHub Actions** sudah aktif.

> Data event, lowongan, recap, dan statistik di halaman masih **contoh** — ganti dengan data resmi.
