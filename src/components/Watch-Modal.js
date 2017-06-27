import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Transitioners.css'
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
                    <h3>Wise words:</h3>
                    <div>
                        <img src={this.watch}></img>
                       
                        <p>So, Are you ready?</p>
                        <a className="close" href="#" onClick={e => this.hide(e)}>Got It!</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    
  
    watch: state.watch,

    showInfoModal: state.showInfoModal
});

export default connect(mapStatetoProps)(WatchModal);
    