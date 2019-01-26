import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import AddNewPage from './Components/AddNewPage/AddNewPage';
import EmployeePage from './Components/EmployeePage/EmployeePage';
import EmployeeFormPage from './Components/EmployeeFormPage/EmployeeFormPage';
import AddDocPage from './Components/AddDocPage/AddDocPage';
import AddFieldPage from './Components/AddFieldPage/AddFieldPage';
import ResendPage from './Components/ResendPage/ResendPage';
import './App.css';

const App = () => (
  <BrowserRouter>
  <div>
    <Route exact path='/' component={DashboardPage} />
    <Route path='/add-new' component={AddNewPage} />
    <Route path='/employee' component={EmployeePage} />
    <Route path='/form' component={EmployeeFormPage} />
    <Route path='/add-doc' component={AddDocPage} />
    <Route path='/add-field' component={AddFieldPage} />
    <Route path='/resend' component={ResendPage} />
  </div>
  </BrowserRouter>
)

export default App;
