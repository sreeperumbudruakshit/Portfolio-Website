import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { resume } from '../data/resume'

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="PROFILE"
      title="About me, in a few lines."
      subtitle="A focused snapshot of my journey, what I’m building toward, and the foundations I’m strengthening."
      className="py-16 md:py-20"
    >
      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="card">
          <div className="text-sm font-semibold text-white">Narrative</div>
          <p className="mt-3 text-[15px] leading-relaxed text-white/65">{resume.about.narrative}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {resume.about.bio.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="card">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-white">Education</div>
            <div className="text-xs text-white/50">Summary</div>
          </div>
          <div className="mt-4 space-y-4">
            {resume.about.education.map((e) => (
              <div key={e.title} className="glass rounded-2xl p-4">
                <div className="text-sm font-semibold text-white">{e.title}</div>
                <div className="mt-0.5 text-sm text-white/60">{e.org}</div>
                <div className="mt-2 text-xs text-white/50">{e.period}</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/60">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

