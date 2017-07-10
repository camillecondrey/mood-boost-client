import {anger, ANGER} from '../actions/index';
import axios from 'axios';

describe('anger', () => {
	it('Should return the action', () => {
	
		const action = anger();
		expect(action.type).toEqual(ANGER);

	});
});