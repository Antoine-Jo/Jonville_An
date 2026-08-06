import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { fooderProject } from "../../../content/projects";
import type { CaseStudySection } from "../../../content/projects";

export const metadata: Metadata = {
    title: "Fooder Case Study",
    description:
        "Fooder is an Expo React Native restaurant discovery app combining private selections, realtime matching and a privacy-aware Supabase backend.",
    alternates: {
        canonical: "/projects/fooder",
    },
    openGraph: {
        title: "Fooder | React Native Case Study",
        description: "A collaborative restaurant discovery app built with Expo, Supabase and Google Places.",
        type: "article",
        url: "/projects/fooder",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fooder | React Native Case Study",
        description: "A collaborative restaurant discovery app built with Expo, Supabase and Google Places.",
    },
};

const technologies = [
    "React Native 0.86",
    "Expo SDK 57",
    "React 19",
    "TypeScript",
    "Expo Router",
    "Zustand",
    "Zod",
    "Supabase Auth",
    "PostgreSQL",
    "Supabase Realtime",
    "Supabase Edge Functions",
    "Google Places API",
    "Reanimated",
    "Gesture Handler",
    "Expo Notifications",
    "Expo Location",
    "Expo Calendar",
    "Vitest",
] as const;

export default function FooderCaseStudyPage() {
    const [discoverLight, discoverDark, matchLight, matchDark] = fooderProject.images;

    return (
        <main id="main-content" className="case-study page-enter">
            <section className="case-study-hero section-row" aria-labelledby="fooder-title">
                <div className="container-shell">
                    <Link href="/#projects" className="case-study-back mono" data-cursor-target>
                        <ArrowLeft aria-hidden="true" size={15} /> Back to projects
                    </Link>

                    <div className="case-study-hero-grid">
                        <div className="case-study-hero-copy">
                            <p className="case-study-kicker mono">{fooderProject.eyebrow}</p>
                            <h1 id="fooder-title" className="case-study-title">
                                {fooderProject.title}
                            </h1>
                            <p className="case-study-lede">{fooderProject.summary}</p>
                            <div className="case-study-actions">
                                <a href={fooderProject.landingUrl} target="_blank" rel="noreferrer" className="case-study-primary-link" data-cursor-target>
                                    View landing page <ArrowUpRight aria-hidden="true" size={17} />
                                </a>
                                <span className="case-study-availability mono">Prototype, not publicly distributed</span>
                            </div>
                        </div>

                        <dl className="case-study-meta">
                            <div>
                                <dt>Status</dt>
                                <dd>{fooderProject.status}</dd>
                            </div>
                            <div>
                                <dt>Platform</dt>
                                <dd>{fooderProject.platform}</dd>
                            </div>
                            <div>
                                <dt>Year</dt>
                                <dd>{fooderProject.year}</dd>
                            </div>
                            <div>
                                <dt>Role</dt>
                                <dd>{fooderProject.role}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            <section className="case-study-showcase section-row" aria-labelledby="discovery-showcase-title">
                <div className="container-shell">
                    <div className="case-study-section-heading">
                        <p className="mono case-study-section-index">01 / PRODUCT</p>
                        <h2 id="discovery-showcase-title">Restaurant discovery in both themes</h2>
                    </div>
                    <div className="case-study-phone-pair">
                        <figure className="case-study-phone case-study-phone--light">
                            <Image src={discoverLight.src} alt={discoverLight.alt} width={1170} height={2532} sizes="(max-width: 700px) 74vw, 390px" />
                            <figcaption className="mono">Discover / Light</figcaption>
                        </figure>
                        <figure className="case-study-phone case-study-phone--dark">
                            <Image src={discoverDark.src} alt={discoverDark.alt} width={1170} height={2532} sizes="(max-width: 700px) 74vw, 390px" />
                            <figcaption className="mono">Discover / Dark</figcaption>
                        </figure>
                    </div>
                    <p className="case-study-capture-note mono">Deterministic marketing captures using fictional data and a local illustration. No live Google Places content is shown.</p>
                </div>
            </section>

            <div className="case-study-content">
                {fooderProject.sections.slice(0, 4).map((section, index) => (
                    <CaseStudyTextSection key={section.title} section={section} index={index + 2} />
                ))}

                <section className="case-study-text-section section-row" aria-labelledby="product-flow-title">
                    <div className="container-shell case-study-text-grid">
                        <div className="case-study-section-heading">
                            <p className="mono case-study-section-index">06 / FLOW</p>
                            <h2 id="product-flow-title">Product Flow</h2>
                        </div>
                        <ol className="case-study-flow-list">
                            {fooderProject.productFlow.map((step, index) => (
                                <li key={step}>
                                    <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                                    <p>{step}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="case-study-showcase section-row" aria-labelledby="match-showcase-title">
                    <div className="container-shell">
                        <div className="case-study-section-heading">
                            <p className="mono case-study-section-index">07 / REALTIME</p>
                            <h2 id="match-showcase-title">Only mutual choices are revealed</h2>
                        </div>
                        <div className="case-study-phone-pair case-study-phone-pair--match">
                            <figure className="case-study-phone case-study-phone--light">
                                <Image src={matchLight.src} alt={matchLight.alt} width={1170} height={2532} sizes="(max-width: 700px) 74vw, 390px" />
                                <figcaption className="mono">Match / Light</figcaption>
                            </figure>
                            <figure className="case-study-phone case-study-phone--dark">
                                <Image src={matchDark.src} alt={matchDark.alt} width={1170} height={2532} sizes="(max-width: 700px) 74vw, 390px" />
                                <figcaption className="mono">Match / Dark</figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {fooderProject.sections.slice(4).map((section, index) => (
                    <CaseStudyTextSection key={section.title} section={section} index={index + 8} />
                ))}
            </div>

            <section className="case-study-technology section-row" aria-labelledby="technology-title">
                <div className="container-shell case-study-text-grid">
                    <div className="case-study-section-heading">
                        <p className="mono case-study-section-index">15 / STACK</p>
                        <h2 id="technology-title">Technology</h2>
                    </div>
                    <ul className="case-study-technology-list">
                        {technologies.map((technology) => (
                            <li key={technology} className="mono">
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="case-study-final-cta section-row" aria-labelledby="fooder-cta-title">
                <div className="container-shell">
                    <p className="case-study-kicker mono">Functional prototype / 2026</p>
                    <h2 id="fooder-cta-title">See Fooder in its product context.</h2>
                    <a href={fooderProject.landingUrl} target="_blank" rel="noreferrer" className="case-study-primary-link" data-cursor-target>
                        Visit the Fooder landing page <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                </div>
            </section>
        </main>
    );
}

function CaseStudyTextSection({ section, index }: { section: CaseStudySection; index: number }) {
    const headingId = `case-study-${section.title.toLowerCase().replaceAll(" ", "-")}`;

    return (
        <section className="case-study-text-section section-row" aria-labelledby={headingId}>
            <div className="container-shell case-study-text-grid">
                <div className="case-study-section-heading">
                    <p className="mono case-study-section-index">{String(index).padStart(2, "0")} / CASE STUDY</p>
                    <h2 id={headingId}>{section.title}</h2>
                </div>
                <div className="case-study-prose">
                    {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets && (
                        <ul>
                            {section.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
