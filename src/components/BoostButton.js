import React, { Component } from 'react';
import './BoostButton.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



export class BoostButton extends Component {
  render() {
    return (
        <div className="boost-div">
            <button className="boost-button"><Link to="/boosters">Boost your mood</Link></button>
        </div>
    )
  }
}

export default BoostButton;