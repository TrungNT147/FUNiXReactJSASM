import React, { Component } from 'react';
import { STAFFS } from '../shared/staffs';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat, { masks } from "dateformat";


class StaffDetail extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
  }
  render() {
    console.log(this.props.staff)
    // let dob = dateFormat(staff.doB, "dd/mm/yyyy");
    // let dStart = dateFormat(staff.startDate, "dd/mm/yyyy");
    // const staff = this.props.staffs
    return (
      <div>
        {/* <Card>
        <CardBody>
          <CardImg width="100%" object src={staff.image} alt={staff.name} />
          <CardTitle>{staff.name}</CardTitle>
          <CardText>Ngày sinh: {dob} </CardText>
          <CardText>Ngày vào công ty: {dStart} </CardText>
          <CardText>Phòng ban: {staff.department.name} </CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
          <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
        </CardBody>
        </Card> */}
      </div>
    )
   
  }

  // render() {
  //   return (
  //     <div className='row'>{this.renderStaff()}</div>
  //     // <Card>
  //     //   <CardBody>
  //     //     <CardImg width="100%" object src={staff.image} alt={staff.name} />
  //     //     <CardTitle>{staff.name}</CardTitle>
  //     //     <CardText>Ngày sinh: {doB} </CardText>
  //     //     <CardText>Ngày vào công ty: {dStart} </CardText>
  //     //     <CardText>Phòng ban: {staff.department.name} </CardText>
  //     //     <CardText>Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
  //     //     <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
  //     //   </CardBody>
  //     // </Card>
  //   )
  //   }
  }

export default StaffDetail