import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  uid: string | null;
  email: string | null;
  name: string | null;
  photoURL: string | null;
};

const initialState: UserState = {
  uid: null,
  email: null,
  name: null,
  photoURL: null,
};

const authSLice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.photoURL = action.payload.photoURL;
    },
    clearUser: (state) => {
      state.uid = null;
      state.email = null;
      state.name = null;
      state.photoURL = null;
    },
  },
});

export const { setUser, clearUser } = authSLice.actions;
export default authSLice.reducer;
