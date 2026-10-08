import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import contentData from '../../data/content.json'

const links = [['Tentang Kami', '#tentang'], ['Visi Misi', '#visi'], ['Program', '#program'], ['Keunggulan', '#keunggulan'], ['Testimoni', '#testimoni'], ['FAQ', '#faq']]

export function Footer() {
  return (
    <footer className="bg-slate-950 px-5 pb-8 pt-16 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-heading text-xl font-extrabold tracking-tight">MENGDABYTE<span className="text-blue-400">.</span></Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">{contentData.company.tagline}</p>
          <p className="mt-5 flex max-w-xs gap-2 text-xs leading-5 text-slate-400"><MapPin size={16} className="mt-0.5 shrink-0" />{contentData.company.address}</p>
        </div>
        <div><h3 className="text-sm font-semibold">Navigasi</h3><ul className="mt-4 space-y-3">{links.map(([label, href]) => <li key={href}><a className="text-sm text-slate-400 transition hover:text-white" href={href}>{label}</a></li>)}</ul></div>
        <div><h3 className="text-sm font-semibold">Program</h3><ul className="mt-4 space-y-3">{contentData.courses.map((course) => <li key={course.id}><Link className="text-sm text-slate-400 transition hover:text-white" to={`/kursus/${course.slug}`}>{course.title}</Link></li>)}</ul></div>
        <div><h3 className="text-sm font-semibold">Kontak</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><a className="flex items-center gap-2 hover:text-white" href={`mailto:${contentData.company.email}`}><Mail size={15} />{contentData.company.email}</a><a className="flex items-center gap-2 hover:text-white" href="tel:+6287859228358"><Phone size={15} />087859228358</a><p>{contentData.company.website}</p></div><div className="mt-5 flex gap-2"><a className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white" href="#" title="Coming Soon" aria-label="Instagram, coming soon"><Instagram size={17} /></a><a className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white" href="#" title="Coming Soon" aria-label="LinkedIn, coming soon"><Linkedin size={17} /></a><a className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white" href="#" title="Coming Soon" aria-label="Facebook, coming soon"><Facebook size={17} /></a></div></div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 PT Mengdabyte Digital Indonesia.</span><span>Dibangun untuk masa depan pembelajaran yang inklusif.</span></div>
    </footer>
  )
}
