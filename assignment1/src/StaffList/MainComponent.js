import React, { Component } from 'react';
import { STAFFS } from '../shared/staffs';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Staff from '../StaffList/StaffListComponent';
import StaffDetail from './StaffDetailComponent';

class Main extends Component {
  constructor(props) {
  super(props);
    this.state = {
      staffs: STAFFS,
      selectedStaff: null,

    };
  }
  onStaffSelect(staffId) {
    this.setState({selectedStaff: staffId});
  }
  render() {
    console.log(this.state.selectedStaff);
    return (
    <BrowserRouter>
      <div>
        <Navbar dark color="primary text-light">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <Staff staffs={this.state.staffs} 
          onClick={(staffId) => this.onStaffSelect(staffId)} />
        <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]} />
      </div>
    </BrowserRouter>
      );
    }
}

export default Main;