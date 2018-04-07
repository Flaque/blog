import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Bar = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 1.5rem 1rem 0 1rem;
  margin: 5rem auto 10rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const HeaderLogo = styled.h1`
  margin: 0;
  color: #e4572e;
  font-weight: 100;
`;

const HeaderAccentBar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  background: #1289A7;
  height: 10px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
`;

const ShiftedLink = styled.span`
  margin-left: 3rem;
`;

const Header = ({ title }) => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <Bar>
      <HeaderAccentBar />
      <HeaderLogo>
        <Link
          to="/"
          style={{
            textDecoration: "none"
          }}
        >
          {title}
        </Link>
      </HeaderLogo>
      <Nav>
        
        <ShiftedLink>
          <a href="https://github.com/flaque/blog">github</a>
        </ShiftedLink>

        <ShiftedLink>
          <Link to="/about">/about </Link>
        </ShiftedLink>
      </Nav>
    </Bar>
  </div>
);

export default Header;
