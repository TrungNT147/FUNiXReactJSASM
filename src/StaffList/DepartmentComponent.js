import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      
    }

    render () {
        const department = this.props.departments.map((department) => {
            return (
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <Card key={department.id}>
                        <CardBody>
                            <CardTitle>{department.name}</CardTitle>
                            <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row row-content">
                   {department}
                </div>
            </div>
        );
    }
}
export default Department;
