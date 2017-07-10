import {moodsReducer, userReducer, trackingReducer} from '../reducers/index';
import {anger, anxious, energized, romantic, blue, tranquil} from '../actions/index';
import axios from 'axios';

describe('moodsReducer', () => {
	it('should set the intitial state when nothing is passed in', () => {
		const state = moodsReducer(undefined, {type: 'unknown'});
	});

	it('should return the current state on an unknown action', () => {
		let currentState = {}
		const state = moodsReducer(currentState, {type: 'unknown'});
		expect(state).toBe(currentState);
	});
});	

describe('anger', () => {
    it('Should enter anger mood', () => {
        let state = {
            read: "",
            watch: '',
            listen: "",
            nourish: "" 
        };
        state = moodsReducer(state, anger());
        expect(state.read).toEqual(`Breathe deeply, from your diaphragm. Breathing from your chest won't relax you, 
            so picture your breath coming up from your "gut."
            Slowly repeat a calming word or phrase, 
            such as "relax" or "take it easy." Keep repeating it to yourself while breathing deeply.
            
                    Go out and do something physical. This might be to walk, or 
                    running or just try jumping up and down on the spot. It helps disperse the chemicals    
                    building up in your muscles.
                    Our mood influences our expression and vice versa: Lock yourself into a bathroom stall 
                    and grin like a maniac for about 2 minutes. It’s weird but it helps.`);
        expect(state.watch).toEqual({
                intro: "Let yourself feel weightless",
                src: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/22/7/anigif_enhanced-11392-1398165075-4.gif?downsize=715:*&output-format=auto&output-quality=auto"
            });
        expect(state.listen).toEqual({
                youtube: "https://www.youtube.com/embed/aiTgKYqRUXc"
            });
        expect(state.nourish).toEqual(["oysters", "walnuts", "peanut butter", "bananas", "potatoes", "grilled cheese"]);
    });
});

// describe('makeGuess', () => {
//     it('Should make a guess', () => {
//         let state = {
//             guesses: [],
//             feedback: '',
//             correctAnswer: 100 
//         };

//         state = reducer(state, makeGuess(25));
//         expect(state.guesses).toEqual([25]);
//         expect(state.feedback).toEqual('You\'re Ice Cold...');

//         state = reducer(state, makeGuess(60));
//         expect(state.guesses).toEqual([25, 60]);
//         expect(state.feedback).toEqual('You\'re Cold...');

//         state = reducer(state, makeGuess(80));
//         expect(state.guesses).toEqual([25, 60, 80]);
//         expect(state.feedback).toEqual('You\'re Warm');

//         state = reducer(state, makeGuess(95));
//         expect(state.guesses).toEqual([25, 60, 80, 95]);
//         expect(state.feedback).toEqual('You\'re Hot!');

//         state = reducer(state, makeGuess(100));
//         expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
//         expect(state.feedback).toEqual('You got it!');
//     });
// });

// describe('toggleInfoModal', () => {
//     it('Should toggle info modal on', () => {
//         let state = {
//             showInfoModal: false
//         };
//         state = reducer(state, toggleInfoModal());
//         expect(state.showInfoModal).toEqual(true);
//     });

//     it('Should toggle info modal off', () => {
//         let state = {
//             showInfoModal: true
//         };
//         state = reducer(state, toggleInfoModal());
//         expect(state.showInfoModal).toEqual(false);
//     });

