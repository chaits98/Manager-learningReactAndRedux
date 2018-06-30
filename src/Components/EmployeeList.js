import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';

const logo = require('../final-logo.png');

class EmployeeList extends Component {
    render() {
        return (
            <View>
                <Image 
                source={logo} 
                style={{ 
                        padding: 20, 
                        width: Dimensions.get('window').width * 0.8,
                        height: Dimensions.get('window').height * 0.5,
                    }} 
                />
            </View>
        );
    }
}

export default EmployeeList;
