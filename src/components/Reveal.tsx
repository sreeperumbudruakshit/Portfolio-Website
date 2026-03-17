import { motion, useInView } from 'framer-motion'
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

  // Use a "reveal once and never revert" strategy.
  // This avoids mobile viewport/address-bar changes causing re-animations.
  const inView = useInView(ref, {
    once: true,
    amount: isMobile ? 0.28 : 0.28,
    margin: '0px 0px -12% 0px',
  })

  const easeOutBezier: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const mobileVariants: Variants = {
    // Match desktop feel: same distance, duration, and easing.
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: easeOutBezier } },
  }

  const variants: Variants = isMobile ? mobileVariants : fadeUp

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

