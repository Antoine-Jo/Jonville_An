import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../content/projects";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    const [discoverImage, , , matchImage] = project.images;

    return (
        <article className="project-card project-border-run">
            <Link href={project.href} className="project-card-link" data-cursor-target>
                <div className="project-preview" aria-hidden="true">
                    <div className="project-preview-device project-preview-device--discover">
                        <Image src={discoverImage.src} alt="" width={1170} height={2532} sizes="(max-width: 900px) 38vw, 260px" />
                    </div>
                    <div className="project-preview-device project-preview-device--match">
                        <Image src={matchImage.src} alt="" width={1170} height={2532} sizes="(max-width: 900px) 38vw, 260px" />
                    </div>
                    <span className="mono preview-label">{project.eyebrow}</span>
                    <span className="preview-chip">Case study</span>
                </div>

                <div className="project-body">
                    <div className="project-header-row">
                        <h3 className="project-title">{project.title}</h3>
                        <span className="project-status mono">{project.status}</span>
                    </div>
                    <p className="project-summary">{project.summary}</p>
                    <ul className="project-stack" aria-label={`${project.title} technologies`}>
                        {project.stack.map((item) => (
                            <li key={item} className="mono project-stack-tag">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <span className="project-card-cta">
                        Read case study <ArrowUpRight aria-hidden="true" size={16} />
                    </span>
                </div>
            </Link>
        </article>
    );
}
