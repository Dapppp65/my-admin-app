# 🎓 My Admin App

Aplikasi admin berbasis **React + Vite** dengan backend **JSON Server** untuk mengelola data akademik (Mahasiswa, Dosen, Mata Kuliah, dan Kelas).

---

## 📋 Prasyarat

Pastikan kamu sudah menginstal:

- [Node.js](https://nodejs.org/) versi **18** atau lebih baru
- [npm](https://www.npmjs.com/) (sudah termasuk bersama Node.js)

Cek versi dengan perintah:

```bash
node -v
npm -v
```

---

## 🚀 Cara Menjalankan Program (Development)

### 1. Clone & Masuk ke Direktori Proyek

```bash
git clone <url-repository>
cd my-admin-app
```

### 2. Install Dependensi

```bash
npm install
```

### 3. Jalankan Backend (JSON Server)

Buka **terminal pertama**, jalankan:

```bash
npm run server
```

> JSON Server akan berjalan di **http://localhost:5000**
> File database: `db.json`

### 4. Jalankan Frontend (Vite Dev Server)

Buka **terminal kedua**, jalankan:

```bash
npm run dev
```

> Aplikasi akan berjalan di **http://localhost:5173**

### 5. Buka di Browser

Akses aplikasi di: **http://localhost:5173**

---

## ⚡ Ringkasan Perintah

| Perintah | Fungsi |
|---|---|
| `npm install` | Install semua dependensi |
| `npm run dev` | Jalankan frontend (Vite) |
| `npm run server` | Jalankan backend (JSON Server) |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build production |

---

## 🗂️ Struktur Proyek

```
my-admin-app/
├── src/
│   ├── api/              # File API (Mahasiswa, Dosen, MataKuliah)
│   ├── components/       # Komponen React (UI, Modal, Tabel)
│   ├── pages/            # Halaman utama aplikasi
│   └── utils/            # Utilitas & custom hooks
├── db.json               # Database JSON Server
├── server.js             # Entry point server (untuk deployment)
├── vite.config.js        # Konfigurasi Vite
└── package.json          # Dependensi & scripts
```

---

## 🌍 Konfigurasi Environment (Opsional)

Jika ingin menggunakan URL API kustom (misal untuk production), buat file `.env` di root proyek:

```bash
# Salin dari file contoh
cp .env.example .env
```

Kemudian edit file `.env`:

```env
VITE_API_URL=https://YOUR-APP-NAME.onrender.com
```

> Tanpa file `.env`, aplikasi secara default akan terhubung ke `http://localhost:5000`

---

## 🏗️ Build untuk Production

Jika ingin membuild aplikasi:

```bash
npm run build
```

Hasil build akan tersimpan di folder `dist/`.

Untuk preview hasil build secara lokal:

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| **React 19** | Library UI utama |
| **Vite** | Build tool & dev server |
| **React Router DOM** | Navigasi antar halaman |
| **TanStack Query** | Manajemen state & fetching data |
| **Axios** | HTTP client untuk API |
| **JSON Server** | Mock REST API backend |
| **Chart.js** | Visualisasi data (grafik) |
| **SweetAlert2** | Dialog konfirmasi |
| **React Toastify** | Notifikasi toast |

---

## ❓ Troubleshooting

**Port sudah digunakan?**
```bash
# Cek proses yang menggunakan port 5000 atau 5173
netstat -ano | findstr :5000
netstat -ano | findstr :5173
```

**Dependensi bermasalah?**
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install
```

**Data tidak muncul di aplikasi?**
- Pastikan JSON Server (`npm run server`) sudah berjalan terlebih dahulu sebelum membuka frontend.
- Cek apakah `http://localhost:5000` dapat diakses di browser.
