import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  uid: string | null;
  email: string | null;
};

const initialState: UserState = {
  uid: null,
  email: null,
};

const authSLice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.uid = null;
      state.email = null;
    },
  },
});

export const { setUser, clearUser } = authSLice.actions;
export default authSLice.reducer;
