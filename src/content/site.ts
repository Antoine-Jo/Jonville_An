export type NavItem = {
    href: string;
    label: string;
};

export type SocialLink = {
    label: string;
    href: string;
};

export const siteContent = {
    name: "Antoine Jonville",
    role: "Front-end Developer",
    nav: [
        { href: "/#projects", label: "Projects" },
        { href: "/#experience", label: "Experience" },
        { href: "/#stack", label: "Stack" },
        { href: "/#contact", label: "Contact" },
    ] as NavItem[],
    hero: {
        title: "React.js & React Native interfaces, engineered with precision.",
        subtitle:
            "I build performant product UI with strong architecture, maintainable TypeScript, and polished interaction details.",
        snippets: [
            "const developer = \"Antoine Jonville\";",
            "const stack = [\"React\", \"Next.js\", \"React Native\"];",
            "const yearsOfExperience = 4;",
        ],
    },
    footer: {
        email: "antoinejonville@yahoo.fr",
        socials: [
            { label: "GitHub", href: "https://github.com/Antoine-Jo" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/antoine-jonville" },
        ] as SocialLink[],
    },
} as const;
