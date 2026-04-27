import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      
<nav className="sticky top-0 z-50 w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-white/40 dark:border-slate-800/40 shadow-sm backdrop-blur-[24px]">
<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-manrope antialiased tracking-tight">
<div className="flex items-center gap-8">
<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">DiaPredict AI</span>
<div className="hidden md:flex items-center gap-6">
<Link className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1" to="/dashboard">Dashboard</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" to="/">Home</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" to="/dashboard">Predictions</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" to="/">About</Link>
</div>
</div>
</div>
</nav>
<main>

<section className="relative overflow-hidden pt-20 pb-32 px-6">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(29,112,231,0.05),transparent_70%)]"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-stack-md">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed/30 text-on-secondary-container rounded-full border border-secondary-container/20">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-label-caps text-label-caps">99.4% CLINICAL ACCURACY</span>
</div>
<h1 className="font-h1 text-h1 text-on-surface leading-tight">
                        Predicting Health with <br/>
<span className="text-primary">Empathetic Intelligence.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        DiaPredict AI leverages advanced machine learning to provide clinical-grade diabetic vulnerability predictions and actionable metabolic insights.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<Link to="/dashboard" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95 flex items-center gap-2">
                            Start Risk Assessment
                            <span className="material-symbols-outlined">arrow_forward</span>
</Link>
<button className="px-8 py-4 glass-card rounded-xl font-semibold text-primary hover:bg-white/80 transition-all active:scale-95">
                            View Methodology
                        </button>
</div>
</div>
<div className="relative">
<div className="glass-card rounded-[2rem] p-8 ai-glow relative z-10">
<div className="flex justify-between items-start mb-8">
<div>
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">REAL-TIME ANALYSIS</p>
<h3 className="font-h3 text-h3">Metabolic Stability</h3>
</div>
<div className="px-3 py-1 bg-tertiary-container/20 text-tertiary rounded-lg font-semibold text-sm">STABLE</div>
</div>
<div className="h-48 flex items-end gap-3 mb-6">

<div className="flex-1 bg-primary/20 rounded-t-lg h-[60%]"></div>
<div className="flex-1 bg-primary/40 rounded-t-lg h-[80%]"></div>
<div className="flex-1 bg-primary/30 rounded-t-lg h-[40%]"></div>
<div className="flex-1 bg-primary rounded-t-lg h-[95%]"></div>
<div className="flex-1 bg-primary/50 rounded-t-lg h-[70%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-lg h-[55%]"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-surface-container-low rounded-xl">
<p className="text-sm text-on-surface-variant">Glucose Index</p>
<p className="font-stat-value text-stat-value text-primary">102 <span className="text-sm font-normal text-on-surface-variant">mg/dL</span></p>
</div>
<div className="p-4 bg-surface-container-low rounded-xl">
<p className="text-sm text-on-surface-variant">Prediction Conf.</p>
<p className="font-stat-value text-stat-value text-tertiary">98.2%</p>
</div>
</div>
</div>

<div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-xl z-20 hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">analytics</span>
</div>
<div>
<p className="text-sm font-bold">Predictive Alert</p>
<p className="text-xs text-on-surface-variant">Pattern detected: low variance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-lowest px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="font-label-caps text-label-caps text-primary tracking-widest mb-4 uppercase">Features</p>
<h2 className="font-h2 text-h2 mb-6">Designed for Clinical Precision</h2>
<p className="font-body-md text-on-surface-variant">Our ML models are trained on diverse datasets to provide the most accurate metabolic forecasting available to the public.</p>
</div>
<div className="grid md:grid-cols-12 gap-6">

<div className="md:col-span-8 glass-card rounded-3xl p-10 flex flex-col justify-between min-h-[400px] bg-gradient-to-br from-white/80 to-blue-50/50">
<div className="max-w-md">
<span className="material-symbols-outlined text-4xl text-primary mb-6">psychology</span>
<h3 className="font-h3 text-h3 mb-4">Neural Predictive Engine</h3>
<p className="text-on-surface-variant font-body-md">Utilizing deep learning architectures to identify subtle metabolic shifts before they manifest as physiological symptoms.</p>
</div>
<div className="mt-8 flex gap-2">
<span className="px-4 py-2 bg-white/60 border border-white rounded-full text-sm font-medium">RNN Architectures</span>
<span className="px-4 py-2 bg-white/60 border border-white rounded-full text-sm font-medium">Time-Series Analysis</span>
</div>
</div>

