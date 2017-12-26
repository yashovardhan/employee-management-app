import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  ComponentWillMount() {
    const config = {
      apiKey: 'AIzaSyB5iLwHqYF5zAi0BXMVBPgLKL5ufse5wlA',
      authDomain: 'manager-2f45e.firebaseapp.com',
      databaseURL: 'https://manager-2f45e.firebaseio.com',
      projectId: 'manager-2f45e',
      storageBucket: 'manager-2f45e.appspot.com',
      messagingSenderId: '773280664934'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
