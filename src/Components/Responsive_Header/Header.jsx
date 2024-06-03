import { useState } from 'react';
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

    return (
        <header className="header">
            <div className="header__logo">LOGO</div>
            <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
                <ul className="header__navList">
                    {navLinks.map((link) => (
                        <li key={link.label} className="header__navItem">
                            <a href={link.path}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="header__toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <img src={close} alt="close" style={{ filter: "invert(1)" }} /> : <img src={menu} alt='menu' style={{ filter: "invert(1)" }} />}
            </button>
        </header>
    );
};

export default Header;
