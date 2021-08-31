import React from "react";

import AnalyticsFeatures from "./AnalyticsFeatures";

export default {
  title: "Analytics/AnalyticsFeatures",
  component: AnalyticsFeatures,
};

const Template = args => <AnalyticsFeatures {...args} />;

export const Default = Template.bind({});
Default.args = {
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
      content: "Connect directly to your raw data source to limit time spent on updating and reconciling your reports.",
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
