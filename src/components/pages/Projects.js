import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Booklist from '../../assets/newbooks.jpg';

function Resume() {
  return (
    <>
    <Container>
      <Row>
        <Col xs={12} md={6} className="imgarea">
          <Image src={Booklist} className="bookimg"></Image>
          <Button className="imgbtn">Hello</Button>
        </Col>
        <Col xs={12} md={6}>
        <Image src={Booklist} className="bookimg"></Image>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6}>
          <Image src={Booklist} className="bookimg"></Image>
        </Col>
        <Col xs={12} md={6}>
        <Image src={Booklist} className="bookimg"></Image>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6}>
          <Image src={Booklist} className="bookimg"></Image>
        </Col>
        <Col xs={12} md={6}>
        <Image src={Booklist} className="bookimg"></Image>
        </Col>
      </Row>
      </Container>
    </>
  )
};

export default Resume;