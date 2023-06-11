import { configureStore } from '@reduxjs/toolkit';
import vehiclesSlice from './Slices/vehiclesSlice';

const store = configureStore({
  reducer: { vehiclesSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
