import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';
import axios from 'axios';

const initialState = {
  loading: false,
  data: {
    content: [],
  },
  bulkUpload: [],
  searchResult: null,
};

export const getAllEmployees = createAsyncThunk('empl/all', async (args) => {
  try {
    let token = localStorage.getItem('hr-auth-token');
    const response = await axios.get(
      `${baseUrl}/employer/employee/list?page=${args.page}&size=${args.size}&sort=createdTimestamp,desc`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getEmployeesWithFilter = createAsyncThunk('employees/withFilter', async (args) => {
  let token = localStorage.getItem('hr-auth-token');
  let url =
    args.filter === 'All'
      ? `${baseUrl}/employer/employee/list?page=${args.page}&size=${args.size}&sort=createdTimestamp,desc`
      : `${baseUrl}/employer/employee/list?page=${args.page}&size=${args.size}&sort=createdTimestamp,desc&status=${args.filter}`;
  try {
    const response = await axios.get(url, {
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

export const getEmployeesWithPolicyType = createAsyncThunk(
  'employees/getEmployeesWithPolicyType',
  async (args) => {
    let token = localStorage.getItem('hr-auth-token');

    let url =
      args.filter === 'All'
        ? `${baseUrl}/employer/employee/list?page=${args.page}&size=${args.size}&sort=createdTimestamp,desc&policyType=${args.policyType}`
        : `${baseUrl}/employer/employee/list?page=${args.page}&size=${args.size}&sort=createdTimestamp,desc&status=${args.filter}&policyType=${args.policyType}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addNewEmployee = createAsyncThunk(
  'employee/addNew',
  async ({ values, notification, navigate }) => {
    let token = localStorage.getItem('hr-auth-token');
    try {
      const { data } = await axios.post(`${baseUrl}/employer/employee`, values, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.api.responseCode === 2010) {
        notification('success', data.message);
        navigate('/employees');
        return data;
      } else if (data.api.responseCode === 3530) {
        notification('error', data.message);
        return data;
      }
    } catch (error) {
      notification('error');
      console.log(error);
    }
  },
);

export const employeesBulkUpload = createAsyncThunk(
  'add/bulkUpload',
  async ({ form, notification, navaigate }) => {
    let token = localStorage.getItem('hr-auth-token');
    try {
      const { data } = await axios({
        method: 'POST',
        url: `${baseUrl}/employer/employee/template-upload`,
        data: form,
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      if (data.api.responseCode === 2010) {
        notification(
          'success',
          'New records added',
          `${data.result?.records_added} employees have been added while ${data.result?.num_of_duplicates} employees found to be already invited.`,
        );
        return data;
      } else if (data.api.responseCode === 3530) {
        notification(
          'error',
          'All employees are already added',
          'All the employees are already added in the record. Try adding new employee?',
        );
        return data;
      }
    } catch (error) {
      notification(
        'error',
        'Wrong file format',
        'Wrong file format, Please download the sample excel template.',
      );
      throw error;
    }
  },
);

export const deleteEmployee = createAsyncThunk(
  'employees/delete',
  async ({ id, dispatch, openNotificationWithIcon }) => {
    let token = localStorage.getItem('hr-auth-token');
    try {
      const response = await axios.delete(`${baseUrl}/employer/employee/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      openNotificationWithIcon('success', response.data.message);
      dispatch(getAllEmployees({ page: 0, size: 6 }));
    } catch (error) {
      console.log(error);
    }
  },
);

export const changeEmployeeStatus = createAsyncThunk(
  'employees/employeeChangeStatus',
  async ({ id, status, openNotificationWithIcon, table }) => {
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
      return { id, status, table };
    } catch (error) {
      console.log(error);
    }
  },
);

export const groupStatusChange = createAsyncThunk(
  'employees/groupStatusChange',
  async ({ id: ids, status, openNotificationWithIcon, table }) => {
    let token = localStorage.getItem('hr-auth-token');
    try {
      const response = await axios({
        method: 'PATCH',
        url: `${baseUrl}/employer/employee/group-status`,
        data: { employee_id: ids, status },
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      openNotificationWithIcon('success', response.data.message);
      console.log('response', response);
      return { ids, status, table };
    } catch (error) {
      console.log(error);
    }
  },
);

export const groupDeleteEmployee = createAsyncThunk(
  'employees/groupDeleteEmployee',
  async ({ ids, dispatch, openNotificationWithIcon }) => {
    let token = localStorage.getItem('hr-auth-token');
    console.log(ids);
    try {
      const response = await axios.delete(`${baseUrl}/employer/employee/group-delete`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify({ employee_id: ids }),
      });
      openNotificationWithIcon('success', response.data.message);
      dispatch(getAllEmployees({ page: 0, size: 6 }));
    } catch (error) {
      console.log(error);
    }
  },
);

export const employeeSearch = createAsyncThunk('employees/employeeSearch', async (e) => {
  let token = localStorage.getItem('hr-auth-token');
  try {
    const { data } = await axios({
      method: 'GET',
      url: `${baseUrl}/employer/employee/search?query=${e}`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const EmployeesSlice = createSlice({
  name: 'EmployeesSlice',
  initialState: initialState,
  reducers: {
    clearBulkData: (state) => {
      state.bulkUpload = [];
    },
    clearSearchResult: (state) => {
      state.searchResult = null;
    },
  },
  extraReducers(builder) {
    //getAllEmployees
    builder.addCase(getAllEmployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.result) {
        state.data = action.payload.result;
      } else {
        state.data = initialState.data;
      }
    });
    builder.addCase(getAllEmployees.rejected, (state) => {
      state.loading = false;
    });
    //changeEmployeeStatus
    builder.addCase(changeEmployeeStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeEmployeeStatus.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.table === 'All') {
        state.data.content = state.data.content.map((item) =>
          item.id === action.payload.id ? { ...item, status: action.payload.status } : item,
        );
      } else if (action.payload.table === 'Inactive') {
        //If status change is from inactive, delete employee from inactive and add it to All employee
        state.data.content = state.data.content.filter((item) => item.id !== action.payload.id);
        state.data.property.total_elements = state.data.property.total_elements - 1;
      }
    });
    builder.addCase(changeEmployeeStatus.rejected, (state) => {
      state.loading = false;
    });
    //groupStatusChange
    builder.addCase(groupStatusChange.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(groupStatusChange.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.table === 'All') {
        state.data.content = state.data.content.map((item) => {
          if (action.payload.ids.includes(item.id)) {
            item.status = action.payload.status;
          }
          return item;
        });
      } else if (action.payload.table === 'Inactive') {
        state.data.content = state.data.content.filter((item) => {
          return !action.payload.ids.includes(item.id);
        });
        state.data.property.total_elements =
          state.data.property.total_elements - action.payload?.ids?.length;
      }
    });
    builder.addCase(groupStatusChange.rejected, (state) => {
      state.loading = false;
    });

    //employeeSearch
    builder.addCase(employeeSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(employeeSearch.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.result) {
        state.data = action.payload.result;
      } else {
        state.data = initialState.data;
      }
    });
    builder.addCase(employeeSearch.rejected, (state) => {
      state.loading = false;
    });
    //addNewEmployee
    builder.addCase(addNewEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNewEmployee.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addNewEmployee.rejected, (state) => {
      state.loading = false;
    });
    //getEmployeesWithFilter
    builder.addCase(getEmployeesWithFilter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEmployeesWithFilter.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.result) {
        state.data = action.payload.result;
      } else {
        state.data = initialState.data;
      }
    });
    builder.addCase(getEmployeesWithFilter.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getEmployeesWithPolicyType.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEmployeesWithPolicyType.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.result) {
        state.data = action.payload.result;
      } else {
        state.data = initialState.data;
      }
    });
    builder.addCase(getEmployeesWithPolicyType.rejected, (state) => {
      state.loading = false;
    });

    //employeesBulkUpload
    builder.addCase(employeesBulkUpload.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(employeesBulkUpload.fulfilled, (state, action) => {
      state.loading = false;
      state.bulkUpload = action.payload.result?.content;
    });
    builder.addCase(employeesBulkUpload.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { clearSearchResult } = EmployeesSlice.actions;
export const { clearBulkData } = EmployeesSlice.actions;

export default EmployeesSlice.reducer;
