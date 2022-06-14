import { useMemo } from 'react'
import { useCookies } from 'react-cookie'

export default function useToken() {
  const [token, setToken, removeCookie] = useCookies(['name'])

  const saveToken = (userToken) => {
    setToken('name', JSON.stringify(userToken), { path: '/' })
  }

  const unsetToken = () => {
    removeCookie('name')
  }

  const getToken = useMemo(() => {
    return Object.keys(token).length ? token : null
  }, [token])

  return {
    setToken: saveToken,
    unsetToken,
    token: getToken
  }
}
