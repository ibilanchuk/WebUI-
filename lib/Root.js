/* global __DEVTOOLS__ */
import '../assets/stylesheets/index.less'

import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import { connect } from 'react-redux'
import {replace} from 'redux-router';
import configureStore from './utils/configure-store'
import * as storage from './persistence/storage'
import * as components from './components'
import * as constants from './constants'
import * as actions from './actions/application'


const {
  About,
  Progress,
  Application,
  Home,
  Login
} = components

const initialState = {
  application: {
    token: storage.get('token')
  }
}

export const store = configureStore(initialState)



function renderRoutes () {
  return (
    <ReduxRouter>
      <Route path="login" component={Login} />
      <Route component={Application}>
        <Route path="/" component={Home} />
        <Route path="groups" component={About} />
        <Route path="about" component={About} />
        <Route path="progress" component={Progress}/>
        <Route path="logout" onEnter={logout} />
      </Route>
    </ReduxRouter>
  )
}

function requireAuth (nextState, replaceState) {
  const state = store.getState()
  const isLoggedIn = Boolean(state.application.token)
  if (!isLoggedIn)
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
}

function logout (nextState, replaceState) {
  store.dispatch(actions.logout())
  store.dispatch({type:constants.LOG_OUT})
  replaceState({}, '/login')
}

class Root extends React.Component {
  static propTypes = {
    application: PropTypes.object.isRequired
  };
  componentWillMount(){
    /*window.addEventListener("beforeunload", (ev) =>
    {
      ev.preventDefault();
      return ev.returnValue = 'Are you sure you want to close?';
    });*/
  }
  render () {
    return (
      <div id="app">{renderRoutes()}</div>
    )
  }
}

export default connect(({ application }) => ({ application }))(Root)
