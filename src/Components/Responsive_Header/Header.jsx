import { useState } from "react"
import { motion } from "framer-motion"

import "./header.css"

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
        { label: "Home", icon: "" },
        { label: "Projects", icon: "" },
        { label: "Blog", icon: "" },
        { label: "Testimonials", icon: "" },
        { label: "About Us", icon: "" },
        { label: "Contact Us", icon: "" },
    ]

    return (
        <div className="header">
            <div className="header__Logo">
                <img src="" alt="logo" />
                <h1>Head</h1>
            </div>
            <div className="header__Icon">
                <p onClick={() => setIsOpen(isOpen => !isOpen)}>C</p>
            </div>
            <motion.ul className="header__Nav" animate={isOpen ? "open" : "closed"} variants={navbar} >
                {navLinks.map((link) => (
                    <li className="nItem" key={link.label} onClick={() => setIsOpen(isOpen => !isOpen)}>
                        <p className={link.icon}>c</p>
                        {link.label}
                    </li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Header