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
      <div> 
           
           <header>
                <h1 className="app-name">Mood Boost</h1>
                    <h2>Only you have the power to control your mood, but sometimes it's easy to let  our mood control us.
                        Take back the power with Mood Boost, designed to help users break out of toxic moods and step into a 
                        better one.
                    </h2>
            </header>
        <section>
            
                <h3>Select the mood you want to get out of or step into</h3>
                <p>[placeholder for screenshot of mood booster]</p>
                <p>Mood Boost offers three moods to break out of and three moods to step into</p>
            </section>
            <section>
                <h3>Choose how you want to transition</h3>
                <p>[placeholder for screenshot of inside mood booster]</p>
                <p>Mood Boost offers visual, audible and interactive strategies to help users adjust their moods</p>
            </section>
            <section>
                <h3>Track your moods and what is causing them</h3>
                <p>[placeholder for screenshot of mood calendar]</p>
                <p>Moods become easier to control when you realize what causes them to happen in the first place</p>
            </section> 
            <BoostButton />
            <CreateAccount />
        </div>
        </container>
 
    );
  }
}

export default About;