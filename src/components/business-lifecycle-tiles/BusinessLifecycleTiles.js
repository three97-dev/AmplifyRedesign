import React from "react";
import PropTypes from "prop-types";

import Text from "/src/components/basic/text/Text";
import Button from "../basic/button/Button";
import Border from "../basic/border/Border";

import "./BusinessLifecycleTiles.css";

import businessStylesBg from "../../assets/pages/home/business-styles-bg.svg";

const BusinessLifecycleTiles = ({
  title,
  subtitle,
  tileOneImage,
  blockTitle1,
  blockContent1,
  tileTwoImage,
  blockTitle2,
  blockContent2,
  tileThreeImage,
  blockTitle3,
  blockContent3,
  tileFourImage,
  blockTitle4,
  blockContent4,
  homeSmthElse,
  homeSmthButtonLink,
  className,
  ...otherProps
}) => {
  return (
    <div className={`grid justify-items-center w-full overflow-x-hidden ${className}`} {...otherProps}>
      <div className="grid relative justify-items-center businnes-life-cycle-tiles-mobile md:businnes-life-cycle-tiles-grid-tablet lg:businnes-life-cycle-tiles-grid-web xl:businnes-life-cycle-tiles-grid-webHD mb-150px md:mb-215px lg:mb-237px xl:mb-285px">
        <img
          src={businessStylesBg}
          alt="background"
          className="block absolute -z-10 -bottom-150px -right-140px md:-bottom-210px md:-right-284px lg:-bottom-221px lg:-right-140px xl:-bottom-310px xl:-right-140px max-w-none w-632pxpx md:w-1242px lg:w-1366px xl:w-1920px"
        />
        <div className="businnes-life-cycle-tiles-title w-full">
          <Text typography="h2" className="md:hidden">
            {title}
          </Text>
          <Text typography="h3" className="hidden md:block">
            {title}
          </Text>
          <Text typography="h3" color="text-fontcolor-body xl:hidden" className="mt-23px lg:mb-107px">
            {subtitle}
          </Text>
          <Text
            typography="body"
            color="text-fontcolor-body hidden xl:block"
            className="mt-23px lg:mb-107px xl:mb-130px"
          >
            {subtitle}
          </Text>
        </div>

        <div className="businnes-life-cycle-tiles-tiles1 text-center px-20px md:px-30px lg:px-20px mt-22px md:mt-52px lg:mt-0px md:mr-3px lg:mr-8px">
          <img src={tileOneImage} alt="img" className="mx-auto max-w-none xl:w-174px" />
          <Text typography="h4" className="mt-22px">
            {blockTitle1}
          </Text>
          <Text typography="body" color="text-fontcolor-body" className="mt-21px xl:mr-2px pb-30px">
            {blockContent1}
          </Text>
        </div>
        <Border
          borderSide="right"
          className="businnes-life-cycle-tiles-tiles1 sm:hidden md:block lg:block justify-self-end md:max-h-310px lg:max-h-308px xl:max-h-327px md:ml-9px lg:ml-0px md:pb-5px lg:pb-0px md:mt-52px lg:mt-0px"
        />

        <Border
          borderSide="bottom"
          className="businnes-life-cycle-tiles-tiles1 lg:hidden justify-self-center max-w-154px md:max-w-328px md:pr-5px lg:pr-0px"
        />

        <div className="businnes-life-cycle-tiles-tiles2 text-center px-20px lg:px-25px mt-28px md:mt-52px lg:mt-0px md:ml-9px lg:ml-0px">
          <img src={tileTwoImage} alt="img" className="mx-auto xl:w-165px" />
          <Text typography="h4" className="mt-21px xl:mt-31px">
            {blockTitle2}
          </Text>
          <Text typography="body" color="text-fontcolor-body" className="mt-21px lg:mt-22px pb-30px">
            {blockContent2}
          </Text>
        </div>
        <Border
          borderSide="top"
          className="businnes-life-cycle-tiles-tiles2 md:hidden justify-self-center max-w-154px md:max-w-328px md:pr-5px lg:pr-0px"
        />
        <Border
          borderSide="bottom"
          className="businnes-life-cycle-tiles-tiles2 lg:hidden justify-self-center max-w-154px md:max-w-328px md:pl-5px lg:pl-0px"
        />
        <Border
          borderSide="left"
          className="businnes-life-cycle-tiles-tiles2 justify-self-end hidden md:block lg:max-h-308px md:max-h-310px lg:max-h-308px xl:max-h-327px md:pb-5px lg:pb-0px md:mt-52px lg:mt-0px"
        />
        <Border
          borderSide="right"
          className="businnes-life-cycle-tiles-tiles2 justify-self-end hidden lg:block md:max-h-310px lg:max-h-308px xl:max-h-327px"
        />
        <div className="businnes-life-cycle-tiles-tiles3 text-center px-20px md:px-30px lg:px-30px mt-30px lg:mt-0px md:mr-9px lg:mr-0px">
          <img src={tileThreeImage} alt="img" className="mx-auto xl:w-165px" />
          <Text typography="h4" className="mt-21px xl:mt-31px">
            {blockTitle3}
          </Text>
          <Text typography="body" color="text-fontcolor-body" className="mt-21px xl:mt-45px pb-30px">
            {blockContent3}
          </Text>
        </div>
        <Border
          borderSide="bottom"
          className="businnes-life-cycle-tiles-tiles3 md:hidden justify-self-center max-w-154px md:max-w-328px md:pr-5px lg:pr-0px"
        />
        <Border
          borderSide="left"
          className="businnes-life-cycle-tiles-tiles3 justify-self-start hidden lg:block lg:max-h-308px xl:max-h-327px"
        />
        <Border
          borderSide="right"
          className="businnes-life-cycle-tiles-tiles3 hidden md:block justify-self-end max-w-154px md:max-h-285px lg:max-h-308px xl:max-h-327px md:ml-9px lg:ml-0px md:pt-10px lg:pt-0px"
        />
        <Border
          borderSide="top"
          className="businnes-life-cycle-tiles-tiles3 lg:hidden justify-self-center max-w-154px md:max-w-328px md:pr-5px"
        />

        <div className="businnes-life-cycle-tiles-tiles4 text-center px-20px lg:px-21px mt-28px md:mt-30px lg:mt-0px md:ml-9px">
          <img src={tileFourImage} alt="img" className="mx-auto xl:w-165px" />
          <Text typography="h4" className="mt-21px xl:mt-31px">
            {blockTitle4}
          </Text>
          <Text typography="body" color="text-fontcolor-body" className="mt-21px md:mt-45px lg:mt-21px">
            {blockContent4}
          </Text>
        </div>
        <Border
          borderSide="left"
          className="businnes-life-cycle-tiles-tiles4 hidden md:block justify-self-start md:max-h-285px lg:max-h-308px xl:max-h-327px md:mr-7px lg:mr-0px md:pt-10px lg:pt-0px"
        />
        <Border
          borderSide="top"
          className="businnes-life-cycle-tiles-tiles4 lg:hidden justify-self-center max-w-154px md:max-w-328px md:pl-5px"
        />
        <Button
          link={homeSmthButtonLink}
          label={homeSmthElse}
          className="businnes-life-cycle-tiles-button mt-50px lg:mt-70px w-full md:max-w-328px lg:max-w-352px xl:max-w-536px"
        />
      </div>
    </div>
  );
};

