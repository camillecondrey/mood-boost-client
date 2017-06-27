import React, { Component } from 'react';
import About from './About';
import BoostButton from './BoostButton';
import Footer from './Footer';
import Nav from './Nav';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Boosters from './Boosters';
import RecordMood from './Record-Mood';
import MoodTracker from './Mood-Tracker';
import Mood from './Mood';
import StepInto from './Step-Into';
import StepOutOf from './Step-Out-Of';

import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <container>
          <Route exact path="/" component={About} />
          <Route exact path="/boosters" component={Boosters} />
          <Route exact path="/record" component={RecordMood} />
          <Route exact path="/tracker" component={MoodTracker} />
          <Route exact path="/mood/:moodId" component={Mood} />
          
          <Footer />
        </container>
      </Router>
 
    );
  }
}

export default App;
