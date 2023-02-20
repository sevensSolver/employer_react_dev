import React from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const BackNavigation = ({ url }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
      }}
    >
      <HiOutlineArrowLeft onClick={() => navigate(url)} style={{ cursor: 'pointer' }} size={25} />
      <p style={{ marginBottom: 0 }}>Back</p>
    </div>
  );
};

export default BackNavigation;
