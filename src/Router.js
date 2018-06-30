import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#abb' }}>
            <Scene hideNavBar>
                <Scene key='auth' initial>
                    <Scene key='login' component={LoginForm} title='Please Login' initial />
                </Scene>
                <Scene key='main'>
                    <Scene 
                        key='employeeList' 
                        component={EmployeeList} 
                        title='Employees'
                        rightTitle='Add'
                        onRight={() => Actions.employeeCreate()}
                        initial 
                    />
                    <Scene
                        key='employeeCreate'
                        component={EmployeeCreate}
                        title='New Employee'
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
