import React, { Component } from 'react';
import NavTracker from './Nav-Tracker';
import MoodEntry from './Mood-Entry';
import {connect} from 'react-redux';
import {fetchMood} from '../actions/index';
import './Mood-Tracker.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



export class MoodTracker extends Component {
    constructor(props) {
        super(props)
   
   this.props.dispatch(fetchMood());

 }

  render() {
    let moods;
      if (this.props.moods) {
          moods = this.props.moods.map(m => {
            return <MoodEntry mood = {m}/>
          })
      }

    return (
    <container>
        <div className="tracker-body">
        <NavTracker />
        <header>
            <h1 className="tracker-heading">Mood Tracker</h1>
            <p className="subTrack-heading">By tracking your moods, you can identify the patterns in your life <br/>that lead you to feel positive or negative emotions.
                The more conscious you are of your moods, the easier they become to control.</p>
            <button className="add"><Link to="/record">Add new mood</Link></button>
        </header>
        <section>
           {moods}
        </section>
        </div>
    </container>
    )
  }
}

const mapStateToProps = state => ({
    moods: state.trackingReducer.moods
});

export default connect(mapStateToProps)(MoodTracker);
