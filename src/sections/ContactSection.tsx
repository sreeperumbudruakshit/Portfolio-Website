import React from 'react'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { resume } from '../data/resume'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'

export default function ContactSection() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Portfolio message from ${name || 'Someone'}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}\n`
    const href =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(resume.basics.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <Section
      id="contact"
      eyebrow="GET IN TOUCH"
      title="Contact me."
      subtitle="Use the form to send a quick email, or reach out via LinkedIn and GitHub."
      className="py-16 md:py-20"
    >
      <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="card">
          <div className="text-sm font-semibold text-white">Direct links</div>
          <div className="mt-4 grid gap-3">
            <a
              className="glass rounded-2xl p-4 transition hover:bg-white/[0.10]"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(resume.basics.email)}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FiMail className="text-cyan-200/80" />
                  <div>
                    <div className="text-sm font-semibold text-white">Email</div>
                    <div className="text-xs text-white/55">{resume.basics.email}</div>
                  </div>
                </div>
                <FiArrowUpRight className="text-white/55" />
              </div>
            </a>

            <a
              className="glass rounded-2xl p-4 transition hover:bg-white/[0.10]"
              href={resume.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FiLinkedin className="text-violet-200/80" />
                  <div>
                    <div className="text-sm font-semibold text-white">LinkedIn</div>
                    <div className="text-xs text-white/55">Message me on LinkedIn</div>
                  </div>
                </div>
                <FiArrowUpRight className="text-white/55" />
              </div>
            </a>

            <a
              className="glass rounded-2xl p-4 transition hover:bg-white/[0.10]"
              href={resume.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FiGithub className="text-fuchsia-200/80" />
                  <div>
                    <div className="text-sm font-semibold text-white">GitHub</div>
                    <div className="text-xs text-white/55">See code & projects</div>
                  </div>
                </div>
                <FiArrowUpRight className="text-white/55" />
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="card">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold text-white">Send a message</div>
            <div className="text-xs text-white/50">Quick form</div>
          </div>

          <form onSubmit={onSubmit} className="mt-4 grid gap-3">
            <label className="grid gap-2">
              <span className="text-xs text-white/60">Name</span>
              <input
                className="glass rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs text-white/60">Email</span>
              <input
                className="glass rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs text-white/60">Message</span>
              <textarea
                className="glass min-h-[140px] resize-none rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or opportunity..."
              />
            </label>

            <div className="mt-1 flex flex-wrap items-center gap-2">
              <button type="submit" className="btn-primary">
                <FiSend /> Send
              </button>
              <a
                className="btn-ghost"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(resume.basics.email)}`}
                target="_blank"
                rel="noreferrer"
              >
                <FiMail /> Email directly
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

