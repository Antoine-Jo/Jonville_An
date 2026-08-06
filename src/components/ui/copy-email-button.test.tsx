import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import CopyEmailButton from "./copy-email-button";

describe("CopyEmailButton", () => {
    afterEach(() => vi.useRealTimers());

    it("copies the address and resets feedback after the latest click", async () => {
        vi.useFakeTimers();
        const writeText = vi.fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
        render(<CopyEmailButton email="hello@example.com" />);

        fireEvent.click(screen.getByRole("button", { name: "copy email" }));
        await act(async () => Promise.resolve());
        expect(screen.getByRole("button", { name: "copied" })).toBeInTheDocument();
        expect(writeText).toHaveBeenCalledWith("hello@example.com");

        act(() => vi.advanceTimersByTime(800));
        fireEvent.click(screen.getByRole("button", { name: "copied" }));
        await act(async () => Promise.resolve());
        act(() => vi.advanceTimersByTime(800));
        expect(screen.getByRole("button", { name: "copied" })).toBeInTheDocument();

        act(() => vi.advanceTimersByTime(400));
        expect(screen.getByRole("button", { name: "copy email" })).toBeInTheDocument();
    });
});
