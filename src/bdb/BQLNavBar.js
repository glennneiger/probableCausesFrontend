import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { goToTop } from 'react-scrollable-anchor'

export default class BQLNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar className="nav-bar" dark expand="md" fixed="top">
      <NavbarBrand>
        <img src={require("./logo.svg")} width="200" onClick={()=>goToTop()} fluid/>
      </NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="http://probcomp.csail.mit.edu/dev/bayesdb/doc/bql.html">BQL: Bayesian Query Language</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://wiki.cam.ac.uk/cl-design-projects/Probable_Causes">The project: "Probable Causes"</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}