import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row, Image } from 'react-bootstrap';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/Github.png';
import Gmail from '../../assets/gmail.png';
import '../../App.css';


function Contact() {
  return (
    <>
    <Container className="text-center bg-white border border-secondary rounded mt-5 p-3">
     <h2 className="mt-2 contact">Contact me</h2>
<Row>
  <Col>
  <Image src={Linkedin}></Image>
  <a href="https://www.linkedin.com/in/rachel-iaconianni/" target="_blank" rel="noopener" className="mylinks">Rachel.Iaconianni</a>
  <Image src={Linkedin}></Image>
  </Col>
</Row>
<Row>
  <Col>
  <Image src={Github}></Image>
    <a href="https://github.com/Riaconianni" target="_blank" rel="noopener" className="mylinks">Riaconianni</a>
    <Image src={Github}></Image>
  </Col>
</Row>
<Row>
  <Col>
  <address>
  <Image src={Gmail}></Image>
       <a href="mailto:iaconiannir@gmail.com" target="_blank" rel="noopener" className="mylinks">Iaconiannir@gmail.com</a>
       <Image src={Gmail}></Image>
     </address>

  </Col>
</Row>
    </Container>
    </>
  )
};

export default Contact;