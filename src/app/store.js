import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
