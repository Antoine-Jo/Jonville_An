import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 md:px-8 md:py-20">
            <p className="w-fit rounded-full border border-[#64F4AC]/40 bg-[#64F4AC]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#64F4AC]">
                Front-end Engineer
            </p>
            <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                    React.js & React Native Developer focused on fast, polished product experiences.
                </h1>
                <p className="text-lg text-[#B7BAC6]">
                    I build production-grade interfaces with strong UX foundations, clean architecture, and measurable impact.
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                <Link
                    href="#projects"
                    className="rounded-full bg-[#64F4AC] px-6 py-3 text-sm font-semibold text-[#111217] transition-transform hover:scale-[1.02]"
                >
                    View projects
                </Link>
                <Link href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/40">
                    Contact me
                </Link>
            </div>
        </section>
    );
}
