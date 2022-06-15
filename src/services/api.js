export const callAPI = async (url, method, data) => {
  const response = await fetch('https://reqres.in/api/login', {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const responseData = await response.json()
  return {
    responseStatus: response.status,
    ...responseData
  }
}

export const postAPI = async (url, data) => {
  return callAPI(url, 'POST', data)
}
