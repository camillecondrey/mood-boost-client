import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavMood from './Nav-Mood';

import Transitioners from './Transitioners';

export class Mood extends Component {
    constructor(props) {

        super(props) 
        this.mood = this.props.moods
    
    }

   

  render() {
    console.log(this.mood);
    let transitioners; 
    
    if (this.props.transitioners) {
        transitioners = this.props.transitioners.map((transitioners, index) =>

        <Transitioners key={index} index={index} moodId={this.props.match.params.moodId}
        {...transitioners} />
    )}

    return (
        <container>
            <NavMood />
            <h1 id="mood">{this.props.match.params.moodId}</h1>
            <div className="transitioners">
               <Transitioners />
            </div>
        </container>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        moods: state.moods
    }
}

export default connect(mapStateToProps)(Mood);