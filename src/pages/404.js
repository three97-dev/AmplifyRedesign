import React from "react";

import { Hero, SiteHeader, SiteFooter } from "../components";

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <Hero type="type4" title="Such page doesn't exist" subtitle="Maybe URL is outdated or broken" />
      <SiteFooter />
    </>
  );
}
