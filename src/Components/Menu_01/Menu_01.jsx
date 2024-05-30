import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { useState } from 'react';

import './menu_01.css';

const navs = [
    {
        key: 'about',
        title: 'About',
        links: ['Profile', 'Skills', 'Experience'],
    },
];

const Menu_01 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className={`background ${isOpen ? 'open' : ''}`}></div>
            <button className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <Swiper speed={750} modules={[Navigation]} navigation>
                    {navs.map((nav) => (
                        <SwiperSlide key={nav.key}>
                            <div className="nav-content">
                                <h2>{nav.title}</h2>
                                <nav>
                                    {nav.links.map((link, index) => (
                                        <a key={link} style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                                            {link}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Menu_01;