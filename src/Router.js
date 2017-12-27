import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }} initial>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>

      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
        />
      <Scene key="employeeCreate" component={EmployeeCreate} title="Add Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
