import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Heading from "../components/heading/Heading";

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
