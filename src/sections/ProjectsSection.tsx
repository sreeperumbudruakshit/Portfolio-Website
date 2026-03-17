import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { resume } from '../data/resume'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="WORK"
      title="Projects & prototypes."
      subtitle="A selection of builds and explorations."
      className="py-16 md:py-20"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {resume.projects.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.04} className="card group">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-white">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {p.github && (
                  <a
                    className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/75 transition hover:bg-white/[0.10] hover:text-white"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open GitHub repository"
                    title="GitHub"
                  >
                    <FiGithub />
                  </a>
                )}
                {p.live && (
                  <a
                    className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/75 transition hover:bg-white/[0.10] hover:text-white"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open live demo"
                    title="Live"
                  >
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

