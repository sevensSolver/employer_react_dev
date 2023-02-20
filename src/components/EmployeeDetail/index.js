import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileSection from './ProfileSection';
import Main from '../../template';
import PlanCover from './PlanCover';
import MedicalCard from './MedicalCard';
import TopSection from './TopSection';
import DependentsSection from './DependentsSection';
import { getProfileDetails } from '../../store/employeeDetails';
import styles from './index.module.css';

import './index.css';
import BackNavigation from '../Common/UIComponents/BackNavigation';

const Index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileDetails(id));
  }, [id, dispatch]);

  const { data, dependents, loading } = useSelector((state) => state.employeeDetail);

  return (
    <Main pageName="Employees">
      <div id="employeeProfile">
        <TopSection show={dependents?.length > 0} />
        <div className={styles.employeeDetailContainer}>
          <ProfileSection state={data} loading={loading} />
          <div id="employeeDetail" className="employeeDetail">
            <DependentsSection loading={loading} dependents={dependents} />
            <PlanCover state={data} />
            <MedicalCard />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
