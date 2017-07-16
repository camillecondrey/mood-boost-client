import React, { Component } from 'react';
import LogIn from './Login';

import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav className="main-nav">
                <LogIn />
                
            </nav>
        )
    }
}

export default Nav;