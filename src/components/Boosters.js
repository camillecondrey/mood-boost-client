import React, { Component } from 'react';
import StepInto from './Step-Into';
import StepOutOf from './Step-Out-Of';

import {connect} from 'react-redux';

import './Boosters.css'
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// eslint-disable-next-line
import {logOut, fetchMood} from '../actions/index';




export class Boosters extends Component {
  

    handleLogOut(event) {
        event.preventDefault();
        this.props.dispatch(logOut())
            window.location = "/";
    }



    render() {

        if (!localStorage.headers) 
        {window.location = "/"}

        return (
            <container>
                {/*<NavBoosters />*/}
                <button className="home-button" onClick={this.handleLogOut.bind(this)}>Log out</button>
                <button className="track"><Link to="/tracker">Track your moods</Link></button>
                    <section id="wave" className="heading-section">
                   
                        <h1 className="heading">The Boosters</h1>
                        <div id="description">
                            <p>Choose a negative mood you would like to step out of or a positive mood you would like to step into.</p>
                        </div>
                        
                    </section>
                    
                    <div className="all-moods">
                     <StepOutOf />
                     <StepInto />
                    </div>
            </container>
        )
    }
}

export default connect()(Boosters);