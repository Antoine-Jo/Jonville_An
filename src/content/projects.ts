export type Project = {
    title: string;
    summary: string;
    metric: string;
    stack: string[];
    previewLabel: string;
};

export type UpcomingCaseStudy = {
    title: string;
    focus: string;
};

export const projects: Project[] = [];

export const projectShowcaseStatus = {
    label: "Case studies in preparation",
    description:
        "I am currently documenting recent work with proper context, technical constraints, and measurable outcomes before publication.",
    eta: "First publication planned soon",
    upcoming: [
        {
            title: "React Native Product Flow",
            focus: "Navigation architecture and UI consistency",
        },
        {
            title: "Next.js Interface Performance",
            focus: "Rendering strategy and perceived speed improvements",
        },
        {
            title: "Design System Integration",
            focus: "Component API conventions and maintainability",
        },
    ] satisfies UpcomingCaseStudy[],
} as const;
