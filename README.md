# Portofolio Developer — Faisal Abdau (Creative Tech Edition)

Website portofolio developer modern, clean, bold, dan profesional dengan palet warna Creative Tech (warm white `#FAFAF8`, deep black `#171717`, dan cobalt blue `#3157D5`).

Website ini dibangun menggunakan stack **HTML5 Semantic, CSS3 Modern, Vanilla JavaScript (ES6+), dan Web Audio API**, dirancang cepat dimuat, mudah dipelihara, dan langsung siap dipublikasikan ke **Vercel** maupun dipasang di **Bio Instagram**.

---

## 🌟 Fitur Utama Website

1. **Top Arcade HUD & Navigasi**:
   - Wordmark brand `FAISAL.DEV` dengan badge elektrik.
   - Menu navigasi responsif dengan indikator link aktif (Scroll Spy).
   - Menu hamburger geser halus untuk tampilan smartphone.
   - Kontrol interaktif: **Coin Clicker (+100 Score)**, **SFX Toggle (🔊/🔇)**, dan **CRT Scanline Filter Toggle (📺/🖥️)**.

2. **Hero Section Profesional**:
   - Status ketersediaan: `🟢 TERSEDIA UNTUK PROYEK & KOLABORASI`.
   - Ringkasan pengalaman nyata mahasiswa Teknik Informatika Semester 5.
   - Quick stats row: 8 Repositori Publik, 6 Live Demos, 100% Karya Nyata.
   - Terminal interaktif (`faisal.json`, `skills.ts`, `journey.md`) dengan tombol eksekusi simulasi ber-efek audio.

3. **About Me**:
   - Penjelasan fokus keahlian, filosofi pemecahan masalah nyata, dan etos kerja bersih.
   - Tiga pilar utama: *Problem-Solving Oriented*, *Modern & Responsive Workflow*, dan *PlayStation Gamer Mindset*.

4. **Skills & Attributes Terverifikasi**:
   - Dikelompokkan rapi: *Programming Languages*, *Frontend Development*, *Backend & Cloud BaaS*, *Database & Storage*, *Tools & Deployment*, serta *Hardware & Web APIs*.
   - Hanya menampilkan teknologi yang memiliki bukti nyata di repositori GitHub.

5. **Spotlight / Featured Projects (Deep Dive)**:
   - Pembahasan mendalam 3 proyek unggulan:
     1. **Atur Produksi (Jaya Wijaya)**: Sistem ERP & operasional manufaktur terintegrasi Supabase Realtime & RLS.
     2. **Mulyo Adventure 1.0**: Platform rental perlengkapan outdoor dengan booking picker dan WhatsApp checkout.
     3. **Web PO Bus Pariwisata ASM Putra**: Website reservasi armada bus pariwisata dengan estimasi rute instan.
   - Setiap kartu menampilkan: Masalah, Solusi, Fitur Kunci, Tech Badges, Live Demo, dan Source Code.

6. **All Projects Showcase (Data-Driven)**:
   - Pencarian instan (Live Search) berdasarkan nama, deskripsi, atau teknologi.
   - Filter kategori: *Web App*, *E-Commerce & Rental*, *Booking & Profile*, *Landing Page*, *Creative UI*, dan *Mobile App*.
   - Filter status: *Semua*, *Live Demo*, dan *Source Code Only*.
   - Pengurutan (Sorting): Default (Featured), A - Z, Z - A.
   - Pesan ramah jika pencarian tidak ditemukan (*Empty State*).

7. **Hobby: PlayStation Zone**:
   - Konsol retro 16-bit interaktif dengan mini controller DualShock (△ ○ ✕ □).
   - Setiap tombol memicu efek suara procedural synthesizer Web Audio API.
   - Rak trofi pencapaian developer (*Platinum Focus*, *Fast Reflexes*, *High Replay Value*).
   - Sound test synthesizer: *Coin*, *Laser*, *1UP*, dan *Win Fanfare*.

8. **Kontak & Generator WhatsApp**:
   - Saluran resmi: WhatsApp (`+62 882-0053-63151`), GitHub (`@faisabdau03-alt`), dan portofolio Vercel.
   - Generator pesan WhatsApp instan: Pengunjung cukup mengetik nama dan pesan, lalu klik tombol untuk langsung membuka chat WhatsApp dengan pesan terformat rapi.
   - Tombol "Salin No. WhatsApp" satu-klik.

9. **Easter Egg Konami Code**:
   - Tekan kode legendaris pada keyboard: `↑ ↑ ↓ ↓ ← → ← → B A` untuk membuka modal kemenangan rahasia dan bonus skor 999.999!

---

## 📁 Struktur Berkas

