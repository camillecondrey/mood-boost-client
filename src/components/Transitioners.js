import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Transitioners.css'
import {toggleReadModal, toggleNourishModal, 
    toggleListenModal, toggleWatchModal} from '../actions/index';




export class Transitioners extends Component {
 
toggleListenModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleListenModal());
      
    }

    toggleNourishModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleNourishModal());
    }

 toggleReadModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleReadModal());
    }

    toggleWatchModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleWatchModal());
    }

    render() {

      
        return (
    
<div className="tran-section">
        
    <section className="first-pair">
        <a href="" onClick={this.toggleReadModal.bind(this)}>
           
           
            <div id="hover" className="read">
                <img alt="book" className="read-img" src="../images/read.png"></img>
                <h1 className="tran-title">Read</h1>
                <p className="tran-sub-head">Wise words</p>
            </div>
        </a>

         <a href="" onClick={e => this.toggleWatchModal(e)}>
            <div id="hover" className="watch">
                <img alt="eye" className="watch-img" src="../images/watch.png"></img>
                <h1 className="tran-title">Watch</h1>
                <p className="tran-sub-head">Find your happy place</p>
            </div>
        </a>
        </section>
        <section className="second-pair">

         <a href="" onClick={this.toggleListenModal.bind(this)}>
            <div id="hover" className="listen">
                <img alt="headphones" className="listen-img" src="../images/listen.png"></img>
                <h1 className="tran-title">Listen</h1>
                <p className="tran-sub-head">Tune in, drop out</p>
            </div>
        </a>
         <a href="" onClick={e => this.toggleNourishModal(e)}>
            <div id="hover" className="nourish">
                <img alt="silverware" className="nourish-img" src="../images/nourish.png"></img>
                <h1 className="tran-title">Nourish</h1>
                <p className="tran-sub-head">Flavors that fix</p>
            </div>
        </a>
        </section>

</div>


        )
    }
}

export default connect()(Transitioners);







