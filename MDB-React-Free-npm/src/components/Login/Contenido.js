import React from 'react';
import { Row, Col, Input, Button } from 'mdbreact';
import './Login.css'

class FormsPage extends React.Component  {
  render() {
    return(
      <div className='main'>
      <div className='login'>
        <Row>
                <Col lg="12">
                    <form>
                        <p className="h4 text-center mb-4">Sign in</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="black-text">Email</label>
                        <input type="email" placeholder="Ingresa tu email" id="defaultFormLoginEmailEx" className="form-control"/>
                        <br/>
                        <label htmlFor="defaultFormLoginPasswordEx" className="black-text">Contraseña</label>
                        <input type="password" placeholder="Contraseña" id="defaultFormLoginPasswordEx" className="form-control"/>
                        <div className="text-center mt-4">
                        <button type="button" class="btn btn-red accent-4 btn-rounded">Ingresar</button>
                        </div>
                    </form>
                </Col>
                </Row>
        </div>    
        </div>
        
    );
  }
};

export default FormsPage;