import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { SomethingWrong, AskQuestion } from "../components/github";
import "prismjs/themes/prism-solarizedlight.css";
import Head from "../components/head";
import "../index.css";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Title = styled.h1`
  font-weight: 300;
`;

function markdownPath(path) {
  return "/src/posts" + path + ".md";
}

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Wrapper>
      <Head title={post.frontmatter.title + " - Flaque's Blog"} />

      <Title>{post.frontmatter.title}</Title>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <hr />

      <AskQuestion title={post.frontmatter.title} />
      <SomethingWrong path={markdownPath(post.frontmatter.path)} />
      <Link to="/">Back</Link>
    </Wrapper>
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
