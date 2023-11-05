import React from "react";
import character from "../images/Group 278.png"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    return (
        <div className="hero my-36" data-theme="cupcake">
            <div className="hero-content flex-col lg:flex-row justify-center gap-20">
                <motion.div
                    className="flex justify-content lg:mr-12 max-w-sm "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                >
                    <img
                        src={character}
                        className="max-w-sm rounded-lg"
                        alt="pictureCharacter"
                    />
                </motion.div>

                <motion.div className="w-4/10 ml-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-5xl font-bold text-center"
                    >
                        Kuangyao Mai
                    </motion.h1>
                    <div className="flex justify-center pt-4">
                        <svg
                            className="w-full"
                            height="4"
                            viewBox="0 0 300 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.9,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                d="M2 2L300 1.99998"
                                stroke="url(#paint0_linear_6_519)"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_6_519"
                                    x1="202.5"
                                    y1="2"
                                    x2="0.999995"
                                    y2="2"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#DC3284" />
                                    <stop offset="1" stopColor="#DC3232" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <motion.h3
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="pt-4 text-center text-xl"
                    >
                        Software Developer
                    </motion.h3>

                    {/* 
                    <div className="flex justify-center">
                        <button className="btn btn-outline btn-neutral" data-theme="bumblebee">Resume
                        <FontAwesomeIcon icon={faFileCode} />
                        </button>
                    </div> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex justify-center mt-1"
                    >
                        <a href="https://www.linkedin.com/in/kuangyao-mai-3045961a0/" target="_blank" rel="noreferrer" className="btn btn-sm text-2xl btn-outline  border-0 custom-btn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="mailto:maikuangyao9428@gmail.com" target="_blank" rel="noreferrer" className="btn btn-sm text-2xl btn-outline  border-0 custom-btn">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://github.com/kmai531" target="_blank" rel="noreferrer" className="btn btn-sm text-2xl btn-outline  border-0 custom-btn">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
