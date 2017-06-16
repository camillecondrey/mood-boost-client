import React, { Component } from 'react';
import StepInto from './Step-Into';
import StepOutOf from './Step-Out-Of';

import {connect} from 'react-redux';
import NavBoosters from './Nav-Boosters';


export class Boosters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStepOutOf: true
        };
    }

    // displayStepIn(event) {
    //     event.preventDefault();
    //     if (this.props.displayStepIn) {
    //         this.props.displayStepIn();
    //     }
    //     this.props.dispatch(stepIn());
    // }

    // displayStepOut(event) {
    //     event.preventDefault();
    //     if (this.props.displayStepOut) {
    //         this.props.displayStepOut();
    //     }
    //     this.props.dispatch(stepOut());
    // }

    render() {
        return (
            <container>
                <NavBoosters />
                <h1>Mood Boosters</h1>
                    <div>
                     <h2>Step Out of</h2>
                     <StepOutOf />
                     <h2>Step Into</h2>
                     <StepInto />
                    </div>
            </container>
        )
    }
}

export default connect()(Boosters);