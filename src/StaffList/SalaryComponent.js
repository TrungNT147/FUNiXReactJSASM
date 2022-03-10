import React, { Component } from "react";
import { Card, Button, CardText, CardBody, CardTitle, } from 'reactstrap';


class Salary extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };

  }
  

  render() {

    const salaryDetail = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 mt-2">
            <Card key={staff.id} >
              <CardBody>
                <CardTitle>{staff.name}</CardTitle>
                <CardText>Mã nhân viên: {staff.id} </CardText>
                <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                <CardText>Số giờ làm thêm: {staff.overTime} </CardText>
                <Button>Lương: {parseInt(staff.salaryScale)*3000000 + parseInt(staff.overTime)*200000} </Button>
              </CardBody>
            </Card>
        </div>
      );
    });

    return (
      <div className="container">
          <div className="row">
            <h4 className="col-6 col-md-3 col-lg-2 mt-2">Bảng lương</h4>
          </div>
          <hr />
          <div className="row">
              {salaryDetail}
          </div>
      </div>

    );
  } 
}
export default Salary;