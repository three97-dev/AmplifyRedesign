import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Text from "../basic/text/Text";
import TileShadow from "../basic/tile-shadow/TileShadow";
import Button from "../basic/button/Button";

//bg images
import ImageFABackground1TabletWeb from "../../assets/pages/home/fractional-approach-bg-1-tablet-web.svg";
import ImageFABackground1WebHd from "../../assets/pages/home/fractional-approach-bg-1-webhd.svg";
import ImageFABackground2 from "../../assets/pages/home/fractional-approach-bg-2.svg";
import ImageFABackground3 from "../../assets/pages/home/fractional-approach-bg-3.svg";
import ImageFABackground4Tablet from "../../assets/pages/home/fractional-approach-bg-4-tablet.svg";
import ImageFABackground4Web from "../../assets/pages/home/fractional-approach-bg-4-web.svg";
import ImageFABackground4WebHd from "../../assets/pages/home/fractional-approach-bg-4-webhd.svg";
import ImageFABackground5 from "../../assets/pages/home/fractional-approach-bg-5.svg";

import ImageFractionalApproach from "../../assets/pages/home/fractional-approach.svg";

import "./FractionalApproach.css";

const FractionalApproach = ({
  title,
  description,
  stats,
  statsDescription,
  subtitle,
  subtitleContent,
  tile1Number,
  tile1Description,
  tile2Number,
  tile2Description,
  learnMoreText,
  learnMoreButtonLabel,
  learnMoreButtonLink,
  className,
  ...otherProps
}) => {
  return (
    <div className={`grid justify-items-center overflow-x-hidden ${className}`} {...otherProps}>
      <div className="grid relative justify-items-center fa-grid-mobile md:fa-grid-tablet lg:fa-grid-web-small xl:fa-grid-web px-36px md:px-81px md:mt-37px lg:mt-65px xl:mt-108px">
        <img
          src={ImageFABackground1TabletWeb}
          alt="background"
          className="hidden md:block xl:hidden absolute -z-10 -top-37px lg:-top-65px -left-54px lg:-left-94px w-135px lg:w-175px"
        />
        <img
          src={ImageFABackground1WebHd}
          alt="background"
          className="hidden xl:block absolute -z-10 -top-108px -left-86px"
        />
        <img
          src={ImageFABackground2}
          alt="background"
          className="hidden md:block absolute -z-10 top-84px lg:top-126px xl:top-41px -right-18px lg:-right-75px xl:-right-91px w-92px xl:w-131px"
        />
        <img
          src={ImageFABackground3}
          alt="background"
          className="hidden md:block absolute -z-10 bottom-0px lg:bottom-88px xl:bottom-135px left-72px lg:left-95px xl:left-141px w-56px lg:w-78px xl:w-110px"
        />
        <img
          src={ImageFABackground4Tablet}
          alt="background"
          className="hidden md:block lg:hidden absolute -z-10 bottom-13px right-63px"
        />
        <img
          src={ImageFABackground4Web}
          alt="background"
          className="hidden lg:block xl:hidden absolute -z-10 bottom-0px -right-117px"
        />
        <img
          src={ImageFABackground4WebHd}
          alt="background"
          className="hidden xl:block absolute -z-10 bottom-20px -right-140px"
        />

        <img
          src={ImageFABackground5}
          alt="background"
          className="hidden md:block absolute -z-20 top-691px lg:-top-27px xl:-top-97px -right-47px lg:-right-14px xl:right-3px xl:w-526px"
        />
        <div className="area-fa-border w-full border-t-2 border-line-color2 lg:mt-28px xl:mt-50px"></div>
        <div className="area-fa-heading mb-50px md:mb-100px lg:mb-100px xl:mb-132px max-w-500px lg:max-w-720px xl:max-w-none">
          <Text typography="h2" className="text-center">
            {title}
          </Text>
        </div>
        <div className="area-fa-description items-center flex max-w-672px xl:max-w-none lg:mt-16px xl:mt-20px md:mb-40px lg:mb-0px">
          <Text text={description} />
        </div>
        <div className="area-fa-image grid justify-items-center md:justify-items-start md:mr-17px md:mt-45px lg:mt-38px xl:mt-55px lg:mb-18px xl:mb-124px">
          <img
            src={ImageFractionalApproach}
            alt="Fractional Approach"
            className="mt-29px lg:mt-12px md:w-328px xl:w-388px"
          />
        </div>
        <div className="area-fa-stats mt-33px md:mt-80px lg:mt-53px xl:mt-83px lg:mb-18px md:ml-8px lg:ml-0px text-center">
          <Text typography="h1">{stats}</Text>
          <Text typography="h3" className="mt-6px md:mt-4px">
            {statsDescription}
          </Text>
        </div>
        <div className="area-fa-subtitle pt-52px ">
          <Text typography="h3" className="mb-22px">
            {subtitle}
          </Text>
          <Text text={subtitleContent} typography="body" />
        </div>
        <div className="area-fa-tile1 justify-self-center lg:justify-self-start mt-25px md:mt-0px lg:mt-18px xl:mt-0px md:mr-10px lg:mr-0px flex flex-col items-center">
          <TileShadow color="type3">
            <Text
              typography="stats"
              className="w-154px h-154px md:w-156px md:h-156px lg:w-168px lg:h-168px xl:w-260px xl:h-260px flex items-center justify-center"
            >
              {tile1Number}
            </Text>
          </TileShadow>
          <Text typography="h4" className="mt-42px xl:mt-52px text-center lg:max-w-168px xl:max-w-260px">
            {tile1Description}
          </Text>
        </div>
        <div className="area-fa-tile2 justify-self-center lg:justify-self-end md:ml-4px mt-52px md:mt-0px lg:mt-18px xl:mt-0px flex flex-col items-center">
          <TileShadow color="type5" className="md:mr-10p">
            <Text
              typography="stats"
              className="w-154px h-154px md:w-156px md:h-156px lg:w-168px lg:h-168px xl:w-260px xl:h-260px flex items-center justify-center"
            >
              {tile2Number}
            </Text>
          </TileShadow>
          <Text
            typography="h4"
            className="mt-37px md:mt-42px mb-50px lg:mb-0px xl:mt-52px text-center lg:max-w-168px xl:max-w-260px"
          >
            {tile2Description}
          </Text>
        </div>
        <div className="area-fa-button mt-50px md:mt-76px lg:mt-83px xl:mt-30px grid justify-items-center">
          <Text typography="body" className="text-center">
            {learnMoreText}
          </Text>
          <Button
            label={learnMoreButtonLabel}
            link={learnMoreButtonLink}
            className="mt-50px mb-50px md:mb-68px lg:mb-164px xl:mb-180px w-318px md:w-328px lg:w-352px xl:w-536px"
          />
        </div>
      </div>
    </div>
  );
};

