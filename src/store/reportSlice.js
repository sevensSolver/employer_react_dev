import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
  content: [],
  stats: null,
  statsLoading: false,
};

export const getStats = createAsyncThunk('report/stats', async () => {
  let token = localStorage.getItem('x-auth-token');
  try {
    const response = await axios.get(`${baseUrl}/provider/report/stats`, {
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

export const ReportSlice = createSlice({
  name: 'payment',
  initialState: initialState,
  reducers: {
    resetContent: (state) => {
      state.loading = false;
      state.data = null;
      state.content = [];
    },
    addHardCodeData: (state, action) => {
      state.loading = false;
      state.content = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getStats.pending, (state) => {
      state.statsLoading = true;
    });
    builder.addCase(getStats.fulfilled, (state, action) => {
      state.statsLoading = false;
      state.stats = action.payload.result;
    });
    builder.addCase(getStats.rejected, (state) => {
      state.statsLoading = false;
    });
  },
});

export const { resetContent, addHardCodeData } = ReportSlice.actions;

export default ReportSlice.reducer;
