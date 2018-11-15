import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';

import Login from './Containers/Auth/Login';
import Register from './Containers/Auth/Register';
import NewsFeed from './Containers/NewsFeed/NewsFeed';
import NavBar from './Components/NavBar';
import Profile from './Containers/Profile/Profile';
import services from './Services';
import { History } from 'history';

interface IAppProps {
  history: History
}


class App extends Component<IAppProps> {

  public state = {
    loading: true,
  }

  public componentDidMount() {
    const { auth } = services
    auth.onAuthStateChanged(user => {
      if (user) {
        if (['/Login','/register'].indexOf(location.pathname) > -1) {
          const { history } = this.props
          history.push('/App/Newsfeed')
        }
      } else if(/\app\/./.test(location.pathname) || '/'.indexOf(location.pathname) > -1 ) {
        const { history } = this.props
          history.push('/Login')
      }
      console.log(user)
      this.setState({
        loading: false
      })
    })
  }
  render() {
    const { loading } = this.state
    return (
      loading ? 'loading' : <div>
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
