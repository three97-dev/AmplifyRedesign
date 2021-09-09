import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Image from "../basic/image/Image";
import Text from "../basic/text/Text";

import OverlapImage from "../../assets/hero-blog-post/overlap-images/blog-post-top-overlap-webhd.svg";

import "./HeroBlogPost.css";

const BACKGROUNDS = {
  MobileBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/hero-blog-post/backgrounds/blog-post-top-bg-mobile.png"
      placeholder="blurred"
      layout="fixed"
      quality={100}
      alt={alt}
      className={className}
    />
  ),
  TabletBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/hero-blog-post/backgrounds/blog-post-top-bg-tablet.png"
      placeholder="blurred"
      layout="fixed"
      quality={100}
      alt={alt}
      className={className}
    />
  ),
  WebBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/hero-blog-post/backgrounds/blog-post-top-bg-web.png"
      placeholder="blurred"
      layout="fixed"
      quality={100}
      alt={alt}
      className={className}
    />
  ),
  WebHdBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/hero-blog-post/backgrounds/blog-post-top-bg-webhd.png"
      placeholder="blurred"
      layout="fixed"
      quality={100}
      alt={alt}
      className={className}
    />
  ),
};

const HeroBlogPost = ({ title, subtitle, image, className, storybookBackgroundsMocks, ...otherProps }) => {
  const { MobileBg, TabletBg, WebBg, WebHdBg } = storybookBackgroundsMocks || BACKGROUNDS;

  return (
    <div
      className={`grid justify-items-center hero-blog-post-grid-mobile sm+:hero-blog-post-grid-tablet md+:hero-blog-post-web-grid lg+:hero-blog-post-webhd-grid w-full relative overflow-hidden h-871px sm+:h-1112px md+:h-768px lg+:h-1080px ${className}`}
      {...otherProps}
    >
      <div className="absolute -z-10 w-max max-w-none sm+:hidden">
        <MobileBg alt="hero background" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden sm+:grid md+:hidden">
        <TabletBg alt="hero background" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden md+:grid lg+:hidden">
        <WebBg alt="hero background" className="-mt-25px" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden lg+:grid">
        <WebHdBg alt="hero background" className="-mt-25px" />
      </div>

      <div className="hero-blog-post-image-area relative justify-self-start w-354px sm+:w-463px md+:w-full h-full sm+:ml-117px md+:ml-0px">
        <div className="relative text-center overflow-hidden rounded-full mt-55px sm+:mt-71px md+:mt-77px lg+:mt-93px ml-36px sm+:ml-50px md+:ml-55px lg+:ml-66px w-318px h-318px sm+:w-413px sm+:h-413px md+:w-444px md+:h-444px lg+:w-536px lg+:h-536px">
          <Image image={image} />
        </div>
        <img
          src={OverlapImage}
          alt="hero background"
          className="absolute z-10 bottom-0px left-36px sm+:left-50px md+:left-55px lg+:left-66px w-120px sm+:w-156px md+:w-168px: lg+:w-202px max-w-none"
        />
      </div>

      <div className="grid hero-blog-post-content-area w-full lg+:max-w-screen-xl grid justify-items-center ">
        <div className="max-w-318px sm+:max-w-328px md+:max-w-536px lg+:max-w-674px sm+:justify-self-end sm+:mr-81px md+:mr-0px">
          <Text typography="h1" className="md+:mt-215px lg+:mt-254px">
            {title}
          </Text>
          <Text typography="h3" className="mt-24px sm+:ml-1px lg+:ml-0px">
            {subtitle}
          </Text>
        </div>
      </div>
    </div>
  );
};

HeroBlogPost.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

HeroBlogPost.defaultProps = {
  title: "Some title",
  subtitle: "Some subtitle",
  className: "",
};

export default HeroBlogPost;

export const query = graphql`
  fragment HeroBlogPostImage on ContentfulAsset {
    file {
      url
      contentType
    }
    title
    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 536, aspectRatio: 1, quality: 100)
  }
`;
