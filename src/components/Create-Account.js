import React from 'react';
import './Create-Account.css';
import $ from 'jquery';
import {connect} from 'react-redux';
import {createAccount} from '../actions/index';



export class CreateAccount extends React.Component {

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
            this.props.dispatch(createAccount(newUser))
            .then(() => {
                if (localStorage.headers) {
                window.location = "/boosters"
            }
            else if (!localStorage.headers) {
                window.location = '/'
            }
            }) 
    }
    }

    render() {
        return (
            <div>
                <div className="create">
                    <h3 className="create-h3">A better mood awaits you</h3>
                    <div className="smile2"></div>
                    <p className="create-p">Create a username and password to start tracking your moods <br/> or demo this app with username <b>abc</b> and password <b>123</b></p>
                    <form className="create-form" method="post" onSubmit={this.handleNewUser.bind(this)}>
                        <input type="username" placeholder="username" name="username" id="username" required/>
                        <input type="password" placeholder="password" name="password" id="password" required/>
                        <button type="submit" id="create-submit">Boost your mood</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(CreateAccount);