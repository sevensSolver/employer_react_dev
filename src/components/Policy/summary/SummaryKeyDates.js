import styles from '../index.module.css';
import calendar from '../../../img/calendar.png';
import { Divider } from 'antd';

const SummaryKeyDates = ({ data }) => {
  return (
    <div
      className={styles.summaryBox}
      style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
    >
      <p className={styles.summaryBoxTitle}>Key Dates</p>
      <div className={styles.iconBackground}>
        <img src={calendar} alt="avatar" style={{ height: 23 }} />
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <p className={styles.policyDate}>Policy start Date</p>
          <p className={styles.policyDate}>{data?.start_date} 10/12/2022</p>
        </div>
        <Divider />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <p className={styles.policyDate}>Policy end Date</p>
          <p className={styles.policyDate}>
            {data?.end_date}
            10/12/2022
          </p>
        </div>
        <Divider />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <p className={styles.policyDate}>Policy renewal Date</p>
          <p className={styles.policyDate}>
            {data?.renewal_date}
            10/12/2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryKeyDates;
