import Finances from './Finances';
import Coverage from './Coverage';
import Main from '../../template';
import styles from './index.module.css';
import ActionCenter from './ActionCenter';
import PolicyUtilization from './PolicyUtilization';
import AddEmployeeButton from '../Common/UIComponents/AddEmployeeDashboard';
import Chart from './Chart';

const Index = () => {
  return (
    <Main pageName="Dashboard">
      <div className={styles.dashboardContainer}>
        <div className={styles.mainArea}>
          <ActionCenter />
          <Chart />
          <Coverage />
        </div>
        <div className={styles.rightArea}>
          <AddEmployeeButton width="100%" />
          <PolicyUtilization />
          <Finances />
        </div>
      </div>
    </Main>
  );
};

export default Index;
