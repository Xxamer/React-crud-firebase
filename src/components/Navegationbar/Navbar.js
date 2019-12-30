import React, {  Component } from "react";
import "./Navbar.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
export default class Navegationbar extends Component {
  render() {
    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Crud React Navbar </NavbarBrand>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink className="NavItem" href="/components/">
                  Components
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
        </Navbar>
      </div>
    );
  }
}
