import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { resume } from '../data/resume'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiInstagram } from 'react-icons/si'

const socials = [
  { label: 'LinkedIn', href: resume.links.linkedin, Icon: FiLinkedin },
  { label: 'GitHub', href: resume.links.github, Icon: FiGithub },
  ...(resume.links.instagram
    ? [{ label: 'Instagram', href: resume.links.instagram, Icon: SiInstagram }]
    : []),
  {
    label: 'Email',
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(resume.basics.email)}`,
    Icon: FiMail,
  },
]

export default function ConnectSection() {
  return (
    <Section
      id="connect"
      eyebrow="CONNECT"
      title="Let’s build something."
      subtitle=""
      className="py-16 md:py-20"
    >
      <div className="grid gap-4 md:grid-cols-4">
        {socials.map((s, idx) => (
          <Reveal key={s.label} delay={idx * 0.03} className="card !p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <s.Icon className="h-5 w-5 text-white/80" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white">{s.label}</div>
                <div className="truncate text-xs text-white/55">{s.href.replace(/^mailto:/, '')}</div>
              </div>
            </div>
            <a
              href={s.href}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="btn-ghost mt-3 w-full justify-center text-xs"
            >
              Open <FiArrowUpRight />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

