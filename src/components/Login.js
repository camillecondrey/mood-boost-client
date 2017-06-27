import React from 'react';
// import './create-account.css';
import $ from 'jquery';
import {connect} from 'react-redux';
import {logIn} from '../actions/index';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


export class LogIn extends React.Component {
 constructor(props) {

        super(props) 
     }



    handleLogIn (e) {
        e.preventDefault();
        if (!$('#username').val()){
            alert('Please enter username');
        }
        else if (!$('#password').val()){
            alert('Please enter password');
        }
       
            this.props.dispatch(logIn($('#username').val()), $('#password').val());
    }



    render() {
        return (
            <div>
                <div className="log-in">
			        <form className="log-in-form" onSubmit={this.handleLogIn.bind(this)} method="post">
				
                        <input className="login" type="username" placeholder="username" name="email" id="email" required/>
                    
                        <input className="login" type="password" placeholder="password" name="password" id="password" required/>
                        <button type="submit" id="log-in-button"><Link to="/boosters/">Log In</Link></button>
			        </form>	
		        </div>	
            </div>
        );
    
}
}


export default connect()(LogIn);