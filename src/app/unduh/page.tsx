import type { Metadata } from "next";
import Link from "next/link";
import { daftarRilis, rilis } from "@/lib/rilis";
import { aset, situs } from "@/lib/situs";

export const metadata: Metadata = {
  title: "Akses awal (beta)",
  description:
    "Coba RupiahRapi lebih dulu: unduh versi akses awal (beta) untuk Android sebelum tayang di Google Play.",
};

export default function UnduhPage() {
  return (
    <div className="wrap page prose">
      <h1>RupiahRapi akses awal (beta)</h1>
      <p>
        RupiahRapi segera hadir di Google Play. Sambil menunggu, kamu bisa
        mencoba versi <strong>akses awal (beta)</strong> untuk Android dari file
        APK di bawah ini. Gratis, tanpa iklan, dan tanpa akun.
      </p>

      <div className="rilis-grid">
        {daftarRilis.slice(0, 2).map((r, i) => (
          <article key={r.versi}>
            <h2 style={{ marginTop: 0 }}>
              RupiahRapi {r.versi}
              {i === 0 ? <span className="badge">Terbaru</span> : null}
            </h2>
            <p className="meta">
              {r.tanggal} · {r.ukuran} · {r.minimumAndroid} ke atas
            </p>
            <ul>
              {r.baru.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              className={i === 0 ? "btn btn-accent" : "btn"}
              href={aset(r.file)}
              download
              type="application/vnd.android.package-archive"
            >
              ⬇ Unduh {r.versi}
            </a>
            <p className="muted sha">SHA-256: {r.sha256}</p>
          </article>
        ))}
      </div>
      <p className="muted">
        Pilih yang <strong>Terbaru</strong>. Versi sebelumnya tetap tersedia
        bila kamu butuh. Untuk HP Android 64-bit (hampir semua HP sejak 2017);
        belum bisa dipakai di iPhone. Sudah memasang versi lama? Cukup pasang
        yang baru di atasnya: datamu tetap aman.
      </p>

      <h2>Cara memasang</h2>
      <ol>
        <li>Buka halaman ini di HP Android, lalu ketuk <strong>Unduh {rilis.versi}</strong>.</li>
        <li>Setelah selesai, buka file <strong>rupiahrapi-{rilis.versi}.apk</strong> dari notifikasi atau folder Download.</li>
        <li>
          Jika muncul peringatan &ldquo;sumber tidak dikenal&rdquo;, ketuk{" "}
          <strong>Setelan</strong> dan izinkan browser untuk memasang aplikasi,
          lalu kembali dan ketuk <strong>Instal</strong>.
        </li>
        <li>Buka RupiahRapi. Mau coba dulu? Pilih <strong>Coba dulu dengan data contoh</strong>.</li>
      </ol>

      <h2>Perlu diketahui</h2>
      <ul>
        <li>
          Ini versi beta: fitur sudah lengkap, tapi mungkin masih ada yang perlu dirapikan. Kalau menemukan masalah, kabari kami di{" "}
          <a href={`mailto:${situs.email}`}>{situs.email}</a>.
        </li>
        <li>
          Saat RupiahRapi tayang di Google Play, versi APK ini tidak bisa
          langsung diperbarui dari sana. Buat <strong>backup</strong> dulu
          (Pengaturan → Backup &amp; pulihkan), hapus aplikasi ini, pasang
          dari Google Play, lalu pulihkan backup-nya.
        </li>
        <li>
          Datamu tetap tersimpan terenkripsi di HP, tidak dikirim ke mana pun.
          Baca <Link href="/privasi">kebijakan privasi</Link>.
        </li>
      </ul>
    </div>
  );
}
