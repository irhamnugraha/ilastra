# Rancangan Landing Page ILASTRA

> Ikatan Alumni Politeknik Astra — pusat informasi resmi, publikasi kegiatan, dan wadah kolaborasi alumni.

Semua data event, recap, lowongan magang, dan angka statistik di halaman adalah **CONTOH (dummy)**. Ganti dengan data resmi sebelum diumumkan.

---

## 1. Sitemap & Wireframe Layout

### Sitemap (single page, anchor navigation)

```
/ (index.html)
├── #top        Navbar + Hero (Profile ILASTRA)
├── #tentang    About Us — Visi, Misi, Nilai
├── #proker     Program Kerja
├── #event      Event (Berlangsung & Akan Datang)
├── #recap      Report Event (Recap / Gallery)
├── #magang     Magang Hub
│   ├── #ajukan-magang     Alur untuk mahasiswa/alumni muda
│   └── #pasang-lowongan   Alur untuk alumni/perusahaan
├── #gabung     Final CTA (Gabung Network / #update-data)
└── Footer      Navigasi + kontak resmi
```

### Wireframe (atas → bawah)

```
┌──────────────────────────────────────────────────────────────┐
│ [Logo] ILASTRA   Tentang Proker Event Recap Magang  [Update][Gabung] │  ← sticky, blur navy
├──────────────────────────────────────────────────────────────┤
│ HERO (gradient navy→biru brand + grid teknik)                │
│ ┌───────────── 7 kolom ─────────────┐ ┌──── 5 kolom ────┐    │
│ │ badge: Rumah Resmi Alumni          │ │  Kartu logo      │    │
│ │ H1: Sekali Astra, selamanya keluarga│ │  ILASTRA +       │    │
│ │ Sub-judul                          │ │  status "Network │    │
│ │ [Gabung Network] [Update Data]     │ │  aktif"          │    │
│ │ Statistik: alumni | event | magang │ └──────────────────┘    │
│ └────────────────────────────────────┘                        │
├──────────────────────────────────────────────────────────────┤
│ ABOUT: kiri = judul, deskripsi, kotak Visi │ kanan = Misi 01–04 │
│        + 4 tile Nilai (Kekeluargaan, Profesional, Kolaboratif, Berdampak) │
├──────────────────────────────────────────────────────────────┤
│ PROKER (bg abu muda): judul tengah + grid 4 kartu (2 di tablet, 1 di HP) │
│ [ikon] Judul / deskripsi / link CTA                          │
├──────────────────────────────────────────────────────────────┤
│ EVENT: judul kiri + tab filter [Semua|Berlangsung|Akan Datang] kanan │
│ grid 3 kartu: badge status, judul, tanggal, waktu, lokasi/link, deskripsi, [Daftar/RSVP] │
├──────────────────────────────────────────────────────────────┤
│ RECAP (bg navy gelap): per kegiatan 1 baris zig-zag          │
│ [galeri foto/video 1 besar + 2 kecil] | judul, ringkasan, jumlah peserta, pilar (chip), output (checklist) │
├──────────────────────────────────────────────────────────────┤
│ MAGANG HUB: judul + [Ajukan Magang] [Pasang Lowongan]        │
│ bar pencarian + filter tipe (Onsite/Hybrid/Remote)           │
│ grid kartu lowongan: posisi, perusahaan, diposting oleh, lokasi, durasi, kualifikasi, [Ajukan] │
│ 2 kotak alur: "Cara Ajukan Magang" | "Cara Pasang Lowongan"  │
├──────────────────────────────────────────────────────────────┤
│ FINAL CTA banner: "Satu almamater. Ribuan peluang." [Gabung] [Update Data] │
├──────────────────────────────────────────────────────────────┤
│ FOOTER: logo + tagline | Jelajahi | Kontak resmi | ©         │
└──────────────────────────────────────────────────────────────┘
```

Responsif: grid otomatis turun jadi 1 kolom di HP, navbar jadi hamburger menu, tombol CTA jadi full-width.

---

## 2. Copywriting Lengkap

### Navbar
- Menu: Tentang · Program Kerja · Event · Recap · Magang Hub
- CTA: **Update Data** · **Gabung Network**

