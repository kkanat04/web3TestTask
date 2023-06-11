import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { data, Data, Vehicle } from '../../../vehicles';

interface initialStateType {
  allVehicle: Data;
  selectedVehicle: Vehicle | null;
  selectedVehicle2: Vehicle | null;
}

const initialState: initialStateType = { selectedVehicle: null, allVehicle: data, selectedVehicle2: null };

const vehiclesSlice = createSlice({
  name: 'vehiclesSlice',
  initialState,
  reducers: {
    SET_SELECTED_VEHICLE(state, action: PayloadAction<Vehicle | null>) {
      state.selectedVehicle = action.payload;
    },
    SET_SELECTED_VEHICLE2(state, action: PayloadAction<Vehicle | null>) {
      state.selectedVehicle2 = action.payload;
    },
  },
});

export const { SET_SELECTED_VEHICLE, SET_SELECTED_VEHICLE2 } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
