"use client";

import { useEffect, useRef } from "react";

const CLICKABLE_SELECTOR = "a, button, [data-cursor-target], input, textarea, select";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const pointerQuery = window.matchMedia("(pointer: fine)");
        const motionQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
        let frameId: number | null = null;
        let x = 0;
        let y = 0;

        const updatePosition = () => {
            cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            frameId = null;
        };

        const onPointerMove = (event: PointerEvent) => {
            x = event.clientX;
            y = event.clientY;
            document.documentElement.classList.add("custom-cursor-enabled");
            cursor.classList.add("custom-cursor--visible");
            if (frameId === null) frameId = window.requestAnimationFrame(updatePosition);
        };

        const onPointerOver = (event: PointerEvent) => {
            const target = event.target as Element | null;
            cursor.classList.toggle("custom-cursor--active", Boolean(target?.closest(CLICKABLE_SELECTOR)));
        };

        const onPointerLeave = () => cursor.classList.remove("custom-cursor--visible");

        const removePointerListeners = () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerover", onPointerOver);
            document.documentElement.removeEventListener("mouseleave", onPointerLeave);
            document.documentElement.classList.remove("custom-cursor-enabled");
            cursor.classList.remove("custom-cursor--visible", "custom-cursor--active");
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
                frameId = null;
            }
        };

        const syncPointerListeners = () => {
            removePointerListeners();
            if (!pointerQuery.matches || !motionQuery.matches) return;
            window.addEventListener("pointermove", onPointerMove, { passive: true });
            window.addEventListener("pointerover", onPointerOver, { passive: true });
            document.documentElement.addEventListener("mouseleave", onPointerLeave);
        };

        syncPointerListeners();
        pointerQuery.addEventListener("change", syncPointerListeners);
        motionQuery.addEventListener("change", syncPointerListeners);

        return () => {
            removePointerListeners();
            pointerQuery.removeEventListener("change", syncPointerListeners);
            motionQuery.removeEventListener("change", syncPointerListeners);
        };
    }, []);

    return <span ref={cursorRef} aria-hidden="true" className="custom-cursor" />;
}
