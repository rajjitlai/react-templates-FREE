import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import next from "../../assets/next.svg"
import previous from "../../assets/previous.svg"
import { cat01, cat02, cat03, cat04 } from "../../assets/images/index.ts"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./styles.css"

const images = [cat01, cat02, cat03, cat04]

function Carousel({ slides = images }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handlePrev = () => {
        const newSlideIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        setCurrentSlide(newSlideIndex)
    }

    const handleNext = () => {
        const newSlideIndex = (currentSlide + 1) % slides.length
        setCurrentSlide(newSlideIndex)
    }

    return (
        <div className="image-slider">
            <div className="image-slider__container">
                <button 
                    className="image-slider__button image-slider__button--prev" 
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    <img src={previous} alt="Previous" />
                </button>
                <Swiper
                    modules={[EffectCoverflow, Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    navigation={{ nextEl: '.image-slider__button--next', prevEl: '.image-slider__button--prev' }}
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
                    className="image-slider__swiper"
                >
                    {slides.map((image, index) => (
                        <SwiperSlide key={index} className="image-slider__slide">
                            <div className="image-slider__image-wrapper">
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button 
                    className="image-slider__button image-slider__button--next" 
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    <img src={next} alt="Next" />
                </button>
            </div>
            <div className="image-slider__indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`image-slider__indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel

