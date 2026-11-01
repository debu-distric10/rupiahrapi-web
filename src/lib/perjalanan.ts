/**
 * Garis waktu halaman /perjalanan. Perbarui setiap rilis: pindahkan entri
 * "disiapkan" menjadi "rilis" (isi tanggalnya), lalu tambahkan yang baru.
 */
export type StatusPerjalanan = "rilis" | "disiapkan" | "rencana";

export type Tonggak = {
  status: StatusPerjalanan;
  /** Teks tanggal, atau `null` jika belum pasti. */
  tanggal: string | null;
  judul: string;
  ringkas: string;
  poin: { ikon: string; teks: string }[];
};

export const perjalanan: Tonggak[] = [
  {
    status: "rilis",
    tanggal: "25 Oktober 2026",
    judul: "RupiahRapi lahir · beta 1.0.0",
    ringkas:
      "Versi akses awal pertama untuk Android: pencatat keuangan khusus " +
      "karyawan di Indonesia, gratis, tanpa iklan, tanpa akun.",
    poin: [
      { ikon: "🧾", teks: "Slip gaji: foto slip, angka terisi otomatis (dibaca di HP)" },
      { ikon: "🧮", teks: "Kalkulator 2026: gaji bersih (PPh 21 TER + BPJS), THR, zakat, lembur" },
      { ikon: "🕌", teks: "Pengingat THR H-7 dan zakat fitrah menjelang Lebaran" },
      { ikon: "📁", teks: "Dokumen KTP, KK, NPWP, SIM, STNK, BPJS — terenkripsi" },
      { ikon: "📊", teks: "Statistik & grafik, mode latihan dengan data contoh" },
      { ikon: "🔒", teks: "Data terenkripsi hanya di HP, backup berpassword" },
    ],
  },
  {
    status: "rilis",
    tanggal: "1 November 2026",
    judul: "Beta 1.0.1",
    ringkas: "Beranda baru yang lebih ringkas dan Kirim uang yang lebih jelas.",
    poin: [
      { ikon: "🏠", teks: "Beranda baru: saldo, hal yang perlu perhatian, pengeluaran terbesar" },
      { ikon: "💸", teks: "Kirim uang untuk Keluarga, Teman, atau Lainnya — terpisah di Statistik" },
    ],
  },
  {
    status: "rilis",
    tanggal: "1 November 2026",
    judul: "Beta 1.0.2",
    ringkas:
      "Lima fitur baru dari ide pengguna untuk menabung, berutang, dan " +
      "menjaga dokumen.",
    poin: [
      { ikon: "📈", teks: "Simulasi tabungan: nabung rutin + bunga, langsung jadi target" },
      { ikon: "🐷", teks: "Nabung otomatis tiap bulan: diingatkan, cukup ketuk “Sudah”" },
      { ikon: "💥", teks: "Pecah tabungan: pilih alasan, tahan celengan 3 detik… DUARR!" },
      { ikon: "⏰", teks: "Utang & piutang: tanggal janji, tanda “telat”, pengingat" },
      { ikon: "🔢", teks: "PIN 4 angka khusus untuk Dokumen (opsional)" },
    ],
  },
  {
    status: "rencana",
    tanggal: null,
    judul: "Tayang di Google Play",
    ringkas:
      "Setelah uji tertutup selesai, RupiahRapi bisa dipasang dan " +
      "diperbarui langsung dari Google Play.",
    poin: [],
  },
];

export const labelStatus: Record<StatusPerjalanan, string> = {
  rilis: "Sudah rilis",
  disiapkan: "Sedang disiapkan",
  rencana: "Rencana",
};
