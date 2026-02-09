"use client";

import { useEffect, useState } from "react";

type CursorState = {
    x: number;
    y: number;
};

const CLICKABLE_SELECTOR = "a, button, [data-cursor-target], input, textarea, select";

export default function CustomCursor() {
    const [position, setPosition] = useState<CursorState>({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: fine)");
        if (!mediaQuery.matches) return;

        const onMouseMove = (event: MouseEvent) => {
            setIsVisible(true);
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const onMouseOver = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            if (!target) return;
            setIsActive(Boolean(target.closest(CLICKABLE_SELECTOR)));
        };

        const onMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", onMouseOver);
        window.addEventListener("mouseleave", onMouseLeave);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            window.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <span
            aria-hidden="true"
            className={`custom-cursor ${isVisible ? "custom-cursor--visible" : ""} ${isActive ? "custom-cursor--active" : ""}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
}
