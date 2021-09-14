import React from "react";
import { graphql } from "gatsby";

import Seo from "../seo/Seo";
import { ContactsMap, HeroContactForm, SiteFooter, SiteHeader, ThankYouForSubmission } from "../components";

export default function ContactPage({ data }) {
  const { contentfulContactsPage } = data;
  const {
    contactsMap,
    heroTitle,
    heroSubtitle,
    firstNameInputPlaceholder,
    lastNameInputPlaceholder,
    businessInputPlaceholder,
    phoneNumberInputPlaceholder,
    emailAddressInputPlaceholder,
    requiredMessage,
    buttonLabel,
    thankYouTitle,
    thankYouContent,
  } = contentfulContactsPage;
  return (
    <Seo seo={contentfulContactsPage}>
      <SiteHeader />
      <HeroContactForm
        heroTitle={heroTitle}
        heroSubtitle={heroSubtitle}
        firstNameInputPlaceholder={firstNameInputPlaceholder}
        lastNameInputPlaceholder={lastNameInputPlaceholder}
        businessInputPlaceholder={businessInputPlaceholder}
        phoneNumberInputPlaceholder={phoneNumberInputPlaceholder}
        emailAddressInputPlaceholder={emailAddressInputPlaceholder}
        requiredMessage={requiredMessage}
        buttonLabel={buttonLabel}
      />
      <ThankYouForSubmission title={thankYouTitle} content={thankYouContent} />
      <ContactsMap
        title={contactsMap.title}
        address={contactsMap.addressTitle}
        addressContent={contactsMap.addressValue}
        phone={contactsMap.phoneTitle}
        phoneContent={contactsMap.phoneValue}
        email={contactsMap.emailTitle}
        emailContent={contactsMap.emailValue}
        location={contactsMap.location}
        googleMapsCredentials={contactsMap.googleMapsCredentials}
      />
      <SiteFooter />
    </Seo>
  );
}

export const pageQuery = graphql`
  query ContactsPageQuery {
    contentfulContactsPage(id: { eq: "4b411d63-9f97-530f-a39b-2ce94d63012a" }) {
      heroTitle
      heroSubtitle
      firstNameInputPlaceholder
      lastNameInputPlaceholder
      businessInputPlaceholder
      phoneNumberInputPlaceholder
      emailAddressInputPlaceholder
      requiredMessage
      buttonLabel
      thankYouTitle
      thankYouContent
      contactsMap {
        ...ContactsMap
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
