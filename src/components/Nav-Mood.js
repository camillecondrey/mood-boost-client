import React, { Component } from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import './Nav-Mood.css';

export class NavMood extends Component {
    render() {
        return (
            <nav>
                <Link to="/boosters"><button id="back" className="back">Boosters</button></Link>
                <Link to="/tracker"><button className="mood-track">Track your moods</button></Link>

            </nav>
        )
    }
}

export default NavMood;