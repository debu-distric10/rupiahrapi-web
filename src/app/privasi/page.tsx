import type { Metadata } from "next";
import { situs } from "@/lib/situs";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi aplikasi RupiahRapi: semua data keuangan disimpan " +
    "terenkripsi hanya di HP pengguna.",
};

/** Alamat tetap: /privasi.html (dipakai di Google Play). */
export default function PrivasiPage() {
  return (
    <div className="wrap page">
      <div className="prose">
      <article id="id">
        <h1>Kebijakan Privasi</h1>
        <p className="meta">Berlaku sejak 25 Oktober 2026 · Aplikasi RupiahRapi untuk Android</p>

        <div className="note">
          <strong>Singkatnya:</strong> semua data keuanganmu disimpan <strong>terenkripsi hanya di HP-mu</strong>.
          RupiahRapi tidak meminta izin internet, tidak punya akun, tidak memasang iklan, dan tidak memakai alat
          analitik. Kami (pengembang) <strong>tidak bisa melihat</strong> datamu.
        </div>

        <h2>1. Siapa kami</h2>
        <p>RupiahRapi dibuat oleh pengembang perorangan untuk membantu karyawan di Indonesia mencatat dan
        mengelola keuangan pribadi. RupiahRapi hanya alat pencatat: <strong>bukan aplikasi pinjaman</strong>
        dan tidak memproses pembayaran. Kontak: <a href={`mailto:${situs.email}`}>{situs.email}</a>.</p>

        <h2>2. Data yang kamu masukkan</h2>
        <p>Data yang kamu catat di aplikasi — misalnya transaksi, saldo rekening, slip gaji, anggaran, target,
        utang, cicilan, arisan, kiriman untuk keluarga, tagihan, aset, dan foto dokumen — disimpan di penyimpanan internal HP-mu dalam
        database yang <strong>dienkripsi</strong>. Kunci enkripsinya disimpan di penyimpanan aman Android
        (Android Keystore). Data ini tidak dikirim ke pengembang atau ke pihak lain.</p>

        <h2>3. Tanpa internet, tanpa akun, tanpa pelacakan</h2>
        <ul>
          <li>Versi ini <strong>tidak meminta izin internet</strong>, sehingga aplikasi tidak dapat mengirim data
          keluar dari HP.</li>
          <li>Tidak ada pendaftaran atau login.</li>
          <li>Tidak ada iklan, tidak ada analitik, dan tidak ada pelacakan.</li>
          <li>Kami tidak menjual atau membagikan data kepada siapa pun.</li>
        </ul>

        <h2>4. Kamera dan foto</h2>
        <p>Kamera atau galeri hanya dibuka saat kamu memilihnya, misalnya untuk memotret slip gaji atau
        dokumen (KTP, SIM, STNK, dll.). Pembacaan teks dari foto dilakukan <strong>di HP</strong> menggunakan
        Google ML Kit versi di-perangkat; gambar tidak dikirim ke server. Foto hanya disimpan jika kamu
        memilih menyimpannya, dan disimpan terenkripsi.</p>

        <h2>5. Kunci aplikasi dan sidik jari</h2>
        <p>Jika kamu menyalakan kunci aplikasi, pemeriksaan sidik jari, wajah, atau PIN dilakukan oleh sistem
        Android. RupiahRapi hanya menerima hasil “berhasil” atau “gagal”; data biometrik tidak pernah diterima
        atau disimpan oleh aplikasi.</p>

        <h2>6. Pengingat</h2>
        <p>Pengingat tagihan, cicilan, masa berlaku dokumen, THR, dan zakat fitrah adalah notifikasi lokal yang dijadwalkan di HP-mu. Pengingat mati
        secara bawaan dan bisa dinyalakan atau dimatikan di Pengaturan.</p>

        <h2>7. File backup</h2>
        <p>File backup hanya dibuat jika kamu memintanya. File itu dienkripsi dengan password yang kamu
        pilih (password tidak disimpan oleh aplikasi) dan disimpan di tempat yang kamu pilih. Jika kamu
        menyimpannya di layanan penyimpanan lain (misalnya Google Drive), file tersebut tunduk pada
        kebijakan layanan itu, tetapi isinya tetap terenkripsi.</p>

        <h2>8. Menghapus data</h2>
        <ul>
          <li>Buka <strong>Pengaturan → Hapus semua data</strong> untuk menghapus semua data dan foto dari HP.</li>
          <li>Menghapus (uninstall) aplikasi juga menghapus semua datanya dari HP.</li>
          <li>File backup yang kamu simpan sendiri tidak ikut terhapus; hapus file itu secara manual jika
          tidak diperlukan.</li>
        </ul>
        <p>Karena kami tidak menyimpan datamu, kami tidak dapat memulihkan data yang sudah dihapus atau
        password backup yang terlupa.</p>

        <h2>9. Hakmu menurut UU PDP</h2>
        <p>Sesuai Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, kamu berhak mengakses,
        memperbaiki, dan menghapus data pribadimu. Karena seluruh data hanya ada di HP-mu, kamu bisa
        melakukannya langsung di aplikasi: melihat dan mengubah setiap catatan, membuat file backup sebagai
        salinan, dan menghapus semuanya lewat Pengaturan. Pertanyaan bisa dikirim ke email di bawah.</p>

        <h2>10. Anak-anak</h2>
        <p>RupiahRapi tidak ditujukan untuk anak di bawah 13 tahun.</p>

        <h2>11. Perubahan kebijakan</h2>
        <p>Jika nanti ada fitur yang menggunakan internet (misalnya sinkronisasi cloud opsional), fitur itu
        akan bersifat pilihan, dan kebijakan ini akan diperbarui <strong>sebelum</strong> fitur tersebut
        dirilis. Tanggal di bagian atas halaman ini menunjukkan versi terbaru.</p>

        <h2>12. Kontak</h2>
        <p>Pertanyaan tentang privasi: <a href={`mailto:${situs.email}`}>{situs.email}</a>.</p>
      </article>

      <hr />

      <article id="en" lang="en">
        <h1>Privacy Policy</h1>
        <p className="meta">Effective October 25, 2026 · RupiahRapi for Android</p>

        <div className="note">
          <strong>In short:</strong> all your financial data is stored <strong>encrypted, only on your
          phone</strong>. RupiahRapi does not request internet access, has no accounts, no ads, and no analytics.
          We (the developer) <strong>cannot see</strong> your data.
        </div>

        <h2>1. Who we are</h2>
        <p>RupiahRapi is made by an individual developer to help employees in Indonesia record and manage their
        personal finances. It is a record-keeping tool only: <strong>not a lending app</strong>, and it does
        not process payments.
        Contact: <a href={`mailto:${situs.email}`}>{situs.email}</a>.</p>

        <h2>2. Data you enter</h2>
        <p>Everything you record in the app — such as transactions, account balances, payslips, budgets,
        goals, debts, installments, arisan, family transfers, bills, assets and document photos — is stored in your phone’s internal
        storage in an <strong>encrypted</strong> database. The encryption key is kept in Android’s secure
        storage (Android Keystore). This data is not sent to the developer or to anyone else.</p>

        <h2>3. No internet, no accounts, no tracking</h2>
        <ul>
          <li>This version <strong>does not request the internet permission</strong>, so the app cannot send
          data off your phone.</li>
          <li>No sign-up or login.</li>
          <li>No ads, no analytics, no tracking.</li>
          <li>We do not sell or share data with anyone.</li>
        </ul>

        <h2>4. Camera and photos</h2>
        <p>The camera or gallery opens only when you choose to, for example to photograph a payslip or
        a document (ID card, driving licence, vehicle registration, etc.). Text recognition runs <strong>on the device</strong> using the
        on-device version of Google ML Kit; images are not sent to any server. Photos are kept only if you
        choose to save them, and are stored encrypted.</p>

        <h2>5. App lock and biometrics</h2>
        <p>If you turn on the app lock, fingerprint, face or PIN checks are performed by Android. RupiahRapi only
        receives a “success” or “failure” result; biometric data is never received or stored by the app.</p>

        <h2>6. Reminders</h2>
        <p>Reminders for bills, installments, document expiry, THR (religious holiday allowance) and zakat al-fitr
        are local notifications scheduled on your phone. They are off by
        default and can be turned on or off in Settings.</p>

        <h2>7. Backup files</h2>
        <p>A backup file is created only when you ask for one. It is encrypted with a password you choose (the
        app does not store the password) and saved wherever you choose. If you keep it in another storage
        service (such as Google Drive), that service’s policy applies to the file, but its contents remain
        encrypted.</p>

        <h2>8. Deleting your data</h2>
        <ul>
          <li>Open <strong>Settings → Delete all data</strong> (Pengaturan → Hapus semua data) to erase all
          data and photos from the phone.</li>
          <li>Uninstalling the app also removes all of its data from the phone.</li>
          <li>Backup files you saved yourself are not deleted automatically; delete them manually if no
          longer needed.</li>
        </ul>
        <p>Because we do not store your data, we cannot recover deleted data or a forgotten backup
        password.</p>

        <h2>9. Your rights under Indonesia’s PDP Law</h2>
        <p>Under Law No. 27 of 2022 on Personal Data Protection, you have the right to access, correct and
        delete your personal data. Because all data stays on your phone, you can do this directly in the app:
        view and edit every record, export an encrypted backup copy, and delete everything in Settings.
        Questions can be sent to the email below.</p>

        <h2>10. Children</h2>
        <p>RupiahRapi is not directed to children under 13.</p>

        <h2>11. Changes</h2>
        <p>If a feature that uses the internet is added later (for example optional cloud sync), it will be
        optional, and this policy will be updated <strong>before</strong> that feature is released. The date
        at the top of this page shows the latest version.</p>

        <h2>12. Contact</h2>
        <p>Privacy questions: <a href={`mailto:${situs.email}`}>{situs.email}</a>.</p>
      </article>
      </div>
    </div>
  );
}
