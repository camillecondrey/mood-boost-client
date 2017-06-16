import React from 'react';

// import './create-account.css';

import {connect} from 'react-redux';

import {createAccount} from '../actions/index';

export class CreateAccount extends React.Component {


    render() {
        return (
            <div className="overlay" id="modal">
                <div className="create">
                    <h3>Create Account</h3>
                    <form className="create-form" method="post">
                        <input type="email" placeholder="username" name="username" id="username" required/>
                        <input type="password" placeholder="password" name="password" id="password" required/>
                        <button type="submit" id="create-submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(CreateAccount);