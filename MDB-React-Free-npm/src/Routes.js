import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Restaurante from './components/Restaurantes/Restaurantes';




class Routes extends Component{


    render(){
        return(
        
                <Router>
                    <main>
                    
                        <div >
                            <Route exact path="/restaurants" component={Restaurante} />
                            <Route exact path="/signup" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/rikospuerkos/products" component={Products} />
                            {/* <Route exact path="/restaurant/:id" component={DetailHouse} /> */}

                        </div>
                        
                    </main> 
                    
                </Router>
       
        
            
        )
    }
}

export default Routes;