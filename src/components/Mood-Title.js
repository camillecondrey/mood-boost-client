import React, { Component } from 'react';
import {connect} from 'react-redux';
import Transitioners from './Transitioners';


export class MoodTitle extends Component {
    constructor(props) {

        super(props) 
        this.mood = this.props.mood
    }

        
    render() {
    console.log(this.mood);
 
    let moods;
    if (this.props.moods) {
        moods = this.props.moods.map((moods, index) => 
        <MoodTitle key={index} index={index} moodId={this.props.match.params.moodId}
        {...moods} />)
    }

    return (

        <h1 id="mood">{this.mood}</h1>

    )
}
}

const mapStateToProps = (state, props) => {
    return {
        moods: state.moods,
 
    }
}

export default connect(mapStateToProps)(MoodTitle);
