/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import CustomForm from '@components/CustomForm'
import CustomInput from '@components/CustomInput'
import useToken from '@hooks/useToken'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const { setToken } = useToken()
  const onSubmit = (data) => {
    setToken(JSON.stringify(data))
  }

  return (
    <div>
      <CustomForm onSubmit={onSubmit}>
        <CustomInput name="login" conditions={{ required: true }} />
        <CustomInput name="password" conditions={{ required: true }} />
      </CustomForm>
    </div>
  )
}

export default Home
