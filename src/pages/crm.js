import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Heading from "../components/heading/Heading";

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
