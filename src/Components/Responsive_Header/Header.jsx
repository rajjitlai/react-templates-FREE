import React, { useState } from "react";
import { motion } from "framer-motion";
import "./header.scss";

const navVariants = {
    open: {
        clipPath: "circle(130% at 90% 10%)",
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    },
    closed: {
        clipPath: "circle(30px at 90% 10%)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" }
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__logo">LOGO</div>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={navVariants}
                className="header__nav"
            >
                <ul className="header__navList">
                    {navLinks.map((link) => (
                        <li key={link.label} className="header__navItem">
                            <a href={link.path}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
            <button className="header__toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "Menu"}
            </button>
        </header>
    );
};

export default Header;
