/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import CustomInput from '@components/CustomInput'
import { useForm } from 'react-hook-form'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          register={register}
          name="lastname"
          conditions={{ required: true }}
          errors={errors}
        />
        <select {...register('gender')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Home
