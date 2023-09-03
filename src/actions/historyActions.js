// actions/historyActions.js
import { ADD_TO_HISTORY } from './types';

export const addToHistory = (word) => ({
  type: ADD_TO_HISTORY,
  payload: word,
});
