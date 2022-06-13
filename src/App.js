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
  ROUTE_PRIVATE_DASHBOARD
} from '@constants/routes'
import Login from '@pages/Login'
import Logout from '@pages/Logout'
import Public from '@pages/Public'
import Private from '@pages/Private'
import PrivateDashboard from '@pages/PrivateDashboard'
import useToken from '@hooks/useToken'

export default function App() {
  const { token } = useToken()

  return (
    <Router>
      <Switch>
        <Route path={ROUTE_PUBLIC}>
          <Public />
        </Route>
        <Route path={ROUTE_PRIVATE}>
          {token ? <Private /> : <Redirect replace to={ROUTE_LOGIN} />}
        </Route>
        <Route path={ROUTE_PRIVATE_DASHBOARD}>
          {token ? <PrivateDashboard /> : <Redirect replace to={ROUTE_LOGIN} />}
        </Route>
        <Route path={ROUTE_LOGOUT}>
          {token ? <Logout /> : <Redirect replace to={ROUTE_LOGIN} />}
        </Route>
        <Route path={ROUTE_LOGIN}>
          {token ? (
            <Redirect replace to={ROUTE_PRIVATE_DASHBOARD} />
          ) : (
            <Login />
          )}
        </Route>
      </Switch>
    </Router>
  )
}
