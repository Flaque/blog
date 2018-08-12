import React from "react";
import styled from "styled-components";

const StyledMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Link = ({ node }) => (
  <li>
    <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
  </li>
);

const Feed = ({ data }) => (
  <main>
    <StyledMenu>{data.allMarkdownRemark.edges.map(Link)}</StyledMenu>
  </main>
);

const IndexPage = props => {
  return (
    <div>
      <h1>{props.data.site.siteMetadata.title}</h1>
      <Feed data={props.data} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY")
            path
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
