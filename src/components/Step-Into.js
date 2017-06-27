import React, { Component } from 'react';

import {connect} from 'react-redux';
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
            <a href="" onClick={e => this.tranquil(e)}><Link to="/mood/tranguil">
            <div id="hover" className="tranquil">
                <img className="tranquil-img" src="../images/tranquil.png"></img>
                <h1 className="mood-title">Tranquil</h1>
                <p className="step-p">Step in</p>
            </div>
            </Link>
            </a>
            <a href="" onClick={e => this.romantic(e)}><Link to="/mood/romantic">
            <div id="hover" className="romantic">
                <img className="romance-img" src="../images/romance.png"></img>
                <h1 className="mood-title">Romantic</h1>
                <p className="step-p">Step in</p>
            </div>
            </Link>
            </a>
            <a href="" onClick={e => this.energetic(e)}><Link to="/mood/energized">
            <div id="hover" className="energized">
                <img className="energy-img" src="../images/energetic.png"></img>
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
