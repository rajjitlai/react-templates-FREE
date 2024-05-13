import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./dropdown_04.css";
import account from "../../assets/account.png"

import menu from "../../assets/menu.svg"
import down from "../../assets/down.svg"
import close from "../../assets/close.svg"

const slides = [
    {
        name: "Menu icon",
        image: menu,
        items: [
            "menu",
            "icon"
        ]
    }
]

export const DropDown_04 = () => {
    return (
        <div className="dropdown">
            <button>Skills</button>
            <div className="menu">
                <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
                    {slides.map(slide => (
                        <SwiperSlide key={slide.name}>
                            <img src={slide.image} alt={slide.name} />
                            <div>
                                <h2>{slide.name}</h2>
                                <div className="links">
                                    {slide.items?.map(item => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}