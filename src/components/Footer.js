import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (

        <footer>
          <div className="foot">
            
              <Link to="https://github.com/camillecondrey"><img src="../images/GitHub-Mark-Light-32px.png"></img></Link>
           
            <p className="created-by">Created by Camille Condrey</p>
            
              <Link to="https://www.linkedin.com/in/camille-condrey-bb65568b/"><img src="../images/In-White-34px-R.png"></img></Link>
            
          </div>
        </footer>
    )
  }
}

export default Footer;