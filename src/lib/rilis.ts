/** APK akses awal (beta), diunduh langsung dari situs sebelum tayang di Google Play. */
export type Rilis = {
  versi: string;
  tanggal: string;
  file: string;
  ukuran: string;
  /** Untuk memeriksa file tidak berubah (opsional, bagi yang paham). */
  sha256: string;
  minimumAndroid: string;
  /** Hal baru di versi ini (singkat, untuk kartu unduhan). */
  baru: string[];
};

/**
 * Terbaru di depan. Halaman /unduh menampilkan dua versi terakhir
 * berdampingan. Tiap rilis beta baru: tambahkan di depan, taruh APK-nya di
 * public/unduh/.
 */
export const daftarRilis: Rilis[] = [
  {
    versi: "1.0.3",
    tanggal: "1 November 2026",
    file: "/unduh/rupiahrapi-1.0.3.apk",
    ukuran: "40 MB",
    sha256: "44376c8f0af95aaa6a96d5df6d92456be1f3545835d1571ff29cb212ba2d7c2f",
    minimumAndroid: "Android 7.0",
    baru: [
      "Catat lebih cepat: kategori favorit jadi kotak besar",
      "Isi saldo bank & e-wallet sejak awal",
      "Cari transaksi di semua bulan",
      "Sembunyikan saldo & bayar tagihan dari Beranda",
      "Menu bawah baru: Transaksi 1 ketuk",
    ],
  },
  {
    versi: "1.0.2",
    tanggal: "1 November 2026",
    file: "/unduh/rupiahrapi-1.0.2.apk",
    ukuran: "39 MB",
    sha256: "faac717b9cb46c5fefb6051f21d714b9db8c4bb2d7b4733e42904cdbdb1f2719",
    minimumAndroid: "Android 7.0",
    baru: [
      "Simulasi tabungan & nabung otomatis",
      "Pecah tabungan… DUARR!",
      "Utang: tanggal janji & pengingat",
      "PIN 4 angka untuk Dokumen",
    ],
  },
];

/** Versi terbaru. */
export const rilis = daftarRilis[0];
