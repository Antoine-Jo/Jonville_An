import SiteHeader from "../components/layout/site-header";
import SiteFooter from "../components/layout/site-footer";
import ContactSection from "../components/sections/contact";
import ExperienceSection from "../components/sections/experience";
import HeroSection from "../components/sections/hero";
import ProjectsSection from "../components/sections/projects";
import SkillsSection from "../components/sections/skills";
import CustomCursor from "../components/ui/custom-cursor";
import Reveal from "../components/ui/reveal";

export default function HomePage() {
    return (
        <div className="app-shell">
            <a
                href="#main-content"
                className="sr-only rounded-md bg-[var(--accent)] px-4 py-2 font-medium text-[#101217] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
            >
                Skip to content
            </a>
            <CustomCursor />
            <SiteHeader />
            <main id="main-content" className="page-enter">
                <HeroSection />
                <Reveal delayMs={50}>
                    <ProjectsSection />
                </Reveal>
                <Reveal delayMs={100}>
                    <ExperienceSection />
                </Reveal>
                <Reveal delayMs={150}>
                    <SkillsSection />
                </Reveal>
                <Reveal delayMs={200}>
                    <ContactSection />
                </Reveal>
            </main>
            <SiteFooter />
        </div>
    );
}
