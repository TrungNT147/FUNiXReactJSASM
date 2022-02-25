import React, { Component } from 'react';
import './App.css';
import Main from './StaffList/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Staff from './StaffList/StaffListComponent';

class App extends Component {

  render() {
    return (
    // <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    // </BrowserRouter>
      );
    }
}

export default App;
