import React from "react";
import PropTypes from "prop-types";

import Text from "../basic/text/Text";
import UniversalLink from "../../utils/UniversalLink";

import Image from "../basic/image/Image";
import LogoLinkedin from "../../assets/pages/footer/linkedin-footer-mobile.svg";
import LogoFacebook from "../../assets/pages/footer/facebook-footer-mobile.svg";
import LogoInstagram from "../../assets/pages/footer/instagram-footer-mobile.svg";

import "./Footer.css";

const Footer = ({ links, subtitle, copyright, address, logo, className, ...otherProps }) => {
  return (
    <div className="grid footer-grid-mobile md:footer-grid-tablet lg:footer-grid-web xl:footer-grid-webhd bg-footer-bg">
      <UniversalLink link="/" className="footer-image-area mx-auto md:mx-0px md:mt-4px mb-25px md:mb-0px">
        <Image image={logo} className="md:w-168px" />
      </UniversalLink>
      <div className="links-block-area justify-self-end mx-auto md:mx-0px mb-45px md:mb-0px md:ml-50px md:mr-39px lg:mr-51px xl:mr-143px">
        {links.map((link, i) => (
          <UniversalLink link={link.link} key={i}>
            <Text typography="footer" className="typography-body cursor-pointer text-center md:text-left">
              {link.label}
            </Text>
          </UniversalLink>
        ))}
      </div>
      <div className="subtitle-block-area items-start w-312px md:w-full mx-auto text-center md:text-left mb-20px md:mb-0px">
        <Text typography="footer">
          Since 2018, we’ve been working with businesses of all sizes to amplify their sales, margins and satisfaction
          through the use of customized CRM and business intelligence solutions.
        </Text>
      </div>
      <div className="address-block-area hidden md:block">
        <Text typography="footer">{address}</Text>
      </div>
      <div className="social-block-area flex justify-between items-start mb-50px md:mb-15px mx-auto md:mx-0px w-160px md:w-76px md:mt-22px lg:mt-12px ">
        <UniversalLink link="/">
          <img src={LogoFacebook} alt="LogoFacebook" className="h-28px w-28px md:h-14px md:w-14px" />
        </UniversalLink>
        <UniversalLink link="/">
          <img src={LogoInstagram} alt="LogoInstagram" className="h-28px w-28px md:h-14px md:w-14px" />
        </UniversalLink>
        <UniversalLink link="/">
          <img src={LogoLinkedin} alt="LogoLinkedin" className="h-28px w-28px md:h-14px md:w-14px" />
        </UniversalLink>
      </div>
      <div className="opacity-30 copyright-block-area items-end text-center mx-36px md:mx-auto md:w-full border-t border-fontcolor-footer">
        <Text typography="footer" color="text-fontcolor-footer" className="my-15px">
          {copyright}
        </Text>
      </div>
    </div>
  );
};

Footer.propTypes = {
  links: PropTypes.array,
  copyright: PropTypes.string,
  address: PropTypes.string,
  className: PropTypes.string,
  subtitle: PropTypes.string,
};

Footer.defaultProps = {
  links: [],
  copyright: "some copyright",
  address: "some address",
  subtitle: "some subtitle",
  className: "",
};

export default Footer;
