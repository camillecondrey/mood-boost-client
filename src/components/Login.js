import React from 'react';
import './Login.css';
import $ from 'jquery';
import {connect} from 'react-redux';
import {logIn} from '../actions/index';



export class LogIn extends React.Component {
    // eslint-disable-next-line
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
            this.props.dispatch(
                logIn($('#username').val(), $('#password').val()))
            .then(() => {
                if (localStorage.headers) {
                window.location = "/boosters"
                }
            }) 
           
    }


    render() {

        if (localStorage.headers) 
        {window.location = "/boosters"}




        return (
            <div>
                <div className="log-in">
			        <form className="log-in-form" onSubmit={this.handleLogIn.bind(this)}>
				
                        <input className="login" type="username" placeholder="username" name="email" id="email" required/>
                    
                        <input className="login" type="password" placeholder="password" name="password" id="password" required/>
                        <button type="submit" id="log-in-button">Log In</button>
			        </form>	
		        </div>	
            </div>
        );
    
}
}


export default connect()(LogIn);