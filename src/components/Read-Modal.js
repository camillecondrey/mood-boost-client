import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Modal.css'
import {toggleReadModal, read, watch, listen, nourish} from '../actions/index';



export class ReadModal extends Component {
    
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
                        <p className="read-text">{this.props.read[0]}</p>
                        <p className="read-text">{this.props.read[1]}</p>
                        <p className="read-text">{this.props.read[2]}</p>
                        <p className="read-text">{this.props.read[3]}</p>
                       
                        
                        <a className="close" href="#" onClick={this.hide.bind(this)}>Close</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    
  
    read: state.moodsReducer.read,

});

export default connect(mapStatetoProps)(ReadModal);
    