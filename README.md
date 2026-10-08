# PT Mengdabyte Digital Indonesia — Landing Page

Landing page company profile responsif menggunakan React 18, Vite, TypeScript, Tailwind CSS, dan React Router. Konten program, testimoni, dan FAQ bersumber dari data lokal agar kelak dapat dipindahkan ke API tanpa mengubah komponen UI.

## Menjalankan project

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

## Mengubah konten (CMS lokal)

Edit `src/data/content.json` untuk memperbarui profil perusahaan, program, testimoni, atau FAQ. Bentuk data program mengikuti interface di `src/types/index.ts`; komponen mengaksesnya melalui `src/services/content.service.ts`.

Untuk mengubah nomor atau format pesan WhatsApp, edit `src/lib/whatsapp.ts`. Seluruh tombol pendaftaran memakai utilitas tersebut.

## Halaman

- `/` — landing page dengan informasi perusahaan, visi-misi, program, keunggulan, testimoni, FAQ, dan CTA.
- `/kursus/:slug` — detail kurikulum program dan pendaftaran via WhatsApp.

File sitemap dan robots tersedia di `public/`. Sesuaikan domain `mengdabyte.web.id` di `src/lib/seo.ts`, `public/sitemap.xml`, dan `public/robots.txt` jika domain produksi berubah.
