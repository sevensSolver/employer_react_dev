import React from 'react';
import { Button, Collapse, Divider } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CollapseContentModal from './CollapseContentModal';

const PlanCover = ({ state }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(false);

  const items = ['Out-Patient', 'In-Patient', 'Maternity', 'Optical', 'Dental'];

  let arr = [
    { text: 'Bed limit:', value: 'Rwf 56,000' },
    {
      text: 'Inpatient expenses related to acute conditions or accidents:',
      value: 'Rwf 75,00,000',
    },
    {
      text: 'Pre-existing chronic conditions on full disclosure at the time of joining:',
      value: 'Rwf 75,00,000',
    },
    { text: 'Chronic conditions diagnosed after inception of cover:', value: 'Rwf 75,00,000' },
    {
      text: 'Maternity Cover Normal Delivery, Caesarian section (Elective & Emergency), Maternity related complications, all Antenatal and postnatal inpatient expenses, expenses incurred by a Newborn before discharge:',
      value: 'Rwf 56,000',
    },
    {
      text: 'Cancer treatment after one year of cover:',
      value: 'Rwf 75,00,000',
    },
    {
      text: 'Congenital defects and genetic disorders after one year of cover:',
      value: 'Rwf 3,00,000',
    },
  ];

  const handleFullScreen = (title) => {
    setIsModalOpen(true);
    setTitle(title);
  };

  return (
    <div className="planCover">
      <div
        style={{
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 10,
          minHeight: 262,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}
        >
          <p
            style={{
              marginBottom: 0,
              fontSize: 14,
            }}
          >
            Plan Covers
          </p>
          <div>
            <p style={{ fontWeight: 600 }}>{state?.policy_type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCover;
