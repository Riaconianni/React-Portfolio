import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Booklist from '../../assets/newbooks.jpg';
import Burger from '../../assets/burger.jpg';
import Code from '../../assets/code.jpg';
import Dumbbells from '../../assets/dumbbells.jpg';
import Rainbow from '../../assets/rainbow.jpg';
import Recipe from '../../assets/recipe.jpg';


function Resume() {
  return (
    <>
    <Container className="bg-white border border-secondary rounded mt-5 mb-3 p-2">
    <h2 className="projects">Projects</h2>
      <Row>
        <Col xs={12} md={6} className="imgarea text-center">
          <Image src={Booklist} className="bookimg"></Image>
          <Button href="https://github.com/Riaconianni/Bookfinder" className="imgbtn" target="_blank" rel="noopener">Book List Github</Button>
          <Button href="https://quiet-basin-62546.herokuapp.com/" className="imgbtn2" target="_blank" rel="noopener">Book List</Button>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Recipe} className="bookimg"></Image>
        <Button href="https://github.com/CassidyGrom/recipeGenerator" className="imgbtn" target="_blank" rel="noopener">Recipe Generator Github</Button>
        <Button href="https://cassidygrom.github.io/recipeGenerator/index.html" className="imgbtn2" target="_blank" rel="noopener">Recipe Generator</Button>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} className="imgarea text-center">
          <Image src={Rainbow} className="bookimg"></Image>
          <Button href="https://github.com/Riaconianni/Weather-Dashboard" className="imgbtn" target="_blank" rel="noopener">Weather Dashboard Github</Button>
          <Button href="https://riaconianni.github.io/Weather-Dashboard" className="imgbtn2" target="_blank" rel="noopener">Weather Dashboard</Button>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Code} className="bookimg"></Image>
        <Button href="https://github.com/Riaconianni/Code-quiz" className="imgbtn" target="_blank" rel="noopener">Code Quiz Github</Button>
        <Button href="https://riaconianni.github.io/Code-quiz/" className="imgbtn2" target="_blank" rel="noopener">Code Quiz</Button>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} className="imgarea text-center">
          <Image src={Burger} className="bookimg"></Image>
          <Button href="https://github.com/Riaconianni/Burgie-Logger" className="imgbtn" target="_blank" rel="noopener">Burger Logger Github</Button>
          <Button href="https://serene-cliffs-49135.herokuapp.com/" className="imgbtn2" target="_blank" rel="noopener">Burger Logger</Button>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Dumbbells} className="bookimg"></Image>
        <Button href="https://github.com/Riaconianni/Fitness-Tracker" className="imgbtn" target="_blank" rel="noopener">Fitness Tracker Github</Button>
        <Button href="https://lychee-crumble-73323.herokuapp.com/" className="imgbtn2" target="_blank" rel="noopener">Fitness Tracker</Button>
        </Col>
      </Row>
      </Container>
    </>
  )
};

export default Resume;