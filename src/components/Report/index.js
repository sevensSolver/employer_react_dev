import { useState } from 'react';
import Main from '../../template';
import ColumnItem from './ColumnItem';
import claim from '../../img/claim.png';
import GenerateReport from './GenerateModal';

import banknotes from '../../img/banknotes.png';
import userPlus from '../../img/user-plus.png';
import fingerPrint from '../../img/finger-print.png';
import arrowTrendingUp from '../../img/arrow-trending-up.png';
import ReportTable from './Table';

let imgs = [
  { img: banknotes, color: '#f87d4e', title: 'Wellness report', count: '45' },
  { img: userPlus, color: '#3ab44d', title: 'Active employees', count: '14' },
  { img: fingerPrint, color: '#8e3ab4', title: 'Policy Utilization', count: '27' },
  { img: arrowTrendingUp, color: '#8e3ab4', title: 'Policy Utilization', count: '27' },
];

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  return (
    <Main pageName="Reports">
      <div style={{ marginTop: 30, width: '100%' }}>
        <div
          style={{
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ColumnItem setTitle={setTitle} setIsModalVisible={setIsModalVisible} imgs={imgs} />
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          padding: 20,
          paddingBottom: 30,
          borderRadius: 10,
          marginTop: 40,
        }}
      >
        <ReportTable />
      </div>

      <GenerateReport
        title={title}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </Main>
  );
};

export default Index;
