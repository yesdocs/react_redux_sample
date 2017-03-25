import { fromJS, Map, List } from 'immutable';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

/**
 *
 * REDUCERS
 *
 */

import userReducer, { initUserHandlers } from './reducers/userreducer';

/**
 *
 * APP DEFAULT STATE
 *
 */
// keep this state within a depth level of 1 
export const defaultAppState = Map({
    user: Map({
       id: '',
       name: '',
       email: '',
       address: '',
       image: '',
       bio: ''
    }),
    users : List([]),
});

/**
 *
 * COMBINE REDUCERS
 *
 */

let handlers = initUserHandlers([]);

const appstateReducer = (state = defaultAppState, action = {type: '' }) => {
    if (!Map.isMap(state))
        state = Map(state);
    let hndlr = handlers[action.type];
    if( hndlr === undefined && action.type !== '@@INIT' && action.type !== '@@redux/INIT') {
        console.log( 'Unhandled action: ' + action.type.toString());
    }
    return hndlr ? hndlr(state, action) : state;
}

export const AppReducer = appstateReducer; 

/* --------------------------------------------------------
-- All application state is placed here
-------------------------------------------------------- */
const AppStore = createStore(AppReducer, defaultAppState);

export default AppStore;