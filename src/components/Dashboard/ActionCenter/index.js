import { Pagination } from 'antd';
import UsePagination from '../../Common/UsePagination';
import styles from '../index.module.css';

import AdminCenter from './Admin';
import OperatorCenter from './Operator';

const AntTable = () => {
  let { role } = JSON.parse(localStorage.getItem('hrUser'));

  return (
    <div className={styles.actionCenter}>
      {role === 'Operator' ? <OperatorCenter /> : <AdminCenter />}
      <div
        className="pagination-demo"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 10,
        }}
      >
        <div
          style={{
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Pagination pageSize={6} size="small" total={18} />
        </div>
      </div>
    </div>
  );
};
export default AntTable;
