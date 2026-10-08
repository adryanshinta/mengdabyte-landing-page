import { ArrowUpRight, BadgeCheck, BookOpenCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";

const stats = [
  { icon: Users, value: "100+", label: "Pelajar terfasilitasi" },
  { icon: BookOpenCheck, value: "3+", label: "Program aktif" },
  { icon: BadgeCheck, value: "100%", label: "Bersertifikat & terjangkau" },
];

export function About() {
  return (
    <SectionWrapper id="tentang" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary">
            Tentang Mengdabyte
          </p>
          <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Pendidikan berkualitas seharusnya dapat diakses oleh semua.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            PT Mengdabyte Digital Indonesia hadir untuk membuka kesempatan
            belajar yang sama bagi setiap orang. Kami menghadirkan pelatihan
            praktis, relevan dengan kebutuhan dunia kerja, dan tetap terjangkau
            bagi talenta di seluruh Indonesia.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            Dari keterampilan bahasa hingga teknologi digital, kami mendampingi
            peserta membangun bekal untuk meraih peluang masa depan yang lebih
            luas.
          </p>
          <a
            href="#program"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-800"
          >
            Kenali program kami <ArrowUpRight size={16} />
          </a>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:flex-col sm:items-start lg:flex-row lg:items-center lg:p-6"
            >
              <span className="rounded-xl bg-white p-3 text-primary shadow-sm">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-heading text-2xl font-bold tracking-tight text-slate-950">
                  {value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
