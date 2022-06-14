import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom'
import {
  ROUTE_LOGOUT,
  ROUTE_LOGIN,
  ROUTE_PRIVATE,
  ROUTE_PUBLIC,
  ROUTE_DASHBOARD
} from '@constants/routes'
import Login from '@pages/Login'
import Logout from '@pages/Logout'
import Public from '@pages/Public'
import Private from '@pages/Private'
import Dashboard from '@pages/Dashboard'
import useToken from '@hooks/useToken'

export default function App() {
  const { token } = useToken()

  /**
   * Redirect the user if the user DOES NOT has a token
   * @param {React.JSX} page The page component to return if the user is connected
   * @return {React.JSX} The page or redirection depending if the user has a token
   * */
  const isRegisteredRoute = (page) => {
    return token ? (
      React.createElement(page, {})
    ) : (
      <Redirect replace to={ROUTE_LOGIN} />
    )
  }

  /**
   * Redirect the user if the user has already a token
   * @param {React.JSX} page The page component to return if the user is not connected
   * @return {React.JSX} The page or redirection depending if the user has a token
   * */
  const isNotRegisteredRoute = (page) => {
    return token ? (
      <Redirect replace to={ROUTE_DASHBOARD} />
    ) : (
      React.createElement(page, {})
    )
  }

  return (
    <Router>
      <Switch>
        <Route path={ROUTE_PUBLIC}>
          <Public />
        </Route>
        <Route path={ROUTE_DASHBOARD}>{isRegisteredRoute(Dashboard)}</Route>
        <Route path={ROUTE_PRIVATE}>{isRegisteredRoute(Private)}</Route>
        <Route path={ROUTE_LOGOUT}>{isRegisteredRoute(Logout)}</Route>
        <Route path={ROUTE_LOGIN}>{isNotRegisteredRoute(Login)}</Route>
      </Switch>
    </Router>
  )
}
