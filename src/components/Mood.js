import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavMood from './Nav-Mood';
import './Mood.css'
import MoodTitle from './Mood-Title';

import Transitioners from './Transitioners';
import ReadModal from './Read-Modal';
import WatchModal from './Watch-Modal';
import ListenModal from './Listen-Modal';
import NourishModal from './Nourish-Modal';

export function Mood(props) {
    // constructor(props) {

    //     super(props) 
        // this.mood = this.props.moods
     
    
    
    let infoModal;
    if (props.showInfoModal) {
        infoModal = <ReadModal />;
    }
   

    

    

  /*render() {
    console.log(this.mood);
    let transitioners; 
    
    if (this.props.transitioners) {
        transitioners = this.props.transitioners.map((transitioners, index) =>

        <Transitioners key={index} index={index} moodId={this.props.match.params.moodId}
        {...transitioners} />
    )}*/
   

    return (
        <div className="body">
            <NavMood />
            <div className="mood-heading">
                {/*<h1 id="mood">{this.props.match.params.moodId}</h1>*/}
                <MoodTitle />
                <p className="how">How would you like to transition?</p>
            </div>
            <div className="transitioners">
               <Transitioners />
               {infoModal}
            </div>
        </div>
    )
  }


const mapStateToProps = (state, props) => {
    return {
        moods: state.moods,
        showInfoModal: state.showInfoModal
    }
}

export default connect(mapStateToProps)(Mood);

