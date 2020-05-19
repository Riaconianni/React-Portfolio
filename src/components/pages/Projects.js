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
          <p>Back-end application that allows an user to login, add, delete, and look at books the user has added.</p>
          <p>Technologies: HTML5, CSS3, Bootstrap, MySQL, Sequelize, Heroku, Axios, Express, JSON web tokens, Bcrypt, Node.js, JavaScript</p>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Recipe} className="bookimg"></Image>
        <Button href="https://github.com/CassidyGrom/recipeGenerator" className="imgbtn" target="_blank" rel="noopener">Recipe Generator Github</Button>
        <Button href="https://cassidygrom.github.io/recipeGenerator/index.html" className="imgbtn2" target="_blank" rel="noopener">Recipe Generator</Button>
        <p className="mt-2">Front-end application in which a user can type in ingredients to receive a list of meal ideas. The user can add the recipes to a dashboard to save for later and look for a grocery store in the Store Locator if they need more ingredients.</p>
        <p>Technologies: HTML5, CSS3, Bulma, Recipe Puppy API, Mapbox API, Font Awesome, JavaScript</p>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} className="imgarea text-center">
          <Image src={Rainbow} className="bookimg"></Image>
          <Button href="https://github.com/Riaconianni/Weather-Dashboard" className="imgbtn" target="_blank" rel="noopener">Weather Dashboard Github</Button>
          <Button href="https://riaconianni.github.io/Weather-Dashboard" className="imgbtn2" target="_blank" rel="noopener">Weather Dashboard</Button>
          <p className="mt-2">A weather dashboard that allows a user to type in a city and country (e.g., Miami,US). The date and weather will then display. </p>
          <p>Technologies: HTML5, CSS3, Bootstrap, Font Awesome, Moment.js, JavaScript, Open Weather Map API</p>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Code} className="bookimg"></Image>
        <Button href="https://github.com/Riaconianni/Code-quiz" className="imgbtn" target="_blank" rel="noopener">Code Quiz Github</Button>
        <Button href="https://riaconianni.github.io/Code-quiz/" className="imgbtn2" target="_blank" rel="noopener">Code Quiz</Button>
        <p className="mt-2">JavaScript App that lets the user play a code quiz. The user can start the game, play it, then loop back to start it over again.</p>
        <p>Technologies: HTML5, CSS3, Bootstrap, JavaScript</p>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={6} className="imgarea text-center">
          <Image src={Burger} className="bookimg"></Image>
          <Button href="https://github.com/Riaconianni/Burgie-Logger" className="imgbtn" target="_blank" rel="noopener">Burger Logger Github</Button>
          <Button href="https://serene-cliffs-49135.herokuapp.com/" className="imgbtn2" target="_blank" rel="noopener">Burger Logger</Button>
          <p className="mt-2">MySQL app that uses handlebars.js to give the user the ability to add, move, and delete burgers from the list.</p>
          <p>Technologies: HTML5, CSS3, Bootstrap, AJAX, MySQL, Heroku, Node.js, Handlebars.js, JavaScript</p>
        </Col>
        <Col xs={12} md={6} className="imgarea text-center">
        <Image src={Groovy} className="bookimg"></Image>
        <Button href="https://github.com/CassidyGrom/flogger" className="imgbtn" target="_blank" rel="noopener">Feelings Journal Github</Button>
        <Button href="https://emotions-log.herokuapp.com/" className="imgbtn2" target="_blank" rel="noopener">Feelings Journal</Button>
        <p className="mt-2">MERN stack application. Online diary that allows a user to journal their day and choose emotions to reflect on how they are feeling. The entries can be saved to reflect upon at a later date.</p>
        <p>Technologies: HTML5, CSS3, Bootstrap, React-Bootstrap, React.js, MondoDB, Heroku, Axios, Express, Moment.js, React-router-dom, React-router-transition, Adobe Typekit Fonts, JSON web tokens, Bcrypt, Node.js, JavaScript</p>
        </Col>
      </Row>
      </Container>
    </>
  )
};

export default Resume;