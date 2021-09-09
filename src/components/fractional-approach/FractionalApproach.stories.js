import React from "react";

import FractionalApproach from "./FractionalApproach";

import Text from "../basic/text/Text";

export default {
  title: "Home/Fractional Approach",
  component: FractionalApproach,
  argTypes: {
    color: {
      options: ["type1", "type2", "type3", "type4", "type5", "type6"],
      control: { type: "select" },
    },
    hasContentBg: true,
    spacing: {
      options: ["10px", "20px"],
      control: { type: "radio" },
    },
  },
};

const Template = args => <FractionalApproach {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "We believe the fractional approach provides optimal value to our clients.",
  description: {
    raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Most emerging businesses are focused on maintaining their bottom line costs while challenged with growing and optimizing their revenues with existing resources. The opportunity that technology and tooling provides is intended to unlock new efficiencies that manual process often cannot.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Unfortunately, many small business implementing technologies fall short in realizing the business value that was initially driving their business case. The cost to continue developing the capability can become out of reach for many or uninspiring for others.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"We work with companies to cost effectively provide a fractional solution that takes care of optimizing your CRM technology and sales operations through partnership.","marks":[],"data":{}}],"data":{}},{"nodeType":"heading-3","content":[{"nodeType":"text","value":"Fractional CRM has a fit for all.","marks":[],"data":{}}],"data":{}},{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Business of this size need to allocate their staff towards revenue generating activities, while we focus on optimizing their day to day.","marks":[],"data":{}}],"data":{}}]}',
  },
  stats: "2-30+",
  statsDescription: "Sales Staff",
  tile1Number: "94%",
  tile1Description: "CLIENT SATISFACTION RATING",
  tile2Number: "100%",
  tile2Description: "NET PROMOTER SCORE",
  tile3Number: "100%",
  tile3Description: "MET/EXCEEDED EXPECTATIONS",
  tile4Number: "100%",
  tile4Description: "RENEWALS AFTER FIRST TERM",
  learnMoreText: "New to the fractional CRM approach? Click below to learn more.",
  learnMoreButtonLabel: "Learn more",
  learnMoreButtonLink: "/test",
};
