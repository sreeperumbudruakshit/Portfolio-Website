import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { resume } from '../data/resume'

function startYear(period: string) {
  const m = period.match(/(19|20)\d{2}/)
  return m ? Number(m[0]) : 0
}

export default function TimelineSection() {
  const items = [
    ...resume.about.education.map((e) => ({ ...e, kind: 'Education' as const })),
    ...resume.experienceTimeline.map((e) => ({ ...e, kind: 'Experience' as const })),
  ].sort((a, b) => startYear(b.period) - startYear(a.period))

  return (
    <Section
      id="timeline"
      eyebrow="JOURNEY"
      title="Experience & education timeline."
      subtitle="A clean timeline view—alternating layout to keep the page visually dynamic."
      className="py-16 md:py-20"
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-1/2 md:block" />

        <div className="grid gap-5">
          {items.map((item, idx) => {
            const right = idx % 2 === 1
            return (
              <Reveal
                key={`${item.title}-${item.period}`}
                delay={idx * 0.035}
                className="grid gap-5 md:grid-cols-2 md:gap-8"
              >
                <div className={right ? 'md:order-2' : 'md:order-1'}>
                  <div className="card">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs tracking-[0.22em] text-white/55">{item.kind}</div>
                        <div className="mt-2 text-base font-semibold text-white">{item.title}</div>
                        {item.org && <div className="mt-1 text-sm text-white/60">{item.org}</div>}
                      </div>
                      <div className="shrink-0 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-white/60">
                        {item.period}
                      </div>
                    </div>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/65">
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={right ? 'md:order-1' : 'md:order-2'}>
                  <div className="hidden h-full items-center justify-center md:flex">
                    <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                      <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_24px_rgba(139,92,246,0.35)]" />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