BusinessLifecycleTiles.propTypes = {
  title: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tileOneImage: PropTypes.string,
  blockTitle1: PropTypes.string,
  blockContent1: PropTypes.string,
  tileTwoImage: PropTypes.string,
  blockTitle2: PropTypes.string,
  blockContent2: PropTypes.string,
  tileThreeImage: PropTypes.string,
  blockTitle3: PropTypes.string,
  blockContent3: PropTypes.string,
  tileFourImage: PropTypes.string,
  blockTitle4: PropTypes.string,
  blockContent4: PropTypes.string,
  homeSmthElse: PropTypes.string,
  homeSmthButtonLink: PropTypes.string,
  className: PropTypes.string,
};

BusinessLifecycleTiles.defaultProps = {
  title: "some title",
  subtitle: "some subtitle",
  tileOneImage: "some tileOneImage",
  blockTitle1: "some blockTitle1",
  blockContent1: "some blockContent1",
  tileTwoImage: "some tileTwoImage",
  blockTitle2: "some blockTitle2",
  blockContent2: "some blockContent2",
  tileThreeImage: "some tileThreeImage",
  blockTitle3: "some blockTitle3",
  blockContent3: "some blockContent3",
  tileFourImage: "some tileFourImage",
  blockTitle4: "some blockTitle4",
  blockContent4: "some blockContent4",
  homeSmthElse: "some homeSmthElse",
  homeSmthButtonLink: "some homeSmthButtonLink",
  className: "",
};
export default BusinessLifecycleTiles;
