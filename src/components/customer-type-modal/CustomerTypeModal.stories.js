import React from "react";

import CustomerTypeModal from "./CustomerTypeModal";

import HandImage from "../../assets/pages/home/business-lifecycle-customer-type-1.svg";
import HeadImage from "../../assets/pages/home/business-lifecycle-customer-type-2.svg";
import GearImage from "../../assets/pages/home/business-lifecycle-customer-type-3.svg";
import AnalyticsImage from "../../assets/pages/home/business-lifecycle-customer-type-4.svg";

export default {
  title: "Home/Customer Type Modal",
  component: CustomerTypeModal,
  parameters: {
    backgrounds: { default: "dark" },
  },
};
const Template = args => (
  <div style={{ margin: "20px", display: "flex" }}>
    <CustomerTypeModal {...args} />
  </div>
);
export const CRMTypeModal = Template.bind({});
CRMTypeModal.args = {
  image: HandImage,
  color: "type1",
  title: "We’re looking to implement our first CRM.",
  subtitle:
    "CRM has taken over as the largest software market in the world, with over 91% of companies with more than 11 employees using a CRM system to manage their business and with good reason. A CRM system not only allows you to centralize and secure all your important business and customer data but can act as a singular business management tool that can propel your business to the next level.",
  question: "What can a CRM bring to my company?",
  answerContent: [
    {
      subtitle: "BETTER COMMUNICATION",
      content: "Centralize emails, phone calls, meetings, and tasks into one system.",
    },
    {
      subtitle: "BUILD YOUR PROCESSES",
      content: "Use the latest technology to add consistency and efficiency to your company specific processes.",
    },
    {
      subtitle: "TRUSTWORTHY DATA",
      content: "Start to build consistent and valuable company data for better business decisions.",
    },
  ],
};
export const SwichTypeModal = Template.bind({});
SwichTypeModal.args = {
  image: HeadImage,
  color: "type2",
  title: "We’re looking to switch from our current CRM.",
  subtitle:
    "There can be multiple reasons why you might be re-evaluating your current CRM; increased costs, integration issues with other systems, limited functionality or difficulties with your current development partners. We have helped clients in all of these scenarios successfully migrate to Dynamics 365 to solve their CRM challenges.",
  question: "Why Dynamics 365?",
  answerContent: [
    {
      subtitle: "INTEGRATIONS",
      content: "Office 365 and other Microsoft apps fully integrate with many features continually being added.",
    },
    { subtitle: "SCALABLE", content: "Add departments and apps as you grow, it is meant to run your entire business." },
    { subtitle: "CENTRALIZED DATABASE", content: "Built better data for valuable insights through Power BI." },
    {
      subtitle: "COST EFFICIENT",
      content: "Priced significantly lower in market for system capabilities and features.",
    },
    {
      subtitle: "LEADING IN AI",
      content: "Get your company positioned on a system you’ll never have to switch from in the future.",
    },
  ],
};
export const GearTypeModal = Template.bind({});
GearTypeModal.args = {
  image: GearImage,
  color: "type3",
  title: "We need help managing Dynamics 365.",
  subtitle:
    "The capabilities, integrations and functionality of Dynamics 365 are moving at a rapid pace. Finding the internal resources to keep up with this technology is difficult. This is our expertise and we are ready to help manage this for you, so that you can take advantage of the growing benefits of the platform while continuing your focus on your business.",
  question: "Success in managing and enhancing Dynamics 365 involves:",
  answerContent: [
    {
      subtitle: "DEVELOPMENT TOOL",
      content:
        "Amplify has a built-in tool within your Dynamics environment to easily make requests and view updates while working in the system.",
    },
    {
      subtitle: "RECURRING MEETINGS",
      content:
        "We schedule regular, recurring meetings with designated stakeholders to ensure our development priorities and pace are aligned and being communicated effectively.",
    },
    {
      subtitle: "PLANNING MEETINGS",
      content:
        "We also include a recurring planning meeting where we take a step back, analyze our progress at a higher level, review our shared goals and come well prepared with our suggestions and the latest relevant technology updates.",
    },
  ],
};
export const AnalyticsTypeModal = Template.bind({});
AnalyticsTypeModal.args = {
  image: AnalyticsImage,
  color: "type4",
  title: "We need help with reporting and analytics.",
  subtitle:
    "We specialize in leveraging existing systems and data to create in-depth reporting and analytics that help our clients make better business decisions. Power BI combines power analytics with exceptional data visualization to deliver real-time insight into all aspect of your business.",
  question: "Why Power BI?",
  answerContent: [
    {
      subtitle: "CONNECT TO MULTIPLE DATABASES",
      content: "Bring your sales, marketing, service and accounting data together to create centralized reporting.",
    },
    {
      subtitle: "REAL-TIME REPORTING",
      content:
        "Set scheduled refresh dates and times, eliminating outdated information, manual updates and static excel reports.",
    },
    {
      subtitle: "POWER VISUALIZATIONS",
      content:
        "Easily compare month-over-month or year-over-year sales performance, operational efficiency, financial performance and other important KPI’s.",
    },
    {
      subtitle: "DRILLDOWN FOR BUSINESS INSIGHTS",
      content:
        "Drill down on reports to investigate the cause of trends or variations in both performance and underperformance.",
    },
    {
      subtitle: "SET PERMISSIONS AND SECURITIES",
      content: "Create scalable reports with user/role/department specific permissions.",
    },
    {
      subtitle: "NATIVE MICROSOFT INTEGRATIONS",
      content:
        "View reports and dashboards directly in Dynamics 365 and Microsoft Teams with direct links to those underlying records.",
    },
  ],
};
