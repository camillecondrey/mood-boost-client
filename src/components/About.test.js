import React from 'react';
import {shallow} from 'enzyme';

import {About} from './About';
// import {logIn} from '../actions/index'

describe('<About />', () => {
    it('Renders without crashing', () => {
        shallow(<About />);
    });
});