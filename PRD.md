# Product Requirement Document (PRD): PT Mengdabyte Digital Indonesia - Landing Page Website

> **INSTRUCTION FOR AI CODING AGENT (Cursor, Windsurf, Claude Code, Devin):**
> You are an expert frontend engineer. Build this project EXACTLY following this PRD. No assumptions. No hallucinations. Use the mock data and types provided. If a data point is missing, use the mock provided in this document. This is a landing page MVP using React + Tailwind only. Architecture must be future-ready for Express + PostgreSQL.

---

## 1. Executive Summary & Goals

**Project Name:** PT Mengdabyte Digital Indonesia Landing Page
**Company Tagline:** "Semua Orang Punya Kesempatan Belajar yang Sama"
**Hero Title:** "Akses Pendidikan Berkualitas & Terjangkau untuk Masa Depan Global"
**Hero Subtitle:** "Kami memfasilitasi setiap talenta untuk berkembang tanpa terkendala biaya mahal."

**Objective:** Membangun landing page company profile yang modern, minimalis, clean, fresh, dan mobile-first. Fokus utama adalah konversi pengunjung (pelajar & sekolah) menjadi lead via WhatsApp.

**Target Audience:**
- Primary: Pelajar umum (SMA/SMK, Mahasiswa, Fresh Graduate) dari seluruh Indonesia
- Secondary: Sekolah / Institusi pendidikan yang mencari partner pelatihan
- Tertiary: Pencari kerja (job-seeker)

**Success Criteria:**
- Lighthouse Score > 90 (Performance, Accessibility, SEO, Best Practices)
- 100% Responsive: 320px, 375px, 768px, 1024px, 1440px
- SEO Ready: Title, Meta Description, Open Graph, Twitter Card, sitemap.xml, robots.txt, JSON-LD Schema.org (Organization + Course)
- CTA Click to WhatsApp conversion ready
- Codebase clean, component-based, dan future-ready untuk backend Express + PostgreSQL

---

## 2. Tech Stack & Architecture

### 2.1 Current Stack (MVP - WAJIB)
- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS v3.4+
- **Routing:** React Router DOM v6
- **Icons:** lucide-react
- **Animations:** framer-motion (hanya untuk reveal halus, jangan berlebihan)
- **SEO:** react-helmet-async
- **Font:** Plus Jakarta Sans (Heading) & Inter (Body) via Google Fonts
- **Package Manager:** npm

### 2.2 Future Stack (JANGAN DI-INSTALL SEKARANG, TAPI SIAPKAN ARSITEKTURNYA)
- Backend: Express.js + TypeScript
- Database: PostgreSQL + Prisma ORM
- Deployment: Vercel (Frontend)

### 2.3 Architecture Rules (CRITICAL)
1.  **No Backend in MVP:** Semua data diambil dari file lokal `/src/data/content.json`. JANGAN buat API call sungguhan.
2.  **Service Layer Abstraction:** Buat file `src/services/content.service.ts` yang berisi function:
    ```ts
    export const getCourses = (): Course[] => contentData.courses
    export const getTestimonials = (): Testimonial[] => contentData.testimonials
    export const getFaqs = (): FAQ[] => contentData.faqs
    ```
    Nanti tinggal ganti isi function ini dengan `fetch('/api/courses')` tanpa refactor component.
3.  **WA Link Utility:** Buat `src/lib/whatsapp.ts`:
    ```ts
    export const WA_NUMBER = "6287859228358";
    export const getWaLink = (message: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    export const getCourseWaMessage = (courseTitle: string) => `Halo Admin Mengdabyte Digital Indonesia, saya ingin mendaftar program ${courseTitle}. Mohon info selengkapnya.`;
    ```

### 2.4 Project Structure (WAJIB IKUTI)
```
/public
  /images
  robots.txt
  sitemap.xml
/src
  /components
    /ui
      Button.tsx
      Card.tsx
      Badge.tsx
      Accordion.tsx
    /layout
      Navbar.tsx
      Footer.tsx
      SectionWrapper.tsx
    /sections
      Hero.tsx
      About.tsx
      VisiMisi.tsx
      Programs.tsx
      Keunggulan.tsx
      Testimonials.tsx
      FAQ.tsx
      CTA.tsx
  /data
    content.json
  /lib
    whatsapp.ts
    cn.ts (clsx + tailwind-merge)
    seo.ts
  /services
    content.service.ts
  /types
    index.ts
  /pages
    Home.tsx
    CourseDetail.tsx
  App.tsx
  main.tsx
  index.css
```

---

## 3. Core Feature Specifications

