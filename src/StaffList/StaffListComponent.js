import React, { Component } from "react";
import { STAFFS } from '../shared/staffs';
import StaffDetail from './StaffDetailComponent';
import { Card, CardImg, CardTitle, Form, FormGroup, Label, Input, FormFeedback, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      doB: '',
      salaryScale: '',
      startDate: '',
      department: '',
      annualLeave: '',
      overTime: '',
      // touched: {
      //   name: false,
      //   doB: false,
      //   salaryScale: false,
      //   startDate: false,
      //   annualLeave: false,
      //   overTime: false,
      // },
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          [name] : value
      });
  }

  handleSubmit(event) {
    console.log("Ket qua la: " + JSON.stringify(this.state));
    alert("Ket qua la: " + JSON.stringify(this.state));
    event.preventDefault();
  }
  // handleBlur = (field) => (evt) => {
  //   this.setState({
  //     touched: { ...this.status.touched, [field]: true }
  //   });
  // }

  // validate(name, doB, salaryScale, startDate, annualLeave, overTime) {
  //   const errors ={
  //     name: '',
  //     doB: '',
  //     salaryScale: '',
  //     startDate: '',
  //     department: '',
  //     annualLeave: '',
  //     overTime: '',
  //   };

  //   if(this.state.touched.name && name.length < 3) 
  //     errors.name = "Cần điền đủ họ và tên"
  //   return errors;
  // }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    // const errors = this.validate(this.state.name)
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
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4">
              <Button color="danger" onClick={this.toggle}><strong>+</strong></Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Thêm nhân viên</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label htmlFor="name" md={2}>
                      Họ và Tên:
                    </Label>
                    <Col md={10}>
                      <Input type="text" id="name"
                            placeholder="Nhập tên"
                            name="name"
                            value={this.state.name} 
                            // valid = {errors.name === ""}
                            // invalid = {errors.name !== ""}
                            // onBlur={this.handleBlur('name')}
                            onChange={this.handleInputChange} />
                      {/* <FormFeedback>{errors.name}</FormFeedback> */}
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="doB" md={2}>
                      Ngày sinh:
                    </Label>
                    <Col md={10}>
                      <Input type="date" id="doB"
                            name="doB"
                            value={this.state.doB}
                            onChange={this.handleInputChange} />
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="startDate" md={2}>
                      Ngày nhận việc:
                    </Label>
                    <Col md={10}>
                      <Input type="date" id="startDate"
                            name="startDate"
                            value={this.state.startDate}
                            onChange={this.handleInputChange} />
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="department" md={2}>
                      Phòng ban:
                    </Label>
                    <Col md={10}>
                      <Input type="select" id="department"
                            name="department"
                            value={this.state.department}
                            onChange={this.handleInputChange}>
                        <option>Sale</option>
                        <option>HR</option>
                        <option>Marketing</option>
                        <option>IT</option>
                        <option>Finance</option>
                      </Input>
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="annualLeave" md={2}>
                      Số ngày nghỉ còn lại:
                    </Label>
                    <Col md={10}>
                      <Input type="number" id="annualLeave"
                            name="annualLeave"
                            value={this.state.annualLeave}
                            onChange={this.handleInputChange} />
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="overTime" md={2}>
                      Số ngày đã làm thêm:
                    </Label>
                    <Col md={10}>
                      <Input type="number" id="overTime"
                            name="overTime"
                            value={this.state.overTime} 
                            onChange={this.handleInputChange}/>
                    </Col>  
                  </FormGroup>
                  <Button type="submit" color="primary" onClick={this.toggle} onSubmit={this.handleSubmit}>Thêm</Button>{' '}
                </Form>              
                </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Đóng</Button>
              </ModalFooter>
              </Modal>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
              <Form row>
                <FormGroup><Input type="text" /></FormGroup>
                <Button type="submit">Tìm</Button>
              </Form>
            </div>
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