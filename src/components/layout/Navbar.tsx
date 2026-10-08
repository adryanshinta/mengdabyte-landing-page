import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { getWaLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";

const links = [
  ["Tentang Kami", "#tentang"],
  ["Visi Misi", "#visi"],
  ["Program", "#program"],
  ["Keunggulan", "#keunggulan"],
  ["Testimoni", "#testimoni"],
  ["FAQ", "#faq"],
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const sectionHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Navigasi utama"
      >
        <Link
          to="/"
          className="font-heading text-xl font-extrabold tracking-tight text-slate-900"
          aria-label="Mengdabyte, beranda"
        >
          MENGDABYTE<span className="text-primary">.</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              to={sectionHref(href)}
              onClick={() => setIsOpen(false)}
              className="text-[13px] font-medium text-slate-600 transition hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
        <a
          href={getWaLink("Halo Admin, saya mau tanya program Mengdabyte")}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:block"
        >
          <Button className="min-h-10 px-4 py-2 text-xs">
            Daftar via WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
          </Button>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {isOpen && (
        <div className="absolute right-0 top-[72px] w-full border-b border-slate-200 bg-white px-5 pb-6 pt-3 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(([label, href]) => (
              <Link
                key={href}
                to={sectionHref(href)}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700"
              >
                {label}
              </Link>
            ))}
            <a
              href={getWaLink("Halo Admin, saya mau tanya program Mengdabyte")}
              target="_blank"
              rel="noreferrer"
              className="mt-5"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">
                Daftar via WhatsApp <ArrowUpRight size={16} />
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
