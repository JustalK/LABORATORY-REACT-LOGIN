/**
 * The components managing the input in the app
 * @module components/CustomInput
 */

import React from 'react'

/**
 * @function CustomInput
 * Create the component for Input
 * @return {Object} Return the dom of the Seo page
 */
const CustomInput = ({ register, name, conditions, errors }) => {
  return (
    <>
      <input {...register(name, conditions)} />
      {errors[name]?.type === 'required' && <span>Required</span>}
    </>
  )
}

export default CustomInput
