import React from 'react';
import DependentsTable from './DependentTable';
import { Button, Spin } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './index.module.css';

const DependentsSection = ({ dependents, loading }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="dependentsSection">
      <div className={styles.dependentTable}>
        <p style={{ marginBottom: 0, fontSize: 14 }}>Dependents</p>
        {loading ? (
          <div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
            <Spin />
          </div>
        ) : dependents && dependents?.length > 0 ? (
          <DependentsTable dependents={dependents} />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <p style={{ fontSize: 13 }} className="mbZero">
              No dependents are added yet.
            </p>
            <p style={{ fontSize: 13 }} className="mbZero">
              Try adding a new dependent now!
            </p>
            <Button
              onClick={() => navigate(`/employees/add-dependent/${id}`)}
              style={{ marginTop: 15 }}
              type="primary"
              shape="round"
            >
              Add Dependent
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DependentsSection;
