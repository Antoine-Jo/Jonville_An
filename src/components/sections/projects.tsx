import { projects, projectShowcaseStatus } from "../../content/projects";

export default function ProjectsSection() {
    return (
        <section id="projects" aria-labelledby="projects-title" className="section-row">
            <div className="container-shell grid-12">
                <div className="col-span-12 section-heading-wrap">
                    <h2 id="projects-title" className="section-title">
                        Projects
                    </h2>
                </div>

                {projects.length === 0 ? (
                    <article className="col-span-12 projects-wip-board">
                        <div className="wip-board-head">
                            <p className="mono wip-kicker">{projectShowcaseStatus.label}</p>
                            <p className="wip-eta">{projectShowcaseStatus.eta}</p>
                        </div>
                        <p className="wip-description">{projectShowcaseStatus.description}</p>
                        <ul className="wip-roadmap" aria-label="Upcoming case studies">
                            {projectShowcaseStatus.upcoming.map((item) => (
                                <li key={item.title} className="wip-roadmap-item">
                                    <p className="wip-item-title">{item.title}</p>
                                    <p className="wip-item-focus">{item.focus}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ) : (
                    <div className="col-span-12 projects-grid">
                        {projects.map((project, index) => (
                            <article key={`${project.title}-${index}`} className="project-card project-border-run" data-cursor-target>
                                <div className="project-preview">
                                    <span className="mono preview-label">{project.previewLabel}</span>
                                    <span className="preview-chip">Live case study</span>
                                </div>

                                <div className="project-body">
                                    <div className="project-header-row">
                                        <h3 className="project-title">{project.title}</h3>
                                        <span className="project-metric mono">{project.metric}</span>
                                    </div>
                                    <p className="project-summary">{project.summary}</p>
                                    <ul className="project-stack" aria-label="Project technologies">
                                        {project.stack.map((item) => (
                                            <li key={item} className="mono project-stack-tag">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
