import React from 'react';
import './Create-Account.css';
import $ from 'jquery';
import {connect} from 'react-redux';
import {createAccount} from '../actions/index';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


export class CreateAccount extends React.Component {


signUp (username, password) {
	console.log('creating user account');
	$.ajax({ 
		url: '/users', 
		type: 'POST', 
		data: JSON.stringify({username, password}), 
		contentType: 'application/json', success: function(got) { 
			localStorage.headers = "Basic "+ btoa(username+ ":" + password)
			window.location = '/boosters/id=';
		} 
	});
}

    handleNewUser (e) {
        e.preventDefault();
        if (!$('#username').val()){
            alert('Please enter username');
        }
        else if (!$('#password').val()){
            alert('Please enter password');
        }
        else {
            var newUser = {
                    username: $("#username").val() , 
                    password: $('#password').val()
            } 
            this.props.dispatch(createAccount());
    }
    }

    render() {
        return (
            <div>
                <div className="create">
                    <h3>Create Account</h3>
                    <p>You can always access mood boosters with out an account. <br/>If you wish to track your moods, create a username and password.</p>
                    <form className="create-form" method="post" onSubmit={this.handleNewUser.bind(this)}>
                        <input type="username" placeholder="username" name="username" id="username" required/>
                        <input type="password" placeholder="password" name="password" id="password" required/>
                        <button type="submit" id="create-submit"><Link to="/boosters/">Submit</Link></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(CreateAccount);