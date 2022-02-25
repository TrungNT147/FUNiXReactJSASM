import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Department extends Component {
    constructor(props) {
      super(props);
    }
    render () {
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Danh sách phòng ban</h3>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        {/* insert list department */}
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <h5>Danh sách nhân viên của phòng</h5>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        {/* insert list employee list of dept */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Department;