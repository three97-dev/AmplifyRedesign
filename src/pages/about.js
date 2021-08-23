import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Heading from "../components/heading/Heading";

export default function AboutPage() {
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
    type: "type1",
    title: "We’re the friendly shop.",
    subtitle: "Amplify is unlike any other business solutions provider. The biggest difference? We become a partner.",
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
