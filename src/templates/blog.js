import React from "react";
import { graphql } from "gatsby";

import Seo from "../seo/Seo";
import { Hero, FourTiles, SiteFooter, SiteHeader, ContactUsBlog } from "../components";

export default function BlogPage({ data, pageContext }) {
  const { contentfulBlogRootTemplate, allContentfulBlogPost } = data;
  const { currentPage, totalPages } = pageContext;

  const posts = allContentfulBlogPost?.nodes || [];

  return (
    <Seo seo={contentfulBlogRootTemplate}>
      <SiteHeader />
      <Hero
        type="type4"
        title={contentfulBlogRootTemplate.heroTitle}
        subtitle={contentfulBlogRootTemplate.heroSubtitle}
      />
      <FourTiles
        id="post-tiles"
        posts={posts}
        linkLabel={contentfulBlogRootTemplate.readMoreLabel}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <ContactUsBlog
        title={contentfulBlogRootTemplate.contactUsTitle}
        subtitle={contentfulBlogRootTemplate.contactUsSubtitle}
        linkLabel={contentfulBlogRootTemplate.contactUsButtonLabel}
        link={contentfulBlogRootTemplate.contactUsButtonLink}
      />
      <SiteFooter />
    </Seo>
  );
}

export const pageQuery = graphql`
  query ($limit: Int!, $skip: Int!) {
    allContentfulBlogPost(sort: { order: DESC, fields: postDate }, limit: $limit, skip: $skip) {
      nodes {
        ...BlogPostTile
      }
    }
    contentfulBlogRootTemplate(id: { eq: "b28fc462-0bf5-57b5-9f9c-c83ab4cf751c" }) {
      heroTitle
      heroSubtitle
      readMoreLabel
      contactUsTitle
      contactUsSubtitle
      contactUsButtonLabel
      contactUsButtonLink
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
