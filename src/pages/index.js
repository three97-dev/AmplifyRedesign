import React from "react";
import { graphql } from "gatsby";

import Seo from "../seo/Seo";
import {
  HeroHome,
  MicrosoftPartner,
  BusinessLifecycleTiles,
  Heading,
  FractionalApproach,
  SiteFooter,
  SiteHeader,
  Testimonials,
} from "../components";

export default function IndexPage({ data }) {
  const { contentfulHomePage } = data;
  const { microsoftPartner, businessLifecycleTiles, fractionalApproach, testimonials } = contentfulHomePage;

  return (
    <Seo seo={contentfulHomePage}>
      <SiteHeader isInverted={true} />
      <HeroHome title={contentfulHomePage.heroHomeTitle} subtitle={contentfulHomePage.heroHomeSubtitle} />
      <MicrosoftPartner
        title={microsoftPartner.title}
        mainText={microsoftPartner.mainText}
        secondaryText={microsoftPartner.secondaryText}
        image={microsoftPartner.image}
      />
      <BusinessLifecycleTiles
        title={businessLifecycleTiles.title}
        subtitle={businessLifecycleTiles.subtitle}
        tileOneImage={businessLifecycleTiles.tile1Image}
        tile1CustomerTypeModal={businessLifecycleTiles.tile1CustomerTypeModal}
        blockTitle1={businessLifecycleTiles.tile1Title}
        blockContent1={businessLifecycleTiles.tile1Content}
        tileTwoImage={businessLifecycleTiles.tile2Image}
        tile2CustomerTypeModal={businessLifecycleTiles.tile2CustomerTypeModal}
        blockTitle2={businessLifecycleTiles.tile2Title}
        blockContent2={businessLifecycleTiles.tile2Content}
        tileThreeImage={businessLifecycleTiles.tile3Image}
        tile3CustomerTypeModal={businessLifecycleTiles.tile3CustomerTypeModal}
        blockTitle3={businessLifecycleTiles.tile3Title}
        blockContent3={businessLifecycleTiles.tile3Content}
        tileFourImage={businessLifecycleTiles.tile4Image}
        tile4CustomerTypeModal={businessLifecycleTiles.tile4CustomerTypeModal}
        blockTitle4={businessLifecycleTiles.tile4Title}
        blockContent4={businessLifecycleTiles.tile4Content}
        homeSmthElse={businessLifecycleTiles.buttonLabel}
        homeSmthButtonLink={businessLifecycleTiles.buttonUrl}
        className="mt-52px md:mt-85px lg:-mt-58px xl:-mt-69px"
      />
      <Heading
        isHuge={true}
        direction="right"
        color="red"
        text={contentfulHomePage.heading1Label}
        link={contentfulHomePage.heading1Link}
        className="-mt-100px md:-mt-115px xl:-mt-133px"
      />
      <FractionalApproach
        title={fractionalApproach.title}
        description={fractionalApproach.description}
        stats={fractionalApproach.statsValue}
        statsDescription={fractionalApproach.statsDescription}
        tile1Number={fractionalApproach.tile1Number}
        tile1Description={fractionalApproach.tile1Description}
        tile2Number={fractionalApproach.tile2Number}
        tile2Description={fractionalApproach.tile2Description}
        tile3Number={fractionalApproach.tile3Number}
        tile3Description={fractionalApproach.tile3Description}
        tile4Number={fractionalApproach.tile4Number}
        tile4Description={fractionalApproach.tile4Description}
        learnMoreText={fractionalApproach.buttonCommentText}
        learnMoreButtonLabel={fractionalApproach.buttonLabel}
        learnMoreButtonLink={fractionalApproach.buttonLink}
        className="mt-50px md:mt-64px lg:mt-57px xl:mt-42px"
      />
      <Heading
        type="type1"
        isHuge={true}
        text={contentfulHomePage.heading2Label}
        link={contentfulHomePage.heading2Link}
        className="md:mt-32px lg:-mt-11px xl:-mt-31px"
      />
      <Testimonials
        title={testimonials.title}
        image={testimonials.image}
        testimonialsToShow={testimonials.testimonialsToShow}
        className="mt-51px md:mt-0px pb-49px md:pb-165px lg:pb-0px"
      />
      <SiteFooter />
    </Seo>
  );
}

export const pageQuery = graphql`
  query HomePageQuery {
    contentfulHomePage(id: { eq: "c59e105b-a170-50a0-9222-10747f86c8d2" }) {
      heroHomeTitle {
        raw
      }
      heroHomeSubtitle
      microsoftPartner {
        ...MicrosoftPartner
      }
      businessLifecycleTiles {
        ...BusinessLifecycleTiles
      }
      heading1Label
      heading1Link
      fractionalApproach {
        ...FractionalApproach
      }
      heading2Label
      heading2Link
      testimonials {
        ...Testimonials
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