```
Portofolio Faisal Abdau/
├── index.html          # Halaman utama portofolio (Semantic & SEO Friendly)
├── style.css           # Styling modern dark mode, responsive grid, & retro accent
├── script.js           # Logika interaktif, filter, Web Audio API, scroll spy
├── projects-data.js    # Data konfigurasi terpisah untuk seluruh proyek
├── index.old.html      # Cadangan aman website versi lama (abdauuuporto)
├── style.old.css       # Cadangan styling lama
├── script.old.js       # Cadangan script lama
└── README.md           # Panduan lengkap proyek
```

---

## 🚀 Cara Menjalankan di Komputer Lokal (VS Code)

### Opsi 1: Menggunakan Ekstensi "Live Server" (Direkomendasikan)
1. Buka folder ini di **Visual Studio Code**.
2. Pastikan ekstensi **Live Server** (oleh Ritwick Dey) sudah terpasang.
3. Klik kanan pada berkas `index.html`, lalu pilih **"Open with Live Server"**.
4. Website akan terbuka otomatis di peramban pada alamat `http://127.0.0.1:5500`.

### Opsi 2: Buka Langsung Berkas HTML
- Cukup klik ganda (double click) berkas `index.html` dari File Explorer Windows. Website akan langsung berjalan di peramban Google Chrome atau Microsoft Edge tanpa dependensi apapun.

---

## 🛠️ Cara Memperbarui Daftar Proyek di Masa Depan

Seluruh data proyek tersimpan rapi dan terpisah di berkas `projects-data.js`. Anda tidak perlu mengubah kode HTML yang rumit!

Untuk menambah proyek baru, buka `projects-data.js` dan tambahkan objek baru ke dalam array `PROJECTS_DATA`:

```javascript
{
  id: "nama-proyek-anda",
  title: "Judul Proyek",
  subtitle: "Subjudul Singkat",
  category: "webapp", // Pilihan: "webapp", "ecommerce", "booking", "landing", "creative", "mobile"
  categoryLabel: "Web Application",
  status: "live", // "live" jika ada demo online, atau "source" jika hanya source code
  statusLabel: "Live Demo",
  featured: false, // Ubah ke true jika ingin ditampilkan di bagian Spotlight atas
  repoUrl: "https://github.com/faisabdau03-alt/nama-repo",
  demoUrl: "https://nama-proyek.vercel.app", // Isi null jika belum ada demo
  bannerIcon: "🚀",
  description: "Deskripsi tujuan proyek...",
  features: [
    "Fitur 1...",
    "Fitur 2..."
  ],
  techStack: ["React", "Tailwind CSS", "JavaScript"]
}
```

Simpan berkas, dan proyek baru Anda akan otomatis muncul di pencarian, filter, dan kartu website!

---

## 🌐 Cara Deployment ke Vercel

1. **Simpan Perubahan ke GitHub**:
   - Gunakan repositori GitHub Anda yang sudah dibuat, yaitu `Portofolio_Abdau` (atau repositori lain yang Anda inginkan).
   - Buka terminal di VS Code pada folder ini dan jalankan perintah berikut:
     ```bash
     git init
     git add index.html style.css script.js projects-data.js README.md
     git commit -m "feat: modern developer portfolio with 16-bit retro touches"
     git branch -M main
     git remote add origin https://github.com/faisabdau03-alt/Portofolio_Abdau.git
     git push -u origin main
     ```

2. **Deploy via Dashboard Vercel**:
   - Masuk ke akun Anda di [vercel.com](https://vercel.com).
   - Klik **"Add New..."** > **"Project"**.
   - Pilih repositori GitHub portofolio Anda.
   - Karena ini proyek HTML murni, biarkan konfigurasi default (Framework Preset: **Other** / Static).
   - Klik **"Deploy"**.
   - Dalam hitungan detik, website akan tayang secara online dengan HTTPS gratis!

---

## ✅ Checklist Sebelum Memasang Link di Bio Instagram

- [x] Pastikan seluruh 6 tautan Live Demo (`jaya-wijaya`, `mulyoadv`, `asm-seven-iota`, dll.) dapat diakses publik.
- [x] Pastikan tautan profil GitHub mengarah ke `https://github.com/faisabdau03-alt`.
- [x] Uji tombol WhatsApp di smartphone untuk memastikan nomor `+62 882-0053-63151` langsung membuka aplikasi WhatsApp.
- [x] Uji tampilan responsif di layar ponsel: periksa menu navigasi, kartu proyek, dan keterbacaan teks.
- [x] Masukkan link Vercel Anda (misal `https://abdauuuporto.vercel.app`) ke kolom **Website / Tautan** pada profil Instagram Anda.
