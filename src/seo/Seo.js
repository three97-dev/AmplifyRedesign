import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

import { pageToSeoObject, siteDefaultSeoToSeoObject, mergeSeo } from "./seoUtils";

const Seo = ({ seo, children }) => {
  const { pathname } = useLocation();
  const { contentfulDefaultSeo } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      contentfulDefaultSeo(contentful_id: { eq: "3Ki5C4SzAEXDPkyh6nAcMu" }) {
        seoSiteUrl
        seoTitleTemplate
        seoTitle
        seoDescription {
          seoDescription
        }
        seoImage {
          file {
            url
          }
        }
        seoOgTitle
        seoOgDescription {
          seoOgDescription
        }
        seoOgImage {
          file {
            url
          }
        }
        seoTwitterUsername
        seoTwitterTitle
        seoTwitterDescription {
          seoTwitterDescription
        }
        seoTwitterImage {
          file {
            url
          }
        }
      }
    }
  `);

  const pageSEO = pageToSeoObject(seo);
  const defaultSEO = siteDefaultSeoToSeoObject(contentfulDefaultSeo, pathname);

  const mergedSEO = mergeSeo(defaultSEO, pageSEO);

  return (
    <>
      <Helmet
        title={mergedSEO.title}
        titleTemplate={mergedSEO.titleTemplate}
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta name="description" content={mergedSEO.description} />
        <meta name="image" content={mergedSEO.image} />

        <meta property="og:url" content={mergedSEO.url} />
        <meta property="og:title" content={mergedSEO.og_title} />
        <meta property="og:description" content={mergedSEO.og_description} />
        <meta property="og:image" content={mergedSEO.og_image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={mergedSEO.twitter_username} />
        <meta name="twitter:title" content={mergedSEO.twitter_title} />
        <meta name="twitter:description" content={mergedSEO.twitter_description} />
        <meta name="twitter:image" content={mergedSEO.twitter_image} />
      </Helmet>
      {children}
    </>
  );
};

export default Seo;
