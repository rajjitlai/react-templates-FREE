import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const Slides = [

]

function Carousel({slides}: Props){
    return(
        <Swiper modules={[EffectCoverflow, Navigation, Pagination]} pagination={{
            clickable: true,
        }}
        speed={1000}
        slidesPerView={"auto"}
        centeredSlides
        effect={"coverflow"}
        coverflowEffect={{
            rotate: 50, stretch: 0, depth: 100, modifier: 1,
            slideShadows: true,
        }}
        >
            {slides.map((slide, index) =>(
                <SwiperSlide key={index} className="slider">
                    <img src={slide} alt="" />
                </SwiperSlide>
            ))}
            
        </Swiper>
    )
}