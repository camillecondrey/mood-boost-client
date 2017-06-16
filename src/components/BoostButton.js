import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



export class BoostButton extends Component {
  render() {
    return (
        <div>
            <button><Link to="/boosters">Boost your mood</Link></button>
        </div>
    )
  }
}

export default BoostButton;