import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export default () => (
  <Footer>
    <hr />
    <p>
      On 🐦 {" "}
      <a href="http://gumad.club/">
        @Flaqueeau
      </a>
    </p>
  </Footer>
);
