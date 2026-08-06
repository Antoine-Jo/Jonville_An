import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Reveal from "./reveal";

describe("Reveal", () => {
    it("keeps reduced-motion content in the document without observing it", () => {
        vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({ matches: true }));
        const observer = vi.fn();
        vi.stubGlobal("IntersectionObserver", observer);

        render(<Reveal>Accessible content</Reveal>);

        expect(screen.getByText("Accessible content")).toBeInTheDocument();
        expect(screen.getByText("Accessible content")).toHaveClass("reveal");
        expect(observer).not.toHaveBeenCalled();
    });

    it("disconnects its intersection observer after revealing content", () => {
        const disconnect = vi.fn();
        let callback: IntersectionObserverCallback | undefined;
        vi.stubGlobal(
            "IntersectionObserver",
            vi.fn().mockImplementation((nextCallback: IntersectionObserverCallback) => {
                callback = nextCallback;
                return { observe: vi.fn(), disconnect };
            })
        );

        render(<Reveal>Observed content</Reveal>);
        act(() => callback?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));

        expect(disconnect).toHaveBeenCalled();
        expect(screen.getByText("Observed content")).toHaveClass("reveal--visible");
    });
});
