/**
 * The module managing the home page
 * @module Home
 */

import React, { useEffect } from 'react'
import useToken from '@hooks/useToken'
import { Redirect } from 'react-router-dom'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Logout = () => {
  const { unsetToken } = useToken()

  useEffect(() => {
    unsetToken()
  }, [])

  return <Redirect replace to="/" />
}

export default Logout
