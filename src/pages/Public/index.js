/**
 * The module managing the public page
 * @module Public
 */

import React from 'react'
import Seo from '@components/Seo'

/**
 * @function Public
 * Create the component Public
 * @return {Object} Return the dom of the Public page
 */
const Public = () => {
  return (
    <>
      <Seo title="Public" description="Description of Public" />
      Public Page
    </>
  )
}

export default Public
