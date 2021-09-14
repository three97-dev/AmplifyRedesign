import React from "react";
import PropTypes from "prop-types";
import { Text, TileShadow } from "..";

import iconClose from "../../assets/pages/contact/Icon ionic-md-close.png";

const ThankYouForSubmission = ({ title, color, content, className }) => {
  return (
    <TileShadow color={color} hasContentBg={false} className={className}>
      <div className="text-center relative px-36px md:px-180px lg:px-190px xl:px-140px py-75px md:py-100px max-w-318px md:max-w-672px lg:max-w-720px xl:max-w-812px">
        <img src={iconClose} alt="icon close" className="absolute w-16px xl:w-18px top-19px right-19px" />
        <Text typography="h2" className="mb-20px">
          {title}
        </Text>
        <Text typography="body">{content}</Text>
      </div>
    </TileShadow>
  );
};

ThankYouForSubmission.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

ThankYouForSubmission.defaultProps = {
  title: "some title",
  content: "some content",
  color: "type3",
  className: "",
};

export default ThankYouForSubmission;
