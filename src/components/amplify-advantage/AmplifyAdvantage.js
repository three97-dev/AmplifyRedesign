import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

import Image from "../basic/image/Image";
import Text from "../basic/text/Text";

import AdvantagesBgImage from "../../assets/pages/career/advantages-bg.svg";

const AmplifyAdvantage = ({ mainText, secondaryText, image, className }) => {
  const customRenderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-30px">{children}</p>,
    },
  };
  return (
    <div className={`justify-items-center w-full overflow-x-hidden ${className}`}>
      <div className="px-35px pt-26px sm+:pt-75px md+:pt-90px lg+:pt-85px pb-20px">
        <div className="md+:flex justify-center sm+:mx-auto sm+:max-w-674px md+:max-w-none">
          <div className="relative md+:max-w-444px lg+:max-w-672px md+:mr-110px lg+:mr-150px">
            <img
              src={AdvantagesBgImage}
              alt="background"
              className="absolute -z-10 max-w-none sm+:w-671px md+:w-493px lg+:w-743px sm+:h-593px md+:h-435px lg+:h-657px -top-40px sm+:-top-95px md+:-top-104px lg+:-top-112px left-0px sm+:left-82px md+:left-140px lg+:left-140px"
            />
            <Text typography="h2" className="mb-27px sm+:mb-23px">
              {mainText}
            </Text>
            <Text typography="h3" className="md+:text-left">
              {secondaryText && secondaryText.raw ? renderRichText(secondaryText, customRenderOptions) : secondaryText}
            </Text>
          </div>
          <Image
            image={image}
            width="115"
            height="115"
            className="hidden sm+:block rounded-15px overflow-hidden md+:w-536px lg+:w-812px sm+:-mt-7px md+:mt-0px"
          />
        </div>
      </div>
    </div>
  );
};

export default AmplifyAdvantage;
