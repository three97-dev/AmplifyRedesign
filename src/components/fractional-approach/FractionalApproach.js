import React from "react";
import PropTypes from "prop-types";

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
  heading,
  description,
  stats,
  statsDescription,
  tile1Number,
  tile1Description,
  tile2Number,
  tile2Description,
  tile3Number,
  tile3Description,
  tile4Number,
  tile4Description,
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
          className="hidden md:block absolute -z-10 bottom-0px lg:bottom-88px xl:bottom-120px left-72px lg:left-95px xl:left-141px w-56px lg:w-78px xl:w-110px"
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
          className="hidden xl:block absolute -z-10 bottom-9px -right-140px"
        />

        <img
          src={ImageFABackground5}
          alt="background"
          className="hidden md:block absolute -z-20 top-712px lg:-top-27px xl:-top-97px -right-47px lg:-right-14px xl:right-3px xl:w-526px"
        />

        <div className="area-fa-heading mb-50px md:mb-100px lg:mb-120px xl:mb-132px max-w-500px lg:max-w-720px xl:max-w-none">
          {heading}
        </div>
        <div className="area-fa-description xl:justify-self-start max-w-672px xl:max-w-none lg:mt-16px xl:mt-120px">
          {description}
        </div>
        <div className="area-fa-image grid justify-items-center md:justify-items-start md:mt-57px lg:mt-0px lg:mb-18px xl:mb-124px">
          <img src={ImageFractionalApproach} alt="Fractional Approach" className="mt-29px lg:mt-12px xl:w-388px" />
        </div>
        <div className="area-fa-stats mt-29px md:mt-83px lg:mt-0px lg:mb-18px xl:mt-20px md:ml-8px text-center">
          <Text typography="stats">{stats}</Text>
          <Text typography="h3" className="mt-12px">
            {statsDescription}
          </Text>
        </div>
        <div className="area-fa-tile1 justify-self-center lg:justify-self-end mt-52px md:mt-102px lg:mt-0px md:mr-10px lg:mr-0px flex flex-col items-center">
          <TileShadow color="type5" className="md:mr-10p">
            <Text
              typography="stats"
              className="w-154px h-154px md:w-156px md:h-156px lg:w-168px lg:h-168px xl:w-260px xl:h-260px flex items-center justify-center"
            >
              {tile1Number}
            </Text>
          </TileShadow>
          <Text typography="h4" className="mt-42px xl:mt-52px text-center max-w-154px lg:max-w-168px xl:max-w-260px">
            {tile1Description}
          </Text>
        </div>
        <div className="area-fa-tile2 justify-self-center lg:justify-self-end mt-52px md:mt-102px lg:mt-0px md:ml-8px flex flex-col items-center">
          <TileShadow color="type2" className="md:-mr-8p">
            <Text
              typography="stats"
              className="w-154px h-154px md:w-156px md:h-156px lg:w-168px lg:h-168px xl:w-260px xl:h-260px flex items-center justify-center"
            >
              {tile2Number}
            </Text>
          </TileShadow>
          <Text typography="h4" className="mt-42px xl:mt-52px text-center max-w-154px lg:max-w-168px xl:max-w-260px">
            {tile2Description}
          </Text>
        </div>
        <div className="area-fa-tile3 justify-self-center lg:justify-self-end mt-52px md:mt-76px lg:mt-50px xl:mt-76px md:mr-10px lg:mr-0px flex flex-col items-center">
          <TileShadow color="type3">
            <Text
              typography="stats"
              className="w-154px h-154px md:w-156px md:h-156px lg:w-168px lg:h-168px xl:w-260px xl:h-260px flex items-center justify-center"
            >
              {tile3Number}
            </Text>
          </TileShadow>
          <Text typography="h4" className="mt-42px xl:mt-52px text-center lg:max-w-168px xl:max-w-260px">
            {tile3Description}
          </Text>
        </div>
        <div className="area-fa-tile4 justify-self-center lg:justify-self-end mt-52px md:mt-76px lg:mt-50px xl:mt-76px md:ml-8px flex flex-col items-center">
          <TileShadow color="type6">
            <Text
              typography="stats"
              className="w-154px h-154px md:w-156px md:h-156px lg:w-168px lg:h-168px xl:w-260px xl:h-260px flex items-center justify-center"
            >
              {tile4Number}
            </Text>
          </TileShadow>
          <Text typography="h4" className="mt-42px xl:mt-52px text-center lg:max-w-168px xl:max-w-260px">
            {tile4Description}
          </Text>
        </div>
        <div className="area-fa-button mt-50px md:mt-76px xl:mt-130px grid justify-items-center">
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
  heading: PropTypes.any,
  description: PropTypes.any,
  stats: PropTypes.string,
  statsDescription: PropTypes.string,
  tile1Number: PropTypes.string,
  tile1Description: PropTypes.string,
  tile2Number: PropTypes.string,
  tile2Description: PropTypes.string,
  tile3Number: PropTypes.string,
  tile3Description: PropTypes.string,
  tile4Number: PropTypes.string,
  tile4Description: PropTypes.string,
  learnMoreText: PropTypes.string,
  learnMoreButtonLabel: PropTypes.string,
  learnMoreButtonLink: PropTypes.string,
  className: PropTypes.string,
};

FractionalApproach.defaultProps = {
  learnMoreButtonLink: "/",
  className: "",
};

export default FractionalApproach;
