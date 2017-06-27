import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Transitioners.css'
import {toggleTransitionModal, read, watch, listen, nourish} from '../actions/index';
import $ from 'jquery';


export class TransitionModal extends Component {
    constructor(props) {

        super(props) 
        this.read = this.props.read
    
        this.watch = this.props.watch.src
    
        this.listen = this.props.listen
        this.nourish = this.props.nourish
        this.intro = this.props.watch.intro
        
    }

     hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleTransitionModal());
    }

    render() {
        let listen 
        if (this.listen.youtube) {
            listen = <iframe src={this.listen.youtube} width="500" height="269" frameBorder="0" allowTransparency="true"></iframe>
        }
        else {
            listen = <iframe src={this.listen.spotify} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>

        }

        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>Wise words:</h3>
                    <div>
                        <p>{this.nourish}</p>
                       <p>what the fuck</p>
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
    read: state.read,
    listen: state.listen,
    nourish: state.nourish,
    showInfoModal: state.showInfoModal
});

export default connect(mapStatetoProps)(TransitionModal);
    