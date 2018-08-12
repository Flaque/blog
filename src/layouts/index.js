import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import "prismjs/themes/prism-solarizedlight.css";

const TemplateWrapper = ({ children, data }) => (
  <div>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 700,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
