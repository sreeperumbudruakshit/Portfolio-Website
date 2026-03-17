import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { resume } from '../data/resume'
import type React from 'react'
import {
  SiGithub,
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
  SiGeeksforgeeks,
} from 'react-icons/si'
import { FiArrowUpRight } from 'react-icons/fi'

const iconByLabel: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: SiGithub,
  LeetCode: SiLeetcode,
  CodeChef: SiCodechef,
  HackerRank: SiHackerrank,
  GeeksforGeeks: SiGeeksforgeeks,
}

function usernameFromUrl(url: string) {
  try {
    const u = new URL(url)
    const parts = u.pathname.split('/').filter(Boolean)
    return parts[parts.length - 1] ?? url
  } catch {
    return url
  }
}

export default function CodingProfilesSection() {
  return (
    <Section
      id="profiles"
      eyebrow="PLATFORMS"
      title="Coding profiles."
      subtitle=""
      className="py-16 md:py-20"
    >
      <div className="grid gap-4 md:grid-cols-5">
        {resume.codingProfiles.map((p, idx) => {
          const Icon = iconByLabel[p.label] ?? SiGithub
          return (
            <Reveal key={p.label} delay={idx * 0.02} className="card !p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <Icon className="h-5 w-5 text-white/75" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{p.label}</div>
                  <div className="truncate text-xs text-white/55">{usernameFromUrl(p.href)}</div>
                </div>
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-3 w-full justify-center text-xs"
              >
                Open <FiArrowUpRight />
              </a>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

