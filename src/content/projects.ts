export type ProjectImage = {
    src: string;
    alt: string;
};

export type CaseStudySection = {
    title: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
};

export type Project = {
    slug: string;
    href: `/projects/${string}`;
    title: string;
    eyebrow: string;
    summary: string;
    status: string;
    platform: string;
    year: number;
    role: string;
    stack: readonly string[];
    landingUrl: string;
    images: readonly [ProjectImage, ProjectImage, ProjectImage, ProjectImage];
    productFlow: readonly string[];
    sections: readonly CaseStudySection[];
};

export const fooderProject = {
    slug: "fooder",
    href: "/projects/fooder",
    title: "Fooder",
    eyebrow: "Expo React Native application",
    summary:
        "A collaborative restaurant discovery app that helps two people decide where to eat through private selections and realtime matching.",
    status: "Functional prototype",
    platform: "iOS & Android",
    year: 2026,
    role: "Product design, mobile development and backend architecture",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Google Places"],
    landingUrl: "https://fooder-landing.vercel.app",
    images: [
        {
            src: "/projects/fooder/discover-light.png",
            alt: "Fooder restaurant discovery screen in light mode, showing a fictional Italian restaurant card.",
        },
        {
            src: "/projects/fooder/discover-dark.png",
            alt: "Fooder restaurant discovery screen in dark mode, showing the same fictional restaurant card.",
        },
        {
            src: "/projects/fooder/match-light.png",
            alt: "Fooder mutual match confirmation in light mode for the fictional restaurant Casa Livia.",
        },
        {
            src: "/projects/fooder/match-dark.png",
            alt: "Fooder mutual match confirmation in dark mode for the fictional restaurant Casa Livia.",
        },
    ],
    productFlow: [
        "Select a destination and configure restaurant filters.",
        "Retrieve and review up to 20 relevant restaurants.",
        "Keep a personal shortlist or invite another person to a Duo Table.",
        "Explore the same selection independently with private choices.",
        "Reveal only mutual positive selections in realtime.",
        "Agree on a final restaurant and propose a date for the outing.",
        "Open directions, share the plan or add it to the device calendar.",
    ],
    sections: [
        {
            title: "Overview",
            paragraphs: [
                "Fooder is a mobile restaurant discovery experience built for a common problem: deciding where to eat when two people have different preferences.",
                "Both participants explore the same restaurants privately. Fooder only reveals places they both selected, helping them reach a decision without influencing each other's choices.",
                "The project combines product design, cross-platform mobile development, realtime collaboration and a privacy-aware backend architecture.",
            ],
        },
        {
            title: "The Problem",
            paragraphs: [
                "Choosing a restaurant as a pair often means switching between map results, messaging apps and saved lists. Suggestions become difficult to compare, while one person's opinion can influence the other before both preferences are clear.",
                "The objective was to make discovery visual and lightweight, keep individual choices private, reveal only mutual selections and turn a shared preference into an actual planned outing.",
            ],
        },
        {
            title: "The Solution",
            paragraphs: [
                "Solo discovery lets users search around their current position or a chosen destination, apply filters and review restaurants through an animated card interface.",
                "Duo Tables let two users explore the same selection independently. Individual decisions remain private, while common positive choices appear as shared matches in realtime.",
                "After choosing the same restaurant, both users can propose a date, confirm the outing, open directions, share the plan or add it to their calendar.",
            ],
        },
        {
            title: "Core Features",
            paragraphs: [
                "The experience covers discovery, personal shortlists, private collaboration and the final planning steps in one coherent mobile flow.",
            ],
            bullets: [
                "Restaurant discovery powered by Google Places, with destination, cuisine, price, distance and opening-hours filters.",
                "Gesture-driven cards with visible button alternatives, details, photos, directions and persistent favourites.",
                "Local restoration of unfinished Solo sessions, successive undo and replay without repeating an API search.",
                "Duo invitations through short codes or single-use links, private selections and realtime mutual matches.",
                "Collaborative final selection, date proposals, counter-proposals and outing confirmation.",
                "Native maps, sharing, calendar, location and push-notification integrations.",
                "Light, dark and system themes, account recovery and secure account deletion.",
            ],
        },
        {
            title: "Technical Approach",
            paragraphs: [
                "The application uses Expo Router for typed file-based navigation and Zustand for focused client-side state management. Runtime network responses are validated with Zod.",
                "Restaurant data is retrieved through an authenticated Supabase Edge Function. This keeps the Google Places API key outside the mobile bundle and creates a controlled boundary for validation, filtering and provider errors.",
                "Collaborative operations are implemented as transactional PostgreSQL functions instead of direct client-side writes. Match creation, private choices and outing transitions therefore remain consistent when both participants act simultaneously.",
                "Supabase Realtime acts as a private invalidation channel. Events carry minimal information and trigger an authorized refresh rather than broadcasting sensitive user decisions.",
            ],
        },
        {
            title: "Privacy and Security",
            paragraphs: [
                "Privacy is part of the product behaviour rather than a visual convention. The database and server boundaries enforce what each participant is allowed to know.",
            ],
            bullets: [
                "Individual Duo choices are protected at the database level.",
                "Users can only access Tables in which they participate.",
                "Invitation links are single-use, expiring and stored as cryptographic digests.",
                "Searches do not persist precise user coordinates; favourites and Tables store only Google Place identifiers.",
                "Google credentials never enter the public Expo bundle.",
                "Row-Level Security protects profile, favourite, Table and notification data.",
                "Sensitive transitions are validated server-side and account deletion requires password reauthentication.",
            ],
        },
        {
            title: "State and Reliability",
            paragraphs: [
                "The client architecture explicitly handles asynchronous and collaborative edge cases instead of treating them as exceptional states.",
            ],
            bullets: [
                "Optimistic updates with rollback on failure and protection against stale API responses.",
                "Version-aware Table refreshes and conflict detection for simultaneous outing changes.",
                "Serialized local persistence and graceful handling of unavailable restaurants.",
                "Durable notification delivery with retries and receipt processing.",
            ],
        },
        {
            title: "Main Challenges",
            paragraphs: [
                "Protecting private choices required PostgreSQL authorization rules, not simply hiding decisions in the interface.",
                "Concurrent swipes and outing updates are coordinated through transactional functions, state versions and optimistic concurrency checks.",
                "Google Places data is fetched on demand instead of being permanently duplicated. Precise coordinates remain transient and photos pass through an authenticated server-side proxy.",
                "React Native Gesture Handler and Reanimated keep the restaurant deck on the UI thread while accessible button controls provide an equivalent interaction.",
            ],
        },
        {
            title: "Design Direction",
            paragraphs: [
                "Fooder follows an Editorial Bistro direction. Warm neutral surfaces combine with aubergine, saffron and terracotta accents. Fraunces gives titles and restaurant names an editorial character, while Manrope keeps functional information clear.",
                "The interface supports light, dark and system themes, reduced-motion preferences, accessible labels and visible alternatives to swipe gestures.",
            ],
        },
        {
            title: "My Role",
            paragraphs: [
                "I designed and implemented the application from the initial product flow to the mobile interface, collaborative state model and Supabase backend.",
            ],
            bullets: [
                "Product and interaction design, React Native architecture, navigation and state management.",
                "Gesture-driven interactions, Google Places integration and native device integrations.",
                "PostgreSQL schema, transactional workflows, authentication and authorization.",
                "Realtime synchronization, security, privacy, data minimization and testing.",
            ],
        },
        {
            title: "Current Status",
            paragraphs: [
                "Fooder is a functional prototype connected to a Supabase backend. It is not currently distributed through the App Store or Google Play.",
                "The main product flows are implemented. Store distribution, production monitoring, social authentication and broader end-to-end coverage remain outside the current scope.",
            ],
        },
    ],
} as const satisfies Project;

export const projects: readonly Project[] = [fooderProject];
