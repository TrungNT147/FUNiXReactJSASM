import React, { Component } from "react";
import { STAFFS } from '../shared/staffs';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Staff extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };

  }

  render() {

    const staff = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 mt-2">
          <Card key={staff.id} >
              <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    
    return (
      <div className="container">
          <div className="row">
              {staff}
          </div>
      </div>

    );
  } 
}
export default Staff;