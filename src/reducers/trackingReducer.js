import { handle } from 'redux-pack';

import {FETCH_MOOD} from '../actions/index';

initialState = {
    user: null,
    badCredentials: false
}

if (localStorage.user) {
  initialState.user = JSON.parse(localStorage.user);
}

export function trackerReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_MOOD:
      return handle(state, action, {
          success: prevState => ({...prevState, moods: action.payload}),
          failure: prevState => ({...prevState, error: action.payload})
          });
    }
    
      return state;
  }
