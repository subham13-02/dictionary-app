

import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './historySlice'

const store = configureStore({
  reducer: {
    history: historyReducer, // Add the cart reducer to your store
    // Add other reducers as needed
  },
});

export default store;