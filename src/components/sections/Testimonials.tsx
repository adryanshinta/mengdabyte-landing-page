import { Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { getTestimonials } from '../../services/content.service'
import type { Testimonial } from '../../types'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Card } from '../ui/Card'

const fallback: Testimonial[] = [
  { id: 'fallback-1', name: 'Ahmad S.', role: 'Alumni Bahasa Mandarin', message: 'Belajar di Mengdabyte sangat terjangkau dan pengajarnya sabar. Saya jadi lebih percaya diri untuk melangkah.', rating: 5 },
  { id: 'fallback-2', name: 'Siti R.', role: 'Peserta Komputasi Dasar', message: 'Akhirnya bisa mengoperasikan komputer untuk kerja. Penjelasannya mudah dipahami dan langsung praktik.', rating: 5 },
  { id: 'fallback-3', name: 'Budi P.', role: 'Alumni Programming', message: 'Materi pemrograman dasarnya daging banget. Belajar terasa seru dan aplikatif.', rating: 5 },
]

export function Testimonials() {
  // CMS: Edit file src/data/content.json untuk mengubah testimoni tanpa coding
  const testimonials = getTestimonials()
  const items = testimonials.length ? testimonials : fallback
  return <SectionWrapper id="testimoni" className="bg-white">
    <div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-primary">Cerita mereka</p><h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Belajar, bertumbuh, dan berbagi</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">Pengalaman nyata dari peserta yang telah memulai langkah baru bersama kami.</p></div>
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">{items.map((item, index) => <motion.div key={item.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="min-w-[85%] snap-start sm:min-w-[55%] md:min-w-0"><Card className="flex h-full flex-col p-6 sm:p-7"><div className="flex items-center justify-between"><span className="rounded-xl bg-blue-50 p-2.5 text-primary"><Quote size={19} /></span><div className="flex gap-0.5" aria-label={`Rating ${item.rating} dari 5`}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} className={i < item.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'} />)}</div></div><p className="mt-5 flex-1 text-sm leading-7 text-slate-600">“{item.message}”</p><div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">{item.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span><div><p className="text-sm font-semibold text-slate-900">{item.name}</p><p className="mt-0.5 text-xs text-slate-500">{item.role}</p></div></div></Card></motion.div>)}</div>
    </div>
  </SectionWrapper>
}
