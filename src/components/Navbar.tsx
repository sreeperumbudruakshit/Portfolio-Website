import { motion } from 'framer-motion'
import React from 'react'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { resume } from '../data/resume'
import { cn } from '../lib/cn'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4',
      )}
    >
      <div
        className={cn(
          'pointer-events-auto w-full max-w-6xl rounded-2xl border border-white/10 bg-ink-900/50 backdrop-blur-xl',
          scrolled && 'ring-glow bg-ink-900/60',
        )}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-5">
          <a href="#home" className="group flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.06] text-white/90 transition group-hover:bg-white/[0.10]">
              <span className="font-mono text-sm">AS</span>
            </div>
            <div className="hidden leading-tight sm:block">
              <div className="text-sm font-semibold text-white">{resume.basics.name}</div>
              <div className="text-xs text-white/55">Developer Portfolio</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1.5 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="btn-ghost hidden sm:inline-flex"
              href={resume.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FiArrowUpRight />
            </a>
            <a
              className="btn-ghost hidden sm:inline-flex"
              href={resume.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FiArrowUpRight />
            </a>
            <a className="btn-primary" href={resume.basics.resumeDownload.href} download>
              <FiDownload /> Resume
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto px-3 pb-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/75"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

