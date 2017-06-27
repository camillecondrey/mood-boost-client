import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Transitioners.css'
import {toggleReadModal, read, watch, listen, nourish} from '../actions/index';
import $ from 'jquery';


export class ReadModal extends Component {
    constructor(props) {

        super(props) 
        this.read = this.props.read
    
      
        
    }

     hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleReadModal());
    }



    render() {
      

        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>Wise words:</h3>
                    <div>
                        <p>{this.read}</p>
                       
                        <p>So, Are you ready?</p>
                        <a className="close" href="#" onClick={e => this.hide(e)}>Got It!</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    
  
    read: state.read,

    showInfoModal: state.showInfoModal
});

export default connect(mapStatetoProps)(ReadModal);
    