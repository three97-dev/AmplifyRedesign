import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Heading from "../components/heading/Heading";
import AboutUs from "../components/about-us/AboutUs";
import WhyAmplify from "../components/why-amplify/WhyAmplify";
import OurApproach from "../components/our-approach/OurApproach";
import WinnerAds from "../components/winner-ads/WinnerAds";

import ImageOurApproachTileOne from "../assets/pages/about/our-approach-tile-img-1.svg";
import ImageOurApproachTileTwo from "../assets/pages/about/our-approach-tile-img-2.svg";
import ImageOurApproachTileThree from "../assets/pages/about/our-approach-tile-img-3.svg";
import ImageOurApproachTileFour from "../assets/pages/about/our-approach-tile-img-4.svg";
import WinnerLogo from "../assets/pages/about/winner-ads-img.png";

export default function AboutPage() {
  const header = {
    sendButtonLink: "/",
    isInverted: false,
    links: [
      { link: "/about", label: "About" },
      { link: "/crm", label: "CRM" },
      { link: "/analytics", label: "Analytics" },
      { link: "/blog", label: "Blog" },
      { link: "/contact", label: "Contact" },
    ],
  };
  const hero = {
    type: "type1",
    title: "We’re the friendly shop.",
    subtitle: "Amplify is unlike any other business solutions provider. The biggest difference? We become a partner.",
  };

  const aboutUs = {
    mainText:
      "Since 2018, we’ve been working with businesses of all sizes to amplify their sales, margins and satisfaction through the use of customized CRM and business intelligence solutions.",
    secondaryText:
      "Our focus is to partner with organizations to simplify the process of setting up and maximizing the potential of Dynamics 365 and Power BI. We build high-end systems and analytics that result in a major competitive advantage for our clients.",
    tile1Title: "MISSION",
    tile1Description: "Tailored business technology, made simple and attainable.",
    tile2Title: "VISION",
    tile2Description:
      "Driving profitability and scalability through the effective implementation and management of technology.",
  };

  const whyAmplify = {
    title: "Why Amplify?",
    subtitle:
      "Our advantage is built around finding a flat monthly consulting fee, as opposed to hourly logs and project quotes.",
    blockTitle1: "WE’RE NOT JUST PROGRAMMERS, WE’RE ALSO BUSINESSPEOPLE",
    blockContent1:
      "We take the time to fully understand your business so we can pro-actively suggest ways that Dynamics 365 and Power BI can help you succeed and grow.",
    blockTitle2: "WE BELIEVE IN FINDING VALUE TOGETHER",
    blockContent2:
      "We find a flat monthly fee that fits your business so we can focus on finding value without needing to worry about increased costs or going over budget.",
    blockTitle3: "WE’RE AGILE AND FAST WITHOUT SACRIFICING QUALITY",
    blockContent3:
      "With our approach we have been able to implement and further enhance our clients CRM and Reporting at an industry leading pace.",
  };

  const headingBlue = {
    text: "Are you ready to connect?",
    link: "/contact",
  };

  const ourApproach = {
    title: "Our approach is simple...",
    subtitle: "We want to turn your CRM and Reporting Solutions into a top competitive advantage for your company.",
    centerText: "The Amplifying Method",
    tileOneImage: ImageOurApproachTileOne,
    tileOneMainText: "UNDERSTAND YOUR BUSINESS",
    tileOneSecondaryText:
      "We are both business and tech-savvy – we will dive into your business and existing systems, understanding them as you would expect a senior employee to.",
    tileTwoImage: ImageOurApproachTileTwo,
    tileTwoMainText: "ALIGN GOALS",
    tileTwoSecondaryText:
      "We will discuss your business and technology goals alongside your budget and available resources, ensuring we are fully aligned on how best to structure development.",
    tileThreeImage: ImageOurApproachTileThree,
    tileThreeMainText: "DEVELOPMENT MANAGEMENT",
    tileThreeSecondaryText:
      "We have a proprietory built-in tool where you, your staff and our developers can view, suggest and review on-going development together to help identify priorities.",
    tileFourImage: ImageOurApproachTileFour,
    tileFourMainText: "LAUNCH NEW INITIATIVES",
    tileFourSecondaryText:
      "Not only will we be there to help your current priorities, we will pro-actively suggest ways your business can take advantage of the latest technology developments.",
  };

  const winnerAds = {
    image: WinnerLogo,
    title: "Amplify the Good",
    subtitle: "Could a $50,000 technology investment help your cause?",
    blockContent: (
      <>
        Amplify Solutions will donate up to $50,000 in services toward building and supporting a customized CRM platform
        and business reporting tool for qualifying small to medium non-profit organizations.
        <br />
        <br />
        We believe strongly in supporting growing non-profit organizations by providing a foundation on which they can
        organize, expand and Amplify the Good they are doing for their communities.
        <br />
        <br />
        <strong>Keep an eye out for announcements on next year’s Amplify the Good and more chances to win!</strong>
      </>
    ),
    tileText: "CONGRATS TO OUR 2021 WINNER",
  };

  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <AboutUs {...aboutUs} />
      <WhyAmplify {...whyAmplify} />
      <Heading {...headingBlue} className="-mt-130px" />
      <OurApproach {...ourApproach} />
      <WinnerAds {...winnerAds} />
    </>
  );
}
