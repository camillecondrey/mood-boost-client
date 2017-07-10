import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import './Nav-Tracker.css';

export class NavTracker extends Component {
    render() {
        return (
            <nav className="tracker-nav">
                <button className="back"><Link to="/boosters">Back to Boosters</Link></button>
                
            </nav>
        )
    }
}

export default NavTracker;