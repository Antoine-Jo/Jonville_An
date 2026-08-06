import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import MobileNav from "./mobile-nav";

const items = [
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
];

describe("MobileNav", () => {
    it("connects the trigger to the panel and restores focus on Escape", async () => {
        const user = userEvent.setup();
        render(<MobileNav items={items} />);

        const button = screen.getByRole("button", { name: "Open menu" });
        await user.click(button);

        const navigation = screen.getByRole("navigation", { name: "Mobile navigation" });
        expect(button).toHaveAttribute("aria-controls", navigation.id);
        expect(button).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("link", { name: "Projects" })).toHaveFocus();

        await user.keyboard("{Escape}");

        expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Open menu" })).toHaveFocus();
    });
});
