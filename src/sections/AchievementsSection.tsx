import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { resume } from '../data/resume'
import { FiAward, FiCheckCircle, FiExternalLink } from 'react-icons/fi'

export default function AchievementsSection() {
  return (
    <Section
      id="achievements"
      eyebrow="HIGHLIGHTS"
      title="Achievements & certifications."
      subtitle=""
      className="py-16 md:py-20"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal className="card">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <FiAward className="text-violet-200/80" /> Achievements
          </div>
          <ul className="mt-4 space-y-3">
            {resume.achievements.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-white/65">
                <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-200/70" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="card">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <FiAward className="text-fuchsia-200/80" /> Certifications
          </div>
          <div className="mt-4 grid gap-3">
            {resume.certifications.map((c) => (
              <div key={c.title} className="glass rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white">{c.title}</div>
                    {(c.issuer || c.year) && (
                      <div className="mt-1 text-xs text-white/55">
                        {c.issuer ? c.issuer : 'Issuer'} {c.year ? `• ${c.year}` : ''}
                      </div>
                    )}
                  </div>
                  {c.proof && (
                    <a
                      href={c.proof}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost h-9 px-3 text-xs"
                    >
                      Proof <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

