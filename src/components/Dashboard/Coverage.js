import React, { useEffect } from 'react';
import styles from './index.module.css';
import employees from '../../img/cards.png';
import dependents from '../../img/benefits.png';
import covid from '../../img/covid.png';
import activationRate from '../../img/activationRate.png';
import { getCoverageInfo } from '../../store/DashboardSlice';
import { useDispatch, useSelector } from 'react-redux';

const ColumnItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoverageInfo());
  }, [dispatch]);

  const { coverage } = useSelector((state) => state.dashboardSlice);

  let data = [
    {
      img: employees,
      color: '#3ab44d',
      title: 'My Cards',
      count: coverage?.num_of_employees,
    },
    {
      img: dependents,
      color: '#3ab44d',
      title: 'My Benefits',
      count: coverage?.num_of_dependents,
    },
    {
      img: covid,
      color: '#3ab44d',
      title: 'Covid Certificates',
      count: coverage?.num_of_dependents,
    },
   
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        marginTop:20
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 15,
            width: '32%',
          }}
        >
          <img src={item.img} alt="" style={{ objectFit: 'contain', maxWidth: 42 }} />
          <div style={{ width: '100%' }}>
            <p
              style={{
                marginBottom: 3,
                fontSize: 12,
                lineHeight: 1,
                color: '#a3a3a3',
                fontWeight: 300,
              }}
            >
              {item.title}
            </p>
            <p style={{ fontWeight: 500, fontSize: 30, marginBottom: 0, color: '#171717' }}>
              {item.count && item.count}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ColumnItem;
