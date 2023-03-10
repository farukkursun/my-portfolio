import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {zertifikats} from '../portfolio'

const Zertifikat = () => {
  return (
    <div className="zertifikat" id='zertifikat'>
      <Row className="g-4">
        {zertifikats.map((zertifikat) => {
            const {id, img, tittle, descriptions, link} =zertifikat
          return (
            <Col key= {id} sm={12} md={6}>
              <Card style={{ width: "20rem" }} className="card">
              <Card.Title className="ms-2 text-success text-center">{tittle}</Card.Title>
              <Card.Img className="img" variant="top" src={img} />
              
                
                <Card.Body className="overlay">
                 
                  <Card.Text className="cardtext">{descriptions}</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          );
        })} 
      </Row>
    </div>
    
  )
}

export default Zertifikat

{/* <Container
      className="mt-4 p-4 d-flex
    justify-content-center"
    >
      <Row className="  g-3">
        {zertifikats.map((zertifikat) => {
            const {id, img, tittle, descriptions, link} =zertifikat
            
          return (
            <Col sm={12} md={6}  key={id}>
              <Card style={{ width: "30rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{tittle}</Card.Title>
                  <Card.Text>{descriptions}</Card.Text>
                  <Button variant="primary">{link}</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container> */}