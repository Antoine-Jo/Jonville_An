const projects = [
    {
        name: "Mobile Commerce App",
        description: "React Native app focused on browsing speed, smooth navigation, and high conversion UI patterns.",
    },
    {
        name: "Design System Playground",
        description: "React and TypeScript component system with reusable tokens, variants, and accessibility-first patterns.",
    },
    {
        name: "Next.js Dashboard",
        description: "Data-rich admin interface with reusable charts, role-aware views, and strong UI performance discipline.",
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Selected Projects</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
                {projects.map((project) => (
                    <article key={project.name} className="rounded-2xl border border-white/10 bg-[#1A1B21] p-6">
                        <h3 className="text-lg font-medium text-white">{project.name}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#B7BAC6]">{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
