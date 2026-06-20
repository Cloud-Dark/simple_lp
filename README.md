# XYZ Digital - Solusi Transformasi Digital & Keamanan Siber

XYZ Digital adalah landing page modern, responsif, dan dinamis yang dirancang untuk mempromosikan layanan transformasi digital, infrastruktur cloud, pengembangan perangkat lunak kustom, dan keamanan siber. Website ini dirancang dengan estetika premium yang bersih, mendukung mode terang/gelap (*light/dark mode*), serta dilengkapi dengan animasi mikro dan interaktivitas yang halus untuk memberikan pengalaman pengguna (*user experience*) terbaik.

---

## 🚀 Fitur Utama

Layanan dan landing page ini dilengkapi dengan berbagai fitur interaktif modern:
1. **WhatsApp Floating CTA dengan Efek Pulse**: Tombol melayang WhatsApp di pojok kanan bawah dengan efek gelombang (*pulse ring*) dan *tooltip* interaktif untuk mempermudah komunikasi instan.
2. **Sticky Navbar & Navigasi Aktif Otomatis**: Menu navigasi yang menempel di atas halaman (*sticky*) dengan efek kaca transparan (*glassmorphism*) saat digulirkan (*scroll*), serta pendeteksi posisi halaman aktif secara otomatis (*active state highlight*).
3. **Toggle Mode Terang / Gelap (Light / Dark Mode)**: Tombol peralihan tema yang responsif dengan penyimpanan preferensi di `localStorage` dan deteksi otomatis preferensi tema sistem operasi pengguna.
4. **Menu Responsif Mobile**: Navigasi ramah perangkat seluler dengan menu laci (*drawer*) yang dapat dibuka/tutup secara interaktif menggunakan tombol hamburger.
5. **Hero Section & Dynamic Slider**: Slider interaktif dengan 3 slide layanan utama (Transformasi Digital, Keamanan Siber, Infrastruktur Cloud) yang bergerak otomatis (*auto-play*) dan memiliki navigasi manual berupa panah dan indikator titik (*indicator dots*).
6. **Bento Grid Services**: Presentasi visual layanan utama yang modern dan asimetris menggunakan tata letak *Bento Grid* dengan kartu interaktif dan efek melayang (*hover effect*).
7. **About & Stats Counter**: Statistik perusahaan (Jumlah Proyek, Tingkat Kepuasan, Tenaga Ahli, Tahun Pengalaman) yang secara dinamis menghitung maju (*count-up animation*) ketika pengguna menggulir ke bagian tersebut, menggunakan *Intersection Observer*.
8. **Client Logo Marquee**: Efek teks/logo berjalan tanpa henti (*infinite scrolling marquee*) untuk menampilkan daftar klien atau mitra yang bekerja sama.
9. **Testimonials Carousel**: Slider testimoni klien yang mudah dinavigasi secara manual menggunakan tombol navigasi kiri-kanan dan indikator titik.
10. **FAQ Accordion**: Komponen tanya jawab interaktif yang dapat dilipat/buka dengan animasi transisi tinggi yang halus.
11. **Formulir Kontak dengan Validasi & Mock API**: Formulir kontak interaktif dengan validasi data langsung (*real-time validation*) serta simulasi pengiriman pesan (*mock submit*) lengkap dengan indikator pemuatan (*loader*) dan popup sukses.
12. **Integrasi Google Maps**: Peta interaktif tersemat di bagian kontak untuk memudahkan pencarian lokasi kantor utama.
13. **Scroll Animations**: Efek kemunculan elemen secara halus (*fade-in / slide-up*) saat halaman digulirkan melalui *Intersection Observer API* yang optimal.

---

## 🛠️ Teknologi yang Digunakan

