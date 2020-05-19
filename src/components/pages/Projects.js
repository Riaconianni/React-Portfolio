import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Booklist from '../../assets/newbooks.jpg';
import Burger from '../../assets/burger.jpg';
import Code from '../../assets/code.jpg';
import Dumbbells from '../../assets/dumbbells.jpg';
import Rainbow from '../../assets/rainbow.jpg';
import Recipe from '../../assets/recipe.jpg';
import Groovy from '../../assets/groovy.jpg';


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
          <p>Username: Iaconiannir@gmail.com | Password: 12345</p>
          <p>Technologies: HTML5, CSS3, Bootstrap, MySQL, Sequelize, Heroku, Axios, Express, JSON web tokens, Bcrypt, Node.js, JavaScript</p>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Recipe} className="bookimg"></Image>
        <Button href="https://github.com/CassidyGrom/recipeGenerator" className="imgbtn" target="_blank" rel="noopener">Recipe Generator Github</Button>
        <Button href="https://cassidygrom.github.io/recipeGenerator/index.html" className="imgbtn2" target="_blank" rel="noopener">Recipe Generator</Button>
        <p className="mt-2">Technologies: HTML5, CSS3, Bulma, Recipe Puppy API, Mapbox API, Font Awesome, JavaScript</p>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} className="imgarea text-center">
          <Image src={Rainbow} className="bookimg"></Image>
          <Button href="https://github.com/Riaconianni/Weather-Dashboard" className="imgbtn" target="_blank" rel="noopener">Weather Dashboard Github</Button>
          <Button href="https://riaconianni.github.io/Weather-Dashboard" className="imgbtn2" target="_blank" rel="noopener">Weather Dashboard</Button>
          <p className="mt-2">Technologies: HTML5, CSS3, Bootstrap, Font Awesome, Moment.js, JavaScript, Open Weather Map API</p>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Code} className="bookimg"></Image>
        <Button href="https://github.com/Riaconianni/Code-quiz" className="imgbtn" target="_blank" rel="noopener">Code Quiz Github</Button>
        <Button href="https://riaconianni.github.io/Code-quiz/" className="imgbtn2" target="_blank" rel="noopener">Code Quiz</Button>
        <p className="mt-2">Technologies: HTML5, CSS3, Bootstrap, JavaScript</p>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} className="imgarea text-center">
          <Image src={Burger} className="bookimg"></Image>
          <Button href="https://github.com/Riaconianni/Burgie-Logger" className="imgbtn" target="_blank" rel="noopener">Burger Logger Github</Button>
          <Button href="https://serene-cliffs-49135.herokuapp.com/" className="imgbtn2" target="_blank" rel="noopener">Burger Logger</Button>
          <p className="mt-2">Technologies: HTML5, CSS3, Bootstrap, AJAX, MySQL, Heroku, Node.js, Handlebars.js, JavaScript</p>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Groovy} className="bookimg"></Image>
        <Button href="https://github.com/CassidyGrom/flogger" className="imgbtn" target="_blank" rel="noopener">Feelings Journal Github</Button>
        <Button href="https://emotions-log.herokuapp.com/" className="imgbtn2" target="_blank" rel="noopener">Feelings Journal</Button>
        <p className="mt-2">Technologies: HTML5, CSS3, Bootstrap, React-Bootstrap, React.js, MondoDB, Heroku, Axios, Express, Moment.js, React-router-dom, React-router-transition, Adobe Typekit Fonts, JSON web tokens, Bcrypt, Node.js, JavaScript</p>
        </Col>
      </Row>
      </Container>
    </>
  )
};

export default Resume;