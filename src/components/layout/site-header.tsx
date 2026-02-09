import Link from "next/link";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#15161A]/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
                <Link href="/" className="text-base font-semibold tracking-wide text-white">
                    Antoine Jonville
                </Link>
                <nav aria-label="Primary navigation" className="hidden items-center gap-5 md:flex">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm text-[#B7BAC6] transition-colors hover:text-white">
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
