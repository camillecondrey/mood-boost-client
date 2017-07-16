import React, { Component } from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (

        <footer>
          <div className="foot">
            
              <a target="_blank" href="https://github.com/camillecondrey"><img alt="github-icon" className="icon" src="../images/GitHub-Mark-Light-32px.png"></img></a>
           
            <p className="created-by">Created by Camille Condrey</p>
            
              <a target="_blank" href="https://www.linkedin.com/in/camille-condrey-bb65568b/"><img className="icon" id="linkedin" alt="linkedin-icon" src="../images/In-White-34px-R.png"></img></a>
            
          </div>
        </footer>
    )
  }
}

export default Footer;