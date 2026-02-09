"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    delayMs?: number;
};

export default function Reveal({ children, delayMs = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`reveal ${visible ? "reveal--visible" : ""}`} style={{ transitionDelay: `${delayMs}ms` }}>
            {children}
        </div>
    );
}
