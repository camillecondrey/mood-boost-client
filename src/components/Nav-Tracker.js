import React, { Component } from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import './Nav-Tracker.css';

export class NavTracker extends Component {
    render() {
        return (
            <nav className="tracker-nav">
                <Link to="/boosters"><button id="tracker-back" className="back">Back to Boosters</button></Link>
                
            </nav>
        )
    }
}

export default NavTracker;