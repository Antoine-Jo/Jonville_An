import { siteContent } from "../../content/site";

export default function ContactSection() {
    return (
        <section id="contact" aria-labelledby="contact-title" className="section-row">
            <div className="container-shell grid-12">
                <div className="col-span-12 section-heading-wrap">
                    <h2 id="contact-title" className="section-title">
                        Contact
                    </h2>
                    <p className="section-muted">Available for front-end opportunities focused on React.js and React Native products.</p>
                </div>
                <div className="col-span-12 contact-highlight mono">
                    <a href={`mailto:${siteContent.footer.email}`} data-cursor-target>
                        {siteContent.footer.email}
                    </a>
                </div>
            </div>
        </section>
    );
}
