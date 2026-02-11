"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "../../content/site";

type MobileNavProps = {
    items: readonly NavItem[];
};

export default function MobileNav({ items }: MobileNavProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mobile-nav-root">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="mobile-menu-button"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                data-cursor-target
            >
                {open ? <X size={18} /> : <Menu size={18} />}
            </button>

            {open && (
                <nav className="mobile-menu-panel" aria-label="Mobile navigation">
                    {items.map((item) => (
                        <Link key={item.href} href={item.href} className="mobile-menu-link" onClick={() => setOpen(false)} data-cursor-target>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    );
}
