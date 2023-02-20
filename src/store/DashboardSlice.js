import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
  coverage: null,
};

export const getCoverageInfo = createAsyncThunk('dashboard/getCoverageInfo', async () => {
  try {
    let token = localStorage.getItem('hr-auth-token');
    const response = await axios({
      method: 'GET',
      url: `${baseUrl}/employer/report/snapshot`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const Dashboard = createSlice({
  name: 'Dashboard',
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(getCoverageInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCoverageInfo.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.result) {
        state.coverage = action.payload.result;
      }
    });
    builder.addCase(getCoverageInfo.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default Dashboard.reducer;
