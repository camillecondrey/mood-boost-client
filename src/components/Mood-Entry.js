import React, { Component } from 'react';

import './Mood-Entry.css'



export default class MoodEntry extends Component {
    

    render () {
        return (
            <container className="moods">
                <div className="mood">
                    
                        <h3 className="entry-description">{this.props.mood.description}</h3>
                        <div className="top-bar">
                        <p className="entry-date"><b>Date:</b> {this.props.mood.date}</p>
                        <p className="entry-duration"><b>Duration:</b> {this.props.mood.duration}</p>
                    
                    <p className="entry-cause"><b>Cause: </b>{this.props.mood.cause}</p>
                    </div>
                </div>
            </container>
        )
    }
}



