import React from "react";
import PropTypes from "prop-types";

import Text from "../basic/text/Text";
import Border from "../basic/border/Border";

import AdvantagesOfCRMMobile from "../../assets/pages/crm/advantages-of-crm-bg-mobile.svg";
import AdvantagesOfCRMTabletPlus from "../../assets/pages/crm/advantages-of-crm-bg-tablet-plus.svg";
import AdvantagesMessagingImage from "../../assets/pages/crm/advantages-messaging.svg";

import "./AdvantagesOfCRM.css";

const TILES_AREAS = {
  0: "advantages-of-crm-tile-1-area",
  1: "advantages-of-crm-tile-2-area",
  2: "advantages-of-crm-tile-3-area",
  3: "advantages-of-crm-tile-4-area",
  4: "advantages-of-crm-tile-5-area",
  5: "advantages-of-crm-tile-6-area",
};

const resolveTilesArea = index => {
  return TILES_AREAS[index];
};

const AdvantagesOfCRM = ({ title, advantages, className, ...otherProps }) => {
  return (
    <div className={`grid justify-items-center overflow-hidden ${className}`} {...otherProps}>
      <div className="grid relative justify-items-center mx-36px md:mx-73px lg:mx-130px">
        <img
          src={AdvantagesOfCRMMobile}
          alt="background"
          className="block md:hidden justify-self-center absolute -z-10 bottom-0px max-w-none"
        />
        <img
          src={AdvantagesOfCRMTabletPlus}
          alt="background"
          className="hidden md:block justify-self-center absolute -z-10 bottom-0px xl:-left-165px h-462px lg:h-400px xl:h-auto max-w-none"
        />
        <Text typography="h2" className="text-center">
          {title}
        </Text>
        <div className="grid relative advantages-of-crm-mobile-tiles-grid md:advantages-of-crm-tablet-tiles-grid lg:advantages-of-crm-desktop-tiles-grid xl:advantages-of-crm-desktop-hd-tiles-grid items-start md:mt-20px lg:mt-25px xl:mt-50px mb-20px md:mb-74px lg:mb-100px xl:mb-150px">
          {advantages.map((item, index) => (
            <>
              <div key={index} className={`${resolveTilesArea(index)} grid justify-items-center pl-20px pr-20px`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-115px xl:w-165px h-115px xl:h-165px mt-30px lg:mt-50px"
                />
                <Text typography="h4" className="text-center mt-20px">
                  {item.title}
                </Text>
                <Text typography="body" className="text-center mt-20px mb-30px lg:mb-50px">
                  {item.content}
                </Text>
              </div>
              {item.borders.map((border, borderIndex) => (
                <Border key={borderIndex} className={border.className} borderSide={border.borderSide} />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

AdvantagesOfCRM.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  advantages: PropTypes.array,
};

AdvantagesOfCRM.defaultProps = {
  className: "",
  title: "Some text",
  advantages: [
    {
      image: AdvantagesMessagingImage,
      title: "item 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      borders: [{ className: "advantages-of-crm-tile-1-area", borderSide: "bottom" }],
    },
    {
      image: AdvantagesMessagingImage,
      title: "item 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      borders: [{ className: "advantages-of-crm-tile-2-area", borderSide: "bottom" }],
    },
    {
      image: AdvantagesMessagingImage,
      title: "item 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      borders: [{ className: "advantages-of-crm-tile-3-area", borderSide: "bottom" }],
    },
    {
      image: AdvantagesMessagingImage,
      title: "item 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      borders: [{ className: "advantages-of-crm-tile-4-area", borderSide: "bottom" }],
    },
    {
      image: AdvantagesMessagingImage,
      title: "item 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      borders: [{ className: "advantages-of-crm-tile-5-area", borderSide: "bottom" }],
    },
    {
      image: AdvantagesMessagingImage,
      title: "item 6",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      borders: [{ className: "advantages-of-crm-tile-6-area", borderSide: "bottom" }],
    },
  ],
};

export default AdvantagesOfCRM;
