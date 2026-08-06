import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FooderCaseStudyPage from "./page";

describe("FooderCaseStudyPage", () => {
    it("renders the case study and its landing-page calls to action", () => {
        render(<FooderCaseStudyPage />);

        expect(screen.getByRole("heading", { level: 1, name: "Fooder" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Privacy and Security" })).toBeInTheDocument();
        const landingLinks = screen.getAllByRole("link", { name: /landing page/i });
        expect(landingLinks).toHaveLength(2);
        for (const link of landingLinks) expect(link).toHaveAttribute("href", "https://fooder-landing.vercel.app");
    });
});
