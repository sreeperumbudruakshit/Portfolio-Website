import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import React from 'react'
import { fadeUp } from '../lib/motion'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 767px)').matches
  })

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Reveal once, then disconnect observer (prevents mobile "double loading").
  React.useEffect(() => {
    const el = ref.current
    if (!el || shown) return

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      {
        root: null,
        // Mobile: trigger earlier so animation finishes before user "hits" the section.
        rootMargin: isMobile ? '0px 0px -22% 0px' : '0px 0px -12% 0px',
        threshold: isMobile ? 0.12 : 0.28,
      },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [shown, isMobile])

  // Mobile: slide-only reveal (opacity stays 1) to avoid "double loading" feel.
  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1]
  const mobileVariants: Variants = {
    hidden: { opacity: 1, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.5, ease: smoothEase } },
  }

  const variants: Variants = isMobile ? mobileVariants : fadeUp

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={shown ? 'show' : 'hidden'}
      transition={{ delay }}
      style={{
        willChange: isMobile ? 'transform' : 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  )
}

