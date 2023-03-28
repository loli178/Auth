import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../modalSlice';
import authSlice from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authSlice.reducer,
  },
});
export default store;
