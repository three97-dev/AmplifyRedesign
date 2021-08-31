import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import GettingMost from "../components/getting-most/GettingMost";

import Heading from "../components/heading/Heading";
import AnalyticsFeatures from "../components/analytics-features/AnalyticsFeatures";
import YoutubeVideo from "../components/youtube-video-component/YoutubeVideo";

export default function AnalyticsPage() {
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
    type: "type3",
    title: "Realize the power of proactive data insights.",
    subtitle: "Start to make data-driven decisions for your business and see the difference for yourself.",
  };

  const gettingMost = {
    title: "Is your business getting the most out of your data?",
    subtitle:
      "We specialize in leveraging existing systems and data to create in-depth reporting and analytics that help our clients make better business decisions.",
    blockTitle1: "REAL-TIME AND PROACTIVITY",
    blockContent1: "Ensure you are able to flag trends and forecasts in real-time so you can act before it’s too late.",
    blockTitle2: "DATA DRIVEN",
    blockContent2: "Lead your meetings and reviews with data to get to richer conversations and better decisions.",
    blockTitle3: "SAVE TIME AND COSTS",
    blockContent3:
      "Connect directly to your data sources to avoid time spent on creating and managing one-off Excel reporting.",
  };

  const headingBlue = {
    text: "Are you ready to connect?",
    link: "/contact",
  };

  const analyticsFeatures = {
    title: "Analytics provides the ability to be pro-active about your business activities.",
    subtitle: "Power BI helps to…",
    features: [
      {
        title: "CONNECT TO MULTIPLE DATABASES",
        content: "Bring your sales, marketing, service and accounting data together to create centralized reporting.",
      },
      {
        title: "SET SCHEDULE REFRESH DATE/ TIMES",
        content:
          "Set scheduled refresh dates and times, eliminating outdated information, manual updates and static excel reports",
      },
      {
        title: "POWERFUL VISUALIZATIONS FOR BUSINESS INSIGHTS",
        content:
          "Easily compare month-over-month or year-over-year sales performance, operational efficiency, financial performance and other important KPI’s.",
      },
      {
        title: "REDUCE “ONE-OFF” AND STATIC EXCEL REPORTS",
        content:
          "Connect directly to your raw data source to limit time spent on updating and reconciling your reports.",
      },
      {
        title: "SET PERMISSIONS AND SECURITIES TO SCALE REPORTS",
        content: "Create scalable reports with user/ role/department specific permissions.",
      },
      {
        title: "POWERFUL DRILLDOWNS FOR BUSINESS INSIGHTS",
        content:
          "Drill down on reports to investigate the cause of trends or variations in both performance and underperformance.",
      },
    ],
  };

  const youtubeVideo = {
    title: "Want to see Power BI in action?",
    content:
      "Power BI is feature-rich data mashup and report authoring tool that helps you understand data quality and formatting issues.",
    videoLink: "https://www.youtube.com/embed/YKSNBIlM_bY",
  };

  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <GettingMost {...gettingMost} />
      <AnalyticsFeatures {...analyticsFeatures} />
      <Heading {...headingBlue} />
      <YoutubeVideo {...youtubeVideo} />
    </>
  );
}
