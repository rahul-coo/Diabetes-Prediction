import React from 'react';
import { Link } from 'react-router-dom';
import ResultCard from '../components/ResultCard';
import HistoryChart from '../components/HistoryChart';
import { usePrediction } from '../hooks/usePrediction';
import { useForm } from 'react-hook-form';

export default function Dashboard() {
  const { result, loading, submit, history, clearHistory } = usePrediction();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  return (
    <>
      
<nav className="sticky top-0 z-50 w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm backdrop-blur-[24px] border-b border-white/40 dark:border-slate-800/40">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-manrope antialiased tracking-tight">
<div className="flex items-center gap-8">
<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">DiaPredict AI</span>
<div className="hidden md:flex gap-6">
<Link className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1" to="/dashboard">Dashboard</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" to="/">Home</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" to="/dashboard">Predictions</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" to="/">About</Link>
</div>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-6 py-8">

<header className="mb-10">
<h1 className="font-h1 text-h1 text-on-surface">Good Morning, Dr. Chen</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Clinical insights and predictive trends updated 2 minutes ago.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-4 glass-card-high rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<span className="font-label-caps text-label-caps text-on-surface-variant">CURRENT RISK LEVEL</span>
<span className="material-symbols-outlined text-primary" data-icon="clinical_notes">clinical_notes</span>
</div>
<div className="relative w-48 h-48 mx-auto flex items-center justify-center">

<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
<circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552.92" stroke-dashoffset="400" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-stat-value text-h1 text-primary">28%</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">STABLE</span>
</div>
</div>
</div>
<div className="mt-8 space-y-3">
<div className="flex justify-between items-center p-3 rounded-lg bg-primary-container/10 border border-primary-container/20">
<span className="text-body-md font-semibold text-primary">Precision Score</span>
<span className="text-body-md font-bold text-primary">0.98</span>
</div>
<p className="text-sm text-on-surface-variant text-center px-4">Risk decreased by 4.2% since your last assessment.</p>
</div>
</div>

<div className="md:col-span-8 glass-panel rounded-xl p-8">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="add_circle">add_circle</span>
</div>
<h2 className="font-h3 text-h3">New Prediction</h2>
</div>
<form onSubmit={handleSubmit(submit)}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Pregnancies */}
  <div className="space-y-2">
    <label className="font-label-caps text-label-caps text-on-surface-variant block">PREGNANCIES</label>
    <input disabled={loading} {...register('Pregnancies', { required: true, valueAsNumber: true, min: 0, max: 20 })} className={`w-full px-4 py-3 rounded-xl bg-white/40 border ${errors.Pregnancies ? 'border-red-500' : 'border-white/60'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline`} placeholder="e.g. 2" type="number"/>
  </div>
  {/* Glucose */}
  <div className="space-y-2">
    <label className="font-label-caps text-label-caps text-on-surface-variant block">BLOOD GLUCOSE (MG/DL)</label>
    <input disabled={loading} {...register('Glucose', { required: true, valueAsNumber: true, min: 1, max: 300 })} className={`w-full px-4 py-3 rounded-xl bg-white/40 border ${errors.Glucose ? 'border-red-500' : 'border-white/60'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline`} placeholder="e.g. 110" type="number"/>
  </div>
  {/* BP */}
  <div className="space-y-2">
    <label className="font-label-caps text-label-caps text-on-surface-variant block">BLOOD PRESSURE (SYSTOLIC)</label>
    <input disabled={loading} {...register('BloodPressure', { required: true, valueAsNumber: true, min: 1, max: 200 })} className={`w-full px-4 py-3 rounded-xl bg-white/40 border ${errors.BloodPressure ? 'border-red-500' : 'border-white/60'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline`} placeholder="e.g. 120" type="number"/>
  </div>
  {/* Skin Thickness */}
  <div className="space-y-2">
    <label className="font-label-caps text-label-caps text-on-surface-variant block">SKIN THICKNESS (MM)</label>
    <input disabled={loading} {...register('SkinThickness', { required: true, valueAsNumber: true, min: 0, max: 100 })} className={`w-full px-4 py-3 rounded-xl bg-white/40 border ${errors.SkinThickness ? 'border-red-500' : 'border-white/60'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline`} placeholder="e.g. 20" type="number"/>
  </div>
  {/* Insulin */}
  <div className="space-y-2">
    <label className="font-label-caps text-label-caps text-on-surface-variant block">INSULIN LEVEL (MU U/ML)</label>
    <input disabled={loading} {...register('Insulin', { required: true, valueAsNumber: true, min: 0, max: 900 })} className={`w-full px-4 py-3 rounded-xl bg-white/40 border ${errors.Insulin ? 'border-red-500' : 'border-white/60'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline`} placeholder="e.g. 80" type="number"/>
  </div>
  {/* BMI */}
  <div className="space-y-2">
    <label className="font-label-caps text-label-caps text-on-surface-variant block">BMI (KG/M²)</label>
    <input disabled={loading} {...register('BMI', { required: true, valueAsNumber: true, min: 1, max: 70 })} className={`w-full px-4 py-3 rounded-xl bg-white/40 border ${errors.BMI ? 'border-red-500' : 'border-white/60'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline`} placeholder="e.g. 24.5" step="0.1" type="number"/>
  </div>
  {/* Pedigree */}
  <div className="space-y-2">
    <label className="font-label-caps text-label-caps text-on-surface-variant block">DIABETES PEDIGREE</label>
    <input disabled={loading} {...register('DiabetesPedigreeFunction', { required: true, valueAsNumber: true, min: 0, max: 2.5 })} className={`w-full px-4 py-3 rounded-xl bg-white/40 border ${errors.DiabetesPedigreeFunction ? 'border-red-500' : 'border-white/60'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline`} placeholder="e.g. 0.5" step="0.01" type="number"/>
  </div>
  {/* Age */}
  <div className="space-y-2">
    <label className="font-label-caps text-label-caps text-on-surface-variant block">AGE</label>
    <input disabled={loading} {...register('Age', { required: true, valueAsNumber: true, min: 1, max: 120 })} className={`w-full px-4 py-3 rounded-xl bg-white/40 border ${errors.Age ? 'border-red-500' : 'border-white/60'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline`} placeholder="e.g. 45" type="number"/>
  </div>
</div>
<div className="mt-8 pt-6 border-t border-white/40 flex justify-end items-center gap-4">
<button type="button" onClick={() => reset()} className="px-6 py-3 font-semibold text-on-surface-variant hover:text-primary transition-colors">Clear All</button>
<button type="submit" disabled={loading} className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
    {loading ? 'Analyzing...' : 'Generate Prediction'}
    <span className="material-symbols-outlined text-base" data-icon="auto_awesome">auto_awesome</span>
</button>
</div>
</form>
{result && <ResultCard result={result.result} probability={result.probability} />}
</div>

<div className="md:col-span-12 glass-panel rounded-xl p-8">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="font-h3 text-h3">Prediction History</h2>
<p className="text-on-surface-variant">Track your glucose and BMI trends.</p>
</div>
<div className="flex gap-2 p-1 bg-surface-container-low rounded-lg">
<button onClick={clearHistory} className="px-4 py-1.5 rounded-md text-red-500 font-semibold shadow-sm text-sm hover:bg-white/50">Clear History</button>
</div>
</div>

<div className="w-full h-[300px]">
  <HistoryChart history={history} />
</div>
</div>

<div className="md:col-span-4 glass-panel rounded-xl p-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary" data-icon="monitor_heart">monitor_heart</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant">AVG GLUCOSE</span>
<p className="font-stat-value text-stat-value">104 mg/dL</p>
</div>
</div>
<div className="md:col-span-4 glass-panel rounded-xl p-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary" data-icon="fitness_center">fitness_center</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant">ACTIVITY LEVEL</span>
<p className="font-stat-value text-stat-value">Optimal</p>
</div>
</div>
<div className="md:col-span-4 glass-panel rounded-xl p-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-error-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-error" data-icon="event_note">event_note</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant">NEXT CHECKUP</span>
<p className="font-stat-value text-stat-value">Nov 12</p>
</div>
</div>
</div>
</main>

<footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 mt-20">
<div className="flex flex-col gap-2">
<span className="text-lg font-bold text-slate-900 dark:text-white">DiaPredict AI</span>
<p className="font-manrope text-sm text-slate-500 dark:text-slate-400">© 2024 DiaPredict AI. Clinical precision, empathetic intelligence.</p>
</div>
<div className="flex gap-8">
<a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors font-manrope text-sm hover:underline transition-all" href="#">Privacy Policy</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors font-manrope text-sm hover:underline transition-all" href="#">Terms of Service</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors font-manrope text-sm hover:underline transition-all" href="#">Medical Disclaimer</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors font-manrope text-sm hover:underline transition-all" href="#">Support</a>
</div>
</footer>

<button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all md:hidden">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
    </>
  );
}
