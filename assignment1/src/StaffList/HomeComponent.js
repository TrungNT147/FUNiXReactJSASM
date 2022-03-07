import React from "react";
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {
  return(
    <div className="container">
      <div className='row'>
        <h1>Tong quan cong ty</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 mx-2">
          <Card>
            <Link style={{ textDecoration: 'none' , color: 'black' , fontWeight: 'bold', textTransform: 'uppercase' }} to='/staff'>Nhan vien</Link>
          </Card>
        </div>
        <div className="col-12 col-md-3 mx-2">
          <Card>
            <Link style={{ textDecoration: 'none' , color: 'black' , fontWeight: 'bold', textTransform: 'uppercase' }} to='/dept'>Phong ban</Link>
          </Card>
        </div>
        <div className="col-12 col-md-3 mx-2">
          <Card>
            <Link style={{ textDecoration: 'none' , color: 'black' , fontWeight: 'bold', textTransform: 'uppercase' }} to='/salary'>Bang luong</Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Home;