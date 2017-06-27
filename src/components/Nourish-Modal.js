import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Transitioners.css'
import {toggleNourishModal, read, watch, listen, nourish} from '../actions/index';
import $ from 'jquery';


export class NourishModal extends Component {
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
        this.props.dispatch(toggleNourishModal());
    }

    render() {
       

        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>Flavors that Fix:</h3>
                    <div>
                        <p>{this.nourish}</p>
                       
                        
                        <a className="close" href="#" onClick={e => this.hide(e)}>X</a>
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

export default connect(mapStatetoProps)(NourishModal);
    