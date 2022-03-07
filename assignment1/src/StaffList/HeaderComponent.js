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
      <>
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
                  <NavLink className='nav-link' to='/about'>
                    <span className='fa fa-info fa-lg'></span> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/staff'>
                    <span className='fa fa-list fa-lg'></span> Staffs
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-md-6'>
                <h1>Ung dung quan ly nhan vien</h1>
                <p>Day la ung dung quan ly nhan vien</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>

    )
  }
}

export default Header;