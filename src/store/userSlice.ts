import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type userSlice = {
  name: string;
  token: string;
  email: string;
  id: number;
};

const initialState: userSlice = {
  id: 0,
  name: '',
  token: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        token: string;
        email: string;
      }>,
    ) => {
      //   if (action.payload.coordinateType === 'one') {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.email = action.payload.email;
      //   } else if (action.payload.coordinateType === 'two') {
    },
  },
});

export const {setUsers} = userSlice.actions;
export default userSlice.reducer;
