import React from "react";
import { Row, Col, Container, Image, Figure, Button } from "react-bootstrap";
import Me from "../rachel.jpg";
import MyResume from "../Rachel-Iaconianni.pdf";

function About() {
  return (
    <>
      <Container>
        <Row xs={12} md={12} className="justify-content-center mt-3">
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="Picture of Rachel"
              src={Me}
              roundedCircle
            />
          </Figure>
        </Row>
        <Row>
          <Col xs={12} md={12} className="text-center">
            <h2>Rachel Iaconianni</h2>
          </Col>
        </Row>
        <Row xs={12} md={12} className="justify-content-center ml-auto">
          <Container className="mt-3">
            <p>
              I am a Fullstack Developer that attended a Web Development
              Bootcamp at Rutgers University. Currently, I am a Program Analyst
              for the Configuration Management Team at the FAA Tech Center in
              Atlantic City, NJ. Before I started working for the FAA Tech
              Center, I was a Personal Banker for a small bank called Univest. I
              was in the banking industry for 7 years. Also, I am currently a
              board member for Big Brothers Big Sisters of Atlantic and Cape May
              Counties.
            </p>
            <div className="text-center mb-3">
            <Button href={MyResume} variant="secondary" size="lg">
              Click here to view my resume!
            </Button>
            </div>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default About;
