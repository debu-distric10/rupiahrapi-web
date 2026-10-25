import Link from "next/link";
import { Logo } from "@/components/Logo";
import { situs } from "@/lib/situs";
import styles from "./beranda.module.css";

const fitur = [
  {
    ikon: "🧾",
    judul: "Slip gaji",
    isi: "Foto slip gaji, angka langsung terisi — dibaca di HP. Gaji pokok, tunjangan, PPh 21, dan BPJS tercatat rapi tiap bulan.",
  },
  {
    ikon: "🧮",
    judul: "Kalkulator gaji 2026",
    isi: "Perkiraan gaji bersih (PPh 21 TER + BPJS), THR, zakat penghasilan, dan upah lembur sesuai aturan 2026.",
  },
  {
    ikon: "🕌",
    judul: "Pengingat THR & zakat",
    isi: "Diingatkan menjelang Lebaran: batas THR H-7 dan zakat fitrah. Zakat yang sudah dibayar bisa langsung dicatat.",
  },
  {
    ikon: "🎯",
    judul: "Target & anggaran",
    isi: "Dana darurat, mudik, DP rumah — lengkap dengan saran berapa yang perlu disisihkan per bulan.",
  },
  {
    ikon: "📅",
    judul: "Tagihan, cicilan & arisan",
    isi: "Listrik, internet, cicilan, arisan — diingatkan sehari sebelum dan pada hari jatuh tempo.",
  },
  {
    ikon: "📁",
    judul: "Dokumen penting",
    isi: "Foto KTP, KK, NPWP, SIM, STNK, BPJS — terenkripsi, dengan pengingat sebelum masa berlaku habis.",
  },
];

export default function BerandaPage() {
  return (
    <>
      <section className={`wrap ${styles.hero}`}>
        <Logo size={96} />
        <h1>{situs.slogan}</h1>
        <p className={styles.lead}>
          Pencatat keuangan pribadi untuk karyawan di Indonesia. Gratis, tanpa
          iklan, tanpa akun — dan bukan aplikasi pinjaman.
        </p>
        <div className={styles.actions}>
          {situs.playStore ? (
            <a className="btn btn-accent" href={situs.playStore}>
              Unduh di Google Play
            </a>
          ) : (
            <span className="btn btn-accent" aria-disabled="true">
              Segera di Google Play
            </span>
          )}
        </div>
      </section>

      <section className="wrap">
        <h2 className={styles.sectionTitle}>Apa saja yang bisa dicatat?</h2>
        <div className={styles.grid}>
          {fitur.map((f) => (
            <article key={f.judul} className="card">
              <div className={styles.icon} aria-hidden="true">
                {f.ikon}
              </div>
              <h3>{f.judul}</h3>
              <p className="muted">{f.isi}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap">
        <div className={styles.privacy}>
          <h2>🔒 Datamu hanya di HP-mu</h2>
          <ul>
            <li>Semua data disimpan terenkripsi di HP, bukan di server.</li>
            <li>
              Aplikasi tidak meminta izin internet — tidak ada yang bisa
              dikirim keluar.
            </li>
            <li>Tanpa akun, tanpa iklan, tanpa pelacakan.</li>
            <li>Backup ke file berpassword, bisa dipulihkan di HP baru.</li>
          </ul>
          <Link href="/privasi">Baca kebijakan privasi →</Link>
        </div>
      </section>
    </>
  );
}
