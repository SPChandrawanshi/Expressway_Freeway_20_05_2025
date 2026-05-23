import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, CheckCircle2, AlertOctagon, TrendingUp, Search, PieChart, Activity } from 'lucide-react';

const FASTagAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         {/* FASTag Grid Intelligence */}
         <div className="xl:col-span-2 bg-white p-8 rounded-[48px] border border-slate-200 shadow-sm overflow-hidden relative">
            <div className="flex justify-between items-start mb-10 relative z-10">
               <div>
                  <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">FASTag Intelligence Hub</h1>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">National Electronic Toll Collection Protocol</p>
               </div>
               <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/10">
                  <CreditCard size={32} />
               </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 relative z-10">
               {[
                  { label: 'Settlement Ratio', value: '99.2%', icon: CheckCircle2, color: 'text-emerald-500' },
                  { label: 'Blacklisted Tags', value: '1,402', icon: AlertOctagon, color: 'text-rose-500' },
                  { label: 'Net Liquidity', value: '₹14.2 Cr', icon: DollarSign, color: 'text-primary' }
               ].map((stat, i) => (
                  <div key={i} className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                     <stat.icon size={20} className={`${stat.color} mb-3`} />
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                     <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mt-1">{stat.value}</h4>
                  </div>
               ))}
            </div>
            <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         </div>

         {/* Transaction Health */}
         <div className="bg-slate-900 rounded-[48px] p-8 text-white relative overflow-hidden group shadow-2xl">
            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-8">Transaction Health</h3>
            <div className="flex items-center justify-center h-48 relative">
               <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                  className="w-32 h-32 border-4 border-primary/20 rounded-full border-t-primary"
               />
               <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black tracking-tighter text-white">99.98%</span>
                  <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Uptime</span>
               </div>
            </div>
            <div className="mt-8 space-y-4">
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-400 font-bold">API Latency</span>
                  <span className="text-emerald-400">0.02ms</span>
               </div>
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-400 font-bold">Grid Protocol</span>
                  <span className="text-primary">SECURE</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default FASTagAdminDashboard;
