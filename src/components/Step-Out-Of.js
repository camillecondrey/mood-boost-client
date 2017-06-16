import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


// import './Anger.css';

class StepOutOf extends Component {
  render() {
    return (
        <container>
            <section className="anger">
                <h1>Anger</h1>
                <button> <Link to="/mood/anger">Begin transition</Link></button>
            </section>
            <section className="anxiety">
                <h1>Anxiety</h1>
                <button><Link to="/mood/anxiety">Begin transition</Link></button>
            </section>
            <section className="blue">
                <h1>Blue</h1>
                <button><Link to="/mood/blue">Begin transition</Link></button>
            </section>
        </container>
    )
  }
}

export default StepOutOf;