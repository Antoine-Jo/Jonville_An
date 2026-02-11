import Link from "next/link";
import { siteContent } from "../../content/site";
import MobileNav from "../ui/mobile-nav";

export default function SiteHeader() {
    return (
        <header className="site-header">
            <div className="container-shell header-grid border-grid">
                <Link href="/" className="logo-mark">
                    {siteContent.name}
                </Link>

                <nav aria-label="Primary navigation" className="header-nav">
                    {siteContent.nav.map((item) => (
                        <Link key={item.href} href={item.href} className="nav-link" data-cursor-target>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="mobile-header-action">
                    <MobileNav items={siteContent.nav} />
                </div>
            </div>
        </header>
    );
}
