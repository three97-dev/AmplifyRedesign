import React from "react";

import Image from "../basic/image/Image";
import Text from "../basic/text/Text";

import WhyWorkWebPlus from "../../assets/pages/career/why-work-bg-web-plus.svg";

import "./WhyWorkAmplify.css";

const WhyWorkAmplify = ({
  title,
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
  className,
}) => {
  return (
    <>
      <div className={`grid justify-items-center w-full overflow-x-hidden ${className}`}>
        <div className="grid relative text-center justify-items-center why-work-amplify-mobile md:why-work-amplify-grid-tablet md+:why-work-amplify-grid-web lg+:why-work-amplify-grid-webHD sm+:mt-30px mb-60px sm+:mb-60px md+:mb-50px lg+:mb-113px">
          <img
            src={WhyWorkWebPlus}
            alt="background"
            className="hidden md+:block justify-self-center absolute -z-10 -bottom-50px lg+:-bottom-113px lg+:-left-210px w-1366px lg+:w-2061px h-593px lg+:h-565px max-w-none"
          />

          <div className="why-work-amplify-title w-full md+:mb-70px">
            <Text typography="h2">{title}</Text>
          </div>

          <div className="why-work-amplify-tiles1 text-center px-20px pt-20px md+:pt-0px">
            <div>
              <Image image={tileOneImage} className="mx-auto md+:mt-30px" width="165" height="165" />
              <Text typography="h4" className="mt-25px lg+:20px">
                {blockTitle1}
              </Text>
              <Text typography="body" color="text-fontcolor-body" className="mt-20px lg+:pb-5px">
                {blockContent1}
              </Text>
            </div>
          </div>

          <div className="why-work-amplify-tiles2 text-center px-20px pt-20px md+:pt-0px">
            <div>
              <Image image={tileTwoImage} className="mx-auto md+:mt-30px" width="165" height="165" />
              <Text typography="h4" className="mt-25px lg+:mt-20px">
                {blockTitle2}
              </Text>
              <Text typography="body" color="text-fontcolor-body" className="mt-20px lg+:pb-5px">
                {blockContent2}
              </Text>
            </div>
          </div>

          <div className="why-work-amplify-tiles3 text-center px-20px pt-20px md+:pt-0px">
            <div>
              <Image image={tileThreeImage} className="mx-auto md+:mt-30px" width="165" height="165" />
              <Text typography="h4" className="mt-25px lg+:mt-20px">
                {blockTitle3}
              </Text>
              <Text typography="body" color="text-fontcolor-body" className="mt-20px lg+:pb-5px">
                {blockContent3}
              </Text>
            </div>
          </div>

          <div className="why-work-amplify-tiles4 text-center px-20px pt-20px md+:pt-0px ">
            <div>
              <Image image={tileFourImage} className="mx-auto md+:mt-30px" width="165" height="165" />
              <Text typography="h4" className="mt-25px lg+:mt-20px">
                {blockTitle4}
              </Text>
              <Text typography="body" color="text-fontcolor-body" className="mt-20px lg+:pb-5px">
                {blockContent4}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyWorkAmplify;
