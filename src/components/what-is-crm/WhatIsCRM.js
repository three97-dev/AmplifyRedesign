import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Text from "../basic/text/Text";
import Border from "../basic/border/Border";

import ImageBackgroundMobile from "../../assets/pages/crm/what-is-crm-bg-mobile.svg";
import ImageBackgroundTablet from "../../assets/pages/crm/what-is-crm-bg-tablet.svg";
import ImageBackgroundWeb from "../../assets/pages/crm/what-is-crm-bg-web.svg";
import ImageBackgroundWebHd from "../../assets/pages/crm/what-is-crm-bg-webhd.svg";

import "./WhatIsCRM.css";

const WhatIsCRM = ({ title1, subtitle1, contentText1, title2, subtitle2, contentText2, className, ...otherProps }) => {
  return (
    <div className={`grid justify-items-center w-full overflow-x-hidden ${className}`} {...otherProps}>
      <div className="grid relative what-is-crm-grid-mobile md:what-is-crm-grid-tablet lg:what-is-crm-grid-web xl:what-is-crm-grid-webhd mx-36px lg:mx-0px lg:pt-130px pb-336px md:pb-350px lg:pb-100px xl:pb-260px">
        <img
          src={ImageBackgroundMobile}
          alt="background"
          className="md:hidden absolute -z-10 bottom-10px -left-205px max-w-none"
        />
        <img
          src={ImageBackgroundTablet}
          alt="background"
          className="hidden md:block lg:hidden absolute -z-10 bottom-0px -left-155px max-w-none"
        />
        <img
          src={ImageBackgroundWeb}
          alt="background"
          className="hidden lg:block xl:hidden absolute -z-10 bottom-28px -left-303px max-w-none"
        />
        <img
          src={ImageBackgroundWebHd}
          alt="background"
          className="hidden xl:block absolute -z-10 bottom-28px -left-225px max-w-none"
        />

        <div className="area-what-is-crm-title-1 lg:max-w-444px xl:max-w-672px">
          <Text typography="h2" className="mt-50px xl:mt-75px">
            {title1}
          </Text>
          {subtitle1 ? (
            <Text typography="h3" className="mt-22px">
              {subtitle1}
            </Text>
          ) : null}
        </div>
        <Border borderSide="bottom" className="area-what-is-crm-title-1 hidden lg:block" />

        <div className="area-what-is-crm-text-1">
          <Text
            text={contentText1}
            typography="body"
            className="mt-22px lg:mt-50px xl:mt-75px mb-50px md:mb-90px lg:mb-0px"
          />
        </div>
        <Border borderSide="bottom" className="area-what-is-crm-text-1" />

        <div className="area-what-is-crm-title-2 lg:max-w-444px xl:max-w-672px">
          <Text typography="h2" className="mt-50px xl:mt-75px">
            {title2}
          </Text>
          {subtitle2 ? (
            <Text typography="h3" className="mt-22px">
              {subtitle2}
            </Text>
          ) : null}
        </div>
        <Border borderSide="top" className="area-what-is-crm-title-2" />

        <div className="area-what-is-crm-text-2">
          <Text text={contentText2} typography="body" className="mt-22px lg:mt-50px xl:mt-75px mb-50px xl:mb-75px" />
        </div>
        <Border borderSide="top" className="area-what-is-crm-text-2 hidden lg:block" />
      </div>
    </div>
  );
};

WhatIsCRM.propTypes = {
  title1: PropTypes.string,
  subtitle1: PropTypes.string,
  contentText1: PropTypes.object,
  title2: PropTypes.string,
  subtitle2: PropTypes.string,
  contentText2: PropTypes.object,
  className: PropTypes.string,
};

WhatIsCRM.defaultProps = {
  title1: "Title 1",
  subtitle1: "Subtitle 1",
  contentText1: "Content Text 1",
  title2: "Title 2",
  subtitle2: "Subtitle 2",
  contentText2: "Content Text 2",
  className: "",
};

export default WhatIsCRM;

export const query = graphql`
  fragment WhatIsCrm on ContentfulWhatIsCrm {
    title1
    subtitle1
    contentText1 {
      childMarkdownRemark {
        html
      }
    }
    title2
    subtitle2
    contentText2 {
      childMarkdownRemark {
        html
      }
    }
  }
`;
