import type { Metadata } from "next";
import Link from "next/link";
import { rilis } from "@/lib/rilis";
import { aset, situs } from "@/lib/situs";

export const metadata: Metadata = {
  title: "Unduh APK",
  description:
    "Unduh RupiahRapi untuk Android (file APK) sebelum aplikasinya tayang di Google Play.",
};

export default function UnduhPage() {
  return (
    <div className="wrap page prose">
      <h1>Unduh RupiahRapi untuk Android</h1>
      <p>
        RupiahRapi belum tayang di Google Play. Sambil menunggu, kamu bisa
        memasangnya langsung dari file APK di bawah ini. Gratis, tanpa iklan,
        dan tanpa akun.
      </p>

      <article>
        <h2 style={{ marginTop: 0 }}>RupiahRapi {rilis.versi}</h2>
        <p className="meta">
          {rilis.tanggal} · {rilis.ukuran} · {rilis.minimumAndroid} ke atas
        </p>
        <a
          className="btn btn-accent"
          href={aset(rilis.file)}
          download
          type="application/vnd.android.package-archive"
        >
          ⬇ Unduh APK
        </a>
        <p className="muted" style={{ marginTop: 16, marginBottom: 0 }}>
          Untuk HP Android 64-bit (hampir semua HP sejak 2017). Belum bisa
          dipakai di iPhone.
        </p>
      </article>

      <h2>Cara memasang</h2>
      <ol>
        <li>Buka halaman ini di HP Android, lalu ketuk <strong>Unduh APK</strong>.</li>
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
          Ini versi awal untuk dicoba. Kalau menemukan masalah, kabari kami di{" "}
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

      <p className="muted" style={{ fontSize: 13, wordBreak: "break-all" }}>
        SHA-256: {rilis.sha256}
      </p>
    </div>
  );
}
