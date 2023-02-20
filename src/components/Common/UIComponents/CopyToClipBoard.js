import { Tooltip } from 'antd';
import { useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';

const CopyToClipBoard = ({ value }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const handleCopy = () => {
    setShowToolTip(true);
    navigator.clipboard.writeText(value);
  };

  return (
    <div
      style={{ cursor: 'pointer' }}
      onMouseLeave={() => setShowToolTip(false)}
      onClick={() => handleCopy()}
    >
      <Tooltip open={showToolTip} trigger="click" title="Copied">
        <AiOutlineCopy color="#f4bb1d" />
      </Tooltip>
    </div>
  );
};

export default CopyToClipBoard;
