// src/features/salons/salonsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSalonsAPI, fetchSalonByIdAPI } from '../../api/salonApi';

// createAsyncThunk handles asynchronous actions, like fetching data.
// We give it a name ('salons/fetchSalons') and an async function.
export const fetchSalons = createAsyncThunk('salons/fetchSalons', async () => {
  const response = await fetchSalonsAPI();
  return response.data; // The returned data becomes the "payload"
});

export const fetchSalonById = createAsyncThunk('salons/fetchSalonById', async (salonId) => {
  const response = await fetchSalonByIdAPI(salonId);
  return response.data;
});

const initialState = {
  items: [],
  status: 'idle', // For the list
  // New properties for the single salon view
  selectedSalon: null,
  selectedSalonStatus: 'idle', // Status for the detail page
  error: null,
};

const salonsSlice = createSlice({
  name: 'salons',
  initialState,
  reducers: {
    // Add synchronous actions here if needed later
  },
  // extraReducers handle actions defined outside the slice, like our async thunk.
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalons.pending, (state) => {
        state.status = 'loading'; // When the fetch starts, set status to loading
      })
      .addCase(fetchSalons.fulfilled, (state, action) => {
        state.status = 'succeeded'; // When the fetch succeeds...
        state.items = action.payload; // ...update the items with the fetched data
      })
      .addCase(fetchSalons.rejected, (state, action) => {
        state.status = 'failed'; // When the fetch fails...
        state.error = action.error.message; // ...store the error message
      })
      // New cases for fetching a single salon by ID
      .addCase(fetchSalonById.pending, (state) => {
        state.selectedSalonStatus = 'loading';
      })
      .addCase(fetchSalonById.fulfilled, (state, action) => {
        state.selectedSalonStatus = 'succeeded';
        state.selectedSalon = action.payload;
      })
      .addCase(fetchSalonById.rejected, (state, action) => {
        state.selectedSalonStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default salonsSlice.reducer;