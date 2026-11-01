import type { Metadata } from "next";
import Link from "next/link";
import { labelStatus, perjalanan } from "@/lib/perjalanan";
import { situs } from "@/lib/situs";
import styles from "./perjalanan.module.css";

export const metadata: Metadata = {
  title: "Perjalanan",
  description:
    "Perjalanan RupiahRapi: versi yang sudah rilis, fitur yang sedang disiapkan, dan rencana berikutnya.",
};

export default function PerjalananPage() {
  return (
    <div className="wrap">
      <section className={styles.intro}>
        <h1>Perjalanan {situs.nama}</h1>
        <p>
          Dari versi pertama sampai sekarang — dan apa yang sedang disiapkan.
          Banyak fitur lahir dari ide pengguna.
        </p>
      </section>

      <ol className={styles.timeline}>
        {perjalanan.map((t) => (
          <li key={t.judul} className={`${styles.item} ${styles[t.status]}`}>
            <span className={styles.dot} aria-hidden="true" />
            <article className="card">
              <div className={styles.head}>
                <span className={styles.badge}>{labelStatus[t.status]}</span>
                {t.tanggal && <span className={styles.date}>{t.tanggal}</span>}
              </div>
              <h2>{t.judul}</h2>
              <p className="muted">{t.ringkas}</p>
              {t.poin.length > 0 && (
                <ul className={styles.points}>
                  {t.poin.map((p) => (
                    <li key={p.teks}>
                      <span aria-hidden="true">{p.ikon}</span>
                      {p.teks}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>

      <div className={`note ${styles.outro}`}>
        Punya ide fitur? Kirim ke{" "}
        <a href={`mailto:${situs.email}`}>{situs.email}</a>. Mau mencoba lebih
        dulu? <Link href="/unduh">Unduh akses awal (beta)</Link>.
      </div>
    </div>
  );
}
