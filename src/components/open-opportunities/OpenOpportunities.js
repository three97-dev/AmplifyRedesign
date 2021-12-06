import React from "react";
import { DateTime } from "luxon";

import Text from "../basic/text/Text";
import BlueButton from "../basic/blue-button/BlueButton.js";

import useWindowSize from "../../utils/useWindowSize";

import "./OpenOpportunities.css";

function useApplyAfterWidth(width) {
  const sizes = useWindowSize();

  return sizes.width && sizes.width > width;
}

const PositionRow = ({ item, buttonLabel, isColored, onButtonClick = () => {} }) => {
  return (
    <div className={`table-title-grid-mobile sm+:table-title-grid-tablet md+:table-title-grid-web lg+:table-title-grid-webhd open-opportunities-row-wrap px-20px lg:px-39px xl:px-20px py-34px lg:py-23px mb-20px ${isColored ? "bg-tile-content" : ""}`}>
      <div className="text-h3 lg:text-opportunityGridTextLg xl:text-opportunityGridTextXl text-fontcolor-h3 font-poppins">
        {item.roleName}
      </div>
      <div className="hidden md:block text-h3 lg:text-opportunityGridTextLg xl:text-opportunityGridTextXl text-fontcolor-h3 font-poppins">
        {item.department}
      </div>
      <div className="hidden md:block text-h3 lg:text-opportunityGridTextLg xl:text-opportunityGridTextXl text-fontcolor-h3 font-poppins lg:ml-15px xl:ml-0px">
        {DateTime.fromISO(item.postingDate).toFormat("dd.LL.yyyy")}
      </div>
      <div className="justify-self-end hidden lg:block">
        <BlueButton
          variants="dark_blue"
          onClick={onButtonClick}
          label={buttonLabel}
          btnClasses="uppercase px-62px xl:px-110px -mr-20px xl:mr-0px"
        />
      </div>
    </div>
  );
};

const OpenOpportunities = ({
  openPositions,
  openModalCallback,
  tableTitle,
  tableRoleLabel,
  tableDepartmentLabel,
  tablePostingDateLabel,
  tableViewButtonLabel,
  className,
}) => {
  const isDesktop = useApplyAfterWidth(1100);

  if (!openPositions || openPositions.length === 0) {
    return null;
  }

  return (
    <div className={`grid justify-items-center pt-40px px-15px md:px-61px lg:px-119px xl:px-120px ${className}`}>
      <div className="">
        <Text typography="h2" className="font-poppins">
          {tableTitle}
        </Text>
      </div>
      <hr className="max-w-1088px bg-line-color bg-clip-content h-2px w-full border-none px-5px md:px-45px lg:px-20px mt-20px md:mt-20px mb-37px" />
      <div className="mb-20px">
        <div className="table-title-grid-mobile sm+:table-title-grid-tablet md+:table-title-grid-web lg+:table-title-grid-webhd px-20px lg:px-40px xl:px-20px py-15px mb-10px">
          <Text typography="h4" color="text-fontcolor-red" className="uppercase font-titillium">
            {tableRoleLabel}
          </Text>
          <Text typography="h4" color="text-fontcolor-red" className="hidden md:block uppercase font-titillium">
            {tableDepartmentLabel}
          </Text>
          <Text
            typography="h4"
            color="text-fontcolor-red"
            className="hidden md:block uppercase font-titillium lg:ml-15px xl:ml-0px"
          >
            {tablePostingDateLabel}
          </Text>
        </div>
        {openPositions.map((item, index) => {
          const openModal = () => {
            openModalCallback(item);
          };
          return isDesktop ? (
            <PositionRow
              key={index}
              item={item}
              buttonLabel={tableViewButtonLabel}
              isColored={index % 2 === 1}
              onButtonClick={openModal}
            />
          ) : (
            <a key={index} onClick={openModal}>
              <PositionRow item={item} buttonLabel={tableViewButtonLabel} isColored={index % 2 === 1} />
            </a>
          );
        })}
      </div>
      <hr className="max-w-1088px bg-line-color bg-clip-content h-2px w-full border-none px-5px md:px-45px lg:px-20px mt-27px md:mt-26px lg:mt-130px" />
    </div>
  );
};

export default OpenOpportunities;
