import React, { Component } from 'react';

import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <button className="about">About</button>
                <div className="log-in">
			<form className="log-in-form" action="/users/me" method="post">
				
				<input className="login" type="email" placeholder="email address" name="email" id="email" required/>
				
				<input className="login" type="password" placeholder="password" name="password" id="password" required/>
				<button type="submit" id="log-in-button" action="profile.html">Log In</button>
			</form>	
		</div>	
                
            </nav>
        )
    }
}

export default Nav;