import React, { Component } from 'react';

import './Mood-Entry.css'





export default class MoodEntry extends Component {
    

    render () {
        
        let date = new Date(this.props.mood.date)
        // console.log(date, this.props.mood.date);


        return (
            <container className="moods">
                <div className="mood">
                        <h3 className="entry-description">{this.props.mood.description}</h3>
                        <div className="top-bar">
                        <p className="entry-date"><b>Date:</b> {date.getMonth()+1}-{date.getDate()}-{date.getFullYear()}</p>
                        <p className="entry-duration"><b>Duration:</b> {this.props.mood.duration}</p>
                    
                    <p className="entry-cause"><b>Cause: </b>{this.props.mood.cause}</p>
                    </div>
                </div>
            </container>
        )
    }
}



