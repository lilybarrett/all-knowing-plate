/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Helmet from "react-helmet"

const Navbar = styled.nav`
  position: relative;
  background-color: #1ac6ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled(Link)`
  padding: 5px;
  color: white;
  text-decoration: none;
`;

const Container = styled.div`
  margin: 3rem auto;
  font-family: 'Josefin Sans', sans-serif;
`

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
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navbar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/our-story/">Our Story</NavLink>
          <NavLink to="/shop/">Shop</NavLink>
        </Navbar>
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
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
