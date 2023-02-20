import { Pagination } from 'antd';
import React from 'react';

const UsePagination = ({ data, setPage, page }) => {
  const noPagination = page === 0 && data.content?.length < 5;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 25,
        marginRight: 20,
      }}
    >
      {noPagination ? null : (
        <>
          {/* <div style={{ textAlign: 'center', marginTop: 20 }}>
            Total {data?.property?.total_elements} records found
          </div> */}
          <div
            style={{
              marginTop: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Pagination
              pageSize={6}
              size="small"
              current={page + 1}
              onChange={(e) => setPage(e - 1)}
              total={data?.property?.total_elements}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UsePagination;
