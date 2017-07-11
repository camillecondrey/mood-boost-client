import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Modal.css'
import {toggleListenModal, read, watch, listen, nourish} from '../actions/index';
import $ from 'jquery';



export class ListenModal extends Component {
    constructor(props) {

        super(props) 
       
    
        this.listen = this.props.listen
     
        
    }

     hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleListenModal());
    }

    render() {
       
        let listen 
        // if (this.listen.youtube) {
        //     listen = <iframe src={this.listen.youtube} width="500" height="269" frameBorder="0" allowTransparency="true"></iframe>
        // }
        // else {
        //     listen = <iframe src={this.listen.spotify} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
        // }

        if (this.listen.youtube) {
            listen = this.listen.youtube
        }

        else {
            listen = this.listen.spotify
        }

        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>Tune in, drop out:</h3>
                    <div>
                        {/*<p>{this.props.listen}</p>*/}
                        <iframe src={listen} width="300" height="300" frameBorder="0" allowTransparency="true"></iframe>
                       
                        
                        <a className="close" href="#" onClick={e => this.hide(e)}>Close</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    

    listen: state.moodsReducer.listen

});

export default connect(mapStatetoProps)(ListenModal);