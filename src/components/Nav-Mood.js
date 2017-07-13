import React, { Component } from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import './Nav-Mood.css';

export class NavMood extends Component {
    render() {
        return (
            <nav>
                <button className="back"><Link to="/boosters">Boosters</Link></button>
                <button className="mood-track"><Link to="/tracker">Track your moods</Link></button>

            </nav>
        )
    }
}

export default NavMood;