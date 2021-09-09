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
    heightCss: "h-890px sm+:h-1185px md+:h-852px lg+:h-1215px",
    titlePositionsDefaults: "mt-531px sm+:mt-507px md+:mt-333px lg+:mt-465px",
    subtitlePositionsDefaults: "mt-24px lg+:mt-34px sm+:ml-1px lg+:ml-3px",
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
    heightCss: "h-930px sm+:h-1196px md+:h-880px lg+:h-1196px",
    titlePositionsDefaults: "mt-432px sm+:mt-580px md+:mt-263px lg+:mt-442px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px",
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
    heightCss: "h-844px sm+:h-1189px md+:h-904px lg+:h-1262px",
    titlePositionsDefaults: "mt-462px sm+:mt-580px md+:mt-306px lg+:mt-442px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px",
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
    heightCss: "h-924px sm+:h-1183px md+:h-843px lg+:h-1198px",
    titlePositionsDefaults: "mt-462px sm+:mt-580px md+:mt-306px lg+:mt-442px",
    subtitlePositionsDefaults: "mt-24px sm+:ml-1px lg+:ml-0px",
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
      <div className="absolute -z-10 w-max max-w-none sm+:hidden">{imageMobile}</div>
      <div className="absolute -z-10 w-max max-w-none hidden sm+:grid md+:hidden">{imageTablet}</div>
      <div className="absolute -z-10 w-max max-w-none hidden md+:grid lg+:hidden">{imageWeb}</div>
      <div className="absolute -z-10 w-max max-w-none hidden lg+:grid">{imageWebHd}</div>

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
