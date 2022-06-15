import { useMemo } from 'react'
import { useCookies } from 'react-cookie'

export default function useToken() {
  const [token, setToken, removeCookie] = useCookies(['token'])

  const saveToken = (userToken) => {
    setToken('token', userToken, { path: '/' })
  }

  const unsetToken = () => {
    removeCookie('token')
  }

  const checkToken = () => {
    // This function will normally make a call to the BE for checking if the
    // Token is correct. Incase, it's not, we invalidate the token
    return Object.keys(token).length && token.token === 'QpwL5tke4Pnpja7X4'
  }

  const getToken = useMemo(() => {
    return checkToken() ? token : null
  }, [token])

  return {
    setToken: saveToken,
    unsetToken,
    token: getToken
  }
}
