import React from "react";

import Header from "./Header";

import HeroHome from "../hero-home/HeroHome";

import Hero from "../hero/Hero";

export default {
  title: "Common/Header",
  component: Header,
};

export const Default = ({ ...args }) => <Header {...args} />;
Default.args = {
  sendButtonLink: "/",
  isInverted: false,
  links: [
    { link: "/", label: "About" },
    { link: "/", label: "CRM" },
    { link: "/", label: "Analytics" },
    { link: "/", label: "Blog" },
    { link: "/", label: "Contact" },
  ],
};

export const WithHeroHome = ({ header, hero }) => (
  <>
    <Header {...header} />
    <HeroHome {...hero} />
  </>
);
WithHeroHome.args = {
  header: {
    sendButtonLink: "/",
    isInverted: true,
    links: [
      { link: "/", label: "About" },
      { link: "/", label: "CRM" },
      { link: "/", label: "Analytics" },
      { link: "/", label: "Blog" },
      { link: "/", label: "Contact" },
    ],
  },
  hero: {
    title: (
      <>
        Do you know <span className="text-coral-red">the impact</span> a CRM can have on your business?
      </>
    ),
    subtitle: "A CRM can amplify your insights, providing new revenue opportunities and workforce efficiencies.",
  },
};

const TemplateWithHero = ({ header, hero }) => (
  <>
    <Header {...header} />
    <Hero {...hero} />
  </>
);

export const WithHeroAbout = TemplateWithHero.bind({});
WithHeroAbout.args = {
  header: {
    sendButtonLink: "/",
    isInverted: false,
    links: [
      { link: "/", label: "About" },
      { link: "/", label: "CRM" },
      { link: "/", label: "Analytics" },
      { link: "/", label: "Blog" },
      { link: "/", label: "Contact" },
    ],
  },
  hero: {
    type: "type1",
    title: "We’re the friendly shop.",
    subtitle: "Amplify is unlike any other business solutions provider. The biggest difference? We become a partner.",
  },
};

export const WithHeroCRM = TemplateWithHero.bind({});
WithHeroCRM.args = {
  header: {
    sendButtonLink: "/",
    isInverted: false,
    links: [
      { link: "/", label: "About" },
      { link: "/", label: "CRM" },
      { link: "/", label: "Analytics" },
      { link: "/", label: "Blog" },
      { link: "/", label: "Contact" },
    ],
  },
  hero: {
    type: "type2",
    title: "Customers are relationships developed thoughtfully.",
    subtitle:
      "The power of a CRM is its ability to curate the patterns and insights that align with its target audience.",
  },
};

export const WithHeroAnalytics = TemplateWithHero.bind({});
WithHeroAnalytics.args = {
  header: {
    sendButtonLink: "/",
    isInverted: false,
    links: [
      { link: "/", label: "About" },
      { link: "/", label: "CRM" },
      { link: "/", label: "Analytics" },
      { link: "/", label: "Blog" },
      { link: "/", label: "Contact" },
    ],
  },
  hero: {
    type: "type3",
    title: "Realize the power of proactive data insights.",
    subtitle: "Start to make data-driven decisions for your business and see the difference for yourself.",
  },
};

export const WithHeroBlog = TemplateWithHero.bind({});
WithHeroBlog.args = {
  header: {
    sendButtonLink: "/",
    isInverted: false,
    links: [
      { link: "/", label: "About" },
      { link: "/", label: "CRM" },
      { link: "/", label: "Analytics" },
      { link: "/", label: "Blog" },
      { link: "/", label: "Contact" },
    ],
  },
  hero: {
    type: "type4",
    title: "The latest insights and takes from Amplify.",
    subtitle: "Knowledge is power, and the goal of our blog is to help empower our (potential) partners.",
  },
};
