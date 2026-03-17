import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { resume } from '../data/resume'

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="STACK"
      title="Skills that ship."
      subtitle="Grouped by how I use them: operating on data, building models, and delivering clean interfaces."
      className="py-16 md:py-20"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {resume.skills.map((group, idx) => (
          <Reveal key={group.label} delay={idx * 0.03} className="card">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white">{group.label}</div>
              <div className="text-xs text-white/45">{group.skills.length} skills</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

