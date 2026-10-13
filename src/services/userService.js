import axios from 'axios'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchUsers(signal) {
  const response = await api.get('/users', { signal })
  return response.data
}

export default api