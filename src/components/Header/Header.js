import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavItem, NavLink } from 'reactstrap';
import './Header.css';
import Logo from '../D3/Logo/Logo';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <header className="header">
        <Navbar light expand="md">

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
