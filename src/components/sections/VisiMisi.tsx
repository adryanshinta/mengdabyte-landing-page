import { BookOpen, BriefcaseBusiness, Globe2, Quote, Wallet } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Card } from '../ui/Card'

const missions = [
  { icon: Wallet, title: 'Pendidikan Terjangkau', text: 'Menghadirkan pendidikan berkualitas dengan biaya yang bersahabat untuk semua.' },
  { icon: BookOpen, title: 'Kurikulum Relevan', text: 'Menyusun materi praktis yang selaras dengan kebutuhan industri masa kini.' },
  { icon: BriefcaseBusiness, title: 'Kesiapan Kerja', text: 'Membekali peserta dengan keterampilan yang dapat langsung diterapkan.' },
  { icon: Globe2, title: 'Pemerataan Akses', text: 'Memperluas kesempatan belajar bagi talenta dari berbagai daerah.' },
]

export function VisiMisi() {
  return <SectionWrapper id="visi" className="bg-slate-50">
    <div className="mx-auto max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center"><span className="mx-auto inline-flex rounded-xl bg-blue-100 p-3 text-primary"><Quote size={22} /></span><p className="mt-6 text-sm font-semibold text-primary">Visi Kami</p><h2 className="mt-3 font-heading text-2xl font-bold leading-snug tracking-tight text-slate-950 sm:text-4xl">“Semua Orang Punya Kesempatan Belajar yang Sama”</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">Membangun masa depan yang lebih setara melalui pembelajaran yang mudah dijangkau, relevan, dan berdampak.</p></motion.div>
      <div className="mt-14"><div className="mb-6 flex items-end justify-between"><div><p className="text-sm font-semibold text-primary">Misi Kami</p><h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-slate-950">Mengubah akses menjadi peluang</h3></div><p className="hidden max-w-xs text-right text-sm leading-6 text-slate-500 md:block">Prinsip yang memandu setiap pengalaman belajar di Mengdabyte.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{missions.map(({ icon: Icon, title, text }, index) => <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}><Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"><span className="inline-flex rounded-xl bg-blue-50 p-3 text-primary"><Icon size={22} /></span><h4 className="mt-5 font-heading text-base font-bold text-slate-900">{title}</h4><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></Card></motion.div>)}</div>
      </div>
    </div>
  </SectionWrapper>
}
