import React from 'react';
import {Scene,Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{padding:10}}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial/>
        </Scene>
        <Scene key="main" rightTitle="Add" onRight={()=>Actions.employeeCreate()}>
          <Scene 
          key="employeeList" 
          component={EmployeeList} 
          title="Employees" 
          initial
          />
          <Scene 
          key="employeeCreate" 
          component={EmployeeCreate} 
          title="Employee Create" 
          />
          <Scene 
          key="employeeEdit" 
          component={EmployeeEdit} 
          title="Employee Edit" 
          />
          
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;