import React from "react";

import AdvantagesOfCRM from "./AdvantagesOfCRM";

import AdvantagesMessagingImage from "../../assets/pages/crm/advantages-messaging.svg";
import AdvantagesEfficiencyImage from "../../assets/pages/crm/advantages-efficiency.svg";
import AdvantagesCollaborationImage from "../../assets/pages/crm/advantages-collaboration.svg";
import AdvantagesManagementImage from "../../assets/pages/crm/advantages-management.svg";
import AdvantagesReportingImage from "../../assets/pages/crm/advantages-reporting.svg";
import AdvantagesDashboardsImage from "../../assets/pages/crm/advantages-dashboards.svg";

export default {
  title: "CRM/Advantages Of CRM",
  component: AdvantagesOfCRM,
};

const Template = args => <AdvantagesOfCRM {...args} />;

export const Default = Template.bind({});
Default.args = {
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
        { className: "advantages-of-crm-tile-3-area pl-82px md:pl-8px pr-82px md:pr-9px lg:hidden", borderSide: "top" },
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
        { className: "advantages-of-crm-tile-4-area pl-82px md:pl-9px pr-82px md:pr-8px lg:pr-9px", borderSide: "top" },
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
        { className: "advantages-of-crm-tile-5-area pl-82px md:pl-8px lg:pl-9px pr-82px md:pr-9px", borderSide: "top" },
        { className: "advantages-of-crm-tile-5-area pt-9px pb-30px lg:pb-50px hidden md:block", borderSide: "right" },
        { className: "advantages-of-crm-tile-5-area pt-9px pb-50px hidden lg:block", borderSide: "left" },
      ],
    },
    {
      image: AdvantagesDashboardsImage,
      title: "DASHBOARDS FOR DATA SHOWCASING",
      content: "Leverage your company data to build in-depth reporting for better business insights and decisions.",
      borders: [
        { className: "advantages-of-crm-tile-6-area pl-82px md:pl-9px pr-82px md:pr-8px lg:pr-9px", borderSide: "top" },
        { className: "advantages-of-crm-tile-6-area pt-9px pb-30px lg:pb-50px hidden md:block", borderSide: "left" },
      ],
    },
  ],
};
