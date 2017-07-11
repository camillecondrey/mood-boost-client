import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Modal.css'
import {toggleWatchModal, read, watch, listen, nourish} from '../actions/index';
import $ from 'jquery';


export class WatchModal extends Component {
    constructor(props) {

        super(props) 
        
        this.intro = this.props.watch.intro
        this.watch = this.props.watch.src
    
      
        
    }

     hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleWatchModal());
    }

    toggleWatchModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleWatchModal());
    }

    render() {
      

        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>Find your happy place:</h3>
                        <p>{this.props.watch.intro}</p>
                        <img className="watch-video" src={this.props.watch.src[0]}></img>
                        <img className="watch-video" src={this.props.watch.src[1]}></img>
                        <img className="watch-video" src={this.props.watch.src[2]}></img>

                       
                       
                        <a className="close" href="#" onClick={e => this.hide(e)}>Close</a>
                    
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    
  
    watch: state.moodsReducer.watch,

    
});

export default connect(mapStatetoProps)(WatchModal);
    