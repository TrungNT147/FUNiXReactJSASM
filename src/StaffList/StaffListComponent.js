import React, { Component } from "react";
import { STAFFS } from '../shared/staffs';
import StaffDetail from './StaffDetailComponent';
import { Card, CardImg, CardTitle, Form, FormGroup, Label, Input, FormFeedback, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameF: '',
      name: '',
      doB: '',
      salaryScale: '',
      startDate: '',
      department: '',
      annualLeave: '',
      overTime: '',
      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        annualLeave: false,
        overTime: false,
      },
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchStaff = this.searchStaff.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name] : value
      });
  }
  handleBlur = (field) => (event) => {
    this.setState({
      touched: {...this.state.touched, [field] : true }
    });
  };

  searchStaff(event) {
    event.preventDefault();
    const nameS = event.target.nameS.value;
    this.setState({ nameF: nameS })
  }

  handleSubmit = () => {
    const newStaff = {
      name: this.state.name,
      doB: this.state.doB,
      startDate: this.state.startDate,
      salaryScale: this.state.salaryScale,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
    };
    this.props.onAdd(newStaff);
  }

  validate(name,department, doB,salaryScale,startDate,annualLeave,overTime) {
    const errors = {
      name: "",
      department: "",
      doB: "",
      startDate: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };
    if (this.state.touched.name && name.length < 3)
      errors.name = "Họ & tên phải dài hơn 3 ký tự";
    else if (this.state.touched.name && name.length > 20 )
      errors.name = "Tên cần ít hơn 20 ký tự";
    if (this.state.touched.doB && doB.length < 1)
    errors.doB = "Nhập ngày sinh";
    if (this.state.touched.startDate && startDate.length < 1 )
    errors.startDate = "Nhập ngày làm đầu";
    if (this.state.touched.salaryScale && salaryScale.length < 1 )
    errors.salaryScale = "Yêu cầu nhập";
    if (this.state.touched.annualLeave && annualLeave.length < 1)
    errors.annualLeave = "Yêu cầu nhập";
    if (this.state.touched.overTime && overTime < 1)
    errors.overTime = "Yêu cầu nhập" ;
    if (this.state.touched.department && department.length < 1)
    errors.department = "Chọn phòng ban";
    return errors;
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    const errors = this.validate(this.state.name,this.state.department,this.state.doB,this.state.startDate,this.state.salaryScale,this.state.annualLeave,this.state.overTime);
    const staff = this.props.staffs.filter((staff) => {
        if (this.state.nameF === "") return staff
        else if (staff.name.toLowerCase().includes(this.state.nameF.toLowerCase()))
          return staff;
    })
    .map((staff) => {
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
        <Form onSubmit={this.searchStaff} className="mt-4">
          <Row>
            <Col md={5}>
              <h4>Nhân viên</h4>
            </Col>
            <Col md={1}>
              <Button  color="success" onClick={this.toggle}><strong>Thêm</strong></Button>
            </Col>
              <Col md={4}>
                <Input  
                      type="text"
                      name="nameS"  
                      placeholder="Tìm kiếm nhân viên...."/>
              </Col>
              <Col md={2}>
                <Button type="submit">Tìm</Button>
              </Col>
          </Row>
        </Form>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4">
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Thêm nhân viên</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label htmlFor="name" md={3}>
                      Họ và Tên:
                    </Label>
                    <Col md={9}>
                      <Input type="text" id="name"
                            placeholder="Nhập tên"
                            name="name"
                            value={this.state.name} 
                            valid={errors.name === ""}
                            invalid={errors.name !== ""}
                            onBlur={this.handleBlur("name")}
                            onChange={this.handleInputChange} />
                      <FormFeedback>{errors.name}</FormFeedback>
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="doB" md={3}>
                      Ngày sinh:
                    </Label>
                    <Col md={9}>
                      <Input type="date" id="doB"
                            name="doB"
                            value={this.state.doB}
                            valid={errors.doB === ""}
                            invalid={errors.doB !== ""}
                            onBlur={this.handleBlur("doB")}
                            onChange={this.handleInputChange} />
                      <FormFeedback>{errors.doB}</FormFeedback>                          
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="startDate" md={3}>
                      Ngày nhận việc:
                    </Label>
                    <Col md={9}>
                      <Input type="date" id="startDate"
                            name="startDate"
                            value={this.state.startDate}
                            valid={errors.startDate === ""}
                            invalid={errors.startDate !== ""}
                            onBlur={this.handleBlur("startDate")}
                            onChange={this.handleInputChange} />
                      <FormFeedback>{errors.startDate}</FormFeedback>                          
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="department" md={3}>
                      Phòng ban:
                    </Label>
                    <Col md={9}>
                      <Input type="select" id="department"
                            name="department"
                            value={this.state.department}
                            valid={errors.department === ""}
                            invalid={errors.department !== ""}
                            onBlur={this.handleBlur("department")}
                            onChange={this.handleInputChange}>
                        <option>Sale</option>
                        <option>HR</option>
                        <option>Marketing</option>
                        <option>IT</option>
                        <option>Finance</option>
                      </Input>
                      <FormFeedback>{errors.department}</FormFeedback>                          
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="annualLeave" md={3}>
                      Số ngày nghỉ còn lại:
                    </Label>
                    <Col md={9}>
                      <Input type="number" id="annualLeave"
                            name="annualLeave"
                            value={this.state.annualLeave}
                            valid={errors.annualLeave === ""}
                            invalid={errors.annualLeave !== ""}
                            onBlur={this.handleBlur("annualLeave")}
                            onChange={this.handleInputChange} />
                      <FormFeedback>{errors.annualLeave}</FormFeedback>                          
                    </Col>  
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="overTime" md={3}>
                      Số ngày đã làm thêm:
                    </Label>
                    <Col md={9}>
                      <Input type="number" id="overTime"
                            name="overTime"
                            value={this.state.overTime} 
                            valid={errors.overTime === ""}
                            invalid={errors.overTime !== ""}
                            onBlur={this.handleBlur("overTime")}
                            onChange={this.handleInputChange}/>
                      <FormFeedback>{errors.overTime}</FormFeedback>                          
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