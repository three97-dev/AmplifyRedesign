import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Heading from "../components/heading/Heading";

import WhatIsCrm from "../components/what-is-crm/WhatIsCRM";
import AdvantagesOfCRM from "../components/advantages-of-crm/AdvantagesOfCRM";
import HowCRMHelps from "../components/how-crm-helps/HowCRMHelps";
import PieChart from "../components/pie-chart/PieChart";

import AdvantagesMessagingImage from "../assets/pages/crm/advantages-messaging.svg";
import AdvantagesEfficiencyImage from "../assets/pages/crm/advantages-efficiency.svg";
import AdvantagesCollaborationImage from "../assets/pages/crm/advantages-collaboration.svg";
import AdvantagesManagementImage from "../assets/pages/crm/advantages-management.svg";
import AdvantagesReportingImage from "../assets/pages/crm/advantages-reporting.svg";
import AdvantagesDashboardsImage from "../assets/pages/crm/advantages-dashboards.svg";

import ImageHowCRMHelps from "../assets/pages/crm/how-crm-helps-image.png";

export default function CRMPage() {
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
    type: "type2",
    title: "Customers are relationships developed thoughtfully.",
    subtitle:
      "The power of a CRM is its ability to curate the patterns and insights that align with its target audience.",
  };

  const whatIsCRM = {
    title1: "What is customer relationship management?",
    subtitle1:
      "CRM is more than just software or a set of processes – it’s a business culture solidly focused on winning and keeping the right customers.",
    contentText1: (
      <>
        A good CRM solution builds value for your business by opening up vital communication channels and creating a
        common client-focused knowledge-base to better serve your clients. <br />
        <br />
        CRM has taken over as the largest software market in the world, with over 91% of companies with more than 11
        employees using a CRM system to manage their business and with good reason.A CRM system not only allows you to
        centralize and secure all your important business and customer data but can act as a singular business
        management tool that can propel your business to the next level.
      </>
    ),
    title2: "The Value Opportunity",
    subtitle2: "",
    contentText2:
      "CRM is more than just software or a set of processes – it’s a business culture solidly focused on winning and keeping the right customers. A good CRM solution builds value for your business by opening up vital communication channels and creating a common client-focused knowledge-base to better serve your clients",
  };

  const headingBlue = {
    text: "Are you ready to connect?",
    link: "/contact",
  };

  const advantagesOfCRM = {
    title: "Advantages of Having a Strong CRM",
    advantages: [
      {
        image: AdvantagesMessagingImage,
        title: "IMPROVED MESSAGING",
        content: "Reach consistency and avoid missed follow-ups by centralizing your communication.",
        borders: [
          { className: "advantages-of-crm-tile-1-area pl-82px md:pl-8px pr-82px md:pr-9px", borderSide: "bottom" },
          { className: "advantages-of-crm-tile-1-area pt-30px lg:pt-50px pb-9px hidden md:block", borderSide: "right" },
        ],
      },
      {
        image: AdvantagesEfficiencyImage,
        title: "EFFICIENCY BY AUTOMATION",
        content:
          "Build you company specific processes to help automate notifications, task assignment, approvals, administrative work, and document creation.",
        borders: [
          {
            className: "advantages-of-crm-tile-2-area pl-82px md:pl-9px pr-82px md:pr-8px lg:pr-9px",
            borderSide: "bottom",
          },
          { className: "advantages-of-crm-tile-2-area pl-82px pr-82px md:hidden", borderSide: "top" },
          { className: "advantages-of-crm-tile-2-area pt-30px lg:pt-50px pb-9px hidden md:block", borderSide: "left" },
          { className: "advantages-of-crm-tile-2-area pt-50px pb-9px hidden lg:block", borderSide: "right" },
        ],
      },
      {
        image: AdvantagesCollaborationImage,
        title: "SIMPLIFIED COLLABORATION",
        content:
          "A central system for Sales, Service, Marketing, Operations and Management to streamline your inter-department collaboration and work.",
        borders: [
          {
            className: "advantages-of-crm-tile-3-area pl-82px md:pl-8px lg:pl-9px pr-82px md:pr-9px",
            borderSide: "bottom",
          },
          {
            className: "advantages-of-crm-tile-3-area pl-82px md:pl-8px pr-82px md:pr-9px lg:hidden",
            borderSide: "top",
          },
          { className: "advantages-of-crm-tile-3-area pt-9px pb-9px hidden md:block lg:hidden", borderSide: "right" },
          { className: "advantages-of-crm-tile-3-area pt-50px pb-9px hidden lg:block", borderSide: "left" },
        ],
      },
      {
        image: AdvantagesManagementImage,
        title: "PROACTIVE CUSTOMER MANAGEMENT",
        content:
          "Begin to segment and group your Prospects and Clients, allowing for system checks and notifications to help proactively manage your relationships.",
        borders: [
          {
            className: "advantages-of-crm-tile-4-area pl-82px md:pl-9px pr-82px md:pr-8px lg:hidden",
            borderSide: "bottom",
          },
          {
            className: "advantages-of-crm-tile-4-area pl-82px md:pl-9px pr-82px md:pr-8px lg:pr-9px",
            borderSide: "top",
          },
          { className: "advantages-of-crm-tile-4-area pt-9px pb-9px hidden md:block lg:hidden", borderSide: "left" },
          { className: "advantages-of-crm-tile-4-area pt-9px pb-50px hidden lg:block", borderSide: "right" },
        ],
      },
      {
        image: AdvantagesReportingImage,
        title: "TRUSTWORTHY REPORTING",
        content:
          "Through your custom processes and required fields you can begin to build valuable and accurate data on your business.",
        borders: [
          { className: "advantages-of-crm-tile-5-area pl-82px pr-82px md:hidden", borderSide: "bottom" },
          {
            className: "advantages-of-crm-tile-5-area pl-82px md:pl-8px lg:pl-9px pr-82px md:pr-9px",
            borderSide: "top",
          },
          { className: "advantages-of-crm-tile-5-area pt-9px pb-30px lg:pb-50px hidden md:block", borderSide: "right" },
          { className: "advantages-of-crm-tile-5-area pt-9px pb-50px hidden lg:block", borderSide: "left" },
        ],
      },
      {
        image: AdvantagesDashboardsImage,
        title: "DASHBOARDS FOR DATA SHOWCASING",
        content: "Leverage your company data to build in-depth reporting for better business insights and decisions.",
        borders: [
          {
            className: "advantages-of-crm-tile-6-area pl-82px md:pl-9px pr-82px md:pr-8px lg:pr-9px",
            borderSide: "top",
          },
          { className: "advantages-of-crm-tile-6-area pt-9px pb-30px lg:pb-50px hidden md:block", borderSide: "left" },
        ],
      },
    ],
  };

  const howCRMHelps = {
    title: "How CRM Technology Helps",
    subtitle:
      "A CRM platform helps companies target different audiences, set scores and alerts based on an individual lead or customer’s activity, proactively work with contacts, and maintain relationships. Best of all, a CRM system can be used across departments to ensure that all customer-facing teams are empowered with the right data to create incredible customer experiences.",
    image: ImageHowCRMHelps,
    mainText:
      "Microsoft is the only vendor that provides hardware, software, and internet-of-things (IoT) platforms to enable end-to-end customer service.",
    secondaryText: (
      <>
        Dynamics 365 is a collection of intelligent business applications that work together to run your business within
        one unified platform, helping drive consistency and efficiency.
        <br />
        <br /> Dynamics 365 is scalable – while it continues to excel in its core areas of sales process management and
        finance it also provides exceptional marketing, service, human resource and operations applications as well that
        can be layered in to create a complete business management solution.
      </>
    ),
  };

  const pieChart = {
    title: "The “Amplify” Difference",
    subtitle:
      "We look to partner and grow with each of our clients, we like to be thought of as a “Fractional CRM Department”.",
    content:
      "The impacts of a high functioning CRM are substantial. But getting there is not easy as evident in the industry report that 49% of CRM projects fail. We have found an approach that has lead to overwhelming satisfaction at a discounted cost.",
    leftBlock: {
      title: "ALIGNMENT",
      content: "We structure our partnership so we can dive in with our clients and proactively work together.",
    },
    rightBlock: {
      title: "VALUE",
      content:
        "We only work on a flat consulting fee so there is less time on quotes, proposals, and approvals… And more time on development.",
    },
    centerBlock: {
      title: "TRACK RECORD",
      content:
        "In an industry known to have a steep price and poor success rates, our approach has lead to a flawless success rate at a discount.",
    },
  };

  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <WhatIsCrm {...whatIsCRM} />
      <AdvantagesOfCRM {...advantagesOfCRM} />
      <HowCRMHelps {...howCRMHelps} />
      <Heading {...headingBlue} className="mt-50px" />
      <PieChart {...pieChart} />
    </>
  );
}
