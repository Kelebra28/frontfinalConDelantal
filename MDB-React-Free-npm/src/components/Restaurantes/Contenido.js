import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Fa, Container, Col, Row } from 'mdbreact';
import './Restaurantes.css'
class Restaurantes extends Component {

    constructor(props){
        super(props)

        this.state = {
            name:props.name || "",
            id:props.id || "",
            image:props.image || ""
        }

    }

    

    render(){

        return(
        <Container className="restaurantes">
            
            <Row>
            <Col lg="4">
                    <Card>
                        <CardImage className="imajen" top src="https://lh6.googleusercontent.com/proxy/6ldFW-YzI6pnPTmyKEGnKBBklfhXIpgRR8pmx0CFBZVb_jwp7O1_UZD-lGLX39KGSO8_ky29aeQhTh7QfNHW2okzBO93Kbtg-Um-QNRk=s0-d" overlay="white-slight" hover waves alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Rikos Puerkos</CardTitle>
                            <hr />
                            <CardText>Riko restaurante para subir 8 kilos isi</CardText>
                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Elegir este restaurante <Fa icon="angle-double-right"></Fa></h5></a>
                        </CardBody>
                    </Card>
            </Col>
                    
            <Col lg="4">
                    <Card>
                        <CardImage className="imajen" top src="https://i.ytimg.com/vi/yjMIF0UGYVU/maxresdefault.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Hamburguejas al vapor</CardTitle>
                            <hr />
                            <CardText>Ayuda esto no es un meme ayuda.</CardText>
                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Elegir este restaurante <Fa icon="angle-double-right"></Fa></h5></a>
                        </CardBody>
                    </Card>
            </Col>

            <Col lg="4">
                    <Card>
                        <CardImage className="imajen" top src="https://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Pizzas Xidas Cool</CardTitle>
                            <hr />
                            <CardText>Estas Pizzas no necesitan descripción.</CardText>
                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Elegir este restaurante <Fa icon="angle-double-right"></Fa></h5></a>
                        </CardBody>
                    </Card>
            </Col>
            </Row> 
        </Container>
          

        )


    }

}


export default Restaurantes;