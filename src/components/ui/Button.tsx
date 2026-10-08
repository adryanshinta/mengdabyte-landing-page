import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white'
  children: ReactNode
  className?: string
}

const variants = {
  primary: 'bg-primary text-white shadow-sm hover:bg-blue-700 hover:shadow-md',
  outline: 'border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-primary',
  white: 'bg-white text-primary shadow-sm hover:bg-blue-50',
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn('inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
