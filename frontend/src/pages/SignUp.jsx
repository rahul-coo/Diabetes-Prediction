import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (e) => { e.preventDefault(); navigate('/dashboard'); };
  return (
    <form onSubmit={handleSubmit}>
      
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
<main className="w-full max-w-[1200px] px-container-padding flex flex-col md:flex-row items-center gap-16 relative z-10 py-stack-lg">

<div className="flex-1 text-left space-y-6 max-w-md">
<div className="inline-flex items-center gap-3 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60">
<span className="material-symbols-outlined text-primary" data-icon="clinical_notes">clinical_notes</span>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Medical Intelligence</span>
</div>
<h1 className="font-h1 text-h1 text-on-surface">Precision diagnosis starts with better data.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Join DiaPredict AI to access enterprise-grade predictive analytics for clinical decision support.</p>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
</div>
<div>
<p className="font-body-md font-semibold text-on-surface">HIPAA Compliant Infrastructure</p>
<p className="text-sm text-on-surface-variant">State-of-the-art security protocols</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary" data-icon="bolt">bolt</span>
</div>
<div>
<p className="font-body-md font-semibold text-on-surface">Real-time Insights</p>
<p className="text-sm text-on-surface-variant">Instant processing of patient metrics</p>
</div>
</div>
</div>
</div>

<div className="w-full max-w-md">
<div className="glass-panel rounded-xl p-8 shadow-[0_32px_64px_-16px_rgba(0,88,191,0.1)]">
<div className="mb-8">
<h2 className="font-h2 text-h2 text-on-surface mb-2">Create Account</h2>
<p className="text-on-surface-variant font-body-md">Fill in your professional details to get started.</p>
</div>
<form className="space-y-5">

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="name">FULL NAME</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" data-icon="person">person</span>
<input className="w-full pl-12 pr-4 py-3 bg-white/40 border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-lg font-body-md transition-all outline-none" id="name" placeholder="Dr. Julian Sterling" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="email">MEDICAL EMAIL</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" data-icon="mail">mail</span>
<input className="w-full pl-12 pr-4 py-3 bg-white/40 border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-lg font-body-md transition-all outline-none" id="email" placeholder="j.sterling@clinical.org" type="email"/>
</div>
</div>

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="password">PASSWORD</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" data-icon="lock">lock</span>
<input className="w-full pl-12 pr-4 py-3 bg-white/40 border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-lg font-body-md transition-all outline-none" id="password" placeholder="••••••••••••" type="password"/>
</div>
</div>

<div className="flex items-start gap-3 py-2">
<div className="flex items-center h-5">
<input className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" id="terms" name="terms" type="checkbox"/>
</div>
<div className="text-sm">
<label className="text-on-surface-variant font-body-md leading-tight" htmlFor="terms">
                                I confirm that I am a licensed medical professional and agree to the <a className="text-primary font-semibold hover:underline" href="#">Medical Terms of Service</a>.
                            </label>
</div>
</div>

<button className="w-full py-4 bg-primary text-on-primary font-body-md font-semibold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all duration-200 mt-2 flex items-center justify-center gap-2" type="submit">
                        Create Professional Account
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</form>
<div className="mt-8 pt-8 border-t border-outline-variant/30 text-center">
<p className="font-body-md text-on-surface-variant">
                        Already have an account? 
                        <a className="text-primary font-semibold hover:underline" href="#">Login</a>
</p>
</div>
</div>

<div className="mt-8 flex justify-between px-4 grayscale opacity-60">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[20px]" data-icon="shield">shield</span>
<span className="text-[10px] font-label-caps tracking-tighter">SECURE</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[20px]" data-icon="encrypted">encrypted</span>
<span className="text-[10px] font-label-caps tracking-tighter">ENCRYPTED</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[20px]" data-icon="verified">verified</span>
<span className="text-[10px] font-label-caps tracking-tighter">CERTIFIED</span>
</div>
</div>
</div>
</main>

<footer className="w-full py-8 px-container-padding mt-auto">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 dark:text-slate-400 font-manrope text-sm">
<div className="font-bold text-slate-900">DiaPredict AI</div>
<div className="flex gap-6">
<a className="hover:text-blue-500 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-blue-500 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-blue-500 transition-colors" href="#">Medical Disclaimer</a>
</div>
<p>© 2024 DiaPredict AI. Clinical precision, empathetic intelligence.</p>
</div>
</footer>
    </form>
  );
}
