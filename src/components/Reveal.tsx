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

  // Same reveal behavior on mobile + desktop.
  const variants: Variants = fadeUp

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

