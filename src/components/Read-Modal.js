import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Modal.css'
import {toggleReadModal} from '../actions/index';



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
                        <p id="quote" className="read-text"><b>{this.props.read[0]}</b></p>
                        <p id="tips" className="read-text">{this.props.read[1]}</p>
                        <div className="tips">
                        <p className="read-text">{this.props.read[2]}</p>
                        <p className="read-text">{this.props.read[3]}</p>
                        <p className="read-text">{this.props.read[4]}</p>
                        <p className="read-text">{this.props.read[5]}</p>
                        <p className="read-text">{this.props.read[6]}</p>
                       <p className="read-text">{this.props.read[7]}</p>
                       </div>
                        
                        <a className="close" href="" onClick={this.hide.bind(this)}>Close</a>
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
    