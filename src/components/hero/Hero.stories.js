import React from "react";

import Hero from "./Hero";

export default {
  title: "Common/Hero",
  component: Hero,
};

const Template = args => <Hero {...args} />;

export const AboutPage = Template.bind({});
AboutPage.args = {
  type: "type1",
  title: "We’re the friendly shop.",
  subtitle: "Amplify is unlike any other business solutions provider. The biggest difference? We become a partner.",
};

export const CRMPage = Template.bind({});
CRMPage.args = {
  type: "type2",
  title: "Customers are relationships developed thoughtfully.",
  subtitle:
    "The power of a CRM is its ability to curate the patterns and insights that align with its target audience.",
};

export const AnalyticsPage = Template.bind({});
AnalyticsPage.args = {
  type: "type3",
  title: "Realize the power of proactive data insights.",
  subtitle: "Start to make data-driven decisions for your business and see the difference for yourself.",
};

export const BlogPage = Template.bind({});
BlogPage.args = {
  type: "type4",
  title: "The latest insights and takes from Amplify.",
  subtitle: "Knowledge is power, and the goal of our blog is to help empower our (potential) partners.",
};
