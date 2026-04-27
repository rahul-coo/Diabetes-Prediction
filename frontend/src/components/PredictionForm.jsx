import { useForm } from 'react-hook-form'

const fields = [
  { name: 'Pregnancies', min: 0, max: 20 },
  { name: 'Glucose', min: 1, max: 300 },
  { name: 'BloodPressure', min: 1, max: 200 },
  { name: 'SkinThickness', min: 0, max: 100 },
  { name: 'Insulin', min: 0, max: 900 },
  { name: 'BMI', min: 1, max: 70, step: 0.1 },
  { name: 'DiabetesPedigreeFunction', min: 0, max: 2.5, step: 0.01 },
  { name: 'Age', min: 1, max: 120 },
]

export default function PredictionForm({ onSubmit, loading }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map(f => (
          <div key={f.name} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">{f.name}</label>
            <input 
              type="number" 
              step={f.step || 1}
              className={`p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${errors[f.name] ? 'border-red-500' : 'border-gray-300'}`}
              disabled={loading}
              {...register(f.name, { 
                required: 'Required', 
                min: { value: f.min, message: `Min ${f.min}` }, 
                max: { value: f.max, message: `Max ${f.max}` },
                valueAsNumber: true
              })} 
            />
            {errors[f.name] && <span className="text-xs text-red-500 mt-1">{errors[f.name].message}</span>}
          </div>
        ))}
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition-colors disabled:bg-blue-400"
      >
        {loading ? 'Analyzing...' : 'Predict Diabetes Risk'}
      </button>
    </form>
  )
}
