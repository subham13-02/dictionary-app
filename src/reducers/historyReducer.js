// reducers/historyReducer.js
import { ADD_TO_HISTORY } from '../actions/types';

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    default:
      return state;
  }
};

export default historyReducer;
