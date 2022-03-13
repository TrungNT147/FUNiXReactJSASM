import React from "react";
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {
  return(
    <div className="container ">
      <div className='row'>
        <div className="p-5 mx-auto">
          <h1>Tổng quan công ty</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 m-2">
          <Card className="p-5">
            <Link className="mx-auto" style={{ textDecoration: 'none' , color: 'black' , fontWeight: 'bold', textTransform: 'uppercase' }} to='/staff'>Nhân viên</Link>
          </Card>
        </div>
        <div className="col-12 col-md-3 m-2">
          <Card className="p-5">
            <Link className="mx-auto" style={{ textDecoration: 'none' , color: 'black' , fontWeight: 'bold', textTransform: 'uppercase' }} to='/department'>Phòng ban</Link>
          </Card>
        </div>
        <div className="col-12 col-md-3 m-2">
          <Card className="p-5">
            <Link className="mx-auto" style={{ textDecoration: 'none' , color: 'black' , fontWeight: 'bold', textTransform: 'uppercase' }} to='/salary'>Bảng lương</Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Home;