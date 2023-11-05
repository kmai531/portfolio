//Dropdown.js
import { Link } from "react-scroll";
import React from "react";
import { useEffect, useState, useRef } from "react";

const Dropdown = () => {
    const [themeMenuOpened, setThemeMenuOpened] = useState(false);
    const themeMenu = useRef(null);
    const themeMenuButton = useRef(null);
    useEffect(() => {
        if (!themeMenuOpened) {
            document.activeElement.blur();
        } else if (
            themeMenuOpened &&
            !themeMenu.current.contains(document.activeElement)
        ) {
            setThemeMenuOpened(false);
        }
    }, [themeMenuOpened]);

    return (
        <>
            <div ref={themeMenu} className="dropdown dropdown-end">
                <div
                    ref={themeMenuButton}
                    tabIndex="0"
                    className="btn btn-square btn-ghost"
                    onBlur={(e) => {
                        setThemeMenuOpened(false);
                    }}
                    onClick={(e) => {
                        if (themeMenuOpened) {
                            setThemeMenuOpened(false);
                        } else {
                            setThemeMenuOpened(true);
                        }
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </div>
                <ul
                    tabIndex="0"
                    className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                    onBlur={(e) => {
                        if (!themeMenu.current.contains(e.relatedTarget)) {
                            setThemeMenuOpened(false);
                        }
                    }}
                    onFocus={(e) => {
                        setThemeMenuOpened(true);
                    }}
                    onClick={() => {
                        setThemeMenuOpened(false);
                        console.log("sup");
                    }}
                >
                    <li>
                        <Link to="home" offset={-130}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="aboutMe" offset={-80}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" offset={-130}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="exp" offset={-130}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                window.my_modal_3.showModal();
                            }}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Dropdown;
