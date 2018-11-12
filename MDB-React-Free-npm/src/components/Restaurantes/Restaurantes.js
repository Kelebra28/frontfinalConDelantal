import React, { Component } from 'react'
import NavbarFeatures from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import Restaurantes from './Contenido'

class Restaurante extends Component {
    render() { 
        return (
            <div>
                <NavbarFeatures/>
                <Restaurantes/>
                <FooterPage/>  
            </div> 
         );
    }
}
 
export default Restaurante;