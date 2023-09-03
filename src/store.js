// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import wordReducer from './reducers/wordReducer';
import historyReducer from './reducers/historyReducer';

const rootReducer = combineReducers({
  word: wordReducer,
  history: historyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
