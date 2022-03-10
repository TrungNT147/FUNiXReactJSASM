import React, { Component } from 'react';
import { STAFFS } from '../shared/staffs';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Staff from '../StaffList/StaffListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import StaffDetail from './StaffDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
  super(props);
    this.state = {
      staffs: STAFFS,
    };
  }
  // onStaffSelect(staffId) {
  //   this.setState({selectedStaff: staffId});
  // }

  render() {
    const HomePage = () => {
      return(
        <Home />
      )
    }
    const StaffWithId = ({match}) => {
      return(
        <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
      );
    }

    
    return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/staff" component={() => <Staff staffs={this.state.staffs} />} />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Redirect to="/home" />
        </Switch>
        {/* <Staff staffs={this.state.staffs} 
          onClick={(staffId) => this.onStaffSelect(staffId)} />
        <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]} /> */}
        <Footer />
      </div>
    </BrowserRouter>
      );
    }
}

export default Main;