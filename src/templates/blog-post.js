import React from "react";
import { graphql } from "gatsby";

import Seo from "../seo/Seo";
import { HeroBlogPost, SiteFooter, SiteHeader, ContactUsBlogPost, BlogPostContent } from "../components";

export default function BlogPostTemplate({ data }) {
  const { contentfulBlogPost, contentfulBlogPostTemplate } = data;

  const postSeo = {
    seoTitle: contentfulBlogPost?.title,
    seoDescription: {
      seoDescription: contentfulBlogPost?.subtitle,
    },
    seoImage: {
      file: {
        url: contentfulBlogPost?.postImage?.file?.url,
      },
    },
  };
  return (
    <Seo seo={postSeo}>
      <SiteHeader />
      <HeroBlogPost
        title={contentfulBlogPost.title}
        subtitle={contentfulBlogPost.subtitle}
        image={contentfulBlogPost.postImage}
      />
      <BlogPostContent
        text={contentfulBlogPost.content}
        date={contentfulBlogPost.postDate}
        minutesToRead={contentfulBlogPost.minutesToRead}
        minutesToReadText={contentfulBlogPostTemplate.minutesToRead}
      />
      <ContactUsBlogPost
        title={contentfulBlogPostTemplate.contactUsTitle}
        subtitle={contentfulBlogPostTemplate.contactUsSubtitle}
        linkLabel={contentfulBlogPostTemplate.contactUsButtonLabel}
        link={contentfulBlogPostTemplate.contactUsButtonLink}
      />
      <SiteFooter />
    </Seo>
  );
}

export const pageQuery = graphql`
  query BlogPostTemplateQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      slug
      title
      subtitle
      minutesToRead
      postDate
      postImage {
        ...HeroBlogPostImage
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            description
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 720)
          }
        }
      }
    }
    contentfulBlogPostTemplate(contentful_id: { eq: "2TpT76DyrBcrRHzIYMl63d" }) {
      minutesToRead
      contactUsTitle
      contactUsSubtitle
      contactUsButtonLabel
      contactUsButtonLink
    }
  }
`;