Website ini dibangun sepenuhnya menggunakan teknologi web standar (*native/vanilla*) untuk performa optimal, aksesibilitas tinggi, dan kecepatan pemuatan halaman yang maksimal:
1. **HTML5**: Sebagai struktur semantik utama website.
2. **Vanilla CSS3**: Digunakan untuk tata letak (*layout*) menggunakan Flexbox dan Grid (termasuk Bento Grid), sistem variabel CSS untuk mode gelap/terang, efek *glassmorphism*, transisi, serta animasi *infinite marquee*.
3. **Vanilla JavaScript (ES6+)**: Mengatur seluruh logika interaktivitas, kontrol slider, animasi counter, validasi formulir, *Intersection Observer*, dan pengelolaan tema gelap/terang.
4. **Lucide Icons**: Library ikon modern dan minimalis berbasis SVG yang dimuat secara dinamis via CDN.
5. **Google Fonts (Plus Jakarta Sans)**: Menggunakan font sans-serif premium yang bersih dan modern untuk keterbacaan yang maksimal.

---

## 📂 Struktur Direktori Proyek

Berikut adalah susunan file dan folder dalam proyek XYZ Digital:

```text
Simple LP/
├── docs/
│   ├── design.md          # Dokumen panduan desain sistem dan spesifikasi visual
│   └── prompt.md          # Dokumen instruksi pengembangan awal proyek
├── index.html             # Berkas utama markup HTML halaman landing page
├── style.css              # Berkas stylesheet utama untuk semua tata letak dan desain
├── script.js              # Berkas logika JavaScript untuk interaktivitas halaman
└── README.md              # Dokumen panduan proyek ini (file ini)
```

---

## 💻 Cara Menjalankan Proyek Secara Lokal

Karena proyek ini hanya menggunakan HTML, CSS, dan JavaScript murni tanpa memerlukan proses kompilasi (*build step*), Anda memiliki beberapa cara mudah untuk menjalankannya secara lokal di komputer Anda:

