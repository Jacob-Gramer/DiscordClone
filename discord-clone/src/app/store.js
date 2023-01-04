import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
    counter: userReducer,
    app: appReducer
  },
});
