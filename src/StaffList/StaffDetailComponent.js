import React, { Component } from 'react';
import { Container, Row, Col, CardTitle, CardText, CardImg , Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
      <div className='col-12 mx-auto'>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem>
          <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          <Row>
            <Col xs="3">
              <CardImg  width="100%" object src={staff.image} alt={staff.name} />
            </Col>
            <Col xs="9">
              <CardTitle>{staff.name}</CardTitle>
              <CardText>Ngày sinh:{dateFormat(staff.doB, "dd/mm/yyyy")} </CardText>
              <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")} </CardText>
              <CardText>Phòng ban: {staff.department.name} </CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
              <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
            </Col>
          </Row>
        </Container>
      </div>
    ); 
    else {
      <div></div>
    }
  }

  render() {
    
    return (
      
      <div className='row'>
        {this.renderStaff(this.props.staff)}
      </div>
    )
   
  }

  }

export default StaffDetail