import React, { Component } from 'react';
import About from './About';



import {BrowserRouter as Router, Route} from 'react-router-dom';
import Boosters from './Boosters';
import RecordMood from './Record-Mood';
import MoodTracker from './Mood-Tracker';
import Mood from './Mood';


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
          <Route exact path="/mood/:moodId" onUpdate={() => window.scrollTo(0, 0)} component={Mood} />
        </container>
      </Router>
 
    );
  }
}

export default App;
