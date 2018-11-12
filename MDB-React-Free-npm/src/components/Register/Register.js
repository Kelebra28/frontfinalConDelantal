import React, { Component } from 'react';
import NavbarFeatures from '../Navbar/Navbar';
import FormsPage from './Contenido';
import FooterPage from '../Footer/Footer';

class Register extends Component {
  render() {
    return (
      <div>
        <NavbarFeatures/>
        <FormsPage/>
        <FooterPage/>
      </div>
    );
  }
}

export default Register;