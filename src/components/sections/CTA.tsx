import { ArrowRight, MessageCircle } from 'lucide-react'
import { getWaLink } from '../../lib/whatsapp'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Button } from '../ui/Button'

export function CTA() {
  return <SectionWrapper id="daftar" className="relative isolate overflow-hidden bg-primary py-16 text-white md:py-20">
    <div className="cta-dots pointer-events-none absolute inset-0 -z-10 opacity-30" /><div className="pointer-events-none absolute -right-24 -top-40 -z-10 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl" />
    <div className="mx-auto max-w-3xl text-center"><span className="mx-auto inline-flex rounded-2xl border border-white/20 bg-white/10 p-3"><MessageCircle size={23} /></span><h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Siap Mengembangkan Skill dan Membangun Karier Global?</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">Bergabunglah bersama kami sekarang dan mulai langkah pertama menuju masa depanmu.</p><a href={getWaLink('Halo Admin, saya mau tanya program Mengdabyte')} target="_blank" rel="noreferrer" className="mt-7 inline-flex"><Button variant="white">Daftar Sekarang via WhatsApp <ArrowRight size={17} /></Button></a><p className="mt-4 text-xs text-blue-100">Gratis konsultasi · Respon cepat</p></div>
  </SectionWrapper>
}