### Metode 1: Membuka File HTML Langsung (Metode Paling Sederhana)
1. Buka folder proyek `Simple LP`.
2. Klik dua kali pada berkas [index.html](file:///D:/Simple%20LP/index.html), atau klik kanan lalu pilih **Open With** dan pilih peramban web (*browser*) pilihan Anda (seperti Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari).
*Catatan: Beberapa fitur peramban modern yang memerlukan protokol HTTP (seperti pembacaan berkas lokal via fetch API) mungkin memiliki keterbatasan jika dibuka menggunakan protokol `file://`.*

### Metode 2: Menggunakan Live Server di VS Code (Sangat Direkomendasikan untuk Pengembangan)
Jika Anda menggunakan editor teks Visual Studio Code, Anda bisa mendapatkan fitur *live-reload* otomatis:
1. Pasang ekstensi **Live Server** oleh Ritwick Dey melalui VS Code Marketplace.
2. Buka folder `Simple LP` di Visual Studio Code.
3. Klik kanan pada berkas [index.html](file:///D:/Simple%20LP/index.html) dan pilih **Open with Live Server**, atau klik tombol **Go Live** yang berada di status bar pojok kanan bawah VS Code.
4. Website akan otomatis terbuka di browser Anda pada alamat `http://127.0.0.1:5500`. Setiap kali Anda mengubah kode di berkas HTML/CSS/JS, browser akan memuat ulang halaman secara otomatis.

### Metode 3: Menggunakan Python `http.server` (Tanpa Instalasi Tambahan jika Python Terpasang)
Jika komputer Anda sudah terpasang Python, Anda dapat menjalankan server lokal dengan cepat melalui terminal/command prompt:
1. Buka terminal atau Command Prompt (CMD) / PowerShell.
2. Arahkan direktori aktif ke dalam folder proyek:
   ```bash
   cd "D:\Simple LP"
   ```
3. Jalankan perintah berikut (sesuaikan versi Python Anda):
   * Untuk **Python 3.x**:
     ```bash
     python -m http.server 8000
     ```
   * Untuk **Python 2.x**:
     ```bash
     python -m SimpleHTTPServer 8000
     ```
4. Buka browser Anda dan akses alamat `http://localhost:8000`.

### Metode 4: Menggunakan Node.js `http-server` (Menggunakan NPM)
Jika Anda adalah pengembang web yang menggunakan ekosistem Node.js, Anda dapat menggunakan modul `http-server`:
1. Buka terminal atau Command Prompt.
2. Anda dapat menjalankannya langsung tanpa instalasi permanen menggunakan `npx`:
   ```bash
   npx http-server "D:\Simple LP" -p 8080
   ```
   Atau pasang secara global terlebih dahulu:
   ```bash
   npm install -g http-server
   ```
   Lalu masuk ke direktori proyek dan jalankan:
   ```bash
   cd "D:\Simple LP"
   http-server -p 8080
   ```
3. Buka browser Anda dan akses alamat `http://localhost:8080`.

---

## 🌐 Tips Deployment (Penyebaran ke Server Publik)

Landing page ini sepenuhnya bersifat statis, sehingga sangat mudah, cepat, dan murah (bahkan gratis) untuk di-deploy ke internet. Berikut beberapa opsi platform deployment terbaik yang direkomendasikan:

### 1. GitHub Pages (Gratis & Mudah)
Cocok jika kode proyek Anda disimpan di repositori GitHub:
1. Buat repositori baru di GitHub dan unggah (*push*) kode proyek Anda.
2. Masuk ke tab **Settings** repositori Anda.
3. Cari menu **Pages** di bilah navigasi samping kiri.
4. Pada bagian **Build and deployment**, ubah Source menjadi **Deploy from a branch**.
5. Pilih branch utama Anda (misalnya `main` atau `master`), pilih folder `/ (root)`, lalu klik **Save**.
6. Website Anda akan aktif dalam beberapa menit di URL `https://<username>.github.io/<nama-repositori>/`.

### 2. Vercel (Gratis, Cepat & Otomatis)
Platform yang sangat populer dengan performa CDN luar biasa:
1. Buat akun gratis di [Vercel](https://vercel.com).
2. Hubungkan akun GitHub Anda atau instal Vercel CLI.
3. Klik **Add New** > **Project** lalu impor repositori GitHub Anda.
4. Di bagian pengaturan proyek, karena ini adalah situs HTML/CSS/JS statis biasa, Anda tidak perlu mengubah perintah Build atau Output Directory. Cukup klik **Deploy**.
5. Vercel akan secara otomatis men-deploy situs Anda dan memberikan domain gratis berakhiran `.vercel.app`.

### 3. Netlify (Gratis dengan Fitur Drag-and-Drop)
Paling praktis jika Anda tidak ingin menggunakan Git atau command line:
1. Buat akun di [Netlify](https://www.netlify.com).
2. Setelah masuk ke dasbor, buka tab **Sites**.
3. Tarik (*drag-and-drop*) folder `Simple LP` langsung ke area unggah yang disediakan di halaman Netlify.
4. Netlify akan langsung memproses dan men-deploy situs Anda dalam hitungan detik dengan domain gratis `.netlify.app`.

### 4. Hosting CPanel Tradisional
Jika Anda memiliki layanan shared hosting atau cloud server sendiri:
1. Kompres seluruh file dalam folder proyek (`index.html`, `style.css`, `script.js`, dan folder `docs`) menjadi satu file `.zip`.
2. Masuk ke cPanel hosting Anda, lalu buka **File Manager**.
3. Arahkan ke folder root publik situs Anda (biasanya `public_html` atau direktori subdomain Anda).
4. Unggah file `.zip` yang telah dibuat, kemudian ekstrak di dalam direktori tersebut.
5. Pastikan berkas [index.html](file:///D:/Simple%20LP/index.html) berada tepat di bawah folder root agar dapat diakses langsung via nama domain Anda (misal: `https://domainanda.com`).

---

## 🔒 Lisensi & Kontribusi

Proyek ini dibuat untuk keperluan landing page profesional XYZ Digital. Silakan gunakan, modifikasi, dan kembangkan kode ini sesuai kebutuhan bisnis Anda.

Dibuat dengan 💻 dan ☕ oleh Tim XYZ Digital.
