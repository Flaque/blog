import React from "react";
import Link from "gatsby-link";
import { Title } from "../components/UI/typography";

const AboutPage = () => (
  <div>
    <Title> Hi 👋 </Title>

    <p>
      This is the personal blog of Evan Conrad. Most of the code was ruthlessly stolen from a previous project blog I worked on: <a href="http://bits.gumad.club/"> bits. </a>
    </p>

    <h2> FAQ </h2>

    <h3>What is "Flaque"?</h3>

    <p>It's my online handle. It also was easy to get a domain name for. Pronounced "Flack" like the french word for puddle. </p>

    <h3> Can I contact you? </h3>
    <p>
      If you have a question, feel free to send me a DM,
      <a href="https://twitter.com/flaqueeau">@flaqueeau</a>, on twitter.
    </p>
  </div>
);
export default AboutPage;
