import { Link } from 'react-router-dom'
import { usePrediction } from '../hooks/usePrediction'
import HistoryChart from '../components/HistoryChart'

export default function History() {
  const { history, clearHistory } = usePrediction()

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Prediction History</h1>
          <p className="text-gray-500 mt-2">Track glucose & BMI trends across your inputs.</p>
        </div>
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-4 py-2 rounded-lg">
          &larr; Back to Predictor
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold mb-6">Trends</h2>
        <HistoryChart history={history} />
      </div>

      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold">Past Results</h2>
          {history.length > 0 && (
            <button 
              onClick={clearHistory}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Clear History
            </button>
          )}
        </div>
        
        {history.length === 0 ? (
          <p className="p-6 text-gray-500 text-center">No predictions have been recorded yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-700 text-sm border-b">
                  <th className="p-4 font-medium">Time</th>
                  <th className="p-4 font-medium">Glucose</th>
                  <th className="p-4 font-medium">BMI</th>
                  <th className="p-4 font-medium">Result</th>
                </tr>
              </thead>
              <tbody>
                {history.map((h, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-gray-50 text-sm">
                    <td className="p-4 text-gray-500">
                      {new Date(h.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </td>
                    <td className="p-4 font-medium">{h.inputs.Glucose}</td>
                    <td className="p-4 font-medium">{h.inputs.BMI}</td>
                    <td className="p-4">
                      {h.result === 1 ? (
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">Diabetic</span>
                      ) : (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Healthy</span>
                      )}
                    </td>
                  </tr>
                )).reverse()}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
