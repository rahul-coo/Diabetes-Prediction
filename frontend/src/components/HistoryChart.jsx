import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts'

export default function HistoryChart({ history }) {
  if (!history || history.length === 0) return <p className="text-gray-500 text-center py-8">No prediction history yet.</p>

  const data = history.map((h, i) => ({
    index: i + 1,
    glucose: h.Glucose,
    bmi: h.BMI,
    result: h.result,
  }))

  return (
    <div className="h-72 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" label={{ value: 'Prediction #', position: 'insideBottomRight', offset: -5 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" name="Glucose" dataKey="glucose" stroke="#3b82f6" activeDot={{ r: 8 }} />
          <Line type="monotone" name="BMI" dataKey="bmi" stroke="#10b981" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
