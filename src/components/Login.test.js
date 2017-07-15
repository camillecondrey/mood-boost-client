import React from 'react';
import {shallow} from 'enzyme';

import {LogIn} from './Login';
import {logIn} from '../actions/index'

describe('<Login />', () => {
    it('Renders without crashing', () => {
        shallow(<LogIn />);
    });

    // it('dispatches toggleIngoModal when the close button is clicked', () => {
    //     const dispatch = jest.fn();
    //     const wrapper = shallow(<InfoModal dispatch={dispatch} />);
    //         wrapper.find('.close').simulate('click', {
    //             preventDefault() {}
    //         });
    //         expect(dispatch).toHaveBeenCalled();
    //         expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    // });
    
});