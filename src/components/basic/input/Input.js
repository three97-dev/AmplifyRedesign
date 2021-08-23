import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const BORDER_COLORS = {
  "jagged-ice": "hover:border-jagged-ice-700 focus-visible:border-jagged-ice-700",
  linen: "hover:border-linen-700 focus-visible:border-linen-700",
  "blue-gem": "hover:border-blue-gem-700 focus-visible:border-blue-gem-700",
  pippin: "hover:border-pippin-700 focus-visible:border-pippin-700",
};

const resolveBorderColor = color => {
  return BORDER_COLORS[color];
};

const Input = ({
  label,
  className,
  height,
  placeholder,
  showError,
  isError,
  isShadow,
  color,
  type,
  name,
  id,
  onChange,
  value,
  errorMessage,
  onBlur,
}) => {
  let display = "block";
  let displayLabel = "block";
  let displayError = "block";
  if (!label && !showError) {
    display = "hidden";
  }
  if (!label) {
    displayLabel = "invisible";
  }
  if (!showError) {
    displayError = "invisible";
  }

  const inputError = isError
    ? "input-error border-pippin-900 pr-50px focus-visible:pl-15px focus-visible:pr-49px focus-visible:border-2 focus-visible:m-0px"
    : `border-natural-500 pr-16px ${resolveBorderColor(
        color
      )} focus-visible:border-2 focus-visible:pl-15px focus-visible:pr-15px`;

  return (
    <div className={`${className}`}>
      <div className={`grid grid-flow-col pb-8px w-full ${display}`}>
        <label
          htmlFor={name}
          className={`justify-self-start typography-body-small text-14px leading-24px -tracking-1pc ${displayLabel}`}
        >
          {label}
        </label>
        <div
          className={`justify-content-end typography-body-small text-14px leading-24px -tracking-1pc text-pippin-900 text-right
          ${displayError}
        ${isError ? "visible" : "invisible"}`}
        >
          {errorMessage}
        </div>
      </div>

      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={`placeholder-natural-600 typography-body-small text-14px leading-24px -tracking-1pc ${height} w-full pl-16px rounded-full focus-visible:outline-none
        ${inputError} ${isShadow ? "border-0 input-shadow" : "border"}`}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  showError: PropTypes.bool,
  isError: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.oneOf(["blue-gem", "jagged-ice", "linen", "pippin"]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: "",
  name: "",
  id: "",
  label: "",
  placeholder: "",
  errorMessage: "SomeError",
  showError: true,
  isError: false,
  className: "",
  height: "h-48px",
  color: "jagged-ice",
  onBlur: () => {},
  onChange: () => {},
};

export default Input;
