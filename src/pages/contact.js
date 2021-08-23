import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

export default function ContactPage() {
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
    title: "",
    subtitle: "",
  };

  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
    </>
  );
}
