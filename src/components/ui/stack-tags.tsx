"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { StackGroup, StackTag } from "../../content/skills";

type StackTagsProps = {
    groups: StackGroup[];
};

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 14,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.36,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

function TagChip({ tag, index, reduceMotion }: { tag: StackTag; index: number; reduceMotion: boolean }) {
    const levelClass = `level-${tag.level.toLowerCase()}` as const;
    const featuredClass = tag.animated ? "is-featured" : "";

    return (
        <motion.li
            variants={reduceMotion ? undefined : itemVariants}
            className={`terminal-tag ${levelClass} ${featuredClass}`}
            whileHover={
                reduceMotion
                    ? undefined
                    : {
                          y: -3,
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 320, damping: 22, mass: 0.45 },
                      }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            data-cursor-target
        >
            <span>{tag.label}</span>
            <span className="mono tag-level">{tag.level}</span>
        </motion.li>
    );
}

export default function StackTags({ groups }: StackTagsProps) {
    const reduceMotion = useReducedMotion();

    return (
        <div className="stack-groups-grid">
            {groups.map((group) => (
                <section key={group.title} className="stack-group">
                    <header className="stack-group-head">
                        <h3 className="stack-group-title">{group.title}</h3>
                    </header>
                    <motion.ul
                        className="stack-tags-list"
                        aria-label={`${group.title} stack`}
                        variants={reduceMotion ? undefined : listVariants}
                        initial={reduceMotion ? undefined : "hidden"}
                        whileInView={reduceMotion ? undefined : "visible"}
                        viewport={{ once: true, amount: 0.45 }}
                    >
                        {group.tags.map((tag, index) => (
                            <TagChip key={`${group.title}-${tag.label}`} tag={tag} index={index} reduceMotion={Boolean(reduceMotion)} />
                        ))}
                    </motion.ul>
                </section>
            ))}
        </div>
    );
}
