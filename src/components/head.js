import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title = "Flaque's Blog" }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link
      href="https://fonts.googleapis.com/css?family=Merriweather:400,900"
      rel="stylesheet"
    />
  </Helmet>
);

export default Head;
