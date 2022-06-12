import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_SECONDARY } from '@constants/routes'
import Home from '@pages/Home'
import Secondary from '@pages/Secondary'
import useToken from '@hooks/useToken'

export default function App() {
  const { token } = useToken()

  if (!token) {
    return <Home />
  }

  return (
    <Router>
      <Switch>
        <Route path={ROUTE_SECONDARY}>
          <Secondary />
        </Route>
        <Route path={ROUTE_HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
