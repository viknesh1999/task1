import React, { Component } from "react";
import { Container,Row,Col,Card,Button, CardImg, } from "react-bootstrap"
import Img from './fgg.jpg'
import ImgOne from './hghg.jpg'
function SectionOne(){
    return(
        <div>
        <Container bg='white'>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
      <div style={{ display: "block", width: 250, padding: 30 , }} >
        <CardImg src={Img} roundedCircle  />

      </div>
      <Card.Body>
        <Card.Title>We are an architecture design agency</Card.Title>
        <Card.Text>
        You may be looking for an architecture design services
         firm or architecture design company for residential
          projects. Our Studio is an architecture design company
           that can give you the best designs that you can ever think of.
        </Card.Text>     
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
                </Col>
                <Col>
                <img className="img" variant="top" src={ImgOne}/>
                </Col>
            </Row>


           </Container>
        </div>
    )
}
export default SectionOne;