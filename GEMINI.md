# Panduan Pengembang AI (GEMINI.md)

Dokumen ini ditujukan sebagai konteks pengembang (*developer context*) untuk asisten AI (seperti Gemini) atau pengembang manusia yang ingin memodifikasi, memperluas, atau memelihara proyek **XYZ Digital Landing Page**.

---

## 🤖 Ringkasan Pembuatan Proyek
Proyek ini diinisialisasi dan dibangun secara kolaboratif menggunakan asisten AI **Antigravity (Google DeepMind)**. Seluruh komponen dirancang menggunakan teknologi web murni (*Vanilla stack*) dengan penekanan pada performa tinggi, responsivitas mobile-first, aksesibilitas, serta kepatuhan penuh terhadap prinsip-prinsip SEO.

---

## 📂 Struktur Penting untuk Modifikasi AI

Saat melakukan modifikasi, pastikan untuk menjaga keselarasan struktur berikut:

1. **Struktur HTML (`index.html`)**:
   - Menggunakan tag semantik HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`).
   - Ikon dimuat secara dinamis menggunakan atribut `data-lucide` (contoh: `<i data-lucide="cpu"></i>`). Pustaka Lucide dimuat via CDN di bagian `<head>`.
   - Element interaktif seperti form atau tombol navigasi memiliki `id` unik yang sinkron dengan penanganan event di `script.js`.

2. **Gaya Tampilan (`style.css`)**:
   - Berbasis sistem token desain menggunakan Variabel CSS (`:root` dan `body.dark-mode`).
   - Layout utama Bento Grid menggunakan CSS Grid dengan pembagian kolom dinamis (2 kolom untuk kartu besar, 1 kolom untuk kartu kecil).
   - Setiap elemen yang memerlukan interaktivitas menggunakan transisi standar: `transition: var(--transition-base)`.

3. **Logika Interaktif (`script.js`)**:
   - Inisialisasi ikon Lucide dipicu di awal: `lucide.createIcons()`.
   - Logika slider (Hero & Testimonial) bekerja dengan kalkulasi indeks berbasis modulo (`(index + length) % length`).
   - Penghitung angka (`Stats Counter`) memanfaatkan `Intersection Observer` untuk performa rendering yang optimal.

---

## 🎨 Token Desain & Tema (CSS Variables)

Asisten AI dapat memodifikasi skema warna dan gaya global dengan mengedit variabel-variabel berikut di `style.css`:

| Nama Variabel | Deskripsi (Light Mode) | Deskripsi (Dark Mode) |
| :--- | :--- | :--- |
| `--primary` | `#0ea5e9` (Cyan/Teal Utama) | `#0ea5e9` (Cyan/Teal Utama) |
| `--primary-dark` | `#1e40af` (Deep Trust Blue) | `#1e40af` (Deep Trust Blue) |
| `--secondary` | `#10b981` (Emerald Green) | `#10b981` (Emerald Green) |
| `--bg-body` | `#ffffff` (Putih Murni) | `#0b0f19` (Navy Gelap) |
| `--bg-section`| `#f8fafc` (Slate Ringan) | `#0f172a` (Slate Gelap) |
| `--bg-card` | `#ffffff` (Putih Murni) | `#1e293b` (Slate Menengah) |
| `--text-main` | `#0f172a` (Slate-900) | `#f8fafc` (Slate-50) |
| `--border-color`| `#e2e8f0` (Slate-200) | `#334155` (Slate-700) |

---

## 🛠️ Panduan Langkah Demi Langkah Modifikasi AI

### A. Cara Menambahkan Slide Baru di Hero Slider
Untuk menambahkan slide ke-4 atau lebih:
1. Di **`index.html`**, tambahkan blok slide baru di dalam `#hero-slider` dengan atribut `data-slide="3"` (indeks berbasis 0):
   ```html
   <div class="slide" data-slide="3">
       <div class="slide-overlay-gradient"></div>
       <div class="slide-content-wrapper">
           <!-- Konten Slider Anda -->
       </div>
   </div>
   ```
2. Tambahkan tombol indikator baru di bagian `.slider-indicators`:
   ```html
   <button class="indicator" data-slide="3" aria-label="Go to Slide 4"></button>
   ```
3. Di **`script.js`**, fungsi `showSlide()` akan mendeteksi slide baru secara otomatis karena menggunakan pencarian `querySelectorAll`.

### B. Cara Menambahkan Kartu Bento Baru
Layout Bento Grid menggunakan sistem grid 3 kolom pada desktop.
1. Untuk menambahkan kartu lebar (lebar 2 kolom), tambahkan kelas `col-span-2`:
   ```html
   <div class="bento-card col-span-2 card-hover"> ... </div>
   ```
2. Untuk menambahkan kartu kecil standar (lebar 1 kolom), cukup gunakan kelas `bento-card card-hover`:
   ```html
   <div class="bento-card card-hover"> ... </div>
   ```

### C. Cara Menambahkan Kolom Baru pada Formulir Kontak
Formulir menggunakan efek *floating label* murni dengan CSS. Jika ingin menambah kolom baru (misal: "Nomor Telepon"):
1. Gunakan struktur HTML berikut:
   ```html
   <div class="form-group">
       <input type="tel" id="phone" name="phone" class="form-input" placeholder=" " required>
       <label for="phone" class="form-label">Nomor Telepon</label>
       <span class="focus-line"></span>
       <span class="error-msg" id="phone-error">Nomor telepon tidak valid</span>
   </div>
   ```
2. Hubungkan kolom baru ke fungsi validasi di `script.js` jika diperlukan validasi khusus sebelum pengiriman mock API.

### D. Mengubah Preset Pesan WhatsApp CTA
Jika ingin mengganti pesan otomatis saat pengguna mengklik tombol floating WhatsApp:
1. Temukan elemen `#whatsapp-cta` di **`index.html`**.
2. Ubah parameter `text` pada URL `href` (pastikan menggunakan URL Encoding):
   ```html
   href="https://wa.me/6281234567890?text=Halo%20XYZ%20Digital%20[Pesan%20Kustom%20Baru]"
   ```

---

## 🔒 Aturan Perilaku AI (*AI Behavioral Rules*)
Saat asisten AI memodifikasi proyek ini, wajib mematuhi aturan berikut:
1. **Kebersihan Kode**: Jangan menambahkan pustaka JavaScript eksternal yang berat (seperti jQuery) kecuali diminta secara eksplisit.
2. **Keterbacaan**: Pertahankan komentar penjelas yang ada di berkas `style.css` dan `script.js`.
3. **Optimasi**: Selalu pastikan gambar/grafis baru menggunakan format SVG atau memiliki kompresi yang baik demi kecepatan muat halaman.
