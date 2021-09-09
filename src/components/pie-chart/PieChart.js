import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Text from "../basic/text/Text";

import PieChartImage from "../../assets/pages/crm/pie-chart-img.png";

import PieChartBackgroundMobile from "../../assets/pages/crm/pie-chart-bg-mobile.svg";
import PieChartBackgroundTablet1 from "../../assets/pages/crm/pie-chart-bg-tablet-1.svg";
import PieChartBackgroundTablet2 from "../../assets/pages/crm/pie-chart-bg-tablet-2.svg";
import PieChartBackgroundWeb1 from "../../assets/pages/crm/pie-chart-bg-web-1.svg";
import PieChartBackgroundWeb2 from "../../assets/pages/crm/pie-chart-bg-web-2.svg";
import PieChartBackgroundWebHD1 from "../../assets/pages/crm/pie-chart-bg-webhd-1.svg";
import PieChartBackgroundWebHD2 from "../../assets/pages/crm/pie-chart-bg-webhd-2.svg";

const PieChart = ({
  title,
  subtitle,
  content,
  leftBlockTitle,
  leftBlockContent,
  rightBlockTitle,
  rightBlockContent,
  centerBlockTitle,
  centerBlockContent,
  className,
  ...otherProps
}) => {
  return (
    <div className={`grid justify-items-center overflow-hidden ${className}`} {...otherProps}>
      <div className="grid relative w-318px md:w-672px lg:w-720px xl:w-1088px">
        <img
          src={PieChartBackgroundMobile}
          alt="background"
          className="md:hidden absolute -z-10 bottom-82px -right-276px max-w-none"
        />
        <img
          src={PieChartBackgroundTablet1}
          alt="background"
          className="hidden md:block lg:hidden absolute -z-10 top-15px left-38px max-w-none"
        />
        <img
          src={PieChartBackgroundTablet2}
          alt="background"
          className="hidden md:block lg:hidden absolute -z-10 -bottom-30px -right-172px max-w-none"
        />
        <img
          src={PieChartBackgroundWeb1}
          alt="background"
          className="hidden lg:block xl:hidden absolute -z-10 top-34px -left-377px max-w-none"
        />
        <img
          src={PieChartBackgroundWeb2}
          alt="background"
          className="hidden lg:block xl:hidden absolute -z-10 -bottom-37px -right-392px max-w-none"
        />

        <img
          src={PieChartBackgroundWebHD1}
          alt="background"
          className="hidden xl:block absolute -z-10 top-60px -left-479px max-w-none"
        />
        <img
          src={PieChartBackgroundWebHD2}
          alt="background"
          className="hidden xl:block absolute -z-10 -bottom-56px -right-533px max-w-none"
        />

        <Text typography="h2" className="text-center mt-50px md:mt-100px lg:mt-150px">
          {title}
        </Text>
        <Text typography="h3" className="mt-20px lg:mt-22px">
          {subtitle}
        </Text>
        <Text typography="body" className="mt-23px lg:mt-21px text-tile-bg-4">
          {content}
        </Text>
        <div className="grid relative h-790px md:h-1096px xl:h-1338px">
          <div className="grid items-end w-154px md:w-156px lg:w-172px xl:w-260px text-center absolute justify-self-start md:left-86px lg:left-90px xl:left-138px bottom-505px md:bottom-765px xl:bottom-1012px">
            <Text typography="h4">{leftBlockTitle}</Text>
            <Text typography="body" className="mt-20px">
              {leftBlockContent}
            </Text>
            <div className="w-2px h-50px md:h-75px lg:h-70px xl:h-100px mt-20px bg-line-color justify-self-center" />
          </div>
          <div className="grid items-end w-154px md:w-156px lg:w-172px xl:w-260px text-center absolute justify-self-end md:right-86px lg:right-90px xl:right-138px bottom-486px md:bottom-721px lg:bottom-745px xl:bottom-972px">
            <Text typography="h4">{rightBlockTitle}</Text>
            <Text typography="body" className="mt-20px">
              {rightBlockContent}
            </Text>
            <div className="w-2px h-30px md:h-75px lg:h-70px xl:h-100px mt-20px bg-line-color justify-self-center" />
          </div>
          <div className="grid items-end w-154px md:w-156px lg:w-168px xl:w-260px text-center absolute justify-self-center top-467px md:top-695px lg:top-716px xl:top-896px">
            <div className="w-2px h-50px md:h-75px lg:h-70px xl:h-100px bg-line-color justify-self-center" />
            <Text typography="h4" className="mt-20px">
              {centerBlockTitle}
            </Text>
            <Text typography="body" className="mt-20px">
              {centerBlockContent}
            </Text>
          </div>
          <img src={PieChartImage} alt="diagram" className="w-full mt-285px md:mt-336px lg:mt-332px xl:mt-326px" />
        </div>
      </div>
    </div>
  );
};

PieChart.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  leftBlockTitle: PropTypes.string,
  leftBlockContent: PropTypes.string,
  rightBlockTitle: PropTypes.string,
  rightBlockContent: PropTypes.string,
  centerBlockTitle: PropTypes.string,
  centerBlockContent: PropTypes.string,
};

PieChart.defaultProps = {
  title: "Title",
  subtitle: "Some subtitle text",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, turpis id vestibulum semper, eros orci placerat ante, vestibulum varius elit odio ac sapien.",
  leftBlockTitle: "ALIGNMENT",
  leftBlockContent: "We structure our partnership so we can dive in with our clients and proactively work together.",
  rightBlockTitle: "VALUE",
  rightBlockContent:
    "We only work on a flat consulting fee so there is less time on quotes, proposals, and approvals… And more time on development.",
  centerBlockTitle: "TRACK RECORD",
  centerBlockContent:
    "In an industry known to have a steep price and poor success rates, our approach has lead to a flawless success rate at a discount.",
};

export default PieChart;

export const query = graphql`
  fragment PieChart on ContentfulPieChart {
    title
    subtitle
    content
    leftBlockTitle
    leftBlockContent
    rightBlockTitle
    rightBlockContent
    centerBlockTitle
    centerBlockContent
  }
`;
