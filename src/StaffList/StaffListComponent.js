import React, { Component } from "react";
import { STAFFS } from '../shared/staffs';
import StaffDetail from './StaffDetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, } from 'reactstrap';
import { Link } from 'react-router-dom';


class Staff extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };

  }

  render() {

    const staff = this.props.staffs.map((staff) => {
      return (
        <div className="col-6 col-md-3 col-lg-2 mt-2">
          <Link to={`/staff/${staff.id}`}>
            <Card key={staff.id} >
                <CardImg width="100%" object src={staff.image} alt={staff.name} />
                <CardTitle>{staff.name}</CardTitle>
            </Card>
          </Link>
        </div>
      );
    });
    
    return (
      <div className="container">
          <div className="row">
            <h4 className="col-6 col-md-3 col-lg-2 mt-2">Nhân viên</h4>
          </div>
          <hr />
          <div className="row">
              {staff}
          </div>
      </div>

    );
  } 
}
export default Staff;