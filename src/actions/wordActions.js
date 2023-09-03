// actions/wordActions.js
import axios from 'axios';
import { FETCH_WORD_SUCCESS, FETCH_WORD_FAILURE } from './types';

export const fetchWord = (word) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    dispatch({
      type: FETCH_WORD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_WORD_FAILURE,
      payload: error.message,
    });
  }
};
