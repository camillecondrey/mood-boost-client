import {createStore, applyMiddleware, combineReducers} from 'redux';
import {moodsReducer} from './reducers';
import {userReducer} from './reducers/userReducer';
import {trackingReducer} from './reducers/trackingReducer';
import {middleware as reduxPackMiddleware} from 'redux-pack';

import thunk from 'redux-thunk';

export default createStore(combineReducers({
    moodsReducer, userReducer, trackingReducer
}), applyMiddleware(thunk, reduxPackMiddleware));