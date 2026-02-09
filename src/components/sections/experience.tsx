const experienceItems = [
    {
        period: "2022 - Today",
        role: "Front-end Developer",
        summary: "Delivered React and Next.js interfaces with performance and maintainability goals.",
    },
    {
        period: "2023 - Today",
        role: "React Native Developer",
        summary: "Built cross-platform mobile experiences with reusable UI architecture and clean state management.",
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Experience</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
                {experienceItems.map((item) => (
                    <article key={`${item.period}-${item.role}`} className="rounded-2xl border border-white/10 bg-[#1A1B21] p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#64F4AC]">{item.period}</p>
                        <h3 className="mt-3 text-xl font-medium text-white">{item.role}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#B7BAC6]">{item.summary}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
