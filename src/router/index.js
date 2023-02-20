import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import LoaderComponenet from '../components/Common/UIComponents/Loader';

const Dashboard = lazy(() => import('../components/Dashboard'));
const Employees = lazy(() => import('../components/Employees'));
const AddEmployee = lazy(() => import('../components/Employees/AddEmployee'));
const EmployeeDetail = lazy(() => import('../components/EmployeeDetail'));
const EditEmployee = lazy(() => import('../components/EmployeeDetail/EditEmployee'));
const AddEmployeeDependent = lazy(() => import('../components/EmployeeDetail/AddDependent'));
const Policy = lazy(() => import('../components/Policy'));
const Login = lazy(() => import('../components/Login'));
const ResetPassword = lazy(() => import('../components/ResetPassword'));
const Wellness = lazy(() => import('../components/Wellness'));
const Report = lazy(() => import('../components/Report'));
const Support = lazy(() => import('../components/Support'));
const Profile = lazy(() => import('../components/Profile'));
const Welcome = lazy(() => import('../components/Welcome'));
const NotFound = lazy(() => import('../components/404'));

const OperatorRequestsPending = lazy(() =>
  import('../components/Dashboard/ActionCenter/Operator/RequestsPending'),
);
const OperatorRequestsResolved = lazy(() =>
  import('../components/Dashboard/ActionCenter/Operator/RequestsResolved'),
);
const AdminRequestsPending = lazy(() =>
  import('../components/Dashboard/ActionCenter/Admin/RequestsPending'),
);
const AdminRequestsResolved = lazy(() =>
  import('../components/Dashboard/ActionCenter/Admin/RequestsResolved'),
);

const RouteSetup = () => {
  return (
    <Suspense fallback={<LoaderComponenet />}>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees"
          element={
            <PrivateRoute>
              <Employees />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/:id"
          element={
            <PrivateRoute>
              <EmployeeDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/edit/:id"
          element={
            <PrivateRoute>
              <EditEmployee />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/add"
          element={
            <PrivateRoute>
              <AddEmployee />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/add-dependent/:id"
          element={
            <PrivateRoute>
              <AddEmployeeDependent />
            </PrivateRoute>
          }
        />
        <Route
          path="/policy"
          element={
            <PrivateRoute>
              <Policy />
            </PrivateRoute>
          }
        />
        <Route
          path="/wellness"
          element={
            <PrivateRoute>
              <Wellness />
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <Report />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/operator-request/pending"
          element={
            <PrivateRoute>
              <OperatorRequestsPending />
            </PrivateRoute>
          }
        />
        <Route
          path="/operator-request/resolved"
          element={
            <PrivateRoute>
              <OperatorRequestsResolved />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-request/pending"
          element={
            <PrivateRoute>
              <AdminRequestsPending />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-request/resolved"
          element={
            <PrivateRoute>
              <AdminRequestsResolved />
            </PrivateRoute>
          }
        />
        <Route
          path="/support"
          element={
            <PrivateRoute>
              <Support />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSetup;