<div className="md:col-span-4 glass-card rounded-3xl p-10 bg-gradient-to-br from-tertiary/10 to-transparent">
<span className="material-symbols-outlined text-4xl text-tertiary mb-6">shield_with_heart</span>
<h3 className="font-h3 text-h3 mb-4">Privacy First</h3>
<p className="text-on-surface-variant font-body-md">Your medical data is encrypted with HIPAA-grade protocols. We never sell your personal information.</p>
</div>

<div className="md:col-span-4 glass-card rounded-3xl p-10">
<span className="material-symbols-outlined text-4xl text-secondary mb-6">devices_fold</span>
<h3 className="font-h3 text-h3 mb-4">Seamless Sync</h3>
<p className="text-on-surface-variant font-body-md">Integrates with Apple Health, Google Fit, and major CGM devices automatically.</p>
</div>

<div className="md:col-span-8 glass-card rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-primary/5 to-secondary/5">
<div className="flex-1">
<h3 className="font-h3 text-h3 mb-4">Actionable Insights</h3>
<p className="text-on-surface-variant font-body-md">Receive personalized recommendations for diet and exercise tailored to your metabolic response patterns.</p>
</div>
<div className="flex-1 w-full">
<img className="rounded-2xl w-full h-48 object-cover shadow-lg" data-alt="clean digital dashboard showing medical charts and data visualizations with a soft blue and white aesthetic" src="/images/image_1.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">
<img className="rounded-[3rem] shadow-2xl" data-alt="modern clinical research lab with soft lighting and medical professionals working in the background in a blurred aesthetic" src="/images/image_0.jpg"/>
<div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-3xl max-w-xs shadow-2xl hidden md:block">
<p className="font-h2 text-h2 text-primary">15+</p>
<p className="font-body-md font-semibold mb-2">Research Partners</p>
<p className="text-sm text-on-surface-variant">Collaborating with global endocrinology experts to refine our algorithms.</p>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<p className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Our Mission</p>
<h2 className="font-h2 text-h2">Democratizing Preventive Metabolic Health</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                            DiaPredict AI was founded on the belief that everyone should have access to the same predictive power used by the world's leading medical institutions. 
                        </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]" style={{'fontVariationSettings': "'FILL' 1"}}>check</span>
</div>
<p className="font-body-md">Focus on evidence-based machine learning models.</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]" style={{'fontVariationSettings': "'FILL' 1"}}>check</span>
</div>
<p className="font-body-md">Reduce the global burden of undiagnosed diabetic conditions.</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[16px]" style={{'fontVariationSettings': "'FILL' 1"}}>check</span>
</div>
<p className="font-body-md">Bridge the gap between raw data and empathetic care.</p>
</div>
</div>
<div className="pt-6">
<a className="font-semibold text-primary inline-flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                                Learn about our medical board
                                <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
<h2 className="font-h2 text-h2 mb-6">Take Control of Your <br/>Metabolic Future.</h2>
<p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">
                    Join 50,000+ users who are using DiaPredict AI to monitor their health with clinical precision.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link to="/dashboard" className="px-10 py-5 bg-primary text-on-primary rounded-2xl font-bold shadow-xl shadow-primary/30 hover:scale-[1.03] transition-transform active:scale-95 inline-block">
                        Get Started Free
                    </Link>
<button className="px-10 py-5 glass-card text-on-surface rounded-2xl font-bold hover:bg-white/80 transition-all active:scale-95">
                        Request a Demo
                    </button>
</div>
<p className="mt-8 text-sm text-on-surface-variant">No credit card required. HIPAA compliant. Cancel anytime.</p>
</div>
</section>
</main>

<footer className="w-full bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="text-lg font-bold text-slate-900 dark:text-white">DiaPredict AI</span>
<p className="font-manrope text-sm text-slate-500 dark:text-slate-400 max-w-xs text-center md:text-left">
                    © 2024 DiaPredict AI. Clinical precision, empathetic intelligence.
                </p>
</div>
<div className="flex flex-wrap justify-center gap-8 font-manrope text-sm text-slate-500 dark:text-slate-400">
<a className="hover:text-blue-500 transition-all hover:underline" href="#">Privacy Policy</a>
<a className="hover:text-blue-500 transition-all hover:underline" href="#">Terms of Service</a>
<a className="hover:text-blue-500 transition-all hover:underline" href="#">Medical Disclaimer</a>
<a className="hover:text-blue-500 transition-all hover:underline" href="#">Support</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-[20px]">public</span>
</a>
<a className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-[20px]">share</span>
</a>
</div>
</div>
</footer>
    </>
  );
}
