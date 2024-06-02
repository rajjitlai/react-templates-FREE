import { useState } from "react"
import { motion } from "framer-motion"

import "./header.scss"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navbar = {
        open: () => ({
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
            transition: {
                type: "spring",
                stiffness: 200,
                resDelta: 1,
            }
        }),
        closed: () => ({
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        })
    }

    const navLinks = [
        { label: "Home", icon: "bx bx-home" },
        { label: "Projects", icon: "bx bx-briefcase" },
        { label: "Blog", icon: "bx bs-edit" },
        { label: "Testimonials", icon: "bx bx-message-square-dots" },
        { label: "About Us", icon: "bx bx-info-circle" },
        { label: "Contact Us", icon: "bx bx-envelope" },
    ]

    return (
        <div className="header">
            <div className="header__Logo">
                <span>LOGO</span>
                <h1>Head</h1>
            </div>
            <div className="header__Icon">
                <i className="bx bx-menu" onClick={() => setIsOpen(isOpen => !isOpen)}></i>
            </div>
            <motion.ul className="header__Nav" animate={isOpen ? "open" : "closed"} variants={navbar} >
                {navLinks.map((link) => (
                    <li className="nItem" key={link.label} onClick={() => setIsOpen(isOpen => !isOpen)}>
                        <i className={link.icon}></i>
                        {link.label}
                    </li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Header