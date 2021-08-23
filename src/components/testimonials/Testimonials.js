import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import Text from "../basic/text/Text";

import QuoteImage from "../../assets/pages/home/testimonials-quote.svg";
import TestimonialsImage from "../../assets/pages/home/testimonials.png";

import "./Testimonials.css";

const Testimonials = ({ sliderHeader, testimonialsSlides }) => {
  const [slider, setSlider] = useState(null);
  const [index, setIndex] = useState(0);

  const settings = {
    arrows: false,
    className: "testimonials-slider-slick",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    beforeChange: (current, next) => setIndex(next),
  };

  return (
    <div className="grid justify-items-center md:testimonials-tablet-grid lg:testimonials-desktop-grid xl:testimonials-hd-grid px-36px md:px-0px">
      <Text typography="h2" className="md:testimonials-header-area md:justify-self-start h-auto md:self-end">
        {sliderHeader}
      </Text>
      <img src={QuoteImage} alt="quote" className="md:testimonials-quote-area mt-20px justify-self-start" />
      <div className="md:testimonials-slide-area">
        <Slider ref={c => setSlider(c)} {...settings}>
          {testimonialsSlides.map((item, slideIndex) => (
            <div className="focus-visible:outline-none" key={slideIndex}>
              <div className="focus-visible:outline-none">
                <Text typography="body" className="mt-20px text-tile-bg-4">
                  {item.slideText}
                </Text>
                <Text typography="h4" className="mt-20px justify-self-start">
                  {item.slideAuthor}
                  <br />
                  {item.authorPosition},
                  <br />
                  {item.authorCompany}
                </Text>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="justify-items-center justify-center items-center md:content-center gap-15px md:gap-17px lg:gap-15px xl:gap-25px w-154px md:w-full md:h-210px lg:h-150px xl:h-316px testimonials-slider-dots flex md:grid md:testimonials-slider-dots-area relative mt-30px md:mt-212px lg:mt-203px xl:mt-312px">
        <div className="w-154px md:w-1px h-1px md:h-210px lg:h-150px xl:h-316px bg-line-color absolute -z-10" />
        {testimonialsSlides.map((item, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => slider.slickGoTo(slideIndex)}
            className={`text-transparent outline-none ${
              slideIndex === index
                ? "slick-active w-8px xl:w-14px h-8px xl:h-14px"
                : "w-10px xl:w-16px h-10px xl:h-16px"
            }`}
          />
        ))}
      </div>
      <img
        src={TestimonialsImage}
        alt="testimonials"
        className="mt-30px md:mt-0px w-full max-w-536px md:testimonials-image-area"
      />
    </div>
  );
};

Testimonials.propTypes = { sliderHeader: PropTypes.string, slideText: PropTypes.string };

Testimonials.defaultProps = {
  sliderHeader: "Testimonials",
  testimonialsSlides: [
    {
      slideText: "Text 1",
      slideAuthor: "Author 1",
      authorPosition: "Position 1",
      authorCompany: "Company 1",
    },
    {
      slideText: "Text 2",
      slideAuthor: "Author 2",
      authorPosition: "Position 2",
      authorCompany: "Company 2",
    },
  ],
};

export default Testimonials;
