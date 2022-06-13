import { useCookies } from 'react-cookie'

export default function useToken() {
  const [token, setToken, removeCookie] = useCookies(['name'])

  const saveToken = (userToken) => {
    setToken('name', JSON.stringify(userToken), { path: '/' })
  }

  const unsetToken = () => {
    removeCookie('name')
  }

  return {
    setToken: saveToken,
    unsetToken,
    token
  }
}
