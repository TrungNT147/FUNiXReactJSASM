import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat, { masks } from "dateformat";
import { Link } from 'react-router-dom';

class StaffDetail extends Component {
  constructor(props) {
  super(props);
  this.state = {
    };
  }

  renderStaff() {
    const staff = this.props.staff

    if (staff !== undefined) 
    
      return (
      <div className='col-12 col-md-5 mt-2 mx-auto'>
        <Card>
          <Link to={`/staff/${staff.id}`}>
            <CardBody>
              <CardImg width="100%" object src={staff.image} alt={staff.name} />
              <CardTitle>{staff.name}</CardTitle>
              <CardText>Ngày sinh:{dateFormat(staff.doB, "dd/mm/yyyy")} </CardText>
              <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")} </CardText>
              <CardText>Phòng ban: {staff.department.name} </CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
              <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
            </CardBody>
          </Link>
        </Card>
      </div>
    ); 
    else {
      <div></div>
    }
  }

  render() {
    console.log(this.props.staff)
    
    return (
      
      <div className='row'>
        {this.renderStaff(this.props.staff)}
      </div>
    )
   
  }

  }

export default StaffDetail