import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCDrFcnKfsEx_ssY01IUBiAo3d8ll6qK4o',
            authDomain: 'manager-6d659.firebaseapp.com',
            databaseURL: 'https://manager-6d659.firebaseio.com',
            projectId: 'manager-6d659',
            storageBucket: 'manager-6d659.appspot.com',
            messagingSenderId: '67698603858'
          };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
