import Background from './components/Background'
import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'
import AchievementsSection from './sections/AchievementsSection'
import CodingProfilesSection from './sections/CodingProfilesSection'
import ConnectSection from './sections/ConnectSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import TimelineSection from './sections/TimelineSection'

export default function App() {
  return (
    <div className="min-h-dvh">
      <Background />
      <Navbar />

      <main className="relative">
        <HeroSection />

        <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
          <div className="mask-fade-y pointer-events-none absolute left-1/2 top-[92svh] -z-10 h-[140svh] w-[min(1100px,92vw)] -translate-x-1/2 opacity-45 [background:radial-gradient(closest-side,rgba(139,92,246,0.18),transparent),radial-gradient(closest-side,rgba(34,211,238,0.10),transparent)] blur-xl" />
        </div>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <AchievementsSection />
        <CodingProfilesSection />
        <ConnectSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

