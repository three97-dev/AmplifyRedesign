import React, { useState } from "react";
import { graphql } from "gatsby";

import Seo from "../seo/Seo";
import { SiteHeader, SiteFooter, Hero } from "../components";
import AmplifyAdvantage from "../components/amplify-advantage/AmplifyAdvantage";
import WhyWorkAmplify from "../components/why-work-amplify/WhyWorkAmplify";
import Text from "../components/basic/text/Text";
import OpenOpportunities from "../components/open-opportunities/OpenOpportunities";
import OpenOpportunitiesModal from "../components/open-opportunities-modal/OpenOpportunitiesModal";

export default function CareersPage({ data }) {
  const { contentfulCareersPage, allContentfulOpenPosition } = data;
  const openPositions = allContentfulOpenPosition.nodes;

  const [showModalForItem, setShowModalForItem] = useState(null);

  return (
    <Seo seo={contentfulCareersPage}>
      <SiteHeader />
      <Hero type="type5" title={contentfulCareersPage.title} subtitle={contentfulCareersPage.subtitle} />
      <AmplifyAdvantage
        mainText={contentfulCareersPage.theAmplifyAdvantageTitle}
        secondaryText={contentfulCareersPage.theAmplifyAdvantageDescription}
        image={contentfulCareersPage.theAmplifyAdvantageImage}
        className=""
      />
      <WhyWorkAmplify
        title={contentfulCareersPage.whyWorkForAmplify.title}
        tileOneImage={contentfulCareersPage.whyWorkForAmplify.tile1Image}
        blockTitle1={contentfulCareersPage.whyWorkForAmplify.tile1Title}
        blockContent1={contentfulCareersPage.whyWorkForAmplify.tile1Content.tile1Content}
        tileTwoImage={contentfulCareersPage.whyWorkForAmplify.tile2Image}
        blockTitle2={contentfulCareersPage.whyWorkForAmplify.tile2Title}
        blockContent2={contentfulCareersPage.whyWorkForAmplify.tile2Content.tile2Content}
        tileThreeImage={contentfulCareersPage.whyWorkForAmplify.tile3Image}
        blockTitle3={contentfulCareersPage.whyWorkForAmplify.tile3Title}
        blockContent3={contentfulCareersPage.whyWorkForAmplify.tile3Content.tile3Content}
        tileFourImage={contentfulCareersPage.whyWorkForAmplify.tile4Image}
        blockTitle4={contentfulCareersPage.whyWorkForAmplify.tile4Title}
        blockContent4={contentfulCareersPage.whyWorkForAmplify.tile4Content.tile4Content}
        className="mt-50px md+:mb-50px"
      />
      <OpenOpportunities
        openPositions={openPositions}
        tableTitle={contentfulCareersPage.tableTitle}
        tableRoleLabel={contentfulCareersPage.tableRoleLabel}
        tableDepartmentLabel={contentfulCareersPage.tableDepartmentLabel}
        tablePostingDateLabel={contentfulCareersPage.tablePostingDateLabel}
        tableViewButtonLabel={contentfulCareersPage.tableViewButtonLabel}
        openModalCallback={item => {
          setShowModalForItem(item);
        }}
      />
      {showModalForItem !== null ? (
        <div
          className="fixed z-100 h-full w-full grid justify-items-center top-0px left-0px modal-background overflow-y-auto"
          onClick={() => setShowModalForItem(null)}
        >
          <div className="w-full mx-36px mt-36px mb-50px md:mx-0px md:my-auto md:pt-20px md:pb-40px lg+:pt-40px lg+:pb-60px">
            <OpenOpportunitiesModal
              title={showModalForItem.roleName}
              secondaryText={showModalForItem.positionDescription}
              link={showModalForItem.applyLink}
              linkLabel={contentfulCareersPage.applyButtonLabel}
              onClick={() => setShowModalForItem(null)}
            />
          </div>
        </div>
      ) : null}
      <div className="mx-35px my-50px md:max-w-680px lg:max-w-1088px xl:max-w-1550px md:mx-auto">
        <Text typography="h3" className="">
          {contentfulCareersPage.careersBottomDescriptionTitle}
        </Text>
        <Text typography="body" className="mt-14px">
          {contentfulCareersPage.careersBottomDescription.careersBottomDescription}
        </Text>
      </div>
      <SiteFooter />
    </Seo>
  );
}

export const pageQuery = graphql`
  query CareersPageQuery {
    contentfulCareersPage(contentful_id: { eq: "7zfhnX5t9FvHfs3g21qv72" }) {
      title
      subtitle
      theAmplifyAdvantageTitle
      theAmplifyAdvantageDescription {
        raw
      }
      theAmplifyAdvantageImage {
        ...Image
      }
      whyWorkForAmplify {
        title
        tile1Content {
          tile1Content
        }
        tile1Image {
          ...Image
        }
        tile1Title
        tile2Content {
          tile2Content
        }
        tile2Image {
          ...Image
        }
        tile2Title
        tile3Content {
          tile3Content
        }
        tile3Image {
          ...Image
        }
        tile3Title
        tile4Content {
          tile4Content
        }
        tile4Image {
          ...Image
        }
        tile4Title
      }
      tableTitle
      tableRoleLabel
      tableDepartmentLabel
      tablePostingDateLabel
      tableViewButtonLabel
      applyButtonLabel
      careersBottomDescriptionTitle
      careersBottomDescription {
        careersBottomDescription
      }
    }
    allContentfulOpenPosition {
      nodes {
        roleName
        department
        postingDate
        applyLink
        positionDescription {
          raw
        }
      }
    }
  }
`;
