import { configureStore } from '@reduxjs/toolkit';

const placeholderReducer = (state = {}) => state; // Simple dummy reducer

export const store = configureStore({
  reducer: {
    placeholder: placeholderReducer,
  },
  devTools: true, // Explicitly enable DevTools
});
