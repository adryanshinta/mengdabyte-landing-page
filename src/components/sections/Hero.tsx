import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Globe2, Sparkles } from "lucide-react";
import contentData from "../../data/content.json";
import { getWaLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-5 pb-20 pt-14 sm:px-8 md:pb-28 md:pt-20"
    >
      <div className="pointer-events-none absolute -right-32 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-[100px]" />
      <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-semibold text-blue-700 shadow-sm">
            <span>🎓</span> Platform Pendidikan Inklusif
          </div>
          <h1 className="mt-6 max-w-2xl font-heading text-[2.6rem] font-bold leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.75rem]">
            Akses Pendidikan{" "}
            <span className="text-primary">Berkualitas & Terjangkau</span> untuk
            Masa Depan Global
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {contentData.company.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              href={getWaLink("Halo Admin, saya mau tanya program Mengdabyte")}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="w-full min-[420px]:w-auto">
                Daftar Sekarang Gratis <ArrowRight size={17} />
              </Button>
            </a>
            <a href="#program">
              <Button variant="outline" className="w-full min-[420px]:w-auto">
                Lihat Program
              </Button>
            </a>
          </div>
          <div className="mt-9 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Mulai perjalanan belajarmu
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Kesempatan belajar terbuka untuk semua
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[510px]"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100 blur-2xl" />
          <div className="hero-grid relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-5 shadow-soft sm:p-7">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="relative flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> BELAJAR
                TANPA BATAS
              </span>
              <span className="rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-500">
                Masa depanmu dimulai di sini
              </span>
            </div>
            <div className="relative mt-8 rounded-2xl border border-white bg-white/90 p-5 shadow-lg shadow-blue-900/5 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Perjalanan belajarmu
                  </p>
                  <h2 className="mt-1 font-heading text-xl font-bold text-slate-900">
                    Skill untuk dunia nyata
                  </h2>
                </div>
                <span className="rounded-xl bg-blue-50 p-2.5 text-primary">
                  <Sparkles size={20} />
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3">
                  <span className="rounded-lg bg-orange-50 p-2.5 text-orange-500">
                    <BookOpen size={20} />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      Bahasa Mandarin
                    </p>
                    <p className="text-xs text-slate-500">Komunikasi global</p>
                  </div>
                  <span className="text-xs font-medium text-slate-400">01</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3">
                  <span className="rounded-lg bg-blue-50 p-2.5 text-primary">
                    <Code2 size={20} />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      Komputasi & Coding
                    </p>
                    <p className="text-xs text-slate-500">
                      Keterampilan digital
                    </p>
                  </div>
                  <span className="text-xs font-medium text-slate-400">02</span>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-950 p-4 text-white">
                <span className="rounded-lg bg-white/10 p-2.5 text-cyan-300">
                  <Globe2 size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold">
                    Belajar dari mana saja
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Akses fleksibel untuk semua
                  </p>
                </div>
                <ArrowRight size={17} className="ml-auto text-slate-400" />
              </div>
            </div>
            <div className="relative mt-4 flex items-center justify-between px-1 text-xs text-slate-500">
              <span>Investasi kecil, dampak besar.</span>
              <span className="font-semibold text-primary">
                #BelajarBersama
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
