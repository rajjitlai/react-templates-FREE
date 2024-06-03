import { useState } from 'react';
import { motion } from 'framer-motion';
import './header.scss';
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        { label: "Blog", path: "/blog" },
        { label: "Testimonials", path: "/testimonials" },
        { label: "About Us", path: "/about" },
        { label: "Contact Us", path: "/contact" },
    ];

    const navVariants = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
        },
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
        },
    };

    return (
        <header className="header">
            <div className="header__logo">LOGO</div>
            <motion.nav
                className="header__nav"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={navVariants}
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
                {isOpen ? <img src={close} alt="close" style={{ filter: "invert(1)" }} /> : <img src={menu} alt='menu' style={{ filter: "invert(1)" }} />}
            </button>
        </header>
    );
};

export default Header;
