import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function SectionWrapper({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={cn('scroll-mt-20 px-5 py-20 sm:px-8 md:py-28', className)}>{children}</section>
}
