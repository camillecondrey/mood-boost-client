import {anger, ANGER} from '../actions/index';

describe('anger', () => {
	it('Should return the action', () => {
	
		const action = anger();
		expect(action.type).toEqual(ANGER);

	});
});