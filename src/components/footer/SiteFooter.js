import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Footer from "./Footer";

const SiteFooter = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooterConfig(id: { eq: "6f7cc191-f49b-583d-ab82-498ea37da156" }) {
        logo {
          ...Image
        }
        copyright
        address
        links {
          label
          link
        }
      }
    }
  `);

  return (
    <Footer
      links={data.contentfulFooterConfig.links}
      copyright={data.contentfulFooterConfig.copyright}
      address={data.contentfulFooterConfig.address}
      logo={data.contentfulFooterConfig.logo}
    />
  );
};

export default SiteFooter;
