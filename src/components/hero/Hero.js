import React from "react";
import PropTypes from "prop-types";

import Text from "../basic/text/Text";

// type1
import ImageHeroType1Mobile from "../../assets/hero/hero-type1-mobile.png";
import ImageHeroType1Tablet from "../../assets/hero/hero-type1-tablet.png";
import ImageHeroType1Web from "../../assets/hero/hero-type1-web.png";
import ImageHeroType1WebHd from "../../assets/hero/hero-type1-webhd.png";
// type2
import ImageHeroType2Mobile from "../../assets/hero/hero-type2-mobile.png";
import ImageHeroType2Tablet from "../../assets/hero/hero-type2-tablet.png";
import ImageHeroType2Web from "../../assets/hero/hero-type2-web.png";
import ImageHeroType2WebHd from "../../assets/hero/hero-type2-webhd.png";
// type3
import ImageHeroType3Mobile from "../../assets/hero/hero-type3-mobile.png";
import ImageHeroType3Tablet from "../../assets/hero/hero-type3-tablet.png";
import ImageHeroType3Web from "../../assets/hero/hero-type3-web.png";
import ImageHeroType3WebHd from "../../assets/hero/hero-type3-webhd.png";
// type4
import ImageHeroType4Mobile from "../../assets/hero/hero-type4-mobile.png";
import ImageHeroType4Tablet from "../../assets/hero/hero-type4-tablet.png";
import ImageHeroType4Web from "../../assets/hero/hero-type4-web.png";
import ImageHeroType4WebHd from "../../assets/hero/hero-type4-webhd.png";

import "./Hero.css";

const BACKGROUNDS = {
  type1: {
    imageMobile: ImageHeroType1Mobile,
    imageMobileCss: "-mt-22px",
    imageTablet: ImageHeroType1Tablet,
    imageTabletCss: "-mt-42px",
    imageWeb: ImageHeroType1Web,
    imageWebCss: "-mt-34px",
    imageWebHd: ImageHeroType1WebHd,
    imageWebHdCss: "-mt-50px",
    heightCss: "h-890px sm+:h-1185px md+:h-852px lg+:h-1215px",
    titlePositionsDefaults: "mt-531px sm+:mt-507px md+:mt-333px lg+:mt-465px",
    subtitlePositionsDefaults: "mt-24px lg+:mt-34px sm+:ml-1px lg+:ml-3px",
  },
  type2: {
    imageMobile: ImageHeroType2Mobile,
    imageMobileCss: "-mt-18px",
    imageTablet: ImageHeroType2Tablet,
    imageTabletCss: "-mt-42px",
    imageWeb: ImageHeroType2Web,
    imageWebCss: "-mt-36px",
    imageWebHd: ImageHeroType2WebHd,
    imageWebHdCss: "-mt-50px",
    heightCss: "h-930px sm+:h-1196px md+:h-880px lg+:h-1196px",
    titlePositionsDefaults: "mt-432px sm+:mt-580px md+:mt-263px lg+:mt-442px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px",
  },
  type3: {
    imageMobile: ImageHeroType3Mobile,
    imageMobileCss: "",
    imageTablet: ImageHeroType3Tablet,
    imageTabletCss: "",
    imageWeb: ImageHeroType3Web,
    imageWebCss: "-mt-34px",
    imageWebHd: ImageHeroType3WebHd,
    imageWebHdCss: "-mt-34px",
    heightCss: "h-844px sm+:h-1189px md+:h-904px lg+:h-1262px",
    titlePositionsDefaults: "mt-462px sm+:mt-580px md+:mt-306px lg+:mt-442px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px",
  },
  type4: {
    imageMobile: ImageHeroType4Mobile,
    imageMobileCss: "",
    imageTablet: ImageHeroType4Tablet,
    imageTabletCss: "",
    imageWeb: ImageHeroType4Web,
    imageWebCss: "-mt-25px",
    imageWebHd: ImageHeroType4WebHd,
    imageWebHdCss: "-mt-25px",
    heightCss: "h-924px sm+:h-1183px md+:h-843px lg+:h-1198px",
    titlePositionsDefaults: "mt-462px sm+:mt-580px md+:mt-306px lg+:mt-442px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px",
  },
};

const resolveBackgrounds = type => {
  const resolvedImages = BACKGROUNDS[type];
  if (!resolvedImages) {
    throw new Error(`Failed to resolve backgrounds type: ${type}`);
  }
  return resolvedImages;
};

const Hero = ({ titlePositions, title, subtitlePositions, subtitle, type, className, ...otherProps }) => {
  const {
    imageMobile,
    imageMobileCss,
    imageTablet,
    imageTabletCss,
    imageWeb,
    imageWebCss,
    imageWebHd,
    imageWebHdCss,
    heightCss,
    titlePositionsDefaults,
    subtitlePositionsDefaults,
  } = resolveBackgrounds(type);
  return (
    <div
      className={`grid hero-grid-mobile sm+:hero-grid justify-items-center w-full relative overflow-hidden ${heightCss} ${className}`}
      {...otherProps}
    >
      <img
        src={imageMobile}
        alt="hero background"
        className={`absolute -z-10 w-max max-w-none sm+:hidden ${imageMobileCss}`}
      />
      <img
        src={imageTablet}
        alt="hero background"
        className={`absolute -z-10 w-max max-w-none hidden sm+:grid md+:hidden ${imageTabletCss}`}
      />
      <img
        src={imageWeb}
        alt="hero background"
        className={`absolute -z-10 w-max max-w-none hidden md+:grid lg+:hidden ${imageWebCss}`}
      />
      <img
        src={imageWebHd}
        alt="hero background"
        className={`absolute -z-10 w-max max-w-none hidden lg+:grid ${imageWebHdCss}`}
      />

      <div className="area-hero-content w-full xl:max-w-screen-xl grid justify-items-center sm+:justify-items-start">
        <div className="sm+:ml-8px max-w-318px sm+:max-w-328px md+:max-w-535px lg+:max-w-672px">
          <Text typography="h1" className={titlePositions.length > 0 ? titlePositions : titlePositionsDefaults}>
            {title}
          </Text>
          <Text
            typography="h3"
            className={subtitlePositions.length > 0 ? subtitlePositions : subtitlePositionsDefaults}
          >
            {subtitle}
          </Text>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(["type1", "type2", "type3", "type4"]),
  titlePositions: PropTypes.string,
  subtitlePositions: PropTypes.string,
  className: PropTypes.string,
};

Hero.defaultProps = {
  title: "Some title",
  subtitle: "Some subtitle",
  type: "type1",
  titlePositions: "",
  subtitlePositions: "",
  className: "",
};

export default Hero;
