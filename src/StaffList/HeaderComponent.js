import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from "reactstrap";
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark color="primary text-light" expand='md'>
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className='mr-auto'>
              <img src='assets/images/logo.jpeg' height='30' alt='Quan ly nhan vien'/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    <span className='fa fa-home fa-lg'></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/department'>
                    <span className='fa fa-info fa-lg'></span> Phòng ban
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/staff'>
                    <span className='fa fa-list fa-lg'></span> Nhân viên
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/salary'>
                    <span className='fa fa-list fa-lg'></span> Bảng lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>

    )
  }
}

export default Header;