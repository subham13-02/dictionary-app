// reducers/wordReducer.js
import { FETCH_WORD_SUCCESS, FETCH_WORD_FAILURE } from '../actions/types';

const initialState = {
  wordData: null,
  error: null,
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORD_SUCCESS:
      return {
        ...state,
        wordData: action.payload,
        error: null,
      };
    case FETCH_WORD_FAILURE:
      return {
        ...state,
        wordData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wordReducer;
