import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { fooderProject } from "../../content/projects";
import ProjectCard from "./project-card";

describe("ProjectCard", () => {
    it("links Fooder to its case study with project details", () => {
        render(<ProjectCard project={fooderProject} />);

        expect(screen.getByRole("heading", { name: "Fooder" })).toBeInTheDocument();
        expect(screen.getByRole("link")).toHaveAttribute("href", "/projects/fooder");
        expect(screen.getByText("Functional prototype")).toBeInTheDocument();
    });
});
