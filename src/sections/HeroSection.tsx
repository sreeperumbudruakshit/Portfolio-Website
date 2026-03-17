import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight, FiDownload, FiLinkedin, FiMail } from 'react-icons/fi'
import { resume } from '../data/resume'
import { stagger } from '../lib/motion'

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <div className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">
            <motion.div variants={stagger} className="flex flex-col gap-3">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-white/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                Available for internships • 2026
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl"
              >
                <span className="text-gradient">{resume.basics.name}</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-pretty text-base leading-relaxed text-white/70 md:text-lg"
              >
                {resume.basics.title}
              </motion.p>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="max-w-xl text-pretty text-[15px] leading-relaxed text-white/65 md:text-base"
            >
              {resume.basics.shortIntro}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <a className="btn-primary" href={resume.basics.resumeDownload.href} download>
                <FiDownload /> Download Resume
              </a>
              <a className="btn-ghost" href="#projects">
                View Projects <FiArrowRight />
              </a>
              <a className="btn-ghost" href="#contact">
                Contact <FiMail />
              </a>
              <a className="btn-ghost" href={resume.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <FiLinkedin />
              </a>
              <a className="btn-ghost" href={resume.links.github} target="_blank" rel="noreferrer">
                GitHub <FiArrowUpRight />
              </a>
            </motion.div>

          </motion.div>

          <div className="relative">
            <div className="card ring-glow">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">Focus</div>
                <div className="text-xs text-white/50">{resume.basics.location}</div>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  {
                    k: 'UI Engineering',
                    v: 'Premium interfaces with motion + polish',
                  },
                  {
                    k: 'Problem Solving',
                    v: 'DSA practice with consistent iterations',
                  },
                  {
                    k: 'AI/ML',
                    v: 'From experiments → deployable prototypes',
                  },
                ].map((x) => (
                  <div key={x.k} className="glass rounded-2xl p-4">
                    <div className="text-sm font-semibold text-white">{x.k}</div>
                    <div className="mt-1 text-sm text-white/60">{x.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-400/10 p-4">
                <div className="text-xs text-white/60">Quick contact</div>
                <a
                  className="mt-1 block text-sm font-semibold text-white hover:underline"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(resume.basics.email)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {resume.basics.email}
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(500px_circle_at_30%_10%,rgba(34,211,238,0.12),transparent_55%),radial-gradient(420px_circle_at_70%_70%,rgba(139,92,246,0.16),transparent_60%)] blur-xl" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}

