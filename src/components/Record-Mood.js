import React, { Component } from 'react';
import $ from 'jquery';
import {recordMood} from '../actions/index';

import NavRecord from './Nav-Record';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Record-Mood.css';


export class RecordMood extends Component {
     constructor(props) {

        super(props) 
     }

handleMoodAdd(e) {
 
    e.preventDefault();
    if (!$('.date-month').val()){
    	alert('Please enter date');
    }
    else if (!$('.description').val()){
    	alert('Please enter description');
    }
    else {
	    var newMood = {
				date: new Date( $(".date-year").val() , $(".date-month").val() ,$(".date-day").val()),
				description: $('.description').val(),
				cause: $('.cause').val(),
				duration: $('.duration').val()
	    } 
	   window.location = '/tracker/' 
    }
        this.props.dispatch(recordMood(newMood));

}


  render() {
    return (
        <container>
            <NavRecord />
        <div className="record-body">
        <section className="record-section">
            <h2 className="record-heading" >Record Mood</h2>
            <form id="record-mood" onSubmit={this.handleMoodAdd.bind(this)}>
                <div className="form-section">
                    <label for="date">When were you in this mood?</label>
                    <input type="number" name="date-month" className="date-month" placeholder="01" min="1" max="12" required=""/>  .
                    <input type="number" name="date-day" className="date-day" placeholder="01" min="1" max="31" required=""/>  .
                    <input type="number" name="date-year" className="date-year" placeholder="2017" min="2016" max="2017"/>
                </div>
                <div className="form-section">
                    <label for="mood-length">How long did this mood last?</label>
                    <input type="text" className="duration" name="mood-length" placeholder="Example: 2 hours" required/>
                </div>
                <div class="form-section">
                    <label for="mood-title">What would you call your mood?</label>
                    <input type="text" className="description" name="mood-title" placeholder="Example: Angry" required/>
                </div>
                <div className="form-section">
                    <label for="cause">Do you know what caused you to feel this way?</label>
                    <input type="text" className="cause" name="cause" placeholder="Example: I got a speeding ticket" required/>
                </div>
                
                <button className="mood-submit" type="submit" method="post"><Link to="/tracker">Submit</Link></button>
            </form>
        </section>
        </div>
        </container>
    )
  }
}

export default RecordMood;

