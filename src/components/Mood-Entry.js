import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Mood-Entry.css'
import {toggleAccordion} from '../actions/index';


export class MoodEntry extends Component {
    constructor(props) {

        super(props) 
        // this.mood.description = this.props.mood.description
        // this.mood.date = this.props.mood.date
        // this.mood.cause = this.props.mood.cause
        // this.mood.duration = this.props.mood.duration
    }
    

    render () {
        return (
            <container className="moods">
                <div className="mood">
                    <h3>{}</h3>
                    <p>{}</p>
                    <p className="cause">{}</p>
                    <p className="duration">{}</p>
                </div>
                

            </container>
        )
    }
}




// const mapStatetoProps = state => ({
    
//     description: state.mood.description,
//     date: state.mood.date,
//     cause: state.mood.cause,
//     duration: state.duration.cause,
// });

export default connect()(MoodEntry);


