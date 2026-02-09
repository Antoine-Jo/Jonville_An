import Link from "next/link";

const contacts = [
    { label: "Email", href: "mailto:antoinejonville@yahoo.fr", text: "antoinejonville@yahoo.fr" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/antoine-jonville", text: "linkedin.com/in/antoine-jonville" },
    { label: "GitHub", href: "https://github.com/Antoine-Jo", text: "github.com/Antoine-Jo" },
];

export default function ContactSection() {
    return (
        <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Contact</h2>
            <p className="mt-4 max-w-2xl text-lg text-[#B7BAC6]">
                If you are building a React or React Native product, I am open to discussing impactful front-end roles.
            </p>
            <ul className="mt-8 space-y-3">
                {contacts.map((contact) => (
                    <li key={contact.label}>
                        <Link href={contact.href} className="text-[#64F4AC] underline-offset-4 hover:underline">
                            {contact.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
