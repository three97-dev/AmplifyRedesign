import React from "react";

import Text from "../components/basic/text/Text";

import Header from "../components/header/Header";
import HeroHome from "../components/hero-home/HeroHome";
import MicrosoftPartner from "../components/microsoft-partner/MicrosoftPartner";
import Heading from "../components/heading/Heading";
import FractionalApproach from "../components/fractional-approach/FractionalApproach";

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

  return (
    <>
      <Header {...header} />
      <HeroHome {...hero} />
      <MicrosoftPartner {...microsoftPartner} />
      <Heading {...headingRed} className="mt-50px" />
      <FractionalApproach {...fractionalApproach} className="mt-50px md:mt-64px lg:mt-57px xl:mt-42px" />
      <Heading {...headingBlue} className="md:mt-32px xl:-mt-16px" />
    </>
  );
}
