/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import Main from '../../template';
import styles from './index.module.css';
import Summary from './summary';
import PolicyUtilization from './PolicyUtilization';
import { useDispatch, useSelector } from 'react-redux';
import { getFinanceStats, getPolicy } from '../../store/policySlice';
import CreditDebit from './CreditDebit';
import ChangeLog from './ChangeLog';
import Finance from './Finance';
import ChangeLogStats from './ChangeLogStats';
import PlanCover from './PlanCover';

const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.policy);
  useEffect(() => {
    dispatch(getPolicy());
    dispatch(getFinanceStats());
  }, [dispatch]);

  return (
    <Main pageName="Policy">
      <div className={styles.policyContainer}>
        <div className={styles.mainArea}>
          <Summary data={state?.data?.policy_date} documents={state?.data?.policy_documents} />
          <PlanCover />
          <CreditDebit state={state} />
          <ChangeLog />
        </div>
        <div className={styles.rightArea}>
          <PolicyUtilization />
          <Finance />
          <ChangeLogStats />
        </div>
      </div>
    </Main>
  );
};

export default Index;
