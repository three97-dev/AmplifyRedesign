import React from "react";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./Text.css";

const TYPOGRAPHIES = {
  h1: "typography-h1",
  h2: "typography-h2",
  h3: "typography-h3",
  h4: "typography-h4",
  body: "typography-body",
  footer: "typography-footer",
  "learn-more": "typography-learn-more",
  stats: "typography-stats",
  paginator: "typography-paginator",
  ourApproachSmall: "typography-ourApproachSmall",
  ourApproachWeb: "typography-ourApproachWeb",
  ourApproachWebhd: "typography-ourApproachWebhd",
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
  paginator: "fontcolor-paginator",
  ourApproachSmall: "ourApproach-color",
  ourApproachWeb: "ourApproach-color",
  ourApproachWebhd: "ourApproach-color",
};

const resolveColor = typography => {
  const resolvedCss = COLORS[typography];
  if (!resolvedCss) {
    return "";
  }
  return resolvedCss;
};

const Text = ({ children, tag, className, typography, color, text, ...otherProps }) => {
  let HtmlElement = null;
  if (tag === "span") {
    HtmlElement = ({ children, __dangerouslySetInnerHTML, ...otherProps }) => {
      return <span {...otherProps}>{children}</span>;
    };
  } else {
    HtmlElement = ({ children, __dangerouslySetInnerHTML, ...otherProps }) => {
      return <div {...otherProps}>{children}</div>;
    };
  }

  // if (text) {
  //   const resolveTypographyCss = typography ? resolveTypography(typography) : "markdown-or-rich-text";

  //   return (
  //     <HtmlElement
  //       {...otherProps}
  //       className={`${resolveTypographyCss} ${color || resolveColor(typography)} ${className}`}
  //     >
  //       {renderRichText(text)}
  //       {/* <img className="mx-auto w-full max-w-536px"
  //         src={text.references[0].fluid.src}
  //         alt="test"
  //       /> */}
  //     </HtmlElement>
  //   );
  if (text && text.raw) {
    const resolveTypographyCss = typography ? resolveTypography(typography) : "markdown-or-rich-text";

    const richTextImages =
      text?.references?.map(reference => ({
        contentful_id: reference.contentful_id,
        image: reference.gatsbyImageData,
        alt: reference.description,
      })) || [];

    const renderOptions = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
          // render the EMBEDDED_ASSET as you need
          const imageData = richTextImages.find(imageData => imageData.contentful_id === node.data.target.sys.id);

          let t = 0;

          const image = getImage(imageData.image);

          return (
            <div className="grid w-full justify-center my-15px">
              <div className="max-w-720px">
                <GatsbyImage image={image} alt={imageData.alt} />
                <div className="text-center typography-body text-fontcolor-body mt-5px">
                  <span className="italic">{imageData.alt}</span>
                </div>
              </div>
            </div>
          );
        },
      },
    };

    return (
      <HtmlElement
        {...otherProps}
        className={`${resolveTypographyCss} ${color || resolveColor(typography)} ${className}`}
      >
        {documentToReactComponents(JSON.parse(text.raw), renderOptions)}
      </HtmlElement>
    );
  } else if (text && text.childMarkdownRemark) {
    const resolveTypographyCss = typography
      ? `${resolveTypography(typography)} markdown-text-paragraph`
      : "markdown-or-rich-text";

    return (
      <HtmlElement
        className={`${resolveTypographyCss} ${color || resolveColor(typography)} ${className}`}
        dangerouslySetInnerHTML={{
          __html: text.childMarkdownRemark.html,
        }}
      />
    );
  } else if (children || text) {
    const resolveTypographyCss = resolveTypography(typography);

    return (
      <HtmlElement
        {...otherProps}
        className={`${resolveTypographyCss} ${color || resolveColor(typography)} ${className}`}
      >
        {children || text}
      </HtmlElement>
    );
  } else {
    return <>Missing text data</>;
  }
};

Text.propTypes = {
  text: PropTypes.any,
  tag: PropTypes.oneOf(["div", "span"]),
  className: PropTypes.string,
  typography: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "body",
    "footer",
    "learn-more",
    "stats",
    "paginator",
    "ourApproachSmall",
    "ourApproachWeb",
    "ourApproachWebhd",
  ]),
  color: PropTypes.string,
};

Text.defaultProps = {
  tag: "div",
  className: "",
};

export default Text;
