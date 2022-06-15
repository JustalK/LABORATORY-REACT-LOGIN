/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import CustomForm from '@components/CustomForm'
import CustomInput from '@components/CustomInput'
import useToken from '@hooks/useToken'
import { postAPI } from '@services/api'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Login = () => {
  const { setToken } = useToken()
  const onSubmit = async (data) => {
    const rsl = await postAPI('https://reqres.in/api/login', data)
    if (rsl.responseStatus !== 200) {
      console.log(rsl.error)
    } else {
      setToken(rsl.token)
    }
  }

  return (
    <div>
      <CustomForm onSubmit={onSubmit}>
        <CustomInput
          name="email"
          conditions={{ required: true }}
          placeholder="eve.holt@reqres.in"
        />
        <CustomInput
          name="password"
          conditions={{ required: true }}
          placeholder="cityslicka"
        />
      </CustomForm>
    </div>
  )
}

export default Login
