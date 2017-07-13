import {ENERGETIC, ANGER, ANXIOUS, TRANQUIL, 
    TOGGLE_TRANSITION_MODAL, BLUE, ROMANTIC, TOGGLE_READ_MODAL, TOGGLE_WATCH_MODAL, TOGGLE_LISTEN_MODAL,
TOGGLE_NOURISH_MODAL} from '../actions/index';
// import {handle} from 'redux-pack';

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
            read: [`It’s dark because you are trying too hard. 
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
                    and grin like a maniac for about 2 minutes. It’s weird but it helps.`],
            watch: {
                intro: "Let yourself feel weightless",
                src: ["https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/22/7/anigif_enhanced-11392-1398165075-4.gif?downsize=715:*&output-format=auto&output-quality=auto"]
            },
            listen: {
                youtube: "https://www.youtube.com/embed/aiTgKYqRUXc"
            },
            nourish: ["Curb your anger with these foods that are known for lowering blood pressure and calming nerves", "oysters", "walnuts", "peanut butter", "bananas", "potatoes", "grilled cheese"]
        });	
	}

    else if (action.type === ANXIOUS) {
        state = Object.assign({}, initialState, {
            read: [`It’s dark because you are trying too hard. 
                     Lightly child, lightly. Learn to do everything lightly. 
                     Yes, feel lightly even though you’re feeling deeply. 
                     Just lightly let things happen and lightly cope with them.
                     Lightly, lightly – it’s the best advice ever given me. There are quicksands 
                    all about you, sucking at your feet, 
                     trying to suck you down into fear and self-pity and despair. 
                     That’s why you must walk so lightly. 
                    Lightly my darling" -Aldous Huxley`, "Tips:", 
                    `1) Exhale completely through your mouth, making a whoosh sound.`,
                    `2) Close your mouth and inhale quietly through your nose to a mental count of four.`,
                    `3) Hold your breath for a count of seven.`,
                    `4) Exhale completely through your mouth, making a whoosh sound to a count of eight.`,
                    `5) This is one breath. Now inhale again and repeat the cycle three more times for a total of four breaths.`],
            watch: {
                intro: "Breathe along to this. Nice and slow.",
                 src: ["http://www.duffthepsych.com/wp-content/uploads/2015/02/breathe-gif.gif"]
            },
            listen: {
                youtube: "https://www.youtube.com/embed/aiTgKYqRUXc"
            },
            nourish: ["These super foods are great at reducing stress and anxiety", "asparagus", "avocado", "blueberries", "milk", "oranges", "salmon"]

        })
    } 

    else if (action.type === TRANQUIL) {
        state = Object.assign({}, initialState, {
            read: [`Relaxation means releasing all concern and tension and letting the natural 
                    order of life flow through one's being. -Donald Curtis`, 'Tips:', `Stare up at the ceiling and count down from 60. 
                    Gazing upward stimulates the parasympathetic nervous system, 
                    which lowers blood pressure and slows the pace of the breath. 
                    Slow, deliberate counting will also help rid your mind of distractions.`, `1) Exhale completely through your mouth, making a whoosh sound.`,
                    `2) Close your mouth and inhale quietly through your nose to a mental count of four.`,
                    `3) Hold your breath for a count of seven.`,
                    `4) Exhale completely through your mouth, making a whoosh sound to a count of eight.`,
                    `5) This is one breath. Now inhale again and repeat the cycle three more times for a total of four breaths.`],
            watch: {
                intro: "Let yourself feel weightless",
                src: ["https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/22/7/anigif_enhanced-11392-1398165075-4.gif?downsize=715:*&output-format=auto&output-quality=auto"]
            },
            listen: {
                spotify: "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX3PIPIT6lEg5"
            },
            nourish: ["Take the edge off and mellow out with these superfoods that are known for calming the mind and body", "walnuts", "kava", "honey", "bananas", "oatmeal", "dark chocolate"]
        })
    }   

     else if (action.type === BLUE) {
        state = Object.assign({}, initialState, {
            read: [`Relaxation means releasing all concern and tension and letting the natural 
                    order of life flow through one's being. -Donald Curtis`, "Tips:",
                    `Meditation is a great practice for controlling your moods and helping you relax your mind. Over-thinking 
                    can cause depression, anxiety and panic attacks! 
                    Relieve yourself of every bad thought that is consuming your brain. Just let it all go, relax and 
                    connect with your own being.`, `Take a minute to think about everything you're grateful for. Its easy to be 
                    consumed by the things that make us sad, but taking time to focus on the things that make us happy will help us reach
                    a much better mood`, ],
            watch: {
                
                src: ["https://media1.popsugar-assets.com/files/thumbor/f3zItydIj0OlBxJWY2dto40vcis/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/01/06/783/n/1922441/c99e163a6f06d5a9_giphy/i/Zach-Galifianakis-dancing-pug.gif"]
            },
            listen: {
                spotify: "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX3PIPIT6lEg5" 
            },
            nourish: ["Don't eat your emotions, FEED your emotions! These seratonin boosting foods are sure to put a smile on your face", "oranges", "papaya", "fish oil", "saffron", "chocolate", "popcorn"]
        })
    } 

      else if (action.type === ROMANTIC) {
        state = Object.assign({}, initialState, {
            read: [`May the ocean of your soul be reminiscent of the moon, one beautiful receding tide after another
                   Endlessly returning inward and extending. Eternally dancing between wonder and mystery`, `Light some candles. Curl up
                   with your favorite book. Treat yourself. Sexy is a state of mind, so do whatever it is that gets your mind
                   right`],
            watch: {
                src: ["https://media1.popsugar-assets.com/files/thumbor/f3zItydIj0OlBxJWY2dto40vcis/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/01/06/783/n/1922441/c99e163a6f06d5a9_giphy/i/Zach-Galifianakis-dancing-pug.gif"]
            },
            listen: {
                spotify: "https://open.spotify.com/embed/user/22urzmjuruiey3c6wumr2pg3y/playlist/2ZKKnn5kMAJv03VOUwGdGT"},
            nourish: ["These foods are known for boosting the libido. Getting in the mood is as easy as a stop at the grocery store", "pomegranates", "oysters", "red wine", "dark chocolate", "figs", "coconut milk"]
        })
    } 
       else if (action.type === ENERGETIC) {
        state = Object.assign({}, initialState, {
            read: [`"Engery cannot be created or destroyed, it can only be changed from one form to another." - Albert Enstein`, `Tips to change low energy to high energy:`, `See Red! Seeing the fiery color makes your muscles move faster and work harder, 
            giving you a burst of energy when you need it most, according to University of Rochester research.`, 
            `Have a laugh! A good laugh raises your blood pressure and boosts heart rate, too, which can pump you 
            up when you’re feeling sluggish, says Robert R. Provine, PhD, author of Laughter.`, `Get moving! Stretching is 
            a great way to wake up the body and mind. See the 'Watch' transitioner for demonstrations on some of the most effective
            energy boosting exercises`],
            watch: {
                intro: "Stretching is a rejuvinating activity that can increase your energy levels. Follow this simple stretch which releases muscle tension to give your mood an energy boost.",
                src: 
                     ["http://www.prevention.com/sites/prevention.com/files/styles/article_main_image_2200px/public/hippie-chris-philpot.gif?itok=2HHBC-0B",
                     "http://www.prevention.com/sites/prevention.com/files/styles/article_main_image_2200px/public/kneedrop-chris-philpot.gif?itok=feghiBCd",
                     "http://www.prevention.com/sites/prevention.com/files/styles/article_main_image_2200px/public/yo-yo-chris-philpot.gif?itok=uuxaeIKP"]
            },
            listen: "",
            nourish: ["To give your mood a boost of energy, put down the coffee and try these foods that naturally increase energy levels:",
            "brown rice", "sweet potato", "honey", "apples", "spinach", "eggs"]
        })
    } 

   

    else if (action.type === TOGGLE_TRANSITION_MODAL) {
         state = Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
        return state;
    }

    else if (action.type === TOGGLE_READ_MODAL) {
        state = Object.assign({}, state, {
            showReadModal: !state.showReadModal
        });
        return state;
    }

    else if (action.type === TOGGLE_WATCH_MODAL) {
        state = Object.assign({}, state, {
            showWatchModal: !state.showWatchModal
        });
        return state;
    }

     else if (action.type === TOGGLE_LISTEN_MODAL) {
        state = Object.assign({}, state, {
            showListenModal: !state.showListenModal
        });
        return state;
    }

     else if (action.type === TOGGLE_NOURISH_MODAL) {
        state = Object.assign({}, state, {
            showNourishModal: !state.showNourishModal
        });
        return state;
    }

return state;
}

