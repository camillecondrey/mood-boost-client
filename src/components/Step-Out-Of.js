import React, { Component } from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Step-Out-Of.css'

import {anger, anxious, blue} from '../actions/index';
// import './Anger.css';

class StepOutOf extends Component {
    anger(event) {
        event.preventDefault();
        this.props.dispatch(anger());
    }

    anxious(event) {
        event.preventDefault();
        this.props.dispatch(anxious());
    }

    blue(event) {
        event.preventDefault();
        this.props.dispatch(blue());
    }


  render() {
    return (
        <container className="step-out">
            <a href="" onClick={e => this.anger(e)}><Link to="/mood/Anger">
            <div id="hover" className="anger">
                <img alt="fire" className="anger-img" src="../images/anger-icon.png"></img>
                <h1 className="mood-title">Anger</h1>
                <p className="step-p">Step out</p>
            </div>
            </Link>
            </a>
            <a href="" onClick={e => this.anxious(e)}><Link to="/mood/Anxiety">
            <div id="hover" className="anxiety">
                <img alt="cloud" className="anxiety-img" src="../images/anxiety-icon.png"></img>
                <h1 className="mood-title">Anxiety</h1>
                <p className="step-p">Step out</p>
            </div>
            </Link>
            </a>
            <a href="" onClick={e => this.blue(e)}><Link to="/mood/Blue">
            <div id="hover" className="blue">
                <img alt="tear" className="blue-img" src="../images/blue-icon.png"></img>
                <h1 className="mood-title">Blue</h1>
                <p className="step-p">Step out</p>
            </div>
            </Link>
            </a>
        </container>
    )
  }
}

export default connect()(StepOutOf);