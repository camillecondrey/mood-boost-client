import React, { Component } from 'react';
import $ from 'jquery';
import {recordMood} from '../actions/index';
import {connect} from 'react-redux';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Record-Mood.css';


export class RecordMood extends Component {
    // eslint-disable-next-line
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
				date: new Date( $(".date-year").val(), $(".date-month").val()-1, $(".date-day").val() ),
                
				description: $('.description').val(),
				cause: $('.cause').val(),
				duration: $('.duration').val()
	    } 
        this.props.dispatch(recordMood(newMood)) 
        .then(()=> {
             window.location = '/tracker/' 
        })
	  
    }
        

}


  render() {
    return (
        <container>

        <div className="record-body">
        <Link to="/tracker"><button className="return">Back to tracker</button></Link>
        <section className="record-section">
            <h2 className="record-heading" >Record Mood</h2>
            <form id="record-mood" onSubmit={this.handleMoodAdd.bind(this)}>
                <div className="form-section">
                    <label>When were you in this mood?</label>
                    <input id="input" type="number" name="date-month" className="date-month" placeholder="01" min="1" max="12" required=""/>  /
                    <input id="input" type="number" name="date-day" className="date-day" placeholder="01" min="1" max="31" required=""/>  /
                    <input id="input" type="number" name="date-year" className="date-year" min="2016" max="2017" placeholder="2017"/>
         
                </div>
                <div className="form-section">
                    <label>What type of mood was it?</label>
                    <input id="input" type="text" className="description" name="mood-title" placeholder="Ex: Angry" required/>
                </div>
                <div className="form-section">
                    <label>How long did this mood last?</label>
                    <input id="input" type="text" className="duration" name="mood-length" placeholder="Ex: 2 hours" required/>
                </div>
                
                <div className="form-section">
                    <label>What triggered this mood?</label>
                    <input id="input" type="text" className="cause" name="cause" placeholder="Ex: I got a speeding ticket" required/>
                </div>
                
                <button className="mood-submit" type="submit">Submit</button>
            </form>
        </section>
        </div>
        </container>
    )
  }
}

export default connect()(RecordMood);

