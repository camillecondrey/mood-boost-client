import {CREATE_ACCOUNT, ANGER} from '../actions/index';

// const initialState = {
//     moods: {
//         tranquil: {
//             read: `<p>Relaxation means releasing all concern and tension and letting the natural 
//                     order of life flow through one's being. -Donald Curtis</p>`,
//             watch: {
//                 src: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/22/7/anigif_enhanced-11392-1398165075-4.gif?downsize=715:*&output-format=auto&output-quality=auto"
//             },
//             listen: "",
//             nourish: "oysters, walnuts, kava, honey, bananas, oatmeal, nuts, dark chocolate",
//             concentrate: ""
//         },
//         romantic: {
//             read: `<p>May the ocean of your soul be reminiscent of the moon, one beautiful receding tide after another
//                     Endlessly returning inward and extending. Eternally dancing between wonder and mystery</p>`,
//             watch: "",
//             listen: "",
//             nourish: "pomegranates, oysters, figs, dark chocolate, red wine, coconut milk, goji berries",
//             concentrate: ""
//         },
//         energized: {
//             read: "",
//             watch: "",
//             listen: "",
//             nourish: "brown rice, sweet potato, honey, apples, spinach, eggs",
//             concentrate: ""
//         },
//         angry: {
//             read: "",
//             watch: {
//                 src: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/14/19/enhanced/webdr01/anigif_enhanced-buzz-12246-1421281342-9.gif?downsize=715:*&output-format=auto&output-quality=auto"
//             },
//             listen: "",
//             nourish: "kiwi, pumpkin seeds, peanuts + popcorn, hot peppers",
//             concentrate: "",
//             tips: `<p>Take several deep breaths and focus on the exhale and the inhale. Become aware 
//                     of how far you are breathing into your belly. Breath in and hold for two to three 
//                     seconds and then exhale slowly. Some people find it useful to imagine their breath as 
//                     a colour going around their body.When we are angry we shallow breathe so this technique 
//                     helps you to calm down.</p>
//                     <p>Go out and do something physical. This might be to walk, or 
//                     running or just try jumping up and down on the spot. It helps disperse the chemicals    
//                     building up in your muscles</p>`
//         },
//         blue: {
//             read: "",
//             watch: {
//                 src: "https://media1.popsugar-assets.com/files/thumbor/f3zItydIj0OlBxJWY2dto40vcis/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/01/06/783/n/1922441/c99e163a6f06d5a9_giphy/i/Zach-Galifianakis-dancing-pug.gif"
//             },
//             listen: "",
//             nourish: "oranges, papaya, fish oil, saffron, chocolate",
//             concentrate: ""
//         },
//         anxious: {
//             read: `<p>"It’s dark because you are trying too hard. 
//                     Lightly child, lightly. Learn to do everything lightly. 
//                     Yes, feel lightly even though you’re feeling deeply. 
//                     Just lightly let things happen and lightly cope with them.
//                     Lightly, lightly – it’s the best advice ever given me. There are quicksands 
//                     all about you, sucking at your feet, 
//                     trying to suck you down into fear and self-pity and despair. 
//                     That’s why you must walk so lightly. 
//                     Lightly my darling" -Aldous Huxley</p>`,
//             watch: {
//                 src: "http://www.duffthepsych.com/wp-content/uploads/2015/02/breathe-gif.gif"
//             },
//             listen: "",
//             nourish: "asparagus, avocado, blueberries, milk, almonds oranges, salmon, turkey",
//             concentrate: ""
//         }
//     }
// };

const initialState = {
    read: "",
    watch: "",
    listen: "",
    nourish: "",
    concentrate: ""
}

export const moodsReducer = (state=initialState, action) => {
	state = state || initialState;
	if (action.type === ANGER) {
		state = Object.assign({}, initialState, {
            read: action.read
            
        
        });	
	}
    

	
return state;
}

