import React from 'react';
import styles from '../index.module.css';
import { useSelector } from 'react-redux';
import SummaryFinance from './SummaryFinance';
import SummaryDocuments from './SummaryDocuments';
import SummaryKeyDates from './SummaryKeyDates';

const Summary = ({ data, documents }) => {
  const { financeStats } = useSelector((state) => state.policy);
  return (
    <div className="policy">
      <div className={styles.policySummary}>
        <SummaryKeyDates data={data} />
        <SummaryDocuments documents={documents} />
        <SummaryFinance financeStats={financeStats} />
      </div>
    </div>
  );
};

export default Summary;
