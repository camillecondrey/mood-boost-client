// eslint-disable-next-line
import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavMood from './Nav-Mood';
import './Mood.css'

import {anger, anxious, blue, romantic, energetic, tranquil} from '../actions/index';
import Transitioners from './Transitioners';
import ReadModal from './Read-Modal';
import WatchModal from './Watch-Modal';
import ListenModal from './Listen-Modal';
import NourishModal from './Nourish-Modal';

export class Mood extends React.Component {
    constructor(props) {

        super(props) 
        this.mood = this.props.mood
        console.log(this.props.match)
// eslint-disable-next-line
        switch(this.props.match.params.moodId) {
            case 'anger': 
                this.props.dispatch(anger());
                break ;
            case 'anxious': 
                this.props.dispatch(anxious());
                break ;
            case 'blue': 
                this.props.dispatch(blue());
                break ;
            case 'energetic': 
                this.props.dispatch(energetic());
                break ;
            case 'romantic': 
                this.props.dispatch(romantic());
                break ;
            case 'tranquil': 
                this.props.dispatch(tranquil());
                break ;
        }
    }
     
    
render() {
    let infoModal;
    if (this.props.showReadModal) {
        infoModal = <ReadModal />;
    }
    else if (this.props.showNourishModal) {
        infoModal = <NourishModal />;
    }
    else if (this.props.showListenModal) {
        infoModal = <ListenModal />;
    }
    else if (this.props.showWatchModal) {
        infoModal = <WatchModal />
    }


    return (
        <div id="mood-html" className="body">
            <NavMood />
            <div className="mood-heading">
                <h1 id="mood">{this.props.match.params.moodId}</h1>
        
                <p className="how">How would you like to transition?</p>
            </div>
            <div className="transitioners">
               <Transitioners />
               {infoModal}
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        mood: state.moodsReducer.mood,
        showReadModal: state.moodsReducer.showReadModal,
        showWatchModal: state.moodsReducer.showWatchModal,
        showListenModal: state.moodsReducer.showListenModal,
        showNourishModal: state.moodsReducer.showNourishModal,

    }
}

export default connect(mapStateToProps)(Mood);


