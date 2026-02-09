const skillGroups = [
    {
        label: "Core Front-end",
        skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
        label: "Mobile",
        skills: ["React Native", "Expo", "Navigation", "Native integrations"],
    },
    {
        label: "Quality",
        skills: ["Accessibility", "Performance", "Code Review", "Component architecture"],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Skills</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
                {skillGroups.map((group) => (
                    <article key={group.label} className="rounded-2xl border border-white/10 bg-[#1A1B21] p-6">
                        <h3 className="text-base font-medium text-white">{group.label}</h3>
                        <ul className="mt-4 space-y-2 text-sm text-[#B7BAC6]">
                            {group.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
