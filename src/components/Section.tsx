import React from 'react'
import { cn } from '../lib/cn'

type Props = {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  innerClassName,
}: Props) {
  return (
    <section id={id} className={cn('relative scroll-mt-24', className)}>
      <div className={cn('mx-auto w-full max-w-6xl px-5 md:px-6', innerClassName)}>
        {(eyebrow || title || subtitle) && (
          <header className="mb-7 flex max-w-3xl flex-col gap-3">
            {eyebrow && <div className="section-title">{eyebrow}</div>}
            {title && <h2 className="h2">{title}</h2>}
            {subtitle && <p className="p-muted max-w-2xl text-[15px] leading-relaxed">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

