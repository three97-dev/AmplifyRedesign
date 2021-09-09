import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Slider from "react-slick";

import Image from "../basic/image/Image";
import Text from "../basic/text/Text";

import QuoteImage from "../../assets/pages/home/testimonials-quote.svg";
import TestimonialsArrow from "../../assets/pages/blog/testemonials-arrow-left-mobile.svg";
import TestimonialsTablet from "../../assets/pages/home/testimonials-bg-tablet.svg";
import TestimonialsWeb from "../../assets/pages/home/testimonials-bg-web.svg";
import TestimonialsWebHD from "../../assets/pages/home/testimonials-bg-webhd.svg";

import "./Testimonials.css";

const Testimonials = ({ title, image, testimonialsToShow, className, ...otherProps }) => {
  const [slider, setSlider] = useState(null);
  const [index, setIndex] = useState(0);

  const settings = {
    arrows: false,
    className: "testimonials-slider-slick",
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    beforeChange: (current, next) => setIndex(next),
  };

  function next() {
    slider.slickNext();
  }
  function previous() {
    slider.slickPrev();
  }

  return (
    <div
      className={`grid relative overflow-hidden justify-items-center md:testimonials-tablet-grid lg:testimonials-desktop-grid xl:testimonials-hd-grid px-36px md:px-0px ${className}`}
      {...otherProps}
    >
      <img
        src={TestimonialsTablet}
        alt="background"
        className="hidden md:block lg:hidden absolute -z-10 -bottom-93px right-26px max-w-none"
      />
      <img
        src={TestimonialsWeb}
        alt="background"
        className="hidden lg:block xl:hidden absolute -z-10 bottom-28px right-2px max-w-none"
      />
      <img
        src={TestimonialsWebHD}
        alt="background"
        className="hidden xl:block absolute -z-10 bottom-101px right-202px max-w-none"
      />
      <Text typography="h2" className="md:testimonials-header-area md:justify-self-start h-auto md:self-end">
        {title}
      </Text>
      <img
        src={QuoteImage}
        alt="quote"
        className="md:testimonials-quote-area mt-20px md:mt-26px lg:mt-20px xl:w-60px justify-self-start"
      />
      <div className="md:testimonials-slide-area">
        <Slider ref={c => setSlider(c)} {...settings}>
          {testimonialsToShow.map((item, slideIndex) => (
            <div className="focus-visible:outline-none" key={slideIndex}>
              <div className="focus-visible:outline-none">
                <Text text={item.testimonial} typography="body" className="mt-20px text-tile-bg-4" />
                <div className="text-h4 md:text-testimonialsTablet xl:text-testimonialsWebhd text-fontcolor-h4 mt-20px justify-self-start">
                  <b>{item.author}</b>
                  <br />
                  {item.authorPosition},
                  <br />
                  {item.authorCompany}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex md:grid md:h-320px xl:h-428px w-full justify-between md:justify-center items-center md:content-center  md:testimonials-slider-dots-area relative mt-24px md:mt-155px lg:mt-146px xl:mt-255px ">
        <button className="-mt-5px -mb-5px -mx-5px md:mb-15px" onClick={previous}>
          <img src={TestimonialsArrow} alt="previous slide" className="transform md:rotate-90 m-5px" />
        </button>
        <div className="md:grid justify-center justify-items-center md:content-center items-center gap-15px md:gap-15px lg:gap-15px xl:gap-20px  md:w-full md:h-210px lg:h-212px xl:h-312px testimonials-slider-dots flex md:grid">
          <div className="md:justify-self-center w-154px md:w-1px h-1px md:h-210px lg:h-212px xl:h-312px bg-line-color3 absolute -z-10" />
          {testimonialsToShow.map((item, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => slider.slickGoTo(slideIndex)}
              aria-label={`Testimonial ${slideIndex + 1}`}
              className={`text-transparent outline-none ${
                slideIndex === index
                  ? "slick-active w-8px xl:w-14px h-8px xl:h-14px"
                  : "w-10px xl:w-16px h-10px xl:h-16px"
              }`}
            />
          ))}
        </div>
        <button className="-mt-5px -mb-5px -mx-5px md:mt-15px" onClick={next}>
          <img src={TestimonialsArrow} alt="next slide" className="transform rotate-180 md:-rotate-90 m-5px" />
        </button>
      </div>
      <Image image={image} className="mt-15px md:mt-0px w-full max-w-536px md:testimonials-image-area" />
    </div>
  );
};

Testimonials.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  testimonialsToShow: PropTypes.array,
  className: PropTypes.string,
};

Testimonials.defaultProps = {
  title: "Testimonials",
  testimonialsToShow: [],
  className: "",
};

export default Testimonials;

export const query = graphql`
  fragment TestimonialToShow on ContentfulTestimonialItem {
    author
    authorCompany
    authorPosition
    testimonial {
      childMarkdownRemark {
        html
      }
    }
  }
  fragment Testimonials on ContentfulTestimonials {
    title
    image {
      ...Image
    }
    testimonialsToShow {
      ...TestimonialToShow
    }
  }
`;
