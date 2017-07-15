import { handle } from 'redux-pack';

import {FETCH_MOOD, RECORD_MOOD} from '../actions/index';

let initialState = {
    description: "testing",
    date: "testing",
    cause: "testing",
    duration: "testing",
    moods: null
    // badCredentials: false
}

if (localStorage.user) {
  initialState.user = JSON.parse(localStorage.user);
}

export function trackingReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_MOOD:
      return handle(state, action, {
          success: prevState => ({...prevState, moods: action.payload.data}),
          failure: prevState => ({...prevState, error: action.payload.data})
        });
      case RECORD_MOOD:
        return handle(state, action, {
          
          success: prevState => ({...prevState, mood: action.payload}),
          failure: prevState => ({...prevState, error: action.payload})
        });
    
      default:
      return state
    }
    
  }
  