### Feature 1: Global Layout - Navbar & Footer

**User Story:** Sebagai pengunjung, saya ingin navigasi yang jelas dan sticky di semua device.

**Navbar Detailed Requirements:**
- Sticky top, backdrop-blur-md, bg-white/80, border-b
- Left: Logo Text "MENGDABYTE" bold + dot primary color (karena belum ada logo). Font: Plus Jakarta Sans Extra Bold.
- Center (Desktop): Menu anchor link: Tentang Kami (#tentang), Visi Misi (#visi), Program (#program), Keunggulan (#keunggulan), Testimoni (#testimoni), FAQ (#faq). Smooth scroll.
- Right: CTA Button Primary "Daftar via WhatsApp" -> `getWaLink("Halo Admin, saya mau tanya program Mengdabyte")`
- Mobile: Hamburger menu (lucide Menu icon) -> Drawer dari kanan. Menu yang sama + CTA.

**Footer Detailed Requirements:**
- 4 Kolom Grid:
  1. Brand: MENGDABYTE, tagline, alamat: Gegek Liqok, Perian, Kec. Montong Gading, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83553
  2. Navigasi: Link anchor yang sama
  3. Program: List 3 program dari data
  4. Kontak: Email mengdabyte@gmail.com, Phone 087859228358, Website mengdabyte.web.id. Social media: Instagram, LinkedIn, Facebook (icon saja, href="#" dengan title "Coming Soon")
- Bottom: Copyright © 2026 PT Mengdabyte Digital Indonesia.

### Feature 2: Hero Section (#hero)

**Requirements:**
- Layout: 2 Kolom (Kiri 60%, Kanan 40% di desktop, stack di mobile). Min-height 90vh.
- Left Content:
  - Badge: "🎓 Platform Pendidikan Inklusif" (pill, bg-blue-50, text-blue-600)
  - H1: hero_title. Font size: text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
  - P: hero_subtitle text-lg text-slate-600
  - CTA Group: Primary Button "Daftar Sekarang Gratis" (icon ArrowRight) -> WA. Secondary Button "Lihat Program" (variant outline) -> scroll to #program.
  - Social Proof: Avatar stack + text "Dipercaya 1000+ pelajar"
- Right Visual: JANGAN pakai gambar stok. Buat abstract composition clean: Card mengambang dengan gradient mesh + grid pattern + icon Book, Code, Globe. Gunakan Tailwind saja, no external image.
- Edge Cases: Pastikan CTA selalu visible di above the fold mobile.

### Feature 3: Tentang Kami (#tentang)

**Requirements:**
- SectionWrapper dengan bg-white, py-20 md:py-32
- Layout 2 kolom: Kiri text, Kanan stats
- Text: Ambil dari file profil perusahaan (paragraf Tentang Kami)
- Stats Card (3): 
  - "1000+ Pelajar Terfasilitasi"
  - "3+ Program Aktif"
  - "100% Bersertifikat & Terjangkau"
- Design: Clean, typography besar.

### Feature 4: Visi Misi (#visi)

**Requirements:**
- Background: slate-50
- Visi: Centered, Quote besar dengan icon Quote, text-3xl font-bold
- Misi: Grid 4 kolom (1 di mobile, 2 di tablet, 4 di desktop)
  - Card 1: Icon Wallet (Terjangkau) - Judul Pendidikan Terjangkau - Deskripsi misi 1
  - Card 2: Icon BookOpen (Kurikulum Relevan) - Misi 2
  - Card 3: Icon Briefcase (Kesiapan Kerja) - Misi 3
  - Card 4: Icon Globe (Pemerataan Akses) - Misi 4
- Card Style: bg-white, border, rounded-2xl, p-6, hover:shadow-lg transition

### Feature 5: Program & Layanan (#program)

**Requirements:**
- Title Section: "Program Unggulan Kami" + subtitle "Dirancang untuk membangun fondasi keterampilan masa depan"
- Grid: 3 Cards
- Card Component Spec:
  - Top: Icon besar (Languages untuk Mandarin, Monitor untuk Komputasi, Code2 untuk Programming), Badge "Bersertifikat"
  - Title, Description
  - Meta: Duration (Clock icon), Price (Tag icon). Gunakan mock:
    - Mandarin Dasar: "12 Minggu / 24 Pertemuan" - "Rp 350.000"
    - Komputasi Dasar: "4 Minggu / 8 Pertemuan" - "Rp 250.000"
    - Pemrograman Dasar: "8 Minggu / 16 Pertemuan" - "Rp 400.000"
  - Footer Card: Button "Lihat Detail Kurikulum" -> navigate to `/kursus/:slug`
  - Jika coming soon: opacity 60%, badge Coming Soon, button disabled "Segera Hadir"
- Corporate Training: Section terpisah di bawah grid, Banner horizontal dengan CTA "Konsultasi Pelatihan Perusahaan" -> WA

### Feature 6: Course Detail Page (/kursus/:slug)

**Requirements (HARUS PROFESIONAL):**
- Route dinamis menggunakan React Router
- Ambil slug dari params, cari di content.service.ts
- Layout:
  - Breadcrumb: Home / Program / [Course Title]
  - Header: Title besar, Badge kategori, Price, Duration, Button "Daftar via WhatsApp" (WA dengan pesan spesifik kursus)
  - 2 Kolom: Kiri (70%) -> Deskripsi lengkap, Apa yang akan dipelajari (checklist), Untuk siapa program ini, Output & Sertifikat (Ya, E-Sertifikat resmi). Kanan (30%) Sticky Card -> Price box, Durasi, Level Pemula, Sertifikat Ya, CTA WA.
- Jika slug tidak ditemukan, tampilkan 404 simple dengan button kembali.
- SEO: Dynamic title via Helmet: "[Course Title] - PT Mengdabyte Digital Indonesia"

### Feature 7: Keunggulan Kami (#keunggulan)

**Requirements:**
- Grid 4 cards, sama seperti misi tapi lebih benefit-driven
- Icons: BadgeDollarSign (Terjangkau), Users (Inklusif), Award (Standar Internasional), Rocket (Siap Kerja)
- Style: Icon di dalam circle bg-blue-50

### Feature 8: Testimonials (#testimoni) - CMS EDITABLE

**Requirements:**
- Data Source: `content.json -> testimonials`
- Jika array kosong, agent HARUS generate 3 mock testimonials profesional:
  1. Ahmad S. - Alumni Bahasa Mandarin - "Belajar di Mengdabyte sangat terjangkau dan pengajarnya sabar..."
  2. Siti R. - Peserta Komputasi Dasar - "Akhirnya bisa operasikan komputer untuk kerja..."
  3. Budi P. - Alumni Programming - "Materi pemrograman dasarnya daging banget..."
- Layout: Carousel horizontal di mobile (overflow-x-auto snap), Grid 3 di desktop. Card dengan quote, avatar initial (misal AS), name, role, rating stars (5).
- Comment di code: `// CMS: Edit file src/data/content.json untuk mengubah testimoni tanpa coding`

### Feature 9: FAQ (#faq) - CMS EDITABLE

**Requirements:**
- Data Source: `content.json -> faqs`
- Isi default (WAJIB ADA):
  1. Q: Siapa saja yang bisa mendaftar? A: Siapa saja! Terbuka untuk semua latar belakang...
  2. Q: Bagaimana sistem pembelajarannya? A: Sistem pembelajaran Hybrid - Online via Zoom & Google Meet, fleksibel dan bisa diakses dari mana saja.
  3. Q: Apakah ada sertifikat? A: Ya, semua peserta yang menyelesaikan pelatihan akan mendapatkan E-Sertifikat resmi dari PT Mengdabyte Digital Indonesia.
  4. Q: Bagaimana cara mendaftar? A: Klik tombol Daftar Sekarang dan hubungi admin via WhatsApp.
- UI: Accordion (single open). Style clean, border, rounded-xl.

### Feature 10: CTA Footer Section (#daftar)

**Requirements:**
- Background: Primary #2563EB, text white, pattern dot subtle
- Content Centered:
  - H2: "Siap Mengembangkan Skill dan Membangun Karier Global?"
  - P: "Bergabunglah bersama kami sekarang dan mulai langkah pertama menuju masa depanmu."
  - Button: White bg, blue text "Daftar Sekarang via WhatsApp" + Icon MessageCircle
  - Subtext: "Gratis konsultasi - Respon cepat"

---

## 4. Database Schema & Data Models

### 4.1 TypeScript Interfaces (WAJIB BUAT di src/types/index.ts)

```typescript
export interface Course {
  id: string;
  slug: string; // e.g. "bahasa-mandarin-dasar"
  title: string;
  category: 'basic' | 'corporate';
  description: string;
  longDescription: string;
  duration: string; // mock: "12 Minggu / 24 Pertemuan"
  price: string; // mock string: "Rp 350.000" - future: number
  priceOriginal?: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
  features: string[]; // e.g. ["Materi PDF", "Video Rekaman", "Grup Diskusi"]
  hasCertificate: boolean;
  isComingSoon: boolean;
  iconName: 'Languages' | 'Monitor' | 'Code2' | 'Briefcase';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  avatarUrl?: string;
  rating: number; // 1-5
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  website: string;
}
```

### 4.2 Mock Data (src/data/content.json) - WAJIB IKUTI

```json
{
  "company": {
    "name": "PT Mengdabyte Digital Indonesia",
    "tagline": "Semua Orang Punya Kesempatan Belajar yang Sama",
    "heroTitle": "Akses Pendidikan Berkualitas & Terjangkau untuk Masa Depan Global",
    "heroSubtitle": "Kami memfasilitasi setiap talenta untuk berkembang tanpa terkendala biaya mahal.",
    "email": "mengdabyte@gmail.com",
    "phone": "087859228358",
    "address": "Gegek Liqok, Perian, Kec. Montong Gading, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83553"
  },
  "courses": [
    {
      "id": "c1",
      "slug": "bahasa-mandarin-dasar",
      "title": "Bahasa Mandarin Dasar",
      "category": "basic",
      "description": "Pembelajaran dasar Bahasa Mandarin untuk komunikasi dan persiapan karier global.",
      "longDescription": "Program ini dirancang untuk pemula yang ingin menguasai dasar-dasar Bahasa Mandarin untuk kebutuhan komunikasi sehari-hari dan persiapan kerja di perusahaan global. Fokus pada percakapan, kosakata kerja, dan pengenalan Hanzi dasar.",
      "duration": "12 Minggu / 24 Pertemuan",
      "price": "Rp 350.000",
      "priceOriginal": "Rp 700.000",
      "level": "Pemula",
      "features": ["24x Live Session", "Modul PDF & Hanzi", "Latihan Percakapan", "E-Sertifikat Resmi"],
      "hasCertificate": true,
      "isComingSoon": false,
      "iconName": "Languages"
    },
    {
      "id": "c2",
      "slug": "komputasi-dasar",
      "title": "Komputasi Dasar",
      "category": "basic",
      "description": "Pelatihan dasar pengoperasian komputer dan literasi digital untuk kebutuhan profesional.",
      "longDescription": "Kuasai dasar komputer dari nol: Microsoft Office, manajemen file, internet, hingga keamanan digital. Cocok untuk pemula yang ingin siap kerja kantoran.",
      "duration": "4 Minggu / 8 Pertemuan",
      "price": "Rp 250.000",
      "priceOriginal": "Rp 500.000",
      "level": "Pemula",
      "features": ["8x Live Session", "Praktek Langsung", "Template Dokumen Kerja", "E-Sertifikat Resmi"],
      "hasCertificate": true,
      "isComingSoon": false,
      "iconName": "Monitor"
    },
    {
      "id": "c3",
      "slug": "pemrograman-dasar",
      "title": "Pemrograman Dasar",
      "category": "basic",
      "description": "Pengenalan logika pemrograman dan pemahaman dasar coding bagi pemula.",
      "longDescription": "Belajar logika pemrograman dengan cara yang menyenangkan. Cocok untuk yang belum pernah coding. Materi meliputi algoritma, flowchart, dan pengenalan HTML, CSS, JavaScript dasar.",
      "duration": "8 Minggu / 16 Pertemuan",
      "price": "Rp 400.000",
      "priceOriginal": "Rp 800.000",
      "level": "Pemula",
      "features": ["16x Live Session", "Project Mini", "Akses Rekaman 1 Tahun", "E-Sertifikat Resmi"],
      "hasCertificate": true,
      "isComingSoon": false,
      "iconName": "Code2"
    }
  ],
  "testimonials": [
    {
      "id": "t1",
      "name": "Ahmad Fauzi",
      "role": "Alumni Bahasa Mandarin Dasar",
      "message": "Belajar di Mengdabyte sangat membantu. Materinya terjangkau, pengajarnya sabar dan standar internasional. Sekarang saya lebih percaya diri melamar kerja.",
      "rating": 5
    },
    {
      "id": "t2",
      "name": "Siti Rahma",
      "role": "Peserta Komputasi Dasar - Lombok",
      "message": "Sebagai pemula yang gaptek, saya akhirnya bisa mengoperasikan komputer untuk kerja kantoran. Penjelasannya sangat mudah dipahami.",
      "rating": 5
    },
    {
      "id": "t3",
      "name": "Budi Pratama",
      "role": "Alumni Pemrograman Dasar",
      "message": "Materi pemrograman dasarnya daging banget, langsung praktek. Worth it untuk harga segini. Terima kasih Mengdabyte!",
      "rating": 5
    }
  ],
  "faqs": [
    {
      "id": "f1",
      "question": "Siapa saja yang bisa mendaftar program di Mengdabyte Digital Indonesia?",
      "answer": "Siapa saja! Kami menyambut seluruh talenta dari berbagai daerah dan latar belakang tanpa terkecuali. Tidak ada batasan usia atau pendidikan."
    },
    {
      "id": "f2",
      "question": "Bagaimana sistem pembelajarannya?",
      "answer": "Sistem pembelajaran kami Hybrid - Online via Zoom & Google Meet. Fleksibel, bisa diakses dari mana saja, dan rekaman tersedia untuk peserta yang berhalangan hadir."
    },
    {
      "id": "f3",
      "question": "Apakah ada sertifikat setelah menyelesaikan pelatihan?",
      "answer": "Ya, semua peserta yang menyelesaikan pelatihan hingga akhir akan mendapatkan E-Sertifikat resmi dari PT Mengdabyte Digital Indonesia yang bisa digunakan untuk melamar kerja."
    },
    {
      "id": "f4",
      "question": "Bagaimana cara mendaftar dan metode pembayarannya?",
      "answer": "Klik tombol Daftar Sekarang, Anda akan diarahkan ke WhatsApp Admin kami di 087859228358. Admin akan memandu proses pendaftaran dan pembayaran yang mudah dan terjangkau."
    }
  ]
}
```

### 4.3 Future SQL Schema (JANGAN BUAT SEKARANG, HANYA DOKUMENTASI)

```sql
-- Untuk migrasi nanti ke Express + Postgres + Prisma
CREATE TABLE courses (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  price INT,
  duration TEXT,
  has_certificate BOOLEAN DEFAULT true
);

CREATE TABLE testimonials (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  message TEXT NOT NULL,
  rating INT
);

CREATE TABLE leads (
  id TEXT PRIMARY KEY,
  name TEXT,
  whatsapp TEXT,
  course_id TEXT REFERENCES courses(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 5. Non-Functional & Design System

**Design System: Modern Minimalis, Clean, Fresh, Professional**
- **Inspiration:** Linear.app, Vercel.com, MySkill.id
- **Color Palette (FINAL - karena user lupa):**
  - Primary: #2563EB (Blue 600) - Trust, Education
  - Primary Hover: #1D4ED8
  - Secondary: #06B6D4 (Cyan 500) - Fresh accent
  - Background: #FFFFFF
  - Background Alt: #F8FAFC (Slate 50)
  - Text Primary: #0F172A (Slate 900)
  - Text Secondary: #64748B (Slate 500)
  - Border: #E2E8F0 (Slate 200)
- **Typography:**
  - Heading: 'Plus Jakarta Sans', sans-serif, weight 700-800
  - Body: 'Inter', sans-serif, weight 400-500
  - Fluid sizes: Use Tailwind text-4xl md:text-5xl
- **Spacing:** py-20 md:py-32 per section, gap-6, rounded-2xl for cards, rounded-full for badges, rounded-xl for buttons
- **Button:** Primary: bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md transition-all. Secondary: bg-white border text-slate-700.
- **Animation:** Subtle only. Framer Motion `initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}`
- **Mobile First:** Semua layout harus mobile-first. Test di 320px.

**SEO Checklist (WAJIB):**
- [ ] react-helmet-async untuk tiap page
- [ ] Title: "PT Mengdabyte Digital Indonesia - Pendidikan Berkualitas & Terjangkau"
- [ ] Description: 160 char
- [ ] Open Graph tags
- [ ] robots.txt: Allow all
- [ ] sitemap.xml: /, /kursus/bahasa-mandarin-dasar, etc.
- [ ] JSON-LD Organization schema di Home
- [ ] Alt text untuk semua icon/image
- [ ] Semantic HTML (header, main, section, footer)

**Performance:**
- [ ] No large images, gunakan CSS patterns
- [ ] Lazy load sections below fold
- [ ] Code splitting via React.lazy untuk CourseDetail

---

## 6. Deliverables & Acceptance

Agent harus menghasilkan:
1.  Project React + Vite + TS + Tailwind yang bisa `npm run dev`
2.  File `prd.md` ini tetap ada di root sebagai referensi
3.  Semua section terimplementasi sesuai spec
4.  WA integration berfungsi
5.  Responsive & SEO ready
6.  README.md dengan cara edit `content.json` sebagai CMS

**Command to run:**
```bash
npm install
npm run dev
npm run build
```

Selesai. PRD ini adalah single source of truth.
