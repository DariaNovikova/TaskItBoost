import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import eventReducer from './eventReducer.jsx';

export default function initializeStore() {
    var rootReducer = combineReducers({
        events: eventReducer
    });
    return createStore(rootReducer, applyMiddleware(thunk));
}