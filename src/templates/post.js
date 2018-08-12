import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Head = styled.h1`
  font-weight: 300;
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Head>{post.frontmatter.title}</Head>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <hr />

      <Link to="/">Back</Link>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      fileAbsolutePath
    }
  }
`;
