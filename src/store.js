import {createStore, applyMiddleware} from 'redux';
import {moodsReducer} from './reducers';

import thunk from 'redux-thunk';

export default createStore(moodsReducer, applyMiddleware(thunk));