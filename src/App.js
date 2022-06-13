import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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

  if (!token) {
    return <Login />
  }

  return (
    <Router>
      <Switch>
        <Route path={ROUTE_PUBLIC}>
          <Public />
        </Route>
        <Route path={ROUTE_PRIVATE}>
          <Private />
        </Route>
        <Route path={ROUTE_PRIVATE_DASHBOARD}>
          <PrivateDashboard />
        </Route>
        <Route path={ROUTE_LOGOUT}>
          <Logout />
        </Route>
        <Route path={ROUTE_LOGIN}>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}
