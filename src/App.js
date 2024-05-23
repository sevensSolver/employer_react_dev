import Routing from './router';

const App = () => {
  // localStorage.clear()
  // localStorage.setItem('hr-auth-token','eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzMxOWE0YjhiNGJiMzVlNDhmNDA0YWQiLCJpYXQiOjE2NzY4ODQyOTIsImV4cCI6MTY3NzMxNjI5Mn0._pNb0xBYwQxdRXshFnWiNI9qzjhEhW93xNIvNL-lZolu0RS2ieC2ph9dT6jWpfSJAc_5kaNWMRPD7Q2XVa_ngA')
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default App;
