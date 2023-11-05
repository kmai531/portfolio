import React from "react";
import p1 from "../images/2.jpg";
import p2 from "../images/3.jpg";
import p3 from "../images/4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectCard({ title, description, imgSrc, tags = [], linkSrc }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.02,
    });

    return (
        <motion.div
            ref={ref}
            className="card lg:card-side bg-base-100 shadow-2xl mb-24"
            data-theme="light"
            variants={{
                hidden: { opacity: 0, scale: 1, y: "0%" },
                visible: { opacity: 1, scale: 1, y: 0 },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
                ease: "easeOut",
                duration: 1.45,
                delay: 0.15,
            }}
        >
            <figure className="max-w-sm max-h-sm w-64 h-64 overflow-hidden rounded">
                <img
                    className="w-full h-full object-cover"
                    src={imgSrc}
                    alt={title}
                />
            </figure>
            <div className="card-body justify-center">
                <motion.h2 className="card-title justify-center">
                    {title}
                </motion.h2>
                <div className="text-center">
                    <p className="w-1/2">{description}</p>
                    <div className="flex gap-x-2 justify-center mt-5">
                        {tags.map((tag, idx) => {
                            console.log(tag);
                            return (
                                <label
                                    key={idx}
                                    data-theme="corporate"
                                    className="badge badge-outline"
                                >
                                    {tag}
                                </label>
                            );
                        })}
                    </div>
                    <div className="card-actions justify-center my-5">
                        <button className="btn btn-sm btn-outline btn-info border-0 custom-btn">
                            View Project
                            <FontAwesomeIcon icon={faLink} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <div className="mx-72">
            <h1 className="text-4xl flex justify-center font-bold mb-10">
                Projects
            </h1>
            <ProjectCard
                title="Coffee Maker"
                description="Java Coffee Maker Woah woah"
                imgSrc={p1}
                tags={["Java", "HTML", "CSS"]}
            ></ProjectCard>
            <ProjectCard
                title="Game Engine"
                description="Game engine built in C++ jlksdjaklsjdalskjdaksldjaksljdsalkdjalksjdlkasjdlksajdlkasjdlksjdlkajd"
                imgSrc={p2}
                tags={["C++"]}
            ></ProjectCard>
            <ProjectCard
                title="Game AI projects"
                description="Game AI built in C++"
                imgSrc={p3}
                tags={["C++"]}
            ></ProjectCard>
        </div>
    );
}
