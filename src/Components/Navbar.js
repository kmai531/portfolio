import React from "react";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

//

const navBarVariant = {
    hidden: {
        opacity: 0,
        y: "-100%",
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.95,
            type: "tween",
        },
    },
};

export default function Navbar() {
    return (
        <motion.div
            className="navbar min-w-sm h-20 drop-shadow fixed z-10"
            data-theme="light"
            initial="hidden"
            animate="visible"
            variants={navBarVariant}
        >
            <div className="flex-1 lg:pl-5">
                <button
                    onClick={() => console.log("hi")}
                    className="btn btn-ghost normal-case font-normal text-2xl hover:bg-transparent md:text-left"
                >
                    Kuangyao Mai
                </button>
            </div>
            <div className="flex-none pr-5 md:block hidden">
                <ul className="menu menu-horizontal px-1 text-base">
                    <li>
                        <Link to="home" offset={-130}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="aboutMe" offset={-130}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" offset={-130}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="exp">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <a
                            onClick={() => {
                                window.my_modal_3.showModal();
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="md:hidden block lg:pr-5">
                <Dropdown />
            </div>
        </motion.div>
    );
}
