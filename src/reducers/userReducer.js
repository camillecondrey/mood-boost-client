import { handle } from 'redux-pack';

import {CREATE_ACCOUNT, LOG_IN, LOG_OUT} from '../actions/index';

let initialState = {
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
            localStorage.headers = "Basic "+ btoa(action.meta.username+ ":" + action.meta.password)
           
              return {...prevState, user: action.payload, badCredentials: false}
            },
          failure: prevState => ({...prevState, badCredentials: true})
        });
    case LOG_OUT:
      delete localStorage.headers
      return {...state, user: null}
      
    case CREATE_ACCOUNT: 
      return handle(state, action, {
          success: prevState => {
            localStorage.headers = "Basic "+ btoa(action.meta.username+ ":" + action.meta.password)
           
              return {...prevState, user: action.payload, badCredentials: false}
            },
          failure: prevState => ({...prevState, badCredentials: true})
        });
    
    default:
      return state;
  }
} 