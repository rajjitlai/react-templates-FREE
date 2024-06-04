import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";
import { cat01, cat02, cat03, cat04 } from "../../assets/images/index.ts";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

const images = [cat01, cat02, cat03, cat04];

function Carousel({ slides = images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        const newSlideIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlideIndex);
    };

    const handleNext = () => {
        const newSlideIndex = (currentSlide + 1) % slides.length;
        setCurrentSlide(newSlideIndex);
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button prev" onClick={handlePrev}>
                <img src={previous} alt="prev" />
            </button>
            <Swiper
                modules={[EffectCoverflow, Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation={{ nextEl: '.next', prevEl: '.prev' }}
                speed={1000}
                slidesPerView={1}
                centeredSlides={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                onSwiper={(swiper) => (swiper)}
            >
                {slides.map((image, index) => (
                    <SwiperSlide key={index} className="slider">
                        <img src={image} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="carousel-button next" onClick={handleNext}>
                <img src={next} alt="next" />
            </button>
        </div>
    );
}

export default Carousel;
