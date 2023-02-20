import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../../template';
import TopNav from '../Common/UIComponents/TopNav';
import EmployeeTable from './EmployeeTable';
import useDebounce from '../Common/useDebounce';
import UsePagination from '../Common/UsePagination';
import MainSearch from '../Common//UIComponents/MainSearch';
import AddEmployeeButton from '../Common/UIComponents/AddEmployeeButton';
import { employeeSearch, getEmployeesWithFilter } from '../../store/employees';

const options = [
  { title: 'All Employees', key: 'All' },
  { title: 'Active Employees', key: 'Active' },
  { title: 'Inactive Employees', key: 'Inactive' },
  { title: 'Suspended', key: 'Suspended' },
];

const Index = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [filterState, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [tab, setTab] = useState({ title: 'All Employees', key: 'All' });
  const { data, loading } = useSelector((state) => state.employees);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleTabChange = (e) => {
    setTab(e);
    setPage(0);
  };

  useEffect(() => {
    if (debouncedSearchTerm.trim().length) {
      dispatch(employeeSearch(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm]);

  const handleOnChange = (e) => {
    if (e.trim() === '') {
      dispatch(getEmployeesWithFilter({ page, size: 6, filter: tab.key }));
    } else {
      setSearchTerm(e.trim());
    }
  };

  return (
    <Main pageName="Employees">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 20,
          width: '100%',
        }}
      >
        <AddEmployeeButton width="25%" />
        <MainSearch handleOnChange={handleOnChange} width="29%" placeholder="Search" />
      </div>

      <div className="mtLarge">
        <TopNav options={options} tab={tab} width={640} handleTabChange={handleTabChange} />
        <hr
          style={{
            marginTop: -32,
            height: 1,
            border: 'none',
            backgroundColor: '#e5e5e5',
            marginBottom: 30,
          }}
        />
        <div
          style={{
            backgroundColor: 'white',
            padding: 20,
            paddingBottom: 20,
            borderRadius: 10,
          }}
        >
          <EmployeeTable
            filterState={filterState}
            setFilter={setFilter}
            tab={tab}
            page={page}
            setPage={setPage}
            content={data.content}
            loading={loading}
          />
        </div>
        <UsePagination page={page} setPage={setPage} data={data} />
      </div>
    </Main>
  );
};

export default Index;
