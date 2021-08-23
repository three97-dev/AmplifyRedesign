import React from "react";

import Testimonials from "./Testimonials";

export default {
  title: "Home/Testimonials Slider",
  component: Testimonials,
};

export const Default = ({ ...args }) => <Testimonials {...args} />;
Default.args = {
  sliderHeader: "Testimonials",
  testimonialsSlides: [
    {
      slideText:
        "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
      slideAuthor: "RYAN MITCHEL",
      authorPosition: "PRESIDENT/OWNER",
      authorCompany: "WILDWOOD TRANDPORT",
    },
    {
      slideText:
        "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
      slideAuthor: "JOHN DOE",
      authorPosition: "CEO",
      authorCompany: "WITCHER",
    },
    {
      slideText:
        "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
      slideAuthor: "ELISABETH ZALTSMAN",
      authorPosition: "MARKETING DIRECTOR",
      authorCompany: "APPLE",
    },
    {
      slideText:
        "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
      slideAuthor: "SHELDON COOPER",
      authorPosition: "SCIENTIST",
      authorCompany: "PHYSICS SC",
    },
    {
      slideText:
        "Throughout this process I have appreciated having the ability to talk to people that take the time (and have the ability) to understand our business and truly customize our CRM platform to exactly what makes sense for us. Amplify’s knowledge and experience in Dynamics, sales, and business in general, has been hugely valuable throughout this process, mostly because of their ability to apply this expertise to our unique requirements.",
      slideAuthor: "NORBERT HEEL",
      authorPosition: "OWNER",
      authorCompany: "TROUBLEMAKER",
    },
  ],
}