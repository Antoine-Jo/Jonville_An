"use client";

import { useEffect, useRef, useState } from "react";

type CopyEmailButtonProps = {
    email: string;
};

type CopyStatus = "idle" | "copied" | "error";

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
    const [status, setStatus] = useState<CopyStatus>("idle");
    const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        };
    }, []);

    const handleCopy = async () => {
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

        try {
            await navigator.clipboard.writeText(email);
            setStatus("copied");
        } catch {
            setStatus("error");
        }

        resetTimerRef.current = setTimeout(() => setStatus("idle"), 1200);
    };

    return (
        <>
            <button type="button" onClick={handleCopy} className="mono-link" data-cursor-target>
                {status === "copied" ? "copied" : status === "error" ? "copy failed" : "copy email"}
            </button>
            <span className="sr-only" aria-live="polite">
                {status === "copied" ? "Email address copied" : status === "error" ? "Unable to copy email address" : ""}
            </span>
        </>
    );
}
