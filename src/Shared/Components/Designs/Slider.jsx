


import React, { useState } from 'react'

import './Slider.scss'

const Slide = (props) => {
  return (
    <div
          className="slider__slide"
          data-active={props.active}
          style={{backgroundImage: `url( ${props.background})`}}
        >
          <div className="slider__slide__text">{props.text}</div>
        </div>
  )
}
const Slider = ({slides}) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const prevSlide = () => {
    let slide = activeSlide - 1 < 0
      ? slides.length - 1
      : activeSlide - 1;
    setActiveSlide(slide)
  }
  const nextSlide = () => {
    let slide = activeSlide + 1 < slides.length
      ? activeSlide + 1
      : 0;
    setActiveSlide(slide)
  }
  return (
    <div className="slider-container">
          {slides.map((slide, index, array) => {
            return (
              <Slide
                key={index}
                background={slide.background}
                text={slide.text}
                active={index === activeSlide}
              />
            );
          })}
        <div className="leftArrow" onClick={nextSlide.bind(this)}>
          next  
        </div>
        <div className="rightArrow" onClick={prevSlide.bind(this)}> prev</div>
      </div>
  )
}

export default Slider


