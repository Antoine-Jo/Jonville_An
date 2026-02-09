import Link from "next/link";
import { siteContent } from "../../content/site";
import CopyEmailButton from "../ui/copy-email-button";

export default function SiteFooter() {
    return (
        <footer className="section-row footer-row">
            <div className="container-shell footer-grid">
                <p className="mono footer-copy">© {new Date().getFullYear()} {siteContent.name}</p>
                <div className="footer-links mono">
                    {siteContent.footer.socials.map((social) => (
                        <Link key={social.label} href={social.href} data-cursor-target>
                            {social.label}
                        </Link>
                    ))}
                    <CopyEmailButton email={siteContent.footer.email} />
                </div>
            </div>
        </footer>
    );
}
