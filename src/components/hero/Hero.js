import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

import Text from "../basic/text/Text";

import "./Hero.css";

const BACKGROUNDS = {
  type1: {
    imageMobile: (
      <StaticImage
        src="../../assets/hero/hero-type1-mobile.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-22px"
      />
    ),
    imageTablet: (
      <StaticImage
        src="../../assets/hero/hero-type1-tablet.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-42px"
      />
    ),
    imageWeb: (
      <StaticImage
        src="../../assets/hero/hero-type1-web.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-34px"
      />
    ),
    imageWebHd: (
      <StaticImage
        src="../../assets/hero/hero-type1-webhd.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-50px"
      />
    ),
    heightCss: "hero-h-type1-mobile sm+:hero-h-type1-tablet md+:hero-h-type1-web lg+:hero-h-type1-webhd",
    titlePositionsDefaults: "md+:mt-200px lg+:mt-260px",
    subtitlePositionsDefaults:
      "mt-24px lg+:mt-34px sm+:ml-1px lg+:ml-3px mb-107px sm+:mb-424px md+:mb-378px lg+:mb-602px",
  },
  type2: {
    imageMobile: (
      <StaticImage
        src="../../assets/hero/hero-type2-mobile.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-18px"
      />
    ),
    imageTablet: (
      <StaticImage
        src="../../assets/hero/hero-type2-tablet.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-42px"
      />
    ),
    imageWeb: (
      <StaticImage
        src="../../assets/hero/hero-type2-web.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-36px"
      />
    ),
    imageWebHd: (
      <StaticImage
        src="../../assets/hero/hero-type2-webhd.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-50px"
      />
    ),
    heightCss: "hero-h-type2-mobile sm+:hero-h-type2-tablet md+:hero-h-type2-web lg+:hero-h-type2-webhd",
    titlePositionsDefaults: "md+:mt-200px lg+:mt-260px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px mb-136px sm+:mb-284px md+:mb-370px lg+:mb-560px",
  },
  type3: {
    imageMobile: (
      <StaticImage
        src="../../assets/hero/hero-type3-mobile.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
      />
    ),
    imageTablet: (
      <StaticImage
        src="../../assets/hero/hero-type3-tablet.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
      />
    ),
    imageWeb: (
      <StaticImage
        src="../../assets/hero/hero-type3-web.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-34px"
      />
    ),
    imageWebHd: (
      <StaticImage
        src="../../assets/hero/hero-type3-webhd.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-34px"
      />
    ),
    heightCss: "hero-h-type3-mobile sm+:hero-h-type3-tablet md+:hero-h-type3-web lg+:hero-h-type3-webhd",
    titlePositionsDefaults: "mt-100px md+:mt-150px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px mb-130px sm+:mb-276px md+:mb-388px lg+:mb-625px",
  },
  type4: {
    imageMobile: (
      <StaticImage
        src="../../assets/hero/hero-type4-mobile.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
      />
    ),
    imageTablet: (
      <StaticImage
        src="../../assets/hero/hero-type4-tablet.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
      />
    ),
    imageWeb: (
      <StaticImage
        src="../../assets/hero/hero-type4-web.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-25px"
      />
    ),
    imageWebHd: (
      <StaticImage
        src="../../assets/hero/hero-type4-webhd.png"
        alt="hero background"
        quality={100}
        placeholder="blurred"
        layout="fixed"
        className="-mt-25px"
      />
    ),
    heightCss: "h-screen sm+:hero-h-type4-tablet md+:hero-h-type4-web lg+:hero-h-type4-webhd",
    titlePositionsDefaults: "mt-100px md+:mt-150px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px mb-107px sm+:mb-270px md+:mb-344px lg+:mb-561px",
  },
};

const resolveBackgrounds = (type, backgrounds = BACKGROUNDS) => {
  const resolvedImages = backgrounds[type];
  if (!resolvedImages) {
    throw new Error(`Failed to resolve backgrounds type: ${type}`);
  }
  return resolvedImages;
};

const Hero = ({
  titlePositions,
  title,
  subtitlePositions,
  subtitle,
  type,
  className,
  storybookBackgroundsMocks,
  ...otherProps
}) => {
  const {
    imageMobile,
    imageTablet,
    imageWeb,
    imageWebHd,
    heightCss,
    titlePositionsDefaults,
    subtitlePositionsDefaults,
  } = resolveBackgrounds(type, storybookBackgroundsMocks);
  return (
    <div
      className={`grid hero-grid-mobile sm+:hero-grid justify-items-center w-full relative overflow-hidden ${heightCss} ${className}`}
      {...otherProps}
    >
      <div className="absolute bottom-0px -z-10 w-max max-w-none sm+:hidden">{imageMobile}</div>
      <div className="absolute bottom-0px -z-10 w-max max-w-none hidden sm+:grid md+:hidden">{imageTablet}</div>
      <div className="absolute bottom-0px -z-10 w-max max-w-none hidden md+:grid lg+:hidden">{imageWeb}</div>
      <div className="absolute bottom-0px -z-10 w-max max-w-none hidden lg+:grid">{imageWebHd}</div>

      <div className="area-hero-content self-end w-full xl:max-w-screen-xl grid justify-items-center sm+:justify-items-start">
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
  storybookBackgroundsMocks: PropTypes.object,
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
