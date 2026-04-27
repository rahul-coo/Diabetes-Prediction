import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => { e.preventDefault(); navigate('/dashboard'); };
  return (
    <form onSubmit={handleSubmit}>
      
<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="medical-bg-shape w-[600px] h-[600px] bg-primary/10 -top-48 -left-24"></div>
<div className="medical-bg-shape w-[500px] h-[500px] bg-secondary-container/20 bottom-12 -right-12"></div>
<div className="medical-bg-shape w-[300px] h-[300px] bg-tertiary-fixed/30 top-1/2 left-1/3"></div>

<div className="absolute inset-0 opacity-10 mix-blend-overlay" data-alt="Abstract ethereal medical background with DNA helix structures and soft blue light rays in a minimalist clean setting" style={{'backgroundImage': "url('/images/image_2.jpg')", 'backgroundSize': 'cover', 'backgroundPosition': 'center'}}>
</div>
</div>

<main className="relative z-10 w-full max-w-md px-container-padding">

<div className="flex flex-col items-center mb-stack-md">
<div className="mb-4">
<span className="material-symbols-outlined text-primary text-5xl" style={{'fontVariationSettings': "'FILL' 1"}}>
                    monitoring
                </span>
</div>
<h1 className="font-h1 text-h1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-container">
                DiaPredict AI
            </h1>
<p className="font-body-md text-on-surface-variant mt-2 text-center">
                Clinical precision, empathetic intelligence.
            </p>
</div>

<div className="glass-level-2 rounded-xl p-8 shadow-sm">
<h2 className="font-h3 text-h3 mb-stack-md text-on-surface">Welcome back</h2>
<form className="space-y-stack-md">

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">Email Address</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                            mail
                        </span>
<input className="w-full pl-10 pr-4 py-3 bg-white/20 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline" id="email" name="email" placeholder="doctor@diapredict.ai" required="" type="email"/>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="password">Password</label>
<a className="font-label-caps text-label-caps text-primary hover:underline transition-all" href="#">Forgot?</a>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                            lock
                        </span>
<input className="w-full pl-10 pr-10 py-3 bg-white/20 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline" id="password" name="password" placeholder="••••••••" required="" type="password"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">
                                visibility
                            </span>
</button>
</div>
</div>

<button className="w-full bg-primary text-on-primary py-4 rounded-lg font-h3 text-h3 flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20" type="submit">
                    Login
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
</button>
</form>
<div className="mt-stack-md pt-stack-md border-t border-white/20 text-center">
<p className="font-body-md text-on-surface-variant">
                    Don't have an account? 
                    <a className="text-primary font-semibold hover:underline" href="#">Request access</a>
</p>
</div>
</div>

<footer className="mt-stack-lg text-center">
<p className="font-label-caps text-label-caps text-on-surface-variant/60 leading-relaxed max-w-xs mx-auto">
                Secure clinical portal. By logging in, you agree to our HIPAA compliant Terms of Service.
            </p>
</footer>
</main>

<div className="hidden lg:block fixed right-12 top-1/2 -translate-y-1/2 w-64 h-96 glass-level-2 rounded-xl p-6 overflow-hidden">
<div className="h-full flex flex-col justify-between">
<div>
<div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
<h4 className="font-h3 text-h3 text-on-surface leading-tight">Predictive Insight</h4>
<p className="mt-2 text-on-surface-variant text-sm">Real-time patient risk assessment powered by clinical-grade AI.</p>
</div>
<div className="relative h-32 rounded-lg bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up of a high-tech digital medical dashboard showing vibrant data visualizations and health metrics in soft blue tones" src="/images/image_3.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</div>
    </form>
  );
}
