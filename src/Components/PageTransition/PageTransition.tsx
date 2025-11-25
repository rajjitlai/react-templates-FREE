import React from 'react'
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import "./transition.css"

const Home = () => <main>Home</main>
const About = () => <main>About</main>
const Work = () => <main>Work</main>

const Bars = () => {
    return (
        <div id='bars' className='bars'>
            <div />
            <div style={{ animationDelay: "0.1s" }} />
            <div style={{ animationDelay: "0.3s" }} />
            <div style={{ animationDelay: "0.5s" }} />
            <div style={{ animationDelay: "0.8s" }} />
        </div>
    )
}

const Link = ({ to, children }) => {
    const navigate = useNavigate()
    const handleClicked = () => {
        const bars = document.getElementById("bars")

        bars?.classList.add("show")

        setTimeout(() => {
            bars?.classList.remove("show")
            bars?.classList.add("hide")
            navigate(to)
        }, 800)
    }

    return (
        <a onClick={handleClicked}>
            {children}
        </a>
    )
}

const Layout = () => {
    return (
        <>
            <nav>
                <h1>Portfolio</h1>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                </ul>
            </nav>
            <Bars />
            <Outlet />
        </>
    )
}

const PageTransition = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='home' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='work' element={<Work />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageTransition