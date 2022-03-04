import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import EmployeesContainer from './components/Employees/EmployeesContainer';
import store from './redux/redux-store';

const App = (props) => {
  return <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <EmployeesContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default App;
