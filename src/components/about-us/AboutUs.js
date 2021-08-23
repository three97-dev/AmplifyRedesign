import React from "react";
import PropTypes from "prop-types";

import Text from "../basic/text/Text";
import TileShadow from "../basic/tile-shadow/TileShadow";

import "./AboutUs.css";

const AboutUs = ({
  mainText,
  secondaryText,
  tile1Title,
  tile1Description,
  tile2Title,
  tile2Description,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={`grid justify-items-center w-full overflow-x-hidden md+:h-985px lg+:h-1205px pb-64px ${className}`}
      {...otherProps}
    >
      <div className="grid relative au-grid-mobile md+:au-grid-web h-max max-w-672px md+:max-w-1246px lg:max-w-1550px">
        {/* <img
          src={ImageMicrosoftPartnerBgTablet}
          alt="background"
          className="hidden md:block md+:hidden absolute -z-10 bottom-8px right-66px"
        />
        <img
          src={ImageMicrosoftPartnerBgWeb}
          alt="background"
          className="hidden md+:block lg+:hidden absolute -z-10 top-33px -right-252px"
        />
        <img
          src={ImageMicrosoftPartnerBgWebHd}
          alt="background"
          className="hidden lg+:block absolute -z-10 top-155px -right-405px"
        /> */}

        <Text
          typography="h3"
          className="area-au-main mx-36px md:mx-0px mt-88px md:mt-123px md+:mt-120px lg+:mt-150px md+:mb-50px md+:text-center"
        >
          {mainText}
        </Text>
        <Text
          typography="body"
          className="area-au-secondary mx-36px md:mx-0px mt-22px md+:mt-215px lg+:mt-310px md+:pl-7px lg+:pl-9px md+:max-w-535px lg+:max-w-680px"
        >
          {secondaryText}
        </Text>

        <TileShadow
          color="type2"
          className="area-au-tile-one md:hidden justify-self-center max-w-237px mt-49px ml-10px"
        >
          <div className="px-20px pt-15px pb-27px">
            <Text typography="h4" className="">
              {tile1Title}
            </Text>
            <Text typography="body" className="mt-14px mr-2px">
              {tile1Description}
            </Text>
          </div>
        </TileShadow>

        <TileShadow
          color="type3"
          className="area-au-tile-two md:hidden justify-self-center max-w-237px mt-42px ml-10px"
        >
          <div className="px-20px pt-13px pb-22px">
            <Text typography="h4" className="">
              {tile2Title}
            </Text>
            <Text typography="body" className="mt-13px ">
              {tile2Description}
            </Text>
          </div>
        </TileShadow>

        <TileShadow
          color="type2"
          spacing="20px"
          className="area-au-tile-one hidden md:block justify-self-center max-w-500px mt-75px"
        >
          <div className="px-20px grid grid-flow-col items-center au-tile-grid-tablet">
            <Text typography="h4" className="border-r">
              {tile1Title}
            </Text>
            <Text typography="body" className="mt-14px mr-2px">
              {tile1Description}
            </Text>
          </div>
        </TileShadow>

        <TileShadow
          color="type3"
          spacing="20px"
          className="area-au-tile-two hidden md:block justify-self-center max-w-237px mt-42px ml-10px"
        >
          <div className="p-20px pt-13px pb-22px">
            <Text typography="h4" className="">
              {tile2Title}
            </Text>
            <Text typography="body" className="mt-13px ">
              {tile2Description}
            </Text>
          </div>
        </TileShadow>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  mainText: PropTypes.string,
  secondaryText: PropTypes.string,
  tile1Title: PropTypes.string,
  tile1Description: PropTypes.string,
  tile2Title: PropTypes.string,
  tile2Description: PropTypes.string,
  className: PropTypes.string,
};

AboutUs.defaultProps = {
  mainText: "Some mainText",
  secondaryText: "Some secondaryText",
  tile1Title: "Tile 1",
  tile1Description: "text 1",
  tile2Title: "Tile 2",
  tile2Description: "text 2",
  className: "",
};

export default AboutUs;
