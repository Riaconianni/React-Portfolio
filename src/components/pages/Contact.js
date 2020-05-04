import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row, Image } from 'react-bootstrap';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/Github.png';
import Gmail from '../../assets/gmail.png';
import '../../App.css';


function Contact() {
  return (
    <>
    <Container>
     <h2 className="text-center mt-3">Contact me</h2>
<Row>
  <Col>
  <Image src={Linkedin}></Image>
  <a href="https://www.linkedin.com/in/rachel-iaconianni/" target="_blank" rel="noopener">Rachel.Iaconianni</a>
  </Col>
</Row>
<Row>
  <Col>
  <Image src={Github}></Image>
    <a href="https://github.com/Riaconianni" target="_blank" rel="noopener">Riaconianni</a>
  </Col>
</Row>
<Row>
  <Col>
  <address>
  <Image src={Gmail}></Image>
       <a href="mailto:iaconiannir@gmail.com" target="_blank" rel="noopener">Iaconiannir@gmail.com</a>
     </address>
  </Col>
</Row>
    </Container>
    </>
  )
};

export default Contact;