import { useReducedMotion } from 'framer-motion'
import React from 'react'
import {
  SiReact,
  SiVite,
  SiTypescript,
  SiPython,
} from 'react-icons/si'

// Keep floaters lightweight: fewer elements + simple mirror tweens (no keyframe arrays).
const floaters = [
  { Icon: SiReact, className: 'left-[7%] top-[18%] text-cyan-200/60', scale: 1.15, delay: 0.15 },
  { Icon: SiVite, className: 'left-[18%] bottom-[18%] text-violet-200/55', scale: 1.05, delay: 0.05 },
  { Icon: SiTypescript, className: 'right-[16%] bottom-[22%] text-blue-200/55', scale: 0.98, delay: 0.22 },
  { Icon: SiPython, className: 'right-[10%] top-[22%] text-fuchsia-200/50', scale: 0.95, delay: 0.32 },
]

export default function Background() {
  const reduceMotion = useReducedMotion()
  const [scrolling, setScrolling] = React.useState(false)

  React.useEffect(() => {
    let t = 0
    const onScroll = () => {
      setScrolling(true)
      window.clearTimeout(t)
      t = window.setTimeout(() => setScrolling(false), 140)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(t)
    }
  }, [])

  React.useEffect(() => {
    const root = document.documentElement
    const target = { x: 50, y: 20 }
    const current = { x: 50, y: 20 }
    let raf = 0

    const setVars = () => {
      root.style.setProperty('--mx', `${current.x}%`)
      root.style.setProperty('--my', `${current.y}%`)
    }

    const tick = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t
      current.x = lerp(current.x, target.x, 0.09)
      current.y = lerp(current.y, target.y, 0.09)
      setVars()
      raf = window.requestAnimationFrame(tick)
    }

    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth) * 100
      target.y = (e.clientY / window.innerHeight) * 100
    }

    setVars()
    raf = window.requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />

      <div className="absolute inset-0 opacity-90 [background-image:radial-gradient(1200px_circle_at_12%_10%,rgba(139,92,246,0.25),transparent_52%),radial-gradient(900px_circle_at_88%_24%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(236,72,153,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="absolute inset-0 opacity-[0.05] bg-grain" />

      {/* Keep icons static for maximum scroll smoothness */}
      {floaters.map(({ Icon, className, scale }) => (
        <div
          key={className}
          className={`absolute hidden md:block ${className}`}
          style={{
            opacity: reduceMotion || scrolling ? 0.12 : 0.18,
            transform: `translateZ(0) scale(${scale})`,
          }}
        >
          <Icon className="h-10 w-10 drop-shadow-[0_0_20px_rgba(139,92,246,0.18)]" />
        </div>
      ))}
    </div>
  )
}

