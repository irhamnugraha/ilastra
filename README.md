# ILASTRA — Landing Page

Landing page resmi **ILASTRA (Ikatan Alumni Politeknik Astra)**: profil, program kerja, dan event. Seksi Recap dan Magang Hub sementara dinonaktifkan (masih ada di kode, atribut `hidden`).

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

Website live di https://ilastra.id. Konten bersumber dari Google Sheet `ILASTRA_Data_Website` dan diperbarui manual.

Lisensi komponen pihak ketiga: lihat [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).
