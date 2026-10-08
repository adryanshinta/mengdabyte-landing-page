import { getFaqs } from '../../services/content.service'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Accordion } from '../ui/Accordion'

export function FAQ() {
  return <SectionWrapper id="faq" className="bg-slate-50">
    <div className="mx-auto max-w-3xl"><div className="mb-9 text-center"><p className="text-sm font-semibold text-primary">Ada pertanyaan?</p><h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Pertanyaan yang sering diajukan</h2><p className="mt-3 text-sm leading-6 text-slate-600">Temukan jawaban untuk hal-hal yang ingin kamu ketahui sebelum mulai belajar.</p></div><Accordion items={getFaqs()} /></div>
  </SectionWrapper>
}
