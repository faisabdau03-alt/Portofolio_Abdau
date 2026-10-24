/**
 * ====================================================================
 * FAISAL ABDAU - PROJECTS DATA CONFIGURATION
 * ====================================================================
 * Berkas data terkurasi untuk portofolio Faisal Abdau (@faisabdau03-alt).
 * Seluruh data diverifikasi langsung dari repositori publik GitHub
 * dan deployment Vercel resmi.
 *
 * CARA MENAMBAH / MEMPERBARUI PROYEK:
 * Cukup tambahkan objek baru ke dalam array `PROJECTS_DATA` di bawah ini
 * mengikuti struktur yang sudah ada.
 */

const PROJECTS_DATA = [
  {
    id: "atur-produksi",
    title: "Atur Produksi (Jaya Wijaya)",
    subtitle: "Sistem Manajemen Operasional & ERP Manufaktur",
    category: "webapp",
    categoryLabel: "Web Application",
    status: "live",
    statusLabel: "Live Demo",
    featured: true,
    repoUrl: "https://github.com/faisabdau03-alt/atur-produksi",
    demoUrl: "https://jaya-wijaya.vercel.app",
    bannerIcon: "⚙️",
    accentColor: "#8b5cf6", // Electric Purple
    description:
      "Aplikasi web single-page (SPA) untuk mengelola seluruh rantai operasional manufaktur secara terintegrasi: kontrol stok barang masuk/keluar, pencatatan arus kas keuangan, serta otomasi penggajian karyawan.",
    problemSolved:
      "Bisnis manufaktur dan bengkel produksi skala UMKM sering kesulitan mencatat stok bahan baku, kas operasional, dan menghitung upah insentif karyawan per unit secara akurat tanpa human-error.",
    solutionBuilt:
      "Membangun dashboard operasional realtime berbasis Vite dan Supabase yang mengotomatisasi validasi pengeluaran stok, mencatat mutasi kas, serta menghitung gaji pokok dan insentif produksi otomatis dalam satu atap.",
    features: [
      "Ringkasan dashboard stok barang dan arus kas real-time",
      "Pencatatan persediaan bahan masuk & keluar dengan validasi proteksi stok minus",
      "Pencatatan mutasi kas operasional masuk/keluar terstruktur per kategori & tanggal",
      "Manajemen data karyawan dengan konfigurasi gaji bulanan dan tarif insentif per unit produksi",
      "Otomasi kalkulasi payroll (gaji pokok + insentif hasil produksi) dan pelacakan status pembayaran",
      "Ekspor laporan bulanan persediaan dan arus kas ke format CSV",
      "Sinkronisasi data langsung lintas perangkat via Supabase Realtime & Row Level Security (RLS)"
    ],
    techStack: [
      "Vite",
      "JavaScript (ES6+)",
      "Supabase",
      "PostgreSQL",
      "Realtime API",
      "Row Level Security",
      "CSS3 Modern"
    ]
  },
  {
    id: "mulyo-adventure",
    title: "Mulyo Adventure 1.0",
    subtitle: "Platform Persewaan Perlengkapan Camping & Outdoor",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Rental",
    status: "live",
    statusLabel: "Live Demo",
    featured: true,
    repoUrl: "https://github.com/faisabdau03-alt/Mulyo-1.0",
    demoUrl: "https://mulyoadv.vercel.app",
    bannerIcon: "🏕️",
    accentColor: "#10b981", // Emerald Green
    description:
      "Platform persewaan perlengkapan camping dan mendaki gunung modern (tenda, carrier, sleeping bag, alat masak). Dilengkapi booking picker interaktif, kalkulator sewa otomatis, dan alur checkout WhatsApp.",
    problemSolved:
      "Pelanggan rental outdoor sering bingung memilih durasi sewa, menghitung total biaya perlengkapan untuk banyak hari, dan mengonfirmasi ketersediaan alat ke admin rental.",
    solutionBuilt:
      "Mengembangkan portal rental responsif dengan live picker tanggal & durasi sewa, modal kalkulator harga instan, keranjang belanja lokal persisten, dan generator pesan WhatsApp siap kirim.",
    features: [
      "Interactive Booking Picker: pemilih tanggal sewa otomatis minimal H+1 & kalkulasi tanggal kembali real-time",
      "Katalog produk lengkap dengan live search, filter kategori, brand ternama (Eiger, Consina, Deuter), dan filter rentang harga",
      "Modal detail produk dengan kalkulator sewa instan (Subtotal = Harga/hari x Jumlah x Durasi)",
      "Keranjang belanja (Cart Drawer) interaktif persisten menggunakan LocalStorage API",
      "Formulir konfirmasi pesanan terintegrasi generator pesan WhatsApp yang rapi dan terstruktur",
      "Halaman panduan alur sewa, syarat jaminan identitas (cara-sewa.html), dan kontak toko dengan Google Maps (kontak.html)"
    ],
    techStack: [
      "HTML5 Semantic",
      "CSS3 Modern",
      "Bootstrap 5.3",
      "JavaScript (ES6+)",
      "LocalStorage API",
      "WhatsApp API"
    ]
  },
  {
    id: "pt-asm-putra",
    title: "Web PO Bus ASM Putra",
    subtitle: "Website Profil & Estimasi Booking Bus Pariwisata",
    category: "booking",
    categoryLabel: "Booking & Profile",
    status: "live",
    statusLabel: "Live Demo",
    featured: true,
    repoUrl: "https://github.com/faisabdau03-alt/PT-ASM-Putra",
    demoUrl: "https://asm-seven-iota.vercel.app",
    bannerIcon: "🚌",
    accentColor: "#06b6d4", // Electric Cyan
    description:
      "Website resmi pemesanan dan company profile armada bus pariwisata untuk PO Alula Sadida Maryam. Menyajikan estimasi harga rute perjalanan real-time, spesifikasi unit bus, dan konsultasi WhatsApp.",
    problemSolved:
      "Calon penyewa bus pariwisata memerlukan informasi transparan tentang fasilitas armada serta estimasi biaya sewa bus berdasarkan tujuan perjalanan secara cepat tanpa harus menunggu respon manual berjam-jam.",
    solutionBuilt:
      "Mendesain website elegan dengan sistem kalkulator rute pariwisata real-time, showcase spesifikasi armada lengkap (seat, audio, AC), galeri unit, dan tombol konsultasi langsung.",
    features: [
      "Sistem kalkulasi estimasi harga rute pariwisata secara real-time",
      "Showcase katalog armada lengkap dengan spesifikasi teknis dan fasilitas kabin",
      "Galeri foto armada bus pariwisata beresolusi tinggi",
      "Tombol konsultasi & booking cepat terhubung langsung ke WhatsApp customer service",
      "Desain adaptif dan responsif untuk pengguna smartphone maupun layar lebar desktop"
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Layout",
      "WhatsApp API"
    ]
  },
  {
    id: "dasboard-pendakian",
    title: "Dashboard Pendakian Mulyo Adventure",
    subtitle: "Landing Page & Showcase Paket Sewa Outdoor",
    category: "landing",
    categoryLabel: "Landing Page",
    status: "live",
    statusLabel: "Live Demo",
    featured: false,
    repoUrl: "https://github.com/faisabdau03-alt/dasboard-pendakian",
    demoUrl: "https://dasboard-pendakian.vercel.app",
    bannerIcon: "⛰️",
    accentColor: "#38bdf8",
    description:
      "Landing page interaktif untuk mempromosikan layanan dan katalog ringkas persewaan perlengkapan petualangan mendaki gunung Mulyo Adventure.",
    problemSolved:
      "Menyediakan halaman ringkas, ringan, dan cepat diakses untuk promosi cepat di media sosial atau link bio.",
    solutionBuilt:
      "Membangun landing page minimalis dan cepat dengan fokus konversi informasi alat dan panduan booking.",
    features: [
      "Showcase paket perlengkapan pendakian gunung",
      "Alur langkah cara booking sewa perlengkapan outdoor",
      "Navigasi halus antar-bagian halaman (Smooth Scrolling)",
      "Tampilan mobile-first yang ringan dan cepat dimuat"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Mobile-First Design"]
  },
  {
    id: "arza-graduation",
    title: "Arza - Graduation Greeting",
    subtitle: "Kartu Ucapan Wisuda Digital Interaktif",
    category: "creative",
    categoryLabel: "Creative UI",
    status: "live",
    statusLabel: "Live Demo",
    featured: false,
    repoUrl: "https://github.com/faisabdau03-alt/Arza",
    demoUrl: "https://arza-sage.vercel.app",
    bannerIcon: "🎓",
    accentColor: "#ec4899",
    description:
      "Website kartu ucapan wisuda digital aesthetic dengan tipografi modern, animasi kartu melayang, dan nuansa visual perayaan yang elegan.",
    problemSolved:
      "Memberikan alternatif ucapan selamat kelulusan/wisuda yang ramah lingkungan, interaktif, dan berkesan.",
    solutionBuilt:
      "Membuat landing page kartu wisuda animasi dengan utility framework Tailwind CSS dan keyframe effects.",
    features: [
      "Animasi melayang (floating card animation) berbasis CSS keyframes",
      "Efek glowing pulse yang memikat",
      "Tata letak responsif yang dirancang sempurna untuk tampilan layar smartphone",
      "Tipografi modern dengan kontras warna yang nyaman dipandang"
    ],
    techStack: ["HTML5", "Tailwind CSS", "CSS Animations", "Responsive UI"]
  },
  {
    id: "fokusku",
    title: "Fokusku - Pomodoro Time Manager",
    subtitle: "Aplikasi Mobile Manajemen Produktivitas",
    category: "mobile",
    categoryLabel: "Mobile App (Android)",
    status: "source",
    statusLabel: "Source Code Only",
    featured: false,
    repoUrl: "https://github.com/faisabdau03-alt/Fokusku",
    demoUrl: null,
    bannerIcon: "⏱️",
    accentColor: "#f59e0b",
    description:
      "Prototipe aplikasi mobile Android untuk manajemen fokus belajar dan kerja dengan teknik Pomodoro, dibalut desain visual Material 3 Earth Tone.",
    problemSolved:
      "Membantu mahasiswa dan pelajar menjaga konsentrasi belajar serta mencegah kelelahan mental melalui manajemen interval waktu kerja dan istirahat yang terukur.",
    solutionBuilt:
      "Mengembangkan aplikasi Android natif dengan timer otomatis, kalkulasi waktu istirahat pendek dan panjang, serta antarmuka Material 3 yang tenang.",
    features: [
      "Konfigurasi durasi sesi fokus dan target pengulangan sesi",
      "Kalkulasi waktu istirahat otomatis (short break & long break)",
      "Desain Material 3 dengan palet warna Earth Tone yang menenangkan mata",
      "Tugas UTS Mata Kuliah Mobile Programming Semester 5"
    ],
    techStack: ["Android (Java)", "Material 3 Design", "Gradle", "Android Studio"]
  },
  {
    id: "belajar-fireb",
    title: "BelajarFireB - Android Firebase Integration",
    subtitle: "Eksplorasi Backend-as-a-Service Firebase pada Android",
    category: "mobile",
    categoryLabel: "Mobile App (Android)",
    status: "source",
    statusLabel: "Source Code Only",
    featured: false,
    repoUrl: "https://github.com/faisabdau03-alt/BelajarFireB",
    demoUrl: null,
    bannerIcon: "🔥",
    accentColor: "#ef4444",
    description:
      "Proyek studi mandiri implementasi integrasi layanan cloud backend Firebase (Authentication & Realtime Database) pada aplikasi Android natif.",
    problemSolved:
      "Memahami alur sinkronisasi data cloud real-time dan mekanisme otentikasi pengguna pada pengembangan aplikasi mobile Android.",
    solutionBuilt:
      "Membuat modul eksperimen konektivitas Firebase SDK di lingkungan Android Studio.",
    features: [
      "Eksplorasi Firebase Authentication untuk otorisasi pengguna",
      "Integrasi Firebase Realtime Database untuk penyimpanan data cloud",
      "Penerapan arsitektur Android terstruktur dengan konfigurasi Gradle"
    ],
    techStack: ["Android (Java)", "Firebase Realtime DB", "Firebase Auth", "Gradle"]
  },
  {
    id: "abdauuu-porto-v1",
    title: "Abdauuu Porto (16-Bit Classic Edition)",
    subtitle: "Website Portofolio Awal Bertema Arcade Retro",
    category: "webapp",
    categoryLabel: "Web Application",
    status: "live",
    statusLabel: "Live Demo",
    featured: false,
    repoUrl: "https://github.com/faisabdau03-alt/Abdauuu_Porto",
    demoUrl: "https://abdauuuporto.vercel.app",
    bannerIcon: "👾",
    accentColor: "#a855f7",
    description:
      "Versi perdana portofolio personal Faisal Abdau yang mengusung tema arcade 16-bit klasik, efek suara Web Audio API, CRT overlay, dan Konami Code easter egg.",
    problemSolved:
      "Menciptakan representasi identitas personal developer yang menyukai estetika retro gaming dan audio sintesis.",
    solutionBuilt:
      "Membangun portofolio unik dengan generator Web Audio API tanpa aset audio eksternal dan simulasi tabung CRT.",
    features: [
      "Web Audio API Sound Synthesizer prosedural (Coin, Laser, Powerup, Fanfare)",
      "Simulasi overlay garis pindai (Scanlines) layar CRT retro interaktif",
      "Easter Egg kode legendaris Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)",
      "PlayStation pad combo deck interaktif"
    ],
    techStack: [
      "HTML5",
      "CSS3 Retro",
      "JavaScript",
      "Web Audio API",
      "CRT Shader FX"
    ]
  }
];

// Ekspor data agar dapat digunakan di modul atau script global
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROJECTS_DATA };
}
