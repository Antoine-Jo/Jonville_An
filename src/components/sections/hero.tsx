import { siteContent } from "../../content/site";

export default function HeroSection() {
    return (
        <section aria-labelledby="hero-title" className="section-row section-first">
            <div className="container-shell grid-12">
                <div className="hero-copy col-span-12 lg:col-span-7">
                    <p className="hero-kicker mono">{siteContent.role}</p>
                    <h1 id="hero-title" className="hero-title">
                        {siteContent.hero.title}
                    </h1>
                    <p className="hero-subtitle">{siteContent.hero.subtitle}</p>
                </div>

                <div className="hero-code-panel col-span-12 lg:col-span-5" aria-hidden="true">
                    <p className="mono code-label">/snippet.ts</p>
                    <pre className="hero-code mono">
                        <code>
                            <span className="code-line typing-line">{siteContent.hero.snippets[0]}</span>
                            <span className="code-line code-muted">{siteContent.hero.snippets[1]}</span>
                            <span className="code-line code-muted">{siteContent.hero.snippets[2]}</span>
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
}
