"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
    email: string;
};

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
            setCopied(false);
        }
    };

    return (
        <button type="button" onClick={handleCopy} className="mono-link" data-cursor-target>
            {copied ? "copied" : "copy email"}
        </button>
    );
}
