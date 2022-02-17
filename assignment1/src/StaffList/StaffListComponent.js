import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat, { masks } from "dateformat";

class Staff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null
    }
  }
  onStaffSelect(staff) {
    this.setState({selectedStaff: staff});
  }

  renderStaff(staff) {
    if(staff != null) {
      let doB = dateFormat(staff.doB, "dd/mm/yyyy");
      let dStart = dateFormat(staff.startDate, "dd/mm/yyyy");
    return (
      <Card>
        <CardBody>
          <CardTitle>{staff.name}</CardTitle>
          <CardText>Ngày sinh: {doB} </CardText>
          <CardText>Ngày vào công ty: {dStart} </CardText>
          <CardText>Phòng ban: {staff.department.name} </CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
          <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
        </CardBody>
      </Card>
    );
  }}


  render() {
    const staff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4 mt-2">
          <Card onClick={() => this.onStaffSelect(staff)}>
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
          <div className="row">
            <div  className="col-12 col-md-5 m-1">
              {this.renderStaff(this.state.selectedStaff)}
            </div>
          </div>
      </div>
  );
  }
}

export default Staff;