import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import './Nav-Boosters.css';

export class NavBoosters extends Component {
    render() {
        return (
            <nav>
                <button className="about"><Link to="/">About</Link></button>
                <button className="track"><Link to="/tracker">Track your moods</Link></button>
            </nav>
        )
    }
}

export default NavBoosters;