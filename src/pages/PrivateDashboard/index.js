/**
 * The module managing the PrivateDashboard page
 * @module PrivateDashboard
 */

import React from 'react'
import Seo from '@components/Seo'

/**
 * @function PrivateDashboard
 * Create the component PrivateDashboard
 * @return {Object} Return the dom of the PrivateDashboard page
 */
const Secondary = () => {
  return (
    <>
      <Seo
        title="PrivateDashboard"
        description="Description of Private Dashboard"
      />
      Private Dashboard
    </>
  )
}

export default Secondary
