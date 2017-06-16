import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import './Nav-Tracker.css';

export class NavTracker extends Component {
    render() {
        return (
            <nav>
                <button className="back"><Link to="/boosters">Back to Mood Boosters</Link></button>
                <button className="add"><Link to="/record">Add new mood</Link></button>
            </nav>
        )
    }
}

export default NavTracker;