FractionalApproach.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  stats: PropTypes.string,
  statsDescription: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleContent: PropTypes.object,
  tile1Number: PropTypes.string,
  tile1Description: PropTypes.string,
  tile2Number: PropTypes.string,
  tile2Description: PropTypes.string,
  learnMoreText: PropTypes.string,
  learnMoreButtonLabel: PropTypes.string,
  learnMoreButtonLink: PropTypes.string,
  className: PropTypes.string,
};

FractionalApproach.defaultProps = {
  learnMoreButtonLink: "/",
  className: "",
  subtitle: "some subtitle",
  subtitleContent: "some subtitleContent",
  title: "some title",
  description: "some description",
  stats: "some stats",
  statsDescription: "some statsDescription",
  tile1Number: "some tile1Number",
  tile1Description: "some tile1Description",
  tile2Number: "some tile2Number",
  tile2Description: "some tile2Description",
  learnMoreText: "some learnMoreText",
  learnMoreButtonLabel: "some learnMoreButtonLabel",
};

export default FractionalApproach;

export const query = graphql`
  fragment FractionalApproach on ContentfulFractionalApproach {
    title
    subtitle
    subtitleContent {
      childMarkdownRemark {
        html
      }
    }
    description {
      raw
    }
    statsValue
    statsDescription
    tile1Number
    tile1Description
    tile2Number
    tile2Description
    buttonCommentText
    buttonLink
    buttonLabel
  }
`;
