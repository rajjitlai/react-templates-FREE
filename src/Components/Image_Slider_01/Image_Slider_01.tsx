import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import next from "../../assets/next.svg"
import previous from "../../assets/previous.svg"
import { cat01, cat02, cat03, cat04 } from "../../assets/images/index.ts"

import "./styles.css"

const images = [
    cat01,
    cat02,
    cat03,
    cat04,
]

function Carousel({ slides }) {
    const [currentSlide, setCurrentSlide] = React.useState(0);

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
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="slider">
                        <img src={image} alt="img" />
                    </SwiperSlide>
                ))}
                <button className="carousel-button next" onClick={handleNext}>
                    <img src={next} alt="next" />
                </button>
            </Swiper>
        </div>
    )
}

export default Carousel;