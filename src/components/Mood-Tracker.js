import React, { Component } from 'react';
import NavTracker from './Nav-Tracker';


export class MoodTracker extends Component {



  render() {
    return (
    <container>
        <NavTracker />
        <header>
            <h1>Mood Tracker</h1>
        </header>
        <section>
            <ul>
                <li>1/1/2017: Angry</li>
                <li>1/5/2017: Anxious</li>
                <li>1/14/2017: Sad</li>
            </ul>
        </section>
    </container>
    )
  }
}

export default MoodTracker
