import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Text from "../basic/text/Text";
import MapsComponent from "../maps-component/MapsComponent";

import ImageBackgroundTablet from "../../assets/pages/contacts/map-bg-tablet.svg";
import ImageBackgroundWeb from "../../assets/pages/contacts/map-bg-web.svg";
import ImageBackgroundWebhd from "../../assets/pages/contacts/map-bg-webhd.svg";

import "./ContactsMap.css";

const ContactsMap = ({
  title,
  address,
  addressContent,
  phone,
  phoneContent,
  email,
  emailContent,
  location,
  googleMapsCredentials,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={`grid justify-items-center xl:justify-items-stretch w-full overflow-y-hidden ${className}`}
      {...otherProps}
    >
      <div className="grid relative location-grid-mobile md:location-grid-tablet lg:location-grid-desc xl:location-grid-hd py-50px md:py-100px lg:py-120px">
        <img
          src={ImageBackgroundTablet}
          alt="background"
          className="hidden md:block lg:hidden absolute -z-10 md:bottom-310px md:right-254px max-w-none"
        />
        <img
          src={ImageBackgroundWeb}
          alt="background"
          className="hidden lg:block xl:hidden absolute -z-10 lg:-bottom-107px lg:right-475px max-w-none"
        />
        <img
          src={ImageBackgroundWebhd}
          alt="background"
          className="hidden xl:block absolute -z-10 xl:-bottom-80px xl:right-924px max-w-none"
        />
        <div className="location-contacts-area md:flex lg:block self-center">
          <div className="mb-20px md:mt-1px lg:mt-0px lg:mb-20px">
            <Text typography="h2">{title}</Text>
          </div>
          <div className="md:ml-115px lg:ml-0px">
            <div className="flex mb-19px lg:mb-20px">
              <Text typography="body">{address}</Text>
              <Text typography="body" className="mr-20px ml-14px md:ml-18px lg:ml-25px xl:ml-70px lg:w-205px">
                {addressContent}
              </Text>
            </div>
            <div className="flex mb-19px lg:mb-18px">
              <Text typography="body">{phone}</Text>
              <Text
                typography="body"
                color="text-tile-bg-3"
                className="mr-20px ml-28px md:ml-33px xl:ml-84px lg:ml-38px"
              >
                {phoneContent}
              </Text>
            </div>
            <div className="flex">
              <Text typography="body">{email}</Text>
              <Text
                typography="body"
                color="text-tile-bg-3"
                className="mr-20px ml-33px md:ml-37px xl:ml-90px lg:ml-43px"
              >
                {emailContent}
              </Text>
            </div>
          </div>
        </div>
        <div className="location-map-area h-241px md:h-509px lg:h-406px xl:h-602px w-full mt-50px md:mt-75px lg:mt-0px">
          <MapsComponent location={location} googleMapsCredentials={googleMapsCredentials} />
        </div>
      </div>
    </div>
  );
};

ContactsMap.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  addressContent: PropTypes.string,
  phone: PropTypes.string,
  phoneContent: PropTypes.string,
  email: PropTypes.string,
  emailContent: PropTypes.string,
  location: PropTypes.object,
  googleMapsCredentials: PropTypes.object,
};

ContactsMap.defaultProps = {
  title: "some title",
  address: "some address",
  addressContent: "some addressContent",
  phone: "some phone",
  phoneContent: "some phoneContent",
  email: "some email",
  emailContent: "some emailContent",
};

export default ContactsMap;

export const query = graphql`
  fragment ContactsMap on ContentfulContactsMap {
    title
    addressTitle
    addressValue
    phoneTitle
    phoneValue
    emailTitle
    emailValue
    googleMapsCredentials {
      id
      googleMapsApiKey
    }
    location {
      lat
      lon
    }
  }
`;
