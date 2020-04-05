import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import RouterComponent from './Router';


import ReduxThunk from 'redux-thunk';


class App extends Component {
  UNSAFE_componentWillMount(){
    var firebaseConfig = {
     apiKey: "AIzaSyBmD4TzZ4Q4vgRPVLeFduC0tdvEknlx6_Q",
     authDomain: "manager-ef2c6.firebaseapp.com",
     databaseURL: "https://manager-ef2c6.firebaseio.com",
     projectId: "manager-ef2c6",
     storageBucket: "manager-ef2c6.appspot.com",
     messagingSenderId: "510087167044",
     appId: "1:510087167044:web:822bac15a24d5f98e0d011",
     measurementId: "G-SF4Z1F60DD"
    };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  }
  render(){
    return(
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
       <RouterComponent/>
      </Provider>
    );
  }
}

export default App;
