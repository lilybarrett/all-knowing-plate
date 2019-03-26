import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";

const StyledNavbarToggler = styled(NavbarToggler)`
    background-color: white;
    margin-bottom: 20px;
`;

const StyledNav = styled(Nav)`
    width: 100%;
`;

const StyledNavbar = styled(Navbar)`
    display: flex;
    padding: 30px;
    align-items: center;
    background-color: #1ac6ff;
    justify-content: space-around; 
    margin-bottom: 30px;
`;

const StyledNavLink = styled(Link)`
    text-align: center;
    &:hover {
        color: white;
        text-decoration: none;
        border-bottom: 1px solid white;
    }
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <StyledNavbar light expand="md">
          <StyledNavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <StyledNav navbar fill>
                <NavItem>
                    <StyledNavLink to="/">Home</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink to="/demo">Video</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink to="/our-story/">About</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink to="/shop/">Shop</StyledNavLink>
                </NavItem>
            </StyledNav>
          </Collapse>
        </StyledNavbar>
      </div>
    );
  }
}

export default MyNavbar;