import React from "react";

import BlueButton from "../basic/blue-button/BlueButton";
import Text from "../basic/text/Text";
import TileShadow from "../basic/tile-shadow/TileShadow";

import IconClose from "../../assets/pages/career/open-opportunity-icon-close.svg";

import "./OpenOpportunitiesModal.css";

const OpenOpportunitiesModal = ({ title, secondaryText, linkLabel, link, onClick, className }) => {
  return (
    <TileShadow
      color="type1"
      hasContentBg={false}
      className={`mx-auto z-100 w-full max-w-318px sm+:max-w-444px md:max-w-672px md+:max-w-904px lg+:max-w-1246px ${className}`}
    >
      <div onClick={e => e.stopPropagation()} className="relative w-full pt-90px pb-30px">
        <button className="z-10 p-10px top-27px right-10px md+:right-18px absolute" onClick={onClick}>
          <img src={IconClose} alt="close" className="arrow-shadow w-16px xl:w-18px" />
        </button>
        <BlueButton label={linkLabel} link={link} btnClasses="absolute top-20px left-10px sm+:left-30px w-180px sm+:w-260px" />
        <div className="scroll-style mx-20px md+:mx-30px pr-10px sm+:px-10px md+:px-60px lg+:px-120px overflow-auto h-400px md+:h-500px">
          <Text typography="h3" className="font-bold text-center mt-50px mb-20px">
            {title}
          </Text>
          <Text text={secondaryText} className="opportunity-modal"></Text>
        </div>
      </div>
    </TileShadow>
  );
};

export default OpenOpportunitiesModal;
