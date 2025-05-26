# 🚀 Pengenalan SolidJS & Dasar Reaktivitas

Project ini merupakan bagian dari pembelajaran dasar **SolidJS**, sebuah JavaScript UI library yang modern dan efisien. Di sini, kita membangun aplikasi **counter reaktif** sederhana untuk memahami cara kerja _reactivity_ di SolidJS.

---

## 📌 Apa itu SolidJS?

SolidJS adalah library JavaScript untuk membangun antarmuka pengguna (UI) dengan performa tinggi. Tidak seperti React yang menggunakan virtual DOM, SolidJS langsung memanipulasi DOM dengan pendekatan **fine-grained reactivity**, membuatnya sangat cepat dan ringan.

---

## 🎯 Tujuan Project

- Memahami filosofi dan konsep dasar SolidJS
- Belajar menggunakan `createSignal`, `createEffect`, dan reaktivitas
- Membuat aplikasi counter reaktif (+ dan -)
- Menampilkan hasil counter dan log ke konsol setiap perubahan nilai

---

## 📘 Materi Reaktivitas

### 1. `createSignal`
Fungsi untuk membuat nilai reaktif. Seperti `useState` di React, tapi dengan pendekatan getter/setter berbasis fungsi.

```js
const [count, setCount] = createSignal(0);

count();        // Ambil nilai
setCount(1);    // Ubah nilai
```

### 2. `createEffect`
Digunakan untuk menjalankan efek samping ketika nilai reaktif berubah. Mirip dengan `useEffect` di React.

```js
createEffect(() => {
  console.log("Nilai count berubah:", count());
});
```

### 3. `createMemo`
Membuat nilai komputasi yang di-cache dan hanya dihitung ulang ketika dependensinya berubah.

```js
const doubleCount = createMemo(() => count() * 2);
```

### 4. `onCleanup`
Fungsi untuk membersihkan efek samping ketika komponen di-unmount atau ketika efek dijalankan ulang.

```js
createEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer berjalan");
  }, 1000);
  
  onCleanup(() => clearInterval(timer));
});
```

### 5. Signal vs Store
- **Signal**: Untuk nilai primitif atau objek sederhana
  ```js
  const [count, setCount] = createSignal(0);
  ```
- **Store**: Untuk objek kompleks dengan nested properties
  ```js
  const [state, setState] = createStore({
    user: { name: "John", age: 25 }
  });
  ```

Perbedaan utama:
- Signal menggunakan getter/setter function
- Store menggunakan proxy untuk akses properti
- Store lebih efisien untuk objek kompleks
- Signal lebih sederhana untuk nilai tunggal

## 🧱 Fitur Utama

- ➕➖ Tambah dan kurangi nilai counter
- 🔁 UI update otomatis saat state berubah
- 🧠 Logging nilai counter dengan `createEffect`

---

## 📂 Struktur Folder

solid-counter/
├── public/
├── src/
│ ├── App.jsx # Komponen utama
│ └── index.jsx # Entry point
├── package.json
└── vite.config.js

## ⚙️ Cara Install & Jalankan

### 1. Buat project baru
```bash
npm create solid@latest 