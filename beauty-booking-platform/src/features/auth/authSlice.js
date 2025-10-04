import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Will hold user info 
  token: null, // JWT here in a real app
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // Reducers are synchronous functions that update the state.
  reducers: {
    // This action simulates a successful login.
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // This action simulates logging out.
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

// Export the actions so our components can use them
export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;