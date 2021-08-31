import React from "react";

import Text from "../components/basic/text/Text";

import Header from "../components/header/Header";
import HeroHome from "../components/hero-home/HeroHome";
import MicrosoftPartner from "../components/microsoft-partner/MicrosoftPartner";
import BusinessLifecycleTiles from "../components/business-lifecycle-tiles/BusinessLifecycleTiles";
import Heading from "../components/heading/Heading";
import FractionalApproach from "../components/fractional-approach/FractionalApproach";
import Testimonials from "../components/testimonials/Testimonials";

import ImageBusinessLifecycleTileOne from "../assets/pages/home/business-lifecycle-customer-type-1.svg";
import ImageBusinessLifecycleTileTwo from "../assets/pages/home/business-lifecycle-customer-type-2.svg";
import ImageBusinessLifecycleTileThree from "../assets/pages/home/business-lifecycle-customer-type-3.svg";
import ImageBusinessLifecycleTileFour from "../assets/pages/home/business-lifecycle-customer-type-4.svg";

export default function IndexPage() {
  const header = {
    sendButtonLink: "/",
    isInverted: true,
    links: [
      { link: "/about", label: "About" },
      { link: "/crm", label: "CRM" },
      { link: "/analytics", label: "Analytics" },
      { link: "/blog", label: "Blog" },
      { link: "/contact", label: "Contact" },
    ],
  };
  const hero = {
    title: (
      <>
        Do you know <span className="text-fontcolor-red">the impact</span> a CRM can have on your business?
      </>
    ),
    subtitle: "A CRM can amplify your insights, providing new revenue opportunities and workforce efficiencies.",
  };
  const microsoftPartner = {
    title: "Partnerships are critical to long-term success.",
    mainText:
      "We’re a Microsoft Silver Partner, which means you can trust us with all things Dynamics 365 CRM and Power BI.",
    secondaryText:
      "This type of partnership with Microsoft is earned through experience in working with Dynamics 365, Power BI, Microsoft Teams, SharePoint, Power Apps, Power Automate and many more Microsoft products!",
  };
  const businessLifecycleTiles = {
    title: "Let’s see where your CRM situation lines up today.",
    subtitle: "Click the area below that best represents where your business is in its lifecycle to learn more.",
    tileOneImage: ImageBusinessLifecycleTileOne,
    blockTitle1: "WE’RE LOOKING TO IMPLEMENT OUR FIRST CRM.",
    blockContent1:
      "If this is your first time implementing a CRM, we’ll make it simple and walk you through your options.",
    tileTwoImage: ImageBusinessLifecycleTileTwo,
    blockTitle2: "WE’RE LOOKING TO SWITCH FROM OUR CURRENT CRM.",
    blockContent2:
      "If your toolset is underpowered or you’ve outgrown its purpose, we can introduce you to new capabilities.",
    tileThreeImage: ImageBusinessLifecycleTileThree,
    blockTitle3: "WE NEED HELP MANAGING DYNAMICS 365",
    blockContent3: "If you’re already using Dynamics 365, let us help you unlock its full potential.",
    tileFourImage: ImageBusinessLifecycleTileFour,
    blockTitle4: "WE NEED HELP WITH REPORTING AND ANALYTICS.",
    blockContent4: "Turn your data into insights with in-depth reporting and analytics.",

    homeSmthElse: "We’re probably something else...",
    homeSmthButtonLink: "/test",
  };
  const headingRed = {
    direction: "right",
    color: "red",
    text: "We also help non-profits.",
    link: "/contact",
  };
  const headingBlue = {
    text: "Are you ready to connect?",
    link: "/contact",
  };
  const fractionalApproach = {
    heading: (
      <Text typography="h2" className="text-center">
        We believe the fractional approach provides optimal value to our clients.
      </Text>
    ),
    description: (
      <>
        <Text typography="body">
          Most emerging businesses are focused on maintaining their bottom line costs while challenged with growing and
          optimizing their revenues with existing resources. The opportunity that technology and tooling provides is
          intended to unlock new efficiencies that manual process often cannot.
          <br /> <br />
          Unfortunately, many small business implementing technologies fall short in realizing the business value that
          was initially driving their business case. The cost to continue developing the capability can become out of
          reach for many or uninspiring for others.
          <br /> <br />
          We work with companies to cost effectively provide a fractional solution that takes care of optimizing your
          CRM technology and sales operations through partnership.
        </Text>
        <Text typography="h3" className="mt-20px mb-22px">
          Fractional CRM has a fit for all.
        </Text>
        <Text typography="body">
          Business of this size need to allocate their staff towards revenue generating activities, while we focus on
          optimizing their day to day.
        </Text>
      </>
    ),
    stats: "2-30+",
    statsDescription: "Sales Staff",
    tile1Number: "94%",
    tile1Description: "CLIENT SATISFACTION RATING",
    tile2Number: "100%",
    tile2Description: "NET PROMOTER SCORE",
    tile3Number: "100%",
    tile3Description: "MET/EXCEEDED EXPECTATIONS",
    tile4Number: "100%",
    tile4Description: "RENEWALS AFTER FIRST TERM",
    learnMoreText: "New to the fractional CRM approach? Click below to learn more.",
    learnMoreButtonLabel: "Learn more",
    learnMoreButtonLink: "/test",
  };
  const testimonials = {
    sliderHeader: "Testimonials",
    testimonialsSlides: [
      {
        slideText:
          "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
        slideAuthor: "RYAN MITCHEL",
        authorPosition: "PRESIDENT/OWNER",
        authorCompany: "WILDWOOD TRANDPORT",
      },
      {
        slideText:
          "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
        slideAuthor: "JOHN DOE",
        authorPosition: "CEO",
        authorCompany: "WITCHER",
      },
      {
        slideText:
          "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
        slideAuthor: "ELISABETH ZALTSMAN",
        authorPosition: "MARKETING DIRECTOR",
        authorCompany: "APPLE",
      },
      {
        slideText:
          "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
        slideAuthor: "SHELDON COOPER",
        authorPosition: "SCIENTIST",
        authorCompany: "PHYSICS SC",
      },
      {
        slideText:
          "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
        slideAuthor: "NORBERT HEEL",
        authorPosition: "OWNER",
        authorCompany: "TROUBLEMAKER",
      },
    ],
  };

  return (
    <>
      <Header {...header} />
      <HeroHome {...hero} />
      <MicrosoftPartner {...microsoftPartner} />
      <BusinessLifecycleTiles {...businessLifecycleTiles} />
      <Heading {...headingRed} className="mt-50px" />
      <FractionalApproach {...fractionalApproach} className="mt-50px md:mt-64px lg:mt-57px xl:mt-42px" />
      <Heading {...headingBlue} className="md:mt-32px xl:-mt-16px" />
      <Testimonials {...testimonials} />
    </>
  );
}
