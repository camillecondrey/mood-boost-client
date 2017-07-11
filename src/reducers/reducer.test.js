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
        expect(state.read).toEqual([`It’s dark because you are trying too hard. 
                     Lightly child, lightly. Learn to do everything lightly. 
                     Yes, feel lightly even though you’re feeling deeply. 
                     Just lightly let things happen and lightly cope with them.
                     Lightly, lightly – it’s the best advice ever given me. There are quicksands 
                    all about you, sucking at your feet, 
                     trying to suck you down into fear and self-pity and despair. 
                     That’s why you must walk so lightly. 
                    Lightly my darling" -Aldous Huxley`, `Tips:`, `-Breathe deeply, from your diaphragm. Breathing from your chest won't relax you, 
            so picture your breath coming up from your "gut."
            Slowly repeat a calming word or phrase, 
            such as "relax" or "take it easy." Keep repeating it to yourself while breathing deeply.`,
            
                    `-Go out and do something physical. This might be to walk, or 
                    running or just try jumping up and down on the spot. It helps disperse the chemicals    
                    building up in your muscles.`,
                    `-Our mood influences our expression and vice versa: Lock yourself into a bathroom stall 
                    and grin like a maniac for about 2 minutes. It’s weird but it helps.`]);
        expect(state.watch).toEqual({
                intro: "Let yourself feel weightless",
                src: ["https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/22/7/anigif_enhanced-11392-1398165075-4.gif?downsize=715:*&output-format=auto&output-quality=auto"]
            });
        expect(state.listen).toEqual({
                youtube: "https://www.youtube.com/embed/aiTgKYqRUXc"
            });
        expect(state.nourish).toEqual(["Curb your anger with these foods that are known for lowering blood pressure and calming nerves", "oysters", "walnuts", "peanut butter", "bananas", "potatoes", "grilled cheese"]);
    });
});

