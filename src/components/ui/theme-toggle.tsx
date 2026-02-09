"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const options = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
] as const;

export default function ThemeToggle() {
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );
    const { setTheme, resolvedTheme, theme } = useTheme();

    if (!mounted) return null;

    return (
        <div className="inline-flex items-center rounded-full border p-1" style={{ borderColor: "var(--stroke)", backgroundColor: "color-mix(in srgb, var(--bg-elevated) 70%, transparent)" }}>
            {options.map((option) => {
                const Icon = option.icon;
                const isActive = option.value === "system" ? theme === "system" : resolvedTheme === option.value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => setTheme(option.value)}
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs transition-colors ${
                            isActive ? "bg-[var(--accent)] text-[#111217]" : "text-muted hover:text-[var(--text)]"
                        }`}
                        aria-pressed={isActive}
                        aria-label={`Activate ${option.label} theme`}
                    >
                        <Icon size={14} />
                        <span className="hidden sm:inline">{option.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
