import React from "react";
import Link from "gatsby-link";
import { Title } from "../components/UI/typography";

const AboutPage = () => (
  <div>
    <Title> The Personal Blog of Evan Conrad </Title>

    <p>
      Most of the code was ruthlessly stolen from a previous project blog I worked on: <a href="http://bits.gumad.club/"> bits. </a>
    </p>

    <h2> Contact </h2>
    <p>
      If you have a question, feel free to send me a DM,
      <a href="https://twitter.com/flaqueeau">@flaqueeau</a>, on twitter.
    </p>
  </div>
);
export default AboutPage;
