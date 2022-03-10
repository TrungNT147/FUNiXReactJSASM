import React, { Component } from "react";
import { STAFFS } from '../shared/staffs';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class Staff extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };

  }

  

  render() {
    console.log(staff);
    const staff = this.props.staffs.map((staff) => {
      return (
        <div className="col-6 col-md-4 col-lg-2 mt-2">
          <Card key={staff.id} >
              <CardImg width="100%" object src={staff.image} alt={staff.name} />
              <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    
    return (
      <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mt-2">
              <h4>Nhân viên</h4>
            </div>
          </div>
          <hr/>
          <div className="row">
              {staff}
          </div>
      </div>

    );
  } 
}
export default Staff;