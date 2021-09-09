import React from "react";
import { graphql } from "gatsby";

import Seo from "../seo/Seo";
import { Hero, AboutUs, OurApproach, Heading, WhyAmplify, SiteHeader, SiteFooter, WinnerAds } from "../components";

export default function AboutPage({ data }) {
  const { contentfulAboutPage } = data;
  const { aboutUs, whyAmplify, ourApproach, winnerAds } = contentfulAboutPage;

  return (
    <Seo seo={contentfulAboutPage}>
      <SiteHeader />
      <Hero type="type1" title={contentfulAboutPage.heroTitle} subtitle={contentfulAboutPage.heroSubtitle} />
      <AboutUs
        mainText={aboutUs.mainText}
        secondaryText={aboutUs.secondaryText}
        tile1Title={aboutUs.tile1Title}
        tile1Description={aboutUs.tile1Description}
        tile2Title={aboutUs.tile2Title}
        tile2Description={aboutUs.tile2Description}
        className="-mt-44px md:-mt-70px lg:-mt-82px"
      />
      <WhyAmplify
        title={whyAmplify.title}
        subtitle={whyAmplify.subtitle}
        blockTitle1={whyAmplify.block1Title}
        blockContent1={whyAmplify.block1Content}
        blockTitle2={whyAmplify.block2Title}
        blockContent2={whyAmplify.block2Content}
        blockTitle3={whyAmplify.block3Title}
        blockContent3={whyAmplify.block3Content}
        className="md:-mt-25px lg:-mt-138px xl:-mt-108px"
      />
      <Heading
        type="type2"
        text={contentfulAboutPage.heading1Label}
        link={contentfulAboutPage.heading1Link}
        className="mt-52px md:-mt-14px lg:-mt-85px xl:-mt-215px"
      />
      <OurApproach
        title={ourApproach.title}
        subtitle={ourApproach.subtitle}
        centerText={ourApproach.centerText}
        tileOneMainText={ourApproach.tile1MainText}
        tileOneSecondaryText={ourApproach.tile1SecondaryText}
        tileTwoMainText={ourApproach.tile2MainText}
        tileTwoSecondaryText={ourApproach.tile2SecondaryText}
        tileThreeMainText={ourApproach.tile3MainText}
        tileThreeSecondaryText={ourApproach.tile3SecondaryText}
        tileFourMainText={ourApproach.tile4MainText}
        tileFourSecondaryText={ourApproach.tile4SecondaryText}
        tileOneImage={ourApproach.tile1Image}
        tileTwoImage={ourApproach.tile2Image}
        tileThreeImage={ourApproach.tile3Image}
        tileFourImage={ourApproach.tile4Image}
        className="md:-mt-58px lg:mt-12px xl:mt-28px mb-50px md:mb-0px"
      />
      <WinnerAds
        title={winnerAds.title}
        subtitle={winnerAds.subtitle}
        blockContent={winnerAds.blockContent}
        tileImage={winnerAds.image}
        tileText={winnerAds.tileText}
        className="lg:-mt-91px xl:-mt-70px md:-mb-130px xl:mb-0px xl:pb-32px"
      />
      <SiteFooter />
    </Seo>
  );
}

export const pageQuery = graphql`
  query AboutPageQuery {
    contentfulAboutPage(id: { eq: "4be89d15-4d75-5019-a9de-729fe32909cb" }) {
      heroTitle
      heroSubtitle
      aboutUs {
        ...AboutUs
      }
      whyAmplify {
        ...WhyAmplify
      }
      ourApproach {
        ...OurApproach
      }
      winnerAds {
        ...WinnerAds
      }
      heading1Label
      heading1Link
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
