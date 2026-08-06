import { projects } from "../../content/projects";
import ProjectCard from "../projects/project-card";

export default function ProjectsSection() {
    return (
        <section id="projects" aria-labelledby="projects-title" className="section-row">
            <div className="container-shell grid-12">
                <div className="col-span-12 section-heading-wrap">
                    <h2 id="projects-title" className="section-title">
                        Projects
                    </h2>
                </div>

                <div className="col-span-12 projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
