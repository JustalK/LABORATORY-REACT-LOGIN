/**
 * The components managing the input in the app
 * @module components/CustomInput
 */

import React from 'react'
import { useForm } from 'react-hook-form'

/**
 * @function CustomForm
 * Create the component for Input
 * @return {Object} Return the dom of the Seo page
 */
const CustomInput = ({ onSubmit, children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children.map((c, key) =>
        React.cloneElement(c, { key, register, errors })
      )}
      <input type="submit" />
    </form>
  )
}

export default CustomInput
