import React from "react";
import PropTypes from "prop-types";

import Text from "../basic/text/Text";
import TileShadow from "../basic/tile-shadow/TileShadow";

import IconClose from "../../assets/pages/home/business-lifecycle-customer-icon-close.svg";

const CustomerType = ({ image, title, subtitle, question, answerContent, onClick, color }) => {
  return (
    <TileShadow color={color} hasContentBg={false}>
      <div className="relative max-w-318px md:max-w-672px lg:max-w-720px xl:max-w-812px">
        <button onClick={onClick} className="z-10px p-10px top-10px right-10px absolute">
          <img src={IconClose} alt="close" className="arrow-shadow w-16px xl:w-18px" />
        </button>
        <div className="pt-20px pb-50px md:pb-75px mx-36px lg:mx-92px xl:mx-138px">
          <img src={image} alt="hand" className="mx-auto w-110px md:w-130px xl:w-150px" />
          <Text typography="h2" className="text-center mt-15px md:mt-10px">
            {title}
          </Text>
          <Text typography="body" className=" mt-20px">
            {subtitle}
          </Text>
          <Text typography="h3" className="mt-20px mb-25px">
            {question}
          </Text>
          {answerContent.map((obj, index) => {
            return (
              <div key={index}>
                <Text typography="h4" className="mt-22px">
                  {obj.subtitle}
                </Text>
                <Text typography="body" className="mt-10px">
                  {obj.content}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </TileShadow>
  );
};

CustomerType.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  question: PropTypes.string,
  color: PropTypes.string,
  answerContent: PropTypes.array,
  onClick: PropTypes.func,
};

CustomerType.defaultProps = {
  image: "",
  title: "",
  subtitle: "",
  question: "",
  color: "",
  answerContent: [],
  onClick: () => {},
};

export default CustomerType;
