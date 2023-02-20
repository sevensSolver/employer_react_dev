import { configureStore } from '@reduxjs/toolkit';
import employees from './employees';
import policy from './policySlice';
import employeeDetail from './employeeDetails';
import profile from './profileSlice';
import dashboardSlice from './DashboardSlice';
import report from './reportSlice';

export const store = configureStore({
  reducer: {
    dashboardSlice,
    profile,
    employees,
    employeeDetail,
    policy,
    report,
  },
});
