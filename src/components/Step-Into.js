import React, { Component } from 'react';

import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


// import {stepIn} from '../actions';

export class StepInto extends Component {
    // onStepOut(event) {
    //     event.preventDefault();
    //     if (this.props.onStepOut) {
    //         this.props.onStepOut();
    //     }
    //     this.props.dispatch(stepIn());
    // }

  render() {
    return (
        <container>
            <section className="tranquil">
                <h1>Tranquil</h1>
                <button><Link to="/mood/tranquil">Begin transition</Link></button>
            </section>
            <section className="romantic">
                <h1>Romantic</h1>
                <button><Link to="/mood/romantic">Begin transition</Link></button>
            </section>
            <section className="energized">
                <h1>Energized</h1>
                <button><Link to="/mood/energized">Begin transition</Link></button>
            </section>
        </container>
    )
  }
}

export default connect()(StepInto);
