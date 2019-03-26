import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import Helmet from "react-helmet";

const StyledNavbar = styled("nav")`
  position: relative;
  background-color: #1ac6ff;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const StyledNavLink = styled(Link)`
  padding: 10px;
  border: 1px solid orange;
  color: white;
  margin-right: 30px;
  text-decoration: none;
  text-align: center;
`;

const Container = styled.div`
  margin: 3rem auto;
  font-family: 'Josefin Sans', sans-serif;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="icon" href="https://target.scene7.com/is/image/Target/GUEST_abef9ab3-3c6b-44fb-93c0-03421d838f5f?wid=488&hei=488&fmt=pjpeg"></link>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledNavbar>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about/">About</StyledNavLink>
          <StyledNavLink to="/our-story/">Our Story</StyledNavLink>
          <StyledNavLink to="/shop/">Shop</StyledNavLink>
        </StyledNavbar>
        <div
          style={{
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