### 1) Hero & About — Profile ILASTRA
- Badge: *Rumah Resmi Alumni Politeknik Astra*
- **Judul:** Sekali Astra, selamanya keluarga.
- **Sub-judul:** ILASTRA menyatukan alumni Politeknik Astra lintas angkatan, jurusan, dan industri. Tempat kita berbagi info resmi, tumbuh bareng lewat program kerja, dan membuka pintu kesempatan buat adik-adik tingkat.
- CTA: **Gabung Network** · **Update Data Alumni**
- Statistik (contoh): Alumni Terhubung 5.000+ · Event/Tahun 24 · Lowongan Magang 80+
- **About — Judul:** Dari kampus yang sama, kita jalan lebih jauh bersama.
- **Deskripsi:** ILASTRA (Ikatan Alumni Politeknik Astra) adalah wadah resmi seluruh lulusan Politeknik Astra. Kami hadir untuk merawat silaturahmi, menjadi jembatan antara alumni dan almamater, serta menyalakan kolaborasi yang berdampak — buat karier, industri, dan masyarakat.
- **Visi:** Menjadi jejaring alumni vokasi yang solid, kolaboratif, dan berkontribusi nyata bagi almamater, industri, dan bangsa.
- **Misi:**
  1. Membangun database dan jejaring alumni yang aktif, mutakhir, dan saling terhubung.
  2. Mendorong pengembangan karier dan kompetensi alumni lewat mentorship dan knowledge sharing.
  3. Membuka akses magang dan kerja bagi mahasiswa serta alumni muda Politeknik Astra.
  4. Menginisiasi aksi sosial yang memberi dampak langsung bagi masyarakat.
- **Nilai:** Kekeluargaan · Profesional · Kolaboratif · Berdampak

> Visi/misi di atas adalah draf usulan — sesuaikan dengan AD/ART resmi ILASTRA.

### 2) Program Kerja
- **Judul:** Proker unggulan, digerakkan alumni untuk alumni.
- **Sub-judul:** Empat pilar yang jadi fokus pengurus ILASTRA. Mau ikut jadi relawan atau mentor? Pintunya selalu terbuka.
- Kartu:
  - **ILASTRA Mentorship** — Program 1-on-1 dan group mentoring bareng alumni senior dari berbagai industri. → *Jadi Mentor / Mentee*
  - **Alumni Gathering** — Temu kangen lintas angkatan, reuni akbar, sampai chapter regional. Karena koneksi terbaik lahir dari obrolan santai. → *Lihat Jadwal*
  - **Social Impact** — ILASTRA Peduli: donor darah, bakti sosial, beasiswa adik tingkat, dan pelatihan vokasi untuk masyarakat. → *Lihat Dampaknya*
  - **Pengembangan Karier** — Webinar upskilling, review CV, simulasi interview, dan info lowongan eksklusif dari jejaring alumni. → *Ke Magang Hub*

### 3) Event
- **Judul:** Catat tanggalnya, sampai ketemu di sana!
- **Sub-judul:** Agenda alumni yang lagi jalan dan yang segera datang. Kursi terbatas — amankan tempatmu duluan.
- Tab: Semua · Berlangsung · Akan Datang
- Field kartu: Badge status · Judul · Tanggal · Waktu · Lokasi/Link webinar · Deskripsi singkat · Tombol **Daftar / RSVP**
- Contoh: *ILASTRA Mentorship Batch 3* (berlangsung), *Webinar: Karier di Industri Otomotif 4.0* (14 Nov 2026), *Reuni Akbar & Alumni Gathering 2026* (13 Des 2026).

### 4) Report Event
- **Judul:** Jejak yang sudah kita tinggalkan bersama.
- **Sub-judul:** Dokumentasi dan laporan singkat kegiatan yang sudah terlaksana. Terima kasih buat setiap alumni yang hadir dan berkontribusi.
- Field per recap: Galeri foto/video · Tanggal · Judul · Ringkasan · **Jumlah peserta hadir** · **Pilar** (chip) · **Output kegiatan** (checklist)

