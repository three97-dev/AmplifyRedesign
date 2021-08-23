import React from "react";
import PropTypes from "prop-types";

import Text from "../basic/text/Text";

import ImageHeroHomeMobile from "../../assets/hero-home/hero-home-mobile.png";
import ImageHeroHomeTablet from "../../assets/hero-home/hero-home-tablet.png";
import ImageHeroHomeWeb from "../../assets/hero-home/hero-home-web.png";
import ImageHeroHomeWebHd from "../../assets/hero-home/hero-home-webhd.png";

const HeroHome = ({ title, subtitle, className, ...otherProps }) => {
  return (
    <div
      className={`grid justify-items-center w-full h-844px sm+:h-1111px md+:h-768px lg+:h-1080px relative overflow-hidden ${className}`}
      {...otherProps}
    >
      <img src={ImageHeroHomeMobile} alt="hero background" className="absolute -z-10 w-max max-w-none sm+:hidden" />
      <img
        src={ImageHeroHomeTablet}
        alt="hero background"
        className="absolute -z-10 w-max max-w-none hidden sm+:grid md+:hidden"
      />
      <img
        src={ImageHeroHomeWeb}
        alt="hero background"
        className="absolute -z-10 w-max max-w-none hidden md+:grid lg+:hidden"
      />
      <img src={ImageHeroHomeWebHd} alt="hero background" className="absolute -z-10 w-max max-w-none hidden lg+:grid" />

      <div className="w-full xl:max-w-screen-xl justify-self-start xl:justify-self-center grid justify-items-center md+:justify-items-start">
        <div className="md+:ml-139px lg+:ml-140px max-w-318px sm+:max-w-500px md+:max-w-535px lg+:max-w-812px">
          <Text typography="h1" color="text-white" className="text-center md+:text-left mt-177px sm+:mt-270px md+:mt-262px lg+:mt-446px">
            {title}
          </Text>
          <Text typography="h3"  color="text-white" className="text-center md+:text-left mt-24px sm+:mt-19px md+:mt-24px">
            {subtitle}
          </Text>
        </div>
      </div>
    </div>
  );
};

HeroHome.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

HeroHome.defaultProps = {
  title: "Some title",
  subtitle: "Some subtitle",
  className: "",
};

export default HeroHome;
