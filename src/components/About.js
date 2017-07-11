import React, { Component } from 'react';

import BoostButton from './BoostButton';
import Nav from './Nav';
import CreateAccount from './Create-Account';

import './About.css';

export class About extends Component {
  render() {
    return (
        <container>
        <Nav />
      <div className="about-body"> 
       <div className="title" >
           <header className="about-header">
                <h1 className="app-name">mood boost</h1>
                <div className="frown"></div>
                <div className="smile"></div>
                    <h2 className="app-sub-heading">Only you have the power to control your mood, but sometimes it's easy to let  our mood control us.
                        <br/>
                        <br/>Take back the power with Mood Boost, designed to help users break out of toxic moods and step into a 
                        better one.
                    </h2>
            </header>
        </div>
         <div className="how-div">
                <h2 className="how-heading">How it works</h2>
                <div className="smile2"></div>
            </div>
        <div className="about-section">
           
                <div className="h3-div">
                    <h3 className="about-h3">Step in or step out</h3>
                    <p className="about-p">Mood Boost offers six moods to transition into or out of.</p>
                </div>
                <div className="image-div">
                    <img className="screenshot" src="../images/moods.png"></img>
                </div>
                
            </div>
            <div className="about-section">
            <div className="image-div">
                <img className="screenshot2" src="../images/transitioners.png"></img>
            </div>
            <div className="h3-div">
                <h3 className="about-h32">Transition</h3>
                <p className="about-p">Choose from visual, audible and interactive strategies to adjust your mood</p>
            </div>

            </div>
            <div className="about-section">
                <div className="h3-div">
                    <h3 className="about-h3">Track your moods</h3>
                    <p className="about-p">Record what is causing your moods to help identify a pattern</p>
                </div>
                <div className="image-div">
                    <img className="screenshot3" src="../images/tracker.png"></img>
                </div>
            </div> 
            {/*<BoostButton />*/}
            <CreateAccount />
        </div>
        </container>
 
    );
  }
}

export default About;