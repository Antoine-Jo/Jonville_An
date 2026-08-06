"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "../../content/site";

type MobileNavProps = {
    items: readonly NavItem[];
};

export default function MobileNav({ items }: MobileNavProps) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const panelId = useId();

    useEffect(() => {
        if (!open) return;

        const root = rootRef.current;
        root?.querySelector<HTMLAnchorElement>("a")?.focus();

        const closeFromOutside = (event: Event) => {
            if (!root?.contains(event.target as Node)) setOpen(false);
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== "Escape") return;
            setOpen(false);
            buttonRef.current?.focus();
        };

        const desktopQuery = window.matchMedia("(min-width: 821px)");
        const onDesktopChange = () => {
            if (desktopQuery.matches) setOpen(false);
        };

        document.addEventListener("pointerdown", closeFromOutside);
        document.addEventListener("focusin", closeFromOutside);
        document.addEventListener("keydown", onKeyDown);
        desktopQuery.addEventListener("change", onDesktopChange);

        return () => {
            document.removeEventListener("pointerdown", closeFromOutside);
            document.removeEventListener("focusin", closeFromOutside);
            document.removeEventListener("keydown", onKeyDown);
            desktopQuery.removeEventListener("change", onDesktopChange);
        };
    }, [open]);

    return (
        <div ref={rootRef} className="mobile-nav-root">
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setOpen((previous) => !previous)}
                className="mobile-menu-button"
                aria-expanded={open}
                aria-controls={panelId}
                aria-label={open ? "Close menu" : "Open menu"}
                data-cursor-target
            >
                {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
            </button>

            {open && (
                <nav id={panelId} className="mobile-menu-panel" aria-label="Mobile navigation">
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
