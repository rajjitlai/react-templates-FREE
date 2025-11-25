
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"

import { useState } from 'react'

import "./menu_01.css"

const navs = [
    {
        id: 'about',
        content: (
            <>
                <h2>About</h2>
                <nav>
                    <a style={{ animationDelay: "0.8s" }}>Profile</a>
                    <a style={{ animationDelay: "0.9s" }}>Skills</a>
                    <a style={{ animationDelay: "1" }}>Experience</a>
                </nav>
            </>
        )
    }
]

const Menu_01 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const openClass = isOpen ? 'open' : '';

    return (
        <>
            <div className={`background ${openClass}`}></div>
            <button className={`burger ${openClass}`} onClick={toggleMenu}>
            </button>
            <div className={`menu ${openClass}`}>
                <Swiper speed={750} modules={[Navigation]} navigation>
                    {navs.map(nav => (
                        <SwiperSlide key={nav.id}>
                            {nav.content}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Menu_01