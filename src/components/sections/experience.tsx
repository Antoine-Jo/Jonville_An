import { experienceItems } from "../../content/experience";

export default function ExperienceSection() {
    return (
        <section id="experience" aria-labelledby="experience-title" className="section-row">
            <div className="container-shell grid-12">
                <div className="col-span-12 section-heading-wrap">
                    <h2 id="experience-title" className="section-title">
                        Experience
                    </h2>
                </div>

                <div className="col-span-12 timeline-root">
                    <span className="timeline-line" aria-hidden="true" />
                    {experienceItems.map((item, index) => (
                        <article key={`${item.period}-${item.role}`} className="timeline-item" style={{ animationDelay: `${index * 0.05}s` }}>
                            <p className="mono timeline-period">{item.period}</p>
                            <div>
                                <h3 className="timeline-role">{item.role}</h3>
                                <p className="timeline-context">{item.context}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
