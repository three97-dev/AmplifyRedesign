import React from "react";
import PropTypes from "prop-types";

import UniversalLink from "../../utils/UniversalLink";

// Need to change these images *******************************************************//
import LogoMobile from "../../../assets-raw/xd-export-v1/logo-mobile.svg";
import LogoDesktop from "../../../assets-raw/xd-export-v1/Amplify-Logo-header-big.svg";
//************************************************************************************//

import SendButtonIcon from "../../assets/header/send.svg";
import BurgerIcon from "../../assets/header/burger.svg";
import BurgerIconDark from "../../assets/header/burger-dark.svg";

import "./Header.css";

const Header = ({ isInverted, links, sendButtonLink }) => {
  return (
    <div className="absolute top-0px z-100 grid w-full header-mobile-grid md:header-tablet-grid md+:header-desktop-grid lg+:header-hd-grid items-center md:items-start md+:items-center mt-22px md:mt-30px md+:mt-0px">
      <UniversalLink link="/" className="header-logo-area focus-visible:header-focus-outline">
        <img src={LogoMobile} alt="logo" className="md:hidden" />
        <img src={LogoDesktop} alt="logo" className="hidden md:block" />
      </UniversalLink>

      {/* I don't know what to do with gap. There are different spacings between links */}
      <div className="header-links-area justify-end gap-x-49px lg+:gap-92px hidden md+:flex">
        {links.map((link, i) => (
          <UniversalLink link={link.link} key={i}>
            <div
              className={`typography-body cursor-pointer hover:text-coral-red focus-visible:header-focus-outline focus-visible:text-coral-red ${
                isInverted ? "text-white" : "text-tile-bg-4"
              }`}
            >
              {link.label}
            </div>
          </UniversalLink>
        ))}
      </div>

      <button className="header-burger-area md+:hidden">
        <img src={isInverted ? BurgerIcon : BurgerIconDark} alt="burger-menu" />
      </button>

      <UniversalLink
        link={sendButtonLink}
        className="header-send-button-area hidden md+:block focus:header-focus-outline"
      >
        {/* Need to change to sendButtonImage*/}
        <img src={SendButtonIcon} alt="send" className="h-103px md+:h-104px" />
        {/* <div className=" w-full  bg-coral-red" /> */}
      </UniversalLink>
    </div>
  );
};

Header.propTypes = {
  sendButtonLink: PropTypes.any,
  isInverted: PropTypes.bool,
  links: PropTypes.array,
};

Header.defaultProps = {
  sendButtonLink: "/",
  isInverted: false,
  links: [
    { link: "/", label: "About" },
    { link: "/", label: "CRM" },
    { link: "/", label: "Analytics" },
    { link: "/", label: "Blog" },
    { link: "/", label: "Contact" },
  ],
};

export default Header;
