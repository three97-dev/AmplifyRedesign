import React from "react";
import PropTypes from "prop-types";

import "./Text.css";

const TYPOGRAPHIES = {
  h1: "typography-h1",
  h2: "typography-h2",
  h3: "typography-h3",
  h4: "typography-h4",
  body: "typography-body",
  footer: "typography-footer",
  stats: "typography-stats",
};

const resolveTypography = typography => {
  const resolvedCss = TYPOGRAPHIES[typography];
  if (!resolvedCss) {
    throw new Error(`Failed to resolve typography: ${typography}`);
  }
  return resolvedCss;
};

const COLORS = {
  h1: "text-fontcolor-h1",
  h2: "text-fontcolor-h2",
  h3: "text-fontcolor-h3",
  h4: "text-fontcolor-h4",
  body: "text-fontcolor-body",
  footer: "text-fontcolor-footer",
  stats: "text-fontcolor-stats",
};

const resolveColor = typography => {
  const resolvedCss = COLORS[typography];
  if (!resolvedCss) {
    throw new Error(`Failed to resolve default color for typography: ${typography}`);
  }
  return resolvedCss;
};

const Text = ({ children, tag, className, typography, color, ...otherProps }) => {
  let HtmlElement = null;
  if (tag === "span") {
    HtmlElement = ({ children, ...otherProps }) => {
      return <span {...otherProps}>{children}</span>;
    };
  } else {
    HtmlElement = ({ children, ...otherProps }) => {
      return <div {...otherProps}>{children}</div>;
    };
  }

  return (
    <HtmlElement {...otherProps} className={`${resolveTypography(typography)} ${color || resolveColor(typography)} ${className}`}>
      {children}
    </HtmlElement>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  tag: PropTypes.oneOf(["div", "span"]),
  className: PropTypes.string,
  typography: PropTypes.oneOf(["h1", "h2", "h3", "h4", "body", "footer", "stats"]),
  color: PropTypes.string,
};

Text.defaultProps = {
  text: "Here should be text",
  tag: "div",
  className: "",
  typography: "body",
};

export default Text;
