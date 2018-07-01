import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './Common';

class ListItem extends Component {
    onRowPress() {
        Actions.employeeCreate({ employee: this.props.employee });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.employee.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

export default ListItem;
