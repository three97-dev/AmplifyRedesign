import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Heading from "../components/heading/Heading";

export default function BlogPage() {
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
    type: "type4",
    title: "The latest insights and takes from Amplify.",
    subtitle: "Knowledge is power, and the goal of our blog is to help empower our (potential) partners.",
  };

  const headingBlue = {
    text: "Are you ready to connect?",
    link: "/contact",
  };

  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <Heading {...headingBlue} className="mt-50px" />
    </>
  );
}
