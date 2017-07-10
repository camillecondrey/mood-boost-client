import React, { Component } from 'react';
import LogIn from './Login';

import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav className="main-nav">
                {/*<button className="about">About</button>*/}
                {/*<p className="app-title">mood boost</p>*/}
                <LogIn />
                
            </nav>
        )
    }
}

export default Nav;