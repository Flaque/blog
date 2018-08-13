import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { SomethingWrong, AskQuestion } from "../components/github";

const Head = styled.h1`
  font-weight: 300;
`;

function markdownPath(path) {
  return "/src/posts" + path + ".md";
}

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

      <AskQuestion title={post.frontmatter.title} />
      <SomethingWrong path={markdownPath(post.frontmatter.path)} />
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
