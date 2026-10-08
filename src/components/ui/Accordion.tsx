import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '../../types'

export function Accordion({ items }: { items: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-slate-900 sm:text-base" aria-expanded={isOpen} onClick={() => setOpenId(isOpen ? null : item.id)}>
              {item.question}
              <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="max-w-3xl pb-5 pr-8 text-sm leading-7 text-slate-600">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
