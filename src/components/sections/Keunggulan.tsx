import { Award, BadgeDollarSign, Rocket, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Card } from '../ui/Card'

const benefits = [
  { icon: BadgeDollarSign, title: 'Biaya Terjangkau', text: 'Investasi belajar yang ramah di kantong tanpa mengorbankan kualitas.' },
  { icon: Users, title: 'Inklusif untuk Semua', text: 'Terbuka bagi siapa saja, dari mana saja, dengan latar belakang apa pun.' },
  { icon: Award, title: 'Standar Berkualitas', text: 'Materi terstruktur dan sertifikat resmi untuk mendukung perjalanan karier.' },
  { icon: Rocket, title: 'Siap Melangkah', text: 'Keterampilan praktis yang membantu membuka peluang kerja lebih luas.' },
]

export function Keunggulan() {
  return <SectionWrapper id="keunggulan" className="bg-slate-50">
    <div className="mx-auto max-w-7xl"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold text-primary">Kenapa Mengdabyte?</p><h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Belajar lebih mudah, melangkah lebih jauh</h2><p className="mt-4 text-base leading-7 text-slate-600">Kami percaya setiap orang punya potensi. Yang dibutuhkan adalah akses dan dukungan yang tepat.</p></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, text }, index) => <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}><Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"><span className="inline-flex rounded-full bg-blue-50 p-3.5 text-primary"><Icon size={23} /></span><h3 className="mt-5 font-heading text-base font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></Card></motion.div>)}</div>
    </div>
  </SectionWrapper>
}
