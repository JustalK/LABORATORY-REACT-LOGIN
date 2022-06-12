import { useCookies } from 'react-cookie'

export default function useToken() {
  const [token, setToken] = useCookies(['name'])

  const saveToken = (userToken) => {
    setToken('name', JSON.stringify(userToken), { path: '/' })
  }

  return {
    setToken: saveToken,
    token
  }
}
