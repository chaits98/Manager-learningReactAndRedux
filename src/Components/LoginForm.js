import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './Common';
import { emailChanged, passwordChanged, loginUser } from '../Actions';

// const logo = require('../final-logo.png');

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, pass } = this.props;

        this.props.loginUser({ email, pass });
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size='large' />
            );
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: '#fff' }}>
                    <Text style={styles.errorText}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.pass}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                {/* <CardSection>
                    <Image 
                        source={logo} 
                        style={{ 
                            padding: 20, 
                            width: Dimensions.get('window').width * 0.8,
                            height: Dimensions.get('window').height * 0.5,
                        }}
                    />
                </CardSection> */}
            </Card>
        );
    }
}

const styles = {
    errorText: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
    }
};

const mapStateToProps = (state) => {
    return (
        {
            email: state.auth.email,
            pass: state.auth.pass,
            error: state.auth.error,
            loading: state.auth.loading,
        }
    );
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
