import axios from 'axios'

const api = axios.create({
  // Vite proxy will redirect to localhost:8000
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: 10000,
})

export const predict = async (formData) => {
  const res = await api.post('/predict', formData)
  return res.data
}

export const healthCheck = async () => {
  const res = await api.get('/health')
  return res.data
}
