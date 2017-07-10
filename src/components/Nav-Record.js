import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import './Nav-Record.css';

export class NavRecord extends Component {
    render() {
        return (
            <nav>
                <button className="record-back"><Link to="/tracker">Back to Mood Tracker</Link></button>
            </nav>
        )
    }
}

export default NavRecord;