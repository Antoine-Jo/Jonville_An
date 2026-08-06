import ContactSection from "../components/sections/contact";
import ExperienceSection from "../components/sections/experience";
import HeroSection from "../components/sections/hero";
import ProjectsSection from "../components/sections/projects";
import SkillsSection from "../components/sections/skills";
import Reveal from "../components/ui/reveal";

export default function HomePage() {
    return (
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
    );
}
