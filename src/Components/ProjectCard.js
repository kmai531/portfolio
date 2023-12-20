import p1 from "../images/coffee.jpg";
import p2 from "../images/brick.png";
import p3 from "../images/gameai.jpg";
import p4 from "../images/image.png";
import howler from "../images/howler.png";
import timestamp from "../images/Timestamp.png"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import './path-to-your-css-file.css'; // Import your CSS file if it's not globally available

function HorizontalCard({ title, description, imgSrc, tags = [], link }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.02,
    });
    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, scale: 1, y: "20%" },
                visible: { opacity: 1, scale: 1, y: 0 },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
                ease: "easeOut",
                duration: 0.65,
                delay: 0.15,
            }}
            className="my-card mb-20 flex flex-col"
        >
            <Card horizontal imgSrc={imgSrc} className="card">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                    <span className="flex items-center gap-2">
                        <span>{title}</span>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm text-xl btn-outline  border-0 custom-btn"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </span>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span>
                        {description}
                        <span className="flex gap-x-2 mt-5 flex-wrap gap-y-2 items-center">
                            {tags.map((tag, idx) => {
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
                        </span>
                    </span>
                </p>
            </Card>
        </motion.div>
    );
}

export default function ProjectsCards() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl flex justify-center font-bold mb-16">
                Projects
            </h1>
            <div className="sm:my-10 lg:my-0 flex flex-col">
                <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 min-[1250px]:gap-20 min-[1250px]:grid-cols-2 min-[1910px]:grid-cols-3">
                    <li>
                        <HorizontalCard
                            title="TimeStamp"
                            description="a PWA that simulates a simple payroll application that supports self-employed users, employee, and employer."
                            imgSrc={timestamp}
                            tags={["React", "Tailwind", "NodeJS", "Express", "Docker", "MySQL"]}
                            link="https://github.com/kmai531/TimeStamp"
                        ></HorizontalCard>
                    </li>
                    <li>
                        <HorizontalCard
                            title="WebDev practices"
                            description="A collection of assignments from an Applied Web-Based Client-Server Computing class."
                            imgSrc={howler}
                            tags={["Java", "HTML", "CSS", "NodeJS", "Express"]}
                            link="https://github.com/kmai531/WebDev-Assignments"
                        ></HorizontalCard>
                    </li>
                    <li>
                        <HorizontalCard
                            title="Coffee Maker"
                            description="Coffee Maker that provides a user-friendly interface for admins to manage inventory and for customers to place orders."
                            imgSrc={p1}
                            tags={[
                                "Java",
                                "HTML",
                                "CSS",
                                "AngularJS",
                                "REST API",
                            ]}
                            link="https://github.com/kmai531/Coffee_Maker_NCSU"
                        ></HorizontalCard>
                    </li>
                    <li>
                        <HorizontalCard
                            title="Game AI projects"
                            description="A collection of projects that explores various steering behaviors, pathfinding algorithms, and decision-making frameworks"
                            imgSrc={p3}
                            tags={["C++"]}
                            link="https://github.com/kmai531/GameAI"
                        ></HorizontalCard>
                    </li>
                    <li>
                        <HorizontalCard
                            title="Game Engine"
                            description="A project built in C++ that explores the features of commercial game engines"
                            imgSrc={p2}
                            tags={["C++"]}
                            link="https://github.com/kmai531/GameEngine"
                        ></HorizontalCard>
                    </li>
                    <li>
                        <HorizontalCard
                            title={"Coffee Maker V2"}
                            description={
                                "The project is designed to rebuild CoffeeMaker with the NextJS framework. [In progress]"
                            }
                            imgSrc={p4}
                            tags={["NextJS"]}
                            link="https://github.com/kmai531/Coffee_Maker"
                        ></HorizontalCard>
                    </li>
                </ul>
                <div className=" mt-24"></div>
            </div>
        </div>
    );
}
