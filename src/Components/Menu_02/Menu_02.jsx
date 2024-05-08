import { useState } from "react"

import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom"

import "./menu_02.css"

const links = [
    "about",
    "blog",
    "services",
    "contact",
]


const Layout = () => {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const isOpen = isMenuOpen ? "open" : ""

    const onClick = (href) => {
        toggleMenu()
        navigate(href)
    }

    return (
        <>
            <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
            <div className={`background ${isOpen}`}></div>
            <div className={`menu ${isOpen}`}>
                <nav>
                    {links.map((link, index) => (
                        <a key={link} className={isMenuOpen ? "appear" : ""} style={{ animationDelay: `0.${index + 1}s` }} onClick={() => onClick(link)}>
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
            <main className={`page ${isOpen}`}>
                <Outlet />
            </main>
        </>
    )
}

const Page = ({ title, content }) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{content}</p>
        </>
    )
}

const About = () => {
    <Page title="About" content={`ABout me`} />
}

const Menu_02 = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Menu_02