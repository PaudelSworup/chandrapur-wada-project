import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type CoordinateState = {
  lattitude: number;
  longitude: number;
};

const initialState: CoordinateState = {
  lattitude: 0,
  longitude: 0,
};

export const coordinateSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    setFirstCoordinate: (
      state,
      action: PayloadAction<{
        lattitude: number;
        longitude: number;
        coordinateType: 'one' | 'two';
      }>,
    ) => {
      if (action.payload.coordinateType === 'one') {
        state.lattitude = action.payload.lattitude;
        state.longitude = action.payload.longitude;
      } else if (action.payload.coordinateType === 'two') {
        state.lattitude = action.payload.lattitude;
        state.longitude = action.payload.longitude;
      }
    },
  },
});

export const {setFirstCoordinate} = coordinateSlice.actions;
export default coordinateSlice.reducer;
