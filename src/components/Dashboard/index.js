import Finances from './Finances';
import Coverage from './Coverage';
import EventCard from './EventCard';
import WellnessCard from './WellnessCard';
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
          {/* <ActionCenter /> */}
          <WellnessCard/>

          {/* <Chart /> */}
          <Coverage />
    <EventCard/>
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
