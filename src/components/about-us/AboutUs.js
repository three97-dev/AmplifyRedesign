import React from "react";
import PropTypes from "prop-types";

import Text from "../basic/text/Text";
import TileShadow from "../basic/tile-shadow/TileShadow";

import ImageAboutUsBackgroundTablet from "../../assets/pages/about/about-us-bg-tablet.svg";

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
      className={`grid justify-items-center w-full overflow-x-hidden pb-64px md:pb-140px ${className}`}
      {...otherProps}
    >
      <div className="grid relative au-grid-mobile md:au-grid-tablet lg:au-grid-web xl:au-grid-webhd h-max">
        <img
          src={ImageAboutUsBackgroundTablet}
          alt="background"
          className="hidden md:block lg:hidden absolute -z-10 -bottom-138px right-0px"
        />
        {/* <img
          src={ImageMicrosoftPartnerBgWeb}
          alt="background"
          className="hidden md+:block lg+:hidden absolute -z-10 top-33px -right-252px"
        />
        <img
          src={ImageMicrosoftPartnerBgWebHd}
          alt="background"
          className="hidden lg+:block absolute -z-10 top-155px -right-405px"
        /> */}

        <div className="area-au-texts mx-36px md:mx-0px">
          <Text typography="h3" className="mt-88px md:mt-123px lg:mt-180px">
            {mainText}
          </Text>
          <Text typography="body" className="mt-22px lg:mt-32px">
            {secondaryText}
          </Text>
        </div>

        <div className="area-au-tiles justify-self-center lg:justify-self-end">
          {/* mobile tiles */}
          <TileShadow color="type2" className="md:hidden max-w-237px mt-49px ml-10px">
            <div className="px-20px pt-15px pb-27px">
              <Text typography="h4" className="">
                {tile1Title}
              </Text>
              <Text typography="body" className="mt-14px mr-2px">
                {tile1Description}
              </Text>
            </div>
          </TileShadow>

          <TileShadow color="type3" className="md:hidden max-w-237px mt-42px ml-10px">
            <div className="px-20px pt-13px pb-22px">
              <Text typography="h4" className="">
                {tile2Title}
              </Text>
              <Text typography="body" className="mt-13px">
                {tile2Description}
              </Text>
            </div>
          </TileShadow>

          {/* tablet and above tiles */}
          <div className="hidden md:block">
            <TileShadow color="type2" spacing="20px" className="mt-74px lg:mt-178px">
              <div className="p-20px grid grid-flow-col items-center au-tile-grid-tablet lg:au-tile-grid-web xl:au-tile-grid-webhd">
                <Text typography="h4" className="">
                  {tile1Title}
                </Text>
                <Text typography="body" className="border-l pl-16px">
                  {tile1Description}
                </Text>
              </div>
            </TileShadow>
          </div>

          <div className="hidden md:block">
            <TileShadow color="type3" spacing="20px" className="mt-54px">
              <div className="px-20px py-16px grid grid-flow-col items-center au-tile-grid-tablet lg:au-tile-grid-web xl:au-tile-grid-webhd">
                <Text typography="h4" className="">
                  {tile2Title}
                </Text>
                <Text typography="body" className="border-l pl-16px lg:mb-6px">
                  {tile2Description}
                </Text>
              </div>
            </TileShadow>
          </div>
        </div>
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
