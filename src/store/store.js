import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './reducers/postReducer' ;// Adjust the import path as necessary

const initialState = {
  // Define your initial state here
  posts : {
    posts: [],
    loading: false,
    error: null,
  }
};

export const store = configureStore({
  reducer: {
    // Add your reducers here
    posts: postReducer, // Assuming postReducer is imported from your reducers file
  },
    preloadedState: initialState, // Set the initial state  
});