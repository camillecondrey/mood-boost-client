import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Modal.css'
import {toggleNourishModal, read, watch, listen, nourish} from '../actions/index';
import $ from 'jquery';


export class NourishModal extends Component {
    constructor(props) {

        super(props) 
     
        this.nourish = this.props.nourish
  
        
    }

     hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleNourishModal());
    }

    render() {
       

        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>Flavors that Fix:</h3>
                    <div className="nourish-div">
                        <p className="nourish-intro">{this.props.nourish[0]}</p>
                        <ul className="food-list">
                            <div className="columns">
                                <div className="column1">
                                    <li>{this.props.nourish[1]}</li>
                                    <li>{this.props.nourish[2]}</li>
                                    <li>{this.props.nourish[3]}</li>
                                </div>
                                <div className="column2">
                                    <li>{this.props.nourish[4]}</li>
                                    <li>{this.props.nourish[5]}</li>
                                    <li>{this.props.nourish[6]}</li>
                                </div>
                            </div>
                        </ul>

                       
                        
                        <a className="close" href="#" onClick={this.hide.bind(this)}>Close</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    
    nourish: state.moodsReducer.nourish
  
});

export default connect(mapStatetoProps)(NourishModal);
    