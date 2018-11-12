import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Fa, Container, Col, Row } from 'mdbreact';
import './Products.css'
class Product extends Component {

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
            <Col lg="4 offset-1">
                    <Card>
                        <CardImage top src="https://i.ytimg.com/vi/5oQ6-3lKhFY/maxresdefault.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                        <CardBody>
                        <div className="d-flex justify-content-center">
                            <CardTitle>Rikos Takos de Karnitas </CardTitle>
                        </div>
                            <hr />
                            <CardText>Estos son unos rikos takos de karnitas preparados en la cocina de Dev.f</CardText>
                            <div className="d-flex justify-content-center">
                            <Button color="red accent-4">Comprar OuO</Button>
                            </div>
                            
                        </CardBody>
                    </Card>
            </Col>
                    
            <Col lg="4 offset-2">
                    <Card>
                        <CardImage top src="http://www.olimpica.com/wp-content/uploads/2017/09/COSTILLAS_471x306.png" overlay="white-slight" hover waves alt="Card image cap"/>
                        <CardBody>
                        <div className="d-flex justify-content-center">
                            <CardTitle>Rikas Kostillas BBQ</CardTitle>
                        </div>
                            <hr />
                            <CardText>Costillas a la BQ patrocinadas por @AngeloLuna</CardText>
                            <div className="d-flex justify-content-center">
                            <Button color="red accent-4">Comprar UwU</Button>
                            </div>
                        </CardBody>
                    </Card>
            </Col>
            </Row> 
        </Container>
          

        )


    }

}


export default Product;