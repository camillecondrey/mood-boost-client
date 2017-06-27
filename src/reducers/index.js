import {CREATE_ACCOUNT, ENERGETIC, ANGER, ANXIOUS, TRANQUIL, 
    TOGGLE_TRANSITION_MODAL, BLUE, ROMANTIC, RECORD_MOOD, LOG_IN, FETCH_MOOD, TOGGLE_READ_MODAL, TOGGLE_WATCH_MODAL, TOGGLE_LISTEN_MODAL,
TOGGLE_NOURISH_MODAL} from '../actions/index';
import {handle} from 'redux-pack';

const initialState = {
    read: "",
    watch: "",
    listen: "",
    nourish: "",
    showInfoModal: false
}

export const moodsReducer = (state=initialState, action) => {
	state = state || initialState;
	if (action.type === ANGER) {
		state = Object.assign({}, initialState, {
            read: `Take several deep breaths and focus on the exhale and the inhale. Become aware 
                    of how far you are breathing into your belly. Breath in and hold for two to three 
                     seconds and then exhale slowly. Some people find it useful to imagine their breath as 
                    a color going around their body.
                    Go out and do something physical. This might be to walk, or 
                    running or just try jumping up and down on the spot. It helps disperse the chemicals    
                    building up in your muscles`,
            watch: {
                intro: "Let yourself feel weightless",
                src: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/22/7/anigif_enhanced-11392-1398165075-4.gif?downsize=715:*&output-format=auto&output-quality=auto"
            },
            listen: {
                youtube: "https://www.youtube.com/embed/aiTgKYqRUXc"
            },
            nourish: ["oysters", "walnuts", "peanut butter", "bananas", "potatoes", "grilled cheese"]
        });	
	}

    else if (action.type === ANXIOUS) {
        state = Object.assign({}, initialState, {
            read: `It’s dark because you are trying too hard. 
                     Lightly child, lightly. Learn to do everything lightly. 
                     Yes, feel lightly even though you’re feeling deeply. 
                     Just lightly let things happen and lightly cope with them.
                     Lightly, lightly – it’s the best advice ever given me. There are quicksands 
                    all about you, sucking at your feet, 
                     trying to suck you down into fear and self-pity and despair. 
                     That’s why you must walk so lightly. 
                    Lightly my darling" -Aldous Huxley`,
            watch: {
                intro: "Breathe along to this. Nice and slow.",
                 src: "http://www.duffthepsych.com/wp-content/uploads/2015/02/breathe-gif.gif"
            },
            listen: {
                youtube: "https://www.youtube.com/embed/aiTgKYqRUXc"
            },
            nourish: ["asparagus", "avocado", "blueberries", "milk", "oranges", "salmon"]

        })
    } 

    else if (action.type === TRANQUIL) {
        state = Object.assign({}, initialState, {
            read: `<p>Relaxation means releasing all concern and tension and letting the natural 
                    order of life flow through one's being. -Donald Curtis</p>`,
            watch: {
                intro: "Let yourself feel weightless",
                src: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/22/7/anigif_enhanced-11392-1398165075-4.gif?downsize=715:*&output-format=auto&output-quality=auto"
            },
            listen: {
                spotify: "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX3PIPIT6lEg5"
            },
            nourish: ["walnuts", "kava", "honey", "bananas", "oatmeal", "dark chocolate"]
        })
    }   

     else if (action.type === BLUE) {
        state = Object.assign({}, initialState, {
            read: `<p>Relaxation means releasing all concern and tension and letting the natural 
                    order of life flow through one's being. -Donald Curtis</p>`,
            watch: {
                
                src: "https://media1.popsugar-assets.com/files/thumbor/f3zItydIj0OlBxJWY2dto40vcis/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/01/06/783/n/1922441/c99e163a6f06d5a9_giphy/i/Zach-Galifianakis-dancing-pug.gif"
            },
            listen: {
                spotify: "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX3PIPIT6lEg5" 
            },
            nourish: ["oranges", "papaya", "fish oil", "saffron", "chocolate", "popcorn"]
        })
    } 

      else if (action.type === ROMANTIC) {
        state = Object.assign({}, initialState, {
            read: `May the ocean of your soul be reminiscent of the moon, one beautiful receding tide after another
                   Endlessly returning inward and extending. Eternally dancing between wonder and mystery`,
            watch: {
                src: "https://media1.popsugar-assets.com/files/thumbor/f3zItydIj0OlBxJWY2dto40vcis/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/01/06/783/n/1922441/c99e163a6f06d5a9_giphy/i/Zach-Galifianakis-dancing-pug.gif"
            },
            listen: {
                spotify: "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX3PIPIT6lEg5"},
            nourish: ["pomegranates", "oysters", "figs", "dark chocolate", "red wine", "coconut milk"]
        })
    } 

       else if (action.type === ENERGETIC) {
        state = Object.assign({}, initialState, {
            read: `May the ocean of your soul be reminiscent of the moon, one beautiful receding tide after another
                   Endlessly returning inward and extending. Eternally dancing between wonder and mystery`,
            watch: {
                intro: "Stretching is a rejuvinating activity that can increase you renergy levels. Follow this simple stretch which releases muscle tension to give your mood the energy boost it needs.",
                src: 
                     ["http://www.prevention.com/sites/prevention.com/files/styles/article_main_image_2200px/public/hippie-chris-philpot.gif?itok=2HHBC-0B",
                     "http://www.prevention.com/sites/prevention.com/files/styles/article_main_image_2200px/public/kneedrop-chris-philpot.gif?itok=feghiBCd",
                     "http://www.prevention.com/sites/prevention.com/files/styles/article_main_image_2200px/public/yo-yo-chris-philpot.gif?itok=uuxaeIKP"]
            },
            listen: "",
            nourish: ["brown rice", "sweet potato", "honey", "apples", "spinach", "eggs"]
        })
    } 

    else if (action.type === RECORD_MOOD) {
        return state;
    }

    else if (action.type === TOGGLE_TRANSITION_MODAL) {
         state = Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
        return state;
    }

    else if (action.type === TOGGLE_READ_MODAL) {
        state = Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        });
        return state;
    }

    else if (action.type === TOGGLE_WATCH_MODAL) {
        state = Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        });
        return state;
    }

     else if (action.type === TOGGLE_LISTEN_MODAL) {
        state = Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        });
        return state;
    }

     else if (action.type === TOGGLE_NOURISH_MODAL) {
        state = Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        });
        return state;
    }

return state;
}

