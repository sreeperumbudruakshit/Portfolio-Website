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
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 767px)').matches
  })

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const apply = () => setIsMobile(mq.matches)
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  // Mobile browsers change viewport height while scrolling (address bar),
  // so on mobile we avoid opacity fades (which feel like "loading").
  const easeOutBezier: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const mobileVariants: Variants = {
    // Noticeable mobile reveal (fade + slide), still once-per-section.
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutBezier } },
  }

  const variants: Variants = isMobile ? mobileVariants : fadeUp

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: isMobile ? 0.24 : 0.28, margin: '0px 0px -14% 0px' }}
      transition={{ delay }}
      style={{ willChange: isMobile ? 'transform' : 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

