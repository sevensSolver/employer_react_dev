import styles from './index.module.css';
import group from '../../img/user-group.png';

const ChangeLogStats = () => {
  return (
    <div className={styles.financeBox}>
      <h3
        style={{
          color: '#404040',
          fontSize: 14,
          height: 18,
        }}
      >
        Change Log
      </h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: 10 }}>
          <div
            style={{ height: 40, width: 40, backgroundColor: '#f86a30' }}
            className={styles.iconBackgroundBg}
          >
            <img src={group} alt="avatar" style={{ height: 20 }} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <p style={{ fontSize: 12, marginBottom: 3, color: '#d4d4d4' }}>Activation Rate</p>
          <p
            style={{
              fontWeight: 500,
              marginBottom: 0,
              color: 'black',
              fontSize: 18,
            }}
          >
            36%
            {/* {financeStats?.currency} {financeStats?.total_amount_credited} */}
          </p>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <p style={{ fontSize: 12, marginBottom: 3, color: '#d4d4d4' }}>Employees</p>
          <p
            style={{
              fontWeight: 500,
              marginBottom: 0,
              color: 'black',
              fontSize: 18,
            }}
          >
            6000
            {/* {financeStats?.currency} {financeStats?.total_amount_credited} */}
          </p>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <p style={{ fontSize: 12, marginBottom: 3, color: '#d4d4d4' }}>Dependents</p>
          <p
            style={{
              fontWeight: 500,
              marginBottom: 0,
              color: 'black',
              fontSize: 18,
            }}
          >
            14000
            {/* {financeStats?.currency} {financeStats?.total_amount_credited} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChangeLogStats;
