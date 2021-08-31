import React from "react";
import PropTypes from "prop-types";

import "./HowCRMHelps.css";
import Text from "../basic/text/Text";

import ImageBackgroundTablet from "../../assets/pages/crm/how-crm-helps-bg-tablet.svg";
import ImageBackgroundWeb from "../../assets/pages/crm/how-crm-helps-bg-web.svg";
import ImageBackgroundWebHD from "../../assets/pages/crm/how-crm-helps-bg-webhd.svg";

const HowCRMHelps = ({ title, subtitle, image, mainText, secondaryText, className, ...otherProps }) => {
  return (
    <div className={`grid justify-items-center w-full overflow-x-hidden ${className}`} {...otherProps}>
      <div className="grid relative how-crm-helps-grid-mobile md:how-crm-helps-grid-tablet lg:how-crm-helps-grid-web xl:how-crm-helps-grid-webhd mx-36px md:mx-0px md:mt-50px lg:mt-0px pb-50px md:pb-100px lg:pb-138px">
        <img
          src={ImageBackgroundTablet}
          alt="background"
          className="hidden md:block lg:hidden absolute -z-10 md:bottom-650px md:-right-130px max-w-none"
        />
        <img
          src={ImageBackgroundWeb}
          alt="background"
          className="hidden lg:block xl:hidden absolute -z-10 lg:bottom-552px lg:-right-221px max-w-none"
        />
        <img
          src={ImageBackgroundWebHD}
          alt="background"
          className="hidden xl:block absolute -z-10 xl:bottom-500px xl:-right-495px max-w-none "
        />
        <div className="area-how-crm-helps-title">
          <Text typography="h2" className="text-center mt-50px md:mt-100px lg:mt-225px">
            {title}
          </Text>
          <Text typography="body" className="mt-20px lg:ml-92px xl:ml-0px lg:max-w-904px xl:max-w-none">
            {subtitle}
          </Text>
        </div>
        <div className="area-how-crm-helps-image mt-19px md:mt-50px lg:ml-92px xl:ml-0px">
          <img src={image} alt="microsoft" className="md:w-242px lg:w-444px xl:w-536px" />
        </div>

        <div className="area-how-crm-helps-text">
          <Text typography="h3" className="mt-22px md:mt-50px">
            {mainText}
          </Text>
          <Text typography="body" className="mt-22px">
            {secondaryText}
          </Text>
        </div>
      </div>
    </div>
  );
};

HowCRMHelps.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mainText: PropTypes.string,
  secondaryText: PropTypes.string,

  className: PropTypes.string,
};

HowCRMHelps.defaultProps = {
  title: "Some Title",
  subtitle: "Some Subtitle",
  mainText: "Some Main text",
  secondaryText: "Some Secondary text",
  className: "",
};

export default HowCRMHelps;
