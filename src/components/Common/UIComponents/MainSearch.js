import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const MainSearch = ({ handleOnChange, placeholder, width }) => {
  return (
    <div style={{ display: 'flex', width: width, marginLeft: 5 }}>
      <Input
        style={{ borderRadius: 15 }}
        allowClear
        onChange={(e) => handleOnChange(e.target.value)}
        placeholder={placeholder}
        prefix={<SearchOutlined style={{ fontSize: 21, marginLeft: 10 }} />}
      />
    </div>
  );
};

export default MainSearch;
