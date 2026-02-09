import { stackGroups } from "../../content/skills";
import StackTags from "../ui/stack-tags";

export default function SkillsSection() {
    return (
        <section id="stack" aria-labelledby="stack-title" className="section-row">
            <div className="container-shell grid-12">
                <div className="col-span-12 section-heading-wrap">
                    <h2 id="stack-title" className="section-title">
                        Stack
                    </h2>
                    <p className="section-muted">Grouped by delivery scope with clear proficiency levels and focused motion on key tools.</p>
                </div>

                <div className="col-span-12">
                    <StackTags groups={stackGroups} />
                </div>
            </div>
        </section>
    );
}
