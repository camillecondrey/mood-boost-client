import React, { Component } from 'react';
import LogIn from './Login';

import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <button className="about">About</button>
                <LogIn />
                
            </nav>
        )
    }
}

export default Nav;