import React from "react";
import PropTypes from "prop-types";

import UniversalLink from "../../../utils/UniversalLink";

import "./BlueButton.css";

const BlueButton = ({ label, btnClasses, link, onClick }) => {
  const buttonClasses = `${btnClasses} text-body font-bold text-center py-15px button-dark-blue box-shadow bg-button-color-1 focus-visible:outline-none focus:outline-none`;

  if (link) {
    return (
      <UniversalLink link={link} className={buttonClasses}>
        {label}
      </UniversalLink>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

BlueButton.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
  btnClasses: PropTypes.string,
};

BlueButton.defaultProps = {
  onClick: () => {},
  btnClasses: "",
};

export default BlueButton;
