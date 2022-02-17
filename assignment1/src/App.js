import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { DEPARTMENTS, STAFFS } from './shared/staffs';
import { Navbar, NavbarBrand } from 'reactstrap';
import Staff from './StaffList/StaffListComponent';

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      staffs: STAFFS,
      deps: DEPARTMENTS,

    };
  }
  render() {
    return (
    <div className="App">
        <Navbar dark color="primary text-light">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <Staff staffs={this.state.staffs} />
      </div>
      );
    }
}

export default App;
