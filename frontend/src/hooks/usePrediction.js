import { useState, useEffect } from 'react'
import { predict } from '../api/predictApi'

export function usePrediction() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('predictionHistory')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('predictionHistory', JSON.stringify(history))
  }, [history])

  const submit = async (formData) => {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const data = await predict(formData)
      setResult({ ...data, inputs: formData })
      setHistory(prev => [...prev, { ...formData, ...data, time: new Date().toISOString() }])
    } catch (err) {
      setError(err.response?.data?.detail || err.message || 'Prediction failed')
    } finally {
      setLoading(false)
    }
  }

  const clearHistory = () => {
    setHistory([])
    setResult(null)
  }

  return { result, loading, error, history, submit, clearHistory }
}
