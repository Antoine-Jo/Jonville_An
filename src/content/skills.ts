export type StackLevel = "Core" | "Advanced" | "Working";

export type StackTag = {
    label: string;
    level: StackLevel;
    animated?: boolean;
};

export type StackGroup = {
    title: string;
    tags: StackTag[];
};

export const stackGroups: StackGroup[] = [
    {
        title: "Web",
        tags: [
            { label: "React.js", level: "Core", animated: true },
            { label: "Next.js", level: "Core", animated: true },
            { label: "TypeScript", level: "Core" },
            { label: "Tailwind CSS", level: "Advanced" },
            { label: "State Management", level: "Advanced" },
        ],
    },
    {
        title: "Mobile",
        tags: [
            { label: "React Native", level: "Core", animated: true },
            { label: "Expo", level: "Advanced" },
            { label: "Navigation Patterns", level: "Advanced" },
            { label: "Cross-platform UI", level: "Advanced" },
            { label: "Native Integrations", level: "Working" },
        ],
    },
    {
        title: "Engineering",
        tags: [
            { label: "UI Architecture", level: "Core", animated: true },
            { label: "Design Systems", level: "Advanced" },
            { label: "Accessibility", level: "Advanced" },
            { label: "Performance", level: "Advanced" },
            { label: "DX Tooling", level: "Working" },
        ],
    },
];
