import React, { Component } from 'react'
import NavbarFeatures from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';
import Product from './Contenido'

class Products extends Component {
    render() { 
        return (
            <div>
                <NavbarFeatures/>
                <Product/>
                <FooterPage/>  
            </div> 
         );
    }
}
 
export default Products;