import React from 'react';
import { Row, Col, Container, Image, Figure, Card } from 'react-bootstrap';
import Me from '../me.jpg'

function About() {
  return (
    <Container>
  <Row xs={12} md={4} className="justify-content-center">
      <Figure>
      <Figure.Image width={171} height={180} alt="Picture of Rachel" src={Me} roundedCircle/>
      </Figure>
  </Row>
  <Row>
    <Col xs={12} md={11} className="text-center">
    <h2>Rachel Iaconianni</h2>
    </Col>
  </Row>
  <Row  xs={12} md={8} className="justify-content-center ml-auto">
    <Card>
      <Card.Title>About Me</Card.Title>
      <Card.Body> I am currently attending a coding bootcamp at Rutgers
                University. Recently, I started a new position at the FAA Tech
                Center as a Configuration Management Specialist. Before I
                started working for the FAA Tech Center, I was a Personal Banker
                for a small bank called Univest. I was in the banking industry
                for 7 years. Also, I am currently a board member for Big
                Brothers Big Sisters of Atlantic and Cape May Counties.</Card.Body>
    </Card>
  </Row>
</Container>
  )
};

export default About;