import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Transitioners.css'
import {toggleReadModal, toggleNourishModal, 
    toggleListenModal, read, watch, listen, 
    nourish, toggleWatchModal} from '../actions/index';
import $ from 'jquery';

import TransitionModal from './Transition-Modal';
import ReadModal from './Read-Modal';
import WatchModal from './Watch-Modal';
import ListenModal from './Listen-Modal';
import NourishModal from './Nourish-Modal';


export class Transitioners extends Component {
    // constructor(props) {

    //     super(props) 
        // this.read = this.props.read
    
        // this.watch = this.props.watch
    
        // this.listen = this.props.listen
        // this.nourish = this.props.nourish
        // this.intro = this.props.watch.intro
     
        
    


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

    //    let listen 
    //     if (this.listen.youtube) {
    //         listen = <iframe src={this.listen.youtube} width="500" height="269" frameBorder="0" allowTransparency="true"></iframe>
    //     }
    //     else {
    //         listen = <iframe src={this.listen.spotify} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>

    //     }
  

      
        return (
    
<div className="tran-section">
        
    <section className="first-pair">
        <a href="" onClick={this.toggleReadModal.bind(this)}>
           
           
            <div id="hover" className="read">
                <img className="read-img" src="../images/read.png"></img>
                <h1 className="tran-title">Read</h1>
                <p className="tran-sub-head">Wise words</p>
            </div>
        </a>

         <a href="" onClick={e => this.toggleWatchModal(e)}>
            <div id="hover" className="watch">
                <img className="watch-img" src="../images/watch.png"></img>
                <h1 className="tran-title">Watch</h1>
                <p className="tran-sub-head">Find your happy place</p>
            </div>
        </a>
        </section>
        <section className="second-pair">

         <a href="" onClick={this.toggleListenModal.bind(this)}>
            <div id="hover" className="listen">
                <img className="listen-img" src="../images/listen.png"></img>
                <h1 className="tran-title">Listen</h1>
                <p className="tran-sub-head">Tune in, drop out</p>
            </div>
        </a>
         <a href="" onClick={e => this.toggleNourishModal(e)}>
            <div id="hover" className="nourish">
                <img className="nourish-img" src="../images/nourish.png"></img>
                <h1 className="tran-title">Nourish</h1>
                <p className="tran-sub-head">Flavors that fix</p>
            </div>
        </a>
        </section>

</div>


        )
    }
}

// const mapStatetoProps = state => ({
    
//     watch: state.watch,
//     read: state.read,
//     listen: state.listen,
//     nourish: state.nourish,
   
// });

export default connect()(Transitioners);







/*/*<div>
            <button className="transitioner" id="accordion" onClick={e => this.toggleAccordion(e)}>
                Read
            </button>
                <div className="panel">
                    <p>Wise words:</p>
                    <p className="read" >{this.read}</p>
                </div>
         </div>
         <div>
            <button className="transitioner" id="accordion" onClick={e => this.toggleAccordion(e)}>
                Watch
            </button>
                <div className="panel">
                    <p className="gif-intro">{this.intro}</p>
                    <img src={this.watch}></img>
                </div>
        </div>  
        <div>
            <button className="transitioner" id="accordion" onClick={e => this.toggleAccordion(e)}>
                Listen
            </button>
            <div className="panel">
                <p>Tune in and drop out</p>
                <p>{listen}</p>
            </div>
        </div> 
        <div> 
            <button className="transitioner" id="accordion" onClick={e => this.toggleAccordion(e)}>
            Nourish
        </button>
            <div className="panel">
                <p>Flavors that fix</p>
                <ul className="foods">
                    <li>{this.nourish[1]}</li>
                    <li>{this.nourish[2]}</li>
                    <li>{this.nourish[3]}</li>
                    <li>{this.nourish[4]}</li>
                    <li>{this.nourish[5]}</li>
                    <li>{this.nourish[6]}</li>
                </ul>
            </div>
        </div>*/
      
/*</div>*/

//   toggleAccordion(e) {
//     let acc = $("#accordion");
//     let i;

//     for (i = 0; i < acc.length; i++) {
//         acc[i].onclick = function(){
//             /* Toggle between adding and removing the "active" class,
//             to highlight the button that controls the panel */
//             this.classList.toggle("active");

//             /* Toggle between hiding and showing the active panel */
//             var panel = this.nextElementSibling;
//             if (panel.style.display === "block") {
//                 panel.style.display = "none";
//             } else {
//                 panel.style.display = "block";
//             }
//     }
//     this.props.dispatch(toggleAccordion(e));
	  
// }}