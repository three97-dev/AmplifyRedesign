import React from "react";
import { graphql } from "gatsby";

import Seo from "../seo/Seo";
import {
  Hero,
  AdvantagesOfCRM,
  HowCRMHelps,
  Heading,
  PieChart,
  SiteFooter,
  SiteHeader,
  WhatIsCRM,
} from "../components";

export default function CRMPage({ data }) {
  const { contentfulCrmPage } = data;
  const { whatIsCrm, pieChart, advantagesOfCrm, howCrmHelps } = contentfulCrmPage;

  return (
    <Seo seo={contentfulCrmPage}>
      <SiteHeader />
      <Hero type="type2" title={contentfulCrmPage.heroTitle} subtitle={contentfulCrmPage.heroTitle} />
      <WhatIsCRM
        title1={whatIsCrm.title1}
        subtitle1={whatIsCrm.subtitle1}
        contentText1={whatIsCrm.contentText1}
        title2={whatIsCrm.title2}
        subtitle2={whatIsCrm.subtitle2}
        contentText2={whatIsCrm.contentText2}
        className="-mt-16px md:mt-40px lg:-mt-112px xl:-mt-140px -mb-148px md:-mb-87px lg:-mb-70px xl:-mb-146px"
      />
      <AdvantagesOfCRM
        title={advantagesOfCrm.title}
        advantages1Image={advantagesOfCrm.advantages1Image}
        advantages1Content={advantagesOfCrm.advantages1Content}
        advantages1Title={advantagesOfCrm.advantages1Title}
        advantages2Image={advantagesOfCrm.advantages2Image}
        advantages2Title={advantagesOfCrm.advantages2Title}
        advantages2Content={advantagesOfCrm.advantages2Content}
        advantages3Image={advantagesOfCrm.advantages3Image}
        advantages3Title={advantagesOfCrm.advantages3Title}
        advantages3Content={advantagesOfCrm.advantages3Content}
        advantages4Image={advantagesOfCrm.advantages4Image}
        advantages4Title={advantagesOfCrm.advantages4Title}
        advantages4Content={advantagesOfCrm.advantages4Content}
        advantages5Image={advantagesOfCrm.advantages5Image}
        advantages5Title={advantagesOfCrm.advantages5Title}
        advantages5Content={advantagesOfCrm.advantages5Content}
        advantages6Image={advantagesOfCrm.advantages6Image}
        advantages6Title={advantagesOfCrm.advantages6Title}
        advantages6Content={advantagesOfCrm.advantages6Content}
      />
      <HowCRMHelps
        title={howCrmHelps.title}
        subtitle={howCrmHelps.subtitle}
        image={howCrmHelps.image}
        mainText={howCrmHelps.mainText}
        secondaryText={howCrmHelps.secondaryText}
        className="md:-mt-50px xl:-mt-58px"
      />
      <Heading
        type="type3"
        text={contentfulCrmPage.heading1Label}
        link={contentfulCrmPage.heading1Link}
        className="md:mt-5px"
      />
      <PieChart
        title={pieChart.title}
        subtitle={pieChart.subtitle}
        content={pieChart.content}
        leftBlockTitle={pieChart.leftBlockTitle}
        leftBlockContent={pieChart.leftBlockContent}
        rightBlockTitle={pieChart.rightBlockTitle}
        rightBlockContent={pieChart.rightBlockContent}
        centerBlockTitle={pieChart.centerBlockTitle}
        centerBlockContent={pieChart.centerBlockContent}
        className="lg:-mb-6px xl:-mb-2px"
      />
      <SiteFooter />
    </Seo>
  );
}

export const pageQuery = graphql`
  query CRMPageQuery {
    contentfulCrmPage(id: { eq: "22e086f3-6bc8-5e6c-a3ad-969bc9f134e9" }) {
      heroTitle
      heroSubtitle
      whatIsCrm {
        ...WhatIsCrm
      }
      heading1Label
      heading1Link
      pieChart {
        ...PieChart
      }
      advantagesOfCrm {
        ...AdvantagesOfCrm
      }
      howCrmHelps {
        ...HowCrmHelps
      }
      seoTitle
      seoDescription {
        seoDescription
      }
      seoImage {
        ...SEOImage
      }
      seoOgTitle
      seoOgDescription {
        seoOgDescription
      }
      seoOgImage {
        ...SEOImage
      }
      seoTwitterTitle
      seoTwitterDescription {
        seoTwitterDescription
      }
      seoTwitterImage {
        ...SEOImage
      }
    }
  }
`;
