import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { resume } from '../data/resume'

export default function Footer() {
  return (
    <footer className="pb-10 pt-14">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <div className="glass-strong ring-glow rounded-2xl px-5 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">{resume.basics.name}</div>
            </div>

            <div className="flex items-center gap-2">
              <a
                className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/[0.10] hover:text-white"
                href={resume.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/[0.10] hover:text-white"
                href={resume.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/[0.10] hover:text-white"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(resume.basics.email)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <FiMail />
              </a>
              {resume.basics.phone && (
                <a
                  className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/[0.10] hover:text-white"
                  href={`tel:${resume.basics.phone.replace(/\s+/g, '')}`}
                  aria-label="Phone"
                >
                  <FiPhone />
                </a>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} {resume.basics.name}. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <a className="hover:text-white/70" href="#home">
                Back to top
              </a>
              <span className="text-white/25">•</span>
              <a className="hover:text-white/70" href={resume.basics.resumeDownload.href} download>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

