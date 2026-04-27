export default function ResultCard({ result, probability }) {
  if (result === undefined || result === null) return null;
  
  const isDiabetic = result === 1
  return (
    <div className={`mt-6 p-6 rounded-xl border-2 text-center transition-all ${
      isDiabetic 
        ? 'bg-red-50 border-red-500 text-red-900' 
        : 'bg-green-50 border-green-500 text-green-900'
    }`}>
      <h2 className="text-2xl font-bold mb-2">
        {isDiabetic ? 'Diabetes Risk Detected' : 'No Significant Risk Detected'}
      </h2>
      <p className="text-lg">
        Confidence Score: <span className="font-semibold">{(probability * 100).toFixed(1)}%</span>
      </p>
    </div>
  )
}
