import { createSlice } from '@reduxjs/toolkit';

// On App Load: Check localStorage 
const storedUserData = localStorage.getItem('glamourbook-user');
const user = storedUserData ? JSON.parse(storedUserData) : null;

// Define the initial state based on whether we found a user in localStorage.
const initialState = {
  user: user ? user.user : null,
  token: user ? user.token : null,
  isAuthenticated: !!user, // '!!' converts the user object (or null) to a true boolean
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      
      // On Login: Save to localStorage 
      localStorage.setItem('glamourbook-user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      
      // On Logout: Remove from localStorage 
      localStorage.removeItem('glamourbook-user');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;