import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

import Text from "../basic/text/Text";

const BACKGROUNDS = {
  MobileBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/hero-home/hero-home-mobile.png"
      placeholder="blurred"
      layout="fixed"
      alt={alt}
      className={className}
    />
  ),
  TabletBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/hero-home/hero-home-tablet.png"
      placeholder="blurred"
      layout="fixed"
      alt={alt}
      className={className}
    />
  ),
  WebBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/hero-home/hero-home-web.png"
      placeholder="blurred"
      layout="fixed"
      alt={alt}
      className={className}
    />
  ),
  WebHdBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/hero-home/hero-home-webhd.png"
      placeholder="blurred"
      layout="fixed"
      alt={alt}
      className={className}
    />
  ),
};

const customRenderOptions = {
  renderMark: {
    [MARKS.UNDERLINE]: text => <span className="text-fontcolor-red">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <>{children}</>,
  },
};

const HeroHome = ({ title, subtitle, className, storybookBackgroundsMocks, ...otherProps }) => {
  const { MobileBg, TabletBg, WebBg, WebHdBg } = storybookBackgroundsMocks || BACKGROUNDS;
  return (
    <div
      className={`grid justify-items-center w-full h-844px sm+:h-1111px md+:h-768px lg+:h-1080px relative overflow-hidden ${className}`}
      {...otherProps}
    >
      <div className="absolute -z-10 w-max max-w-none sm+:hidden">
        <MobileBg alt="hero background" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden sm+:grid md+:hidden">
        <TabletBg alt="hero background" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden md+:grid lg+:hidden">
        <WebBg alt="hero background" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden lg+:grid">
        <WebHdBg alt="hero background" />
      </div>

      <div className="w-full xl:max-w-screen-xl justify-self-start xl:justify-self-center grid justify-items-center md+:justify-items-start">
        <div className="md+:ml-139px lg+:ml-140px max-w-318px sm+:max-w-500px md+:max-w-535px lg+:max-w-812px">
          <Text
            typography="h1"
            color="text-white"
            className="text-center md+:text-left mt-177px sm+:mt-270px md+:mt-262px lg+:mt-446px"
          >
            {title && title.raw ? renderRichText(title, customRenderOptions) : title}
          </Text>
          <Text
            typography="h3"
            color="text-white"
            className="text-center md+:text-left mt-24px sm+:mt-19px md+:mt-24px"
          >
            {subtitle}
          </Text>
        </div>
      </div>
    </div>
  );
};

HeroHome.propTypes = {
  title: PropTypes.object,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

HeroHome.defaultProps = {
  title: {},
  subtitle: "Some subtitle",
  className: "",
};

export default HeroHome;
