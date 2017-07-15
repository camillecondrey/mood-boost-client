import React from 'react';
import {shallow} from 'enzyme';

import {MoodEntry} from './Mood-Entry';
// import {logIn} from '../actions/index'

describe('<MoodEntry />', () => {
    it('Renders without crashing', () => {
        shallow(<MoodEntry />);
    });

 
    
});