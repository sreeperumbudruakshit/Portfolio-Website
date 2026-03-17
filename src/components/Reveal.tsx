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
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.28,
      },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [shown])

  // Mobile: slide-only reveal (opacity stays 1) to avoid "double loading" feel.
  const mobileVariants: Variants = {
    hidden: { opacity: 1, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
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
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  )
}

