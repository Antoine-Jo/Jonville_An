import SiteHeader from "../components/layout/site-header";
import AboutSection from "../components/sections/about";
import ContactSection from "../components/sections/contact";
import ExperienceSection from "../components/sections/experience";
import HeroSection from "../components/sections/hero";
import ProjectsSection from "../components/sections/projects";
import SkillsSection from "../components/sections/skills";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#111217] text-white">
            <SiteHeader />
            <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <footer className="mx-auto w-full max-w-6xl px-4 py-10 text-sm text-[#8F93A3] md:px-8">
                © {new Date().getFullYear()} Antoine Jonville
            </footer>
        </div>
    );
}
