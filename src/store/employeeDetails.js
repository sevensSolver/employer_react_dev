import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
  content: [],
  dependents: [],
  bulkUpload: [],
};

export const getProfileDetails = createAsyncThunk('employDetail/getProfileDetails', async (id) => {
  let token = localStorage.getItem('hr-auth-token');
  const response = await axios.get(`${baseUrl}/employer/employee/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const employeeAddDependant = createAsyncThunk(
  'employeeDetail/addDependant',
  async ({ formData, notification, navigate, id }) => {
    let token = localStorage.getItem('hr-auth-token');
    try {
      const { data } = await axios({
        method: 'POST',
        url: `${baseUrl}/employer/employee/dependent`,
        data: formData,
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.api.responseCode === 2010) {
        navigate(`/employees/${id}`);
        notification('success', data.api.message);
      } else if (data.api.responseCode === 1130) {
        notification('success', data.api.message);
      }

      console.log(data);
    } catch (error) {
      notification('error');
      console.log(error);
    }
  },
);

export const changeProfileStatus = createAsyncThunk(
  'employees/changeProfileStatus',
  async ({ id, status, openNotificationWithIcon }) => {
    let token = localStorage.getItem('hr-auth-token');
    try {
      const response = await axios({
        method: 'PATCH',
        url: `${baseUrl}/employer/employee/${id}/status/${status}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      openNotificationWithIcon('success', response.data.message);
      return { id, status };
    } catch (error) {
      console.log(error);
    }
  },
);

export const changeDepantStatus = createAsyncThunk(
  'employeeDetail/changeDepantStatus',
  async ({ id, status, dispatch, pageId }) => {
    let token = localStorage.getItem('hr-auth-token');
    try {
      const { data } = await axios({
        method: 'PATCH',
        url: `${baseUrl}/employer/employee/dependent/${id}/status/${status}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return { id, status };
    } catch (error) {
      console.log(error);
    }
  },
);

export const deleteDepend = createAsyncThunk(
  'employees/deleteDepend',
  async ({ id, dispatch, openNotificationWithIcon }) => {
    let token = localStorage.getItem('hr-auth-token');
    try {
      const response = await axios.delete(`${baseUrl}/employer/employee/dependent/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      openNotificationWithIcon('success', response.data.message);
      return id;
    } catch (error) {
      console.log(error);
    }
  },
);

export const EmployeeDetailSlice = createSlice({
  name: 'EmployeesDetailSlice',
  initialState: initialState,
  reducers: {
    clearBulkDepentants: (state) => {
      state.bulkUpload = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(changeProfileStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeProfileStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.data = { ...state.data, status: action.payload.status };
    });
    builder.addCase(changeProfileStatus.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(changeDepantStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeDepantStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.dependents = state.dependents.map((item) =>
        item.id === action.payload.id ? { ...item, status: action.payload.status } : item,
      );
    });
    builder.addCase(changeDepantStatus.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(employeeAddDependant.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(employeeAddDependant.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload?.result;
      state.bulkUpload = action.payload?.result?.content;
    });
    builder.addCase(employeeAddDependant.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getProfileDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfileDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
      state.dependents = action.payload?.result?.dependents;
    });
    builder.addCase(getProfileDetails.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteDepend.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteDepend.fulfilled, (state, action) => {
      state.loading = false;
      state.dependents = state.dependents.filter((item) => item.id !== action.payload);
    });
    builder.addCase(deleteDepend.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { clearBulkDepentants } = EmployeeDetailSlice.actions;

export default EmployeeDetailSlice.reducer;
