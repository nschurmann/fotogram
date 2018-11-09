import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';

import Login from './Containers/Auth/Login';
import Register from './Containers/Auth/Register';
import NewsFeed from './Containers/NewsFeed/NewsFeed';
import NavBar from './Components/NavBar';
import Profile from './Containers/Profile/Profile';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path='/Login' component={Login}/>
        <Route exact={true} path='/Register' component={Register}/>
        <Route path='/App' component={NavBar} />
        <Route exact={true} path='/App/Profile' component={Profile}/>
        <Route exact={true} path='/App/Newsfeed' component={NewsFeed} />
      </div>
    );
  }
}

export default App;
