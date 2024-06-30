import { createSlice } from '@reduxjs/toolkit';




 export const userSlice = createSlice({
  name: 'user', // Name of the slice (used for action creators and selectors)
  initialState:{
    user: null,
  },
  reducers: {
    login:(state,action) => {
      state.user += action.payload; // Increment the counter
    },
    logout : (state)=>{
      state.user += null;

    },
  },
});

export const { login, logout} = userSlice.actions; // Export actions





export const selectUser = state => state.user.user;
export default userSlice.reducer;