import React from "react";
import { graphql } from "gatsby";

import Seo from "../seo/Seo";
import { Hero, AnalyticsFeatures, GettingMost, Heading, SiteFooter, SiteHeader, YouTubeVideo } from "../components";

export default function AnalyticsPage({ data }) {
  const { contentfulAnalyticsPage } = data;
  const { gettingMost, analyticsFeatures, youtubeVideo } = contentfulAnalyticsPage;

  return (
    <Seo seo={contentfulAnalyticsPage}>
      <SiteHeader />
      <Hero type="type3" title={contentfulAnalyticsPage.heroTitle} subtitle={contentfulAnalyticsPage.heroSubtitle} />
      <GettingMost
        title={gettingMost.title}
        subtitle={gettingMost.subtitle}
        blockTitle1={gettingMost.block1Title}
        blockContent1={gettingMost.block1Content}
        blockTitle2={gettingMost.block2Title}
        blockContent2={gettingMost.block2Content}
        blockTitle3={gettingMost.block3Title}
        blockContent3={gettingMost.block3Content}
        className="mt-100px md:mt-25px lg:-mt-14px xl:-mt-180px"
      />
      <AnalyticsFeatures
        title={analyticsFeatures.title}
        subtitle={analyticsFeatures.subtitle}
        feature1Title={analyticsFeatures.feature1Title}
        feature1Content={analyticsFeatures.feature1Content}
        feature2Title={analyticsFeatures.feature2Title}
        feature2Content={analyticsFeatures.feature2Content}
        feature3Title={analyticsFeatures.feature3Title}
        feature3Content={analyticsFeatures.feature3Content}
        feature4Title={analyticsFeatures.feature4Title}
        feature4Content={analyticsFeatures.feature4Content}
        feature5Title={analyticsFeatures.feature5Title}
        feature5Content={analyticsFeatures.feature5Content}
        feature6Title={analyticsFeatures.feature6Title}
        feature6Content={analyticsFeatures.feature6Content}
        className="-mt-5px md:-mt-120px lg:-mt-125px xl:-mt-160px"
      />
      <Heading type="type4" text={contentfulAnalyticsPage.heading1Label} link={contentfulAnalyticsPage.heading1Link} />
      <YouTubeVideo title={youtubeVideo.title} content={youtubeVideo.content} videoLink={youtubeVideo.videoLink} />
      <SiteFooter />
    </Seo>
  );
}

export const pageQuery = graphql`
  query AnalyticsPageQuery {
    contentfulAnalyticsPage(id: { eq: "5e71c382-a438-54de-affc-161f273093ad" }) {
      heroTitle
      heroSubtitle
      gettingMost {
        ...GettingMost
      }
      analyticsFeatures {
        ...AnalyticsFeatures
      }
      heading1Label
      heading1Link
      youtubeVideo {
        ...YoutubeVideo
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
