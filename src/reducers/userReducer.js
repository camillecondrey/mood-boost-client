import { handle } from 'redux-pack';

import {CREATE_ACCOUNT, LOG_IN} from '../actions/index';

initialState = {
    user: null,
    badCredentials: false
}

if (localStorage.user) {
  initialState.user = JSON.parse(localStorage.user);
}

export function userReducer(state = initialState, action) {
  switch(action.type) {
    case LOG_IN:
      return handle(state, action, {
          success: prevState => {
            localStorage.headers = "Basic "+ btoa(username+ ":" + password)
            window.location = '/boosters/id=';
              return {...prevState, user: payload, badCredentials: false}
            },
          failure: prevState => ({...prevState, badCredentials: true})
          });
    case CREATE_ACCOUNT:
    default:
      return state;
  }
}