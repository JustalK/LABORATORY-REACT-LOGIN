/**
 * The module managing the Dashboard page
 * @module Dashboard
 */

import React from 'react'
import Seo from '@components/Seo'

/**
 * @function Dashboard
 * Create the component Dashboard
 * @return {Object} Return the dom of the Dashboard page
 */
const Dashboard = () => {
  return (
    <>
      <Seo title="Dashboard" description="Description of Private Dashboard" />
      Private Dashboard
    </>
  )
}

export default Dashboard
