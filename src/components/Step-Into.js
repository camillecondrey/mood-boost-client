import React, { Component } from 'react';

import {connect} from 'react-redux';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {tranquil, energetic, romantic} from '../actions/index'
import './Step-in.css';

export class StepInto extends Component {
    tranquil(event) {
        event.preventDefault();
        this.props.dispatch(tranquil(event));
    }
    energetic(event) {
        event.preventDefault();
        this.props.dispatch(energetic(event));
    }
    romantic(event) {
        event.preventDefault();
        this.props.dispatch(romantic(event));
    }
 

  render() {
    return (
        <container className="stepin">
            <a href="" onClick={e => this.tranquil(e)}><Link to="/mood/Tranquil">
            <div id="hover" className="tranquil">
                <img alt="yin-yang" className="tranquil-img" src="../images/tranquil.png"></img>
                <h1 className="mood-title">Tranquil</h1>
                <p className="step-p">Step in</p>
            </div>
            </Link>
            </a>
            <a href="" onClick={e => this.romantic(e)}><Link to="/mood/Romantic">
            <div id="hover" className="romantic">
                <img alt="heart" className="romance-img" src="../images/romance.png"></img>
                <h1 className="mood-title">Romantic</h1>
                <p className="step-p">Step in</p>
            </div>
            </Link>
            </a>
            <a href="" onClick={e => this.energetic(e)}><Link to="/mood/Energized">
            <div id="hover" className="energized">
                <img alt="power" className="energy-img" src="../images/energetic.png"></img>
                <h1 className="mood-title">Energized</h1>
                <p className="step-p">Step in</p>
            </div>
            </Link>
            </a>
        </container>
    )
  }
}

export default connect()(StepInto);
