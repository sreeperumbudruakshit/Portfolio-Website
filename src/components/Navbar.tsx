import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from 'react-icons/fi'
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
  const [hiddenOnMobile, setHiddenOnMobile] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    // Hide navbar on mobile when scrolling down, show when scrolling up.
    const isMobile = () => window.matchMedia('(max-width: 767px)').matches
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      ticking = false
      if (!isMobile()) {
        setHiddenOnMobile(false)
        lastY = window.scrollY
        return
      }

      const y = window.scrollY
      const delta = y - lastY
      const nearTop = y < 24

      if (nearTop) {
        setHiddenOnMobile(false)
      } else if (delta > 8) {
        setHiddenOnMobile(true)
      } else if (delta < -6) {
        setHiddenOnMobile(false)
      }

      lastY = y
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  React.useEffect(() => {
    // Lock scroll when menu is open (mobile).
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: hiddenOnMobile ? -96 : 0, opacity: hiddenOnMobile ? 0 : 1 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
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

            <button
              type="button"
              className="btn-ghost inline-flex h-11 w-11 px-0 md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="md:hidden"
            >
              <div className="px-4 pb-4">
                <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-white/80 transition hover:bg-white/[0.07] hover:text-white"
                    >
                      <span>{item.label}</span>
                      <FiArrowUpRight className="text-white/45" />
                    </a>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    className="btn-ghost justify-center"
                    href={resume.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    LinkedIn <FiArrowUpRight />
                  </a>
                  <a
                    className="btn-ghost justify-center"
                    href={resume.links.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    GitHub <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

