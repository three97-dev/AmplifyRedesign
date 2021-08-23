import React from "react";

import HeroHome from "./HeroHome";

export default {
  title: "Home/Hero Home",
  component: HeroHome,
};

const Template = args => <HeroHome {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: (
    <>
      Do you know <span className="text-fontcolor-red">the impact</span> a CRM can have on your business?
    </>
  ),
  subtitle: "A CRM can amplify your insights, providing new revenue opportunities and workforce efficiencies.",
};
