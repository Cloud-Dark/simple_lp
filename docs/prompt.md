# Project Plan: Landing Page Perusahaan XYZ

Dokumen ini berisi rencana pengembangan, arsitektur, dan struktur komponen untuk aplikasi Landing Page Perusahaan XYZ. Target utama dari landing page ini adalah konversi (lead generation) melalui integrasi kontak yang mudah, konten statis yang informatif, serta visual yang interaktif.

---

## 1. Lingkup Proyek & Fitur Utama

*   **Static Content Management:** Informasi profil perusahaan, layanan/produk, dan keunggulan.
*   **Hero Slider / Banner:** Slider interaktif untuk menampilkan promo, *headline* utama, atau visual produk.
*   **Call to Action (CTA) WhatsApp:** Tombol melayang atau seksi khusus yang langsung terhubung ke WhatsApp internal.
*   **Contact Person & Form:** Form kontak dinamis beserta detail kontak operasional (Email, Telepon, Alamat).
*   **Social Proof & Elements:** Testimoni, FAQ accordion, dan logo partner/klien untuk meningkatkan kredibilitas.

---

## 2. Rencana Arsitektur & Teknologi

Untuk performa tinggi, SEO-friendly, dan kemudahan maintain, berikut rekomendasi stack teknisnya:

*   **Frontend:** Next.js (React) atau Vue (Nuxt) / HTML-Tailwind statis (tergantung kebutuhan deployment).
*   **Slider Library:** Swiper.js atau Embla Carousel (ringan dan responsif).
*   **Styling:** Tailwind CSS (untuk pengerjaan UI yang cepat dan presisi).
*   **Icons:** Lucide React / FontAwesome.

---

## 3. Struktur Komponen & Tata Letak (Layout)

Landing page akan dibagi menjadi beberapa section utama dalam satu halaman (*Single Page Application / Static*):

```text
[Header / Navbar] -> Logo, Menu Navigasi, Button CTA Utama
       ↓
[Hero Section]   -> Dynamic Slider (Headline, Sub-headline, CTA Button)
       ↓
[Features/Value] -> Keunggulan Perusahaan XYZ (Grid 3/4 Kolom)
       ↓
[About / Product]-> Konten Statis detail layanan/produk
       ↓
[Social Proof]   -> Testimoni Slider & Klien Logo
       ↓
[Contact Section]-> Form Kontak + Detail Alamat + Google Maps (Opsional)
       ↓
[Footer]         -> Hak Cipta, Link Sosial Media, Ringkasan Kontak

```

---

## 4. Rincian Elemen Spesifik

### A. Dynamic Slider (Hero)

* **Komponen:** `HeroSlider.jsx`
* **Fitur:** Autoplay, pagination dots, navigation arrows, dan animasi teks saat slide berubah.

### B. WhatsApp Integration

* **Komponen:** `WhatsAppCTA.jsx`
* **Fitur:** Tombol *Floating* di pojok kanan bawah dengan *preset message* (contoh: *"Halo XYZ, saya tertarik dengan layanan Anda..."*).

### C. Contact Person & Form

* **Komponen:** `ContactForm.jsx`
* **Fitur:** Input nama, email, pesan, dan integrasi pengiriman (bisa via API email service atau *direct action*).

---

## 5. Jadwal Pengembangan (Timeline Sederhana)

| Fase | Aktivitas | Output |
| --- | --- | --- |
| **Fase 1** | Inisialisasi Project & Setup Boilerplate | Repositori & Struktur Folder |
| **Fase 2** | Slicing UI & Setup Tailwind (Navbar, Hero Slider, Content) | Tampilan Statis Utama |
| **Fase 3** | Integrasi Komponen Interaktif (Slider, WhatsApp CTA, Form) | Fitur Berfungsi |
| **Fase 4** | Optimasi SEO, Responsivitas Mobile, & Testing | Skor Performa Tinggi |
| **Fase 5** | Deployment (Vercel / Netlify / VPS) | Live Website |