### 5) Magang Hub
- **Judul:** Dari alumni, untuk generasi berikutnya.
- **Sub-judul:** Jembatan antara alumni yang membuka kesempatan dengan mahasiswa dan alumni muda Politeknik Astra yang siap belajar langsung di industri.
- CTA: **Ajukan Magang** · **Pasang Lowongan Magang**
- Search placeholder: *Cari posisi, perusahaan, atau skill…*
- Field kartu: Posisi · Nama perusahaan/start-up alumni · Diposting oleh · Lokasi · Tipe (Onsite/Hybrid/Remote) · Durasi · Kualifikasi ringkas · **Ajukan Magang**
- Empty state: *Belum ada lowongan yang cocok. Coba kata kunci lain, ya!*
- **Cara Ajukan Magang:** Pilih lowongan → isi form + unggah CV/portofolio → tim Magang Hub meneruskan ke alumni → siap-siap interview, semangat!
- **Cara Pasang Lowongan:** Isi detail posisi → verifikasi maks. 2×24 jam kerja → lowongan tayang → terima kandidat terkurasi.

### Final CTA & Footer
- **Judul:** Satu almamater. Ribuan peluang. Kamu bagian darinya.
- **Sub-judul:** Gabung network ILASTRA dan pastikan datamu selalu update — supaya info event, lowongan, dan kabar alumni nggak ada yang kelewat.
- Footer: *Pusat informasi resmi, kegiatan, dan kolaborasi alumni Politeknik Astra.* · *Dibuat dengan 💙 oleh alumni.*

---

## 3. Palet Warna & Tipografi

Warna utama diambil langsung dari logo ILASTRA (biru `#085EA7` hasil sampling piksel logo).

| Token | Hex | Pemakaian |
|---|---|---|
| `brand-600` (Primary) | `#085EA7` | Warna logo, tombol utama, ikon, link |
| `brand-700` | `#074C88` | Hover tombol primary |
| `brand-950` (Navy) | `#031B31` | Hero, seksi Recap, teks judul |
| `brand-50` | `#EEF6FD` | Latar kotak info/visi |
| `spark-500` (Accent) | `#F5A524` | CTA utama "Gabung Network", highlight — kesan energi/industri |
| `sky-accent` | `#38BDF8` | Aksen teknologi, glow dekoratif |
| `slate-700 / 600` | `#334155 / #475569` | Teks body |
| `slate-50` | `#F8FAFC` | Latar seksi selang-seling |

Alasan: biru brand = kepercayaan & profesional; navy gelap = kesan industri/korporat; amber = energi, semangat, dan kontras tinggi untuk CTA (teks navy di atas amber lolos kontras AA).

**Tipografi**
- **Plus Jakarta Sans** (400–800) — heading & body. Geometris, modern, dan dibuat oleh desainer Indonesia.
- **JetBrains Mono** (500–600) — label kecil/eyebrow (mis. `PROGRAM KERJA`, `ONLINE`) untuk nuansa teknik/teknologi.
- Skala: H1 36→60px, H2 30→36px, body 16–18px, label 12–14px uppercase + tracking lebar.

**Motif visual:** grid garis tipis ala kertas gambar teknik di Hero & CTA, kartu rounded-2xl dengan shadow lembut, animasi reveal halus (dimatikan otomatis bila pengguna memilih *reduced motion*).

---

## 4. Kode Front-End

- `index.html` — HTML + Tailwind CSS (responsive, tanpa framework JS). Data event/recap/lowongan ada di objek `EVENTS`, `RECAPS`, `JOBS` di bagian `<script>`; tinggal edit atau ganti dengan `fetch()` ke API/Google Sheet.
- `tailwind.config.js` — token warna & font brand.
- `src/input.css` → dikompilasi ke `assets/styles.css` (`npm run build`).
- Tombol form (Gabung, Update Data, RSVP, Ajukan, Pasang Lowongan) saat ini membuka modal placeholder. Ganti objek `FORMS` / atribut `data-form` dengan link Google Form atau endpoint backend.

### Langkah lanjutan yang disarankan
1. Isi data resmi (statistik, event, kontak, visi-misi sesuai AD/ART).
2. Hubungkan form ke Google Form / Typeform / backend.
3. Ganti tile galeri placeholder dengan foto dokumentasi asli (format WebP, ≤200 KB).
4. Logo saat ini 200×200 px — sediakan versi SVG/PNG resolusi tinggi agar tajam di layar retina.
5. Jika data makin banyak, migrasi ke Next.js + CMS (mis. Sanity/Strapi) atau Supabase untuk Magang Hub.
