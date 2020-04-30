import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppNavBar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <>
      <AppNavBar />
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/contact' component={Contact} />
        <Route render={() => <h1 className='text-center'>Wrong Page!</h1>} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
