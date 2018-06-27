import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#abb' }}>
            <Scene hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Please Login' initial />
                </Scene>
                <Scene key='main'>
                    <Scene key='employeeList' component={EmployeeList} title='Employees' />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
