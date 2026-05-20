import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Clock, Filter, Share2, Activity } from 'lucide-react';

const TrafficDensity = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {[
            { label: 'Avg Speed', value: '82 KM/H', delta: '+4.2%', icon: Activity, color: 'text-emerald-500' },
            { label: 'Vehicle Count', value: '14,882', delta: '+12.5%', icon: Users, color: 'text-primary' },
            { label: 'Peak Density', value: '82%', delta: '-2.1%', icon: BarChart3, color: 'text-amber-500' },
            { label: 'Wait Time', value: '4.2 MIN', delta: '+0.5%', icon: Clock, color: 'text-rose-500' },
         ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm relative overflow-hidden group">
               <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100 ${stat.color} group-hover:scale-110 transition-transform`}>
                     <stat.icon size={20} />
                  </div>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${stat.delta.startsWith('+') ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
                     {stat.delta}
                  </span>
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
               <h3 className="text-2xl font-black text-slate-900 tracking-tighter mt-1">{stat.value}</h3>
            </div>
         ))}
      </div>

      <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
         <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-3">
               <TrendingUp size={20} className="text-primary" /> Multi-Axle Density Analysis
            </h3>
            <div className="flex gap-3">
               <button className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-black text-slate-500 uppercase tracking-widest">Weekly</button>
               <button className="p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-primary transition-all">
                  <Share2 size={16} />
               </button>
            </div>
         </div>
         {/* Visualization Simulation */}
         <div className="h-64 flex items-end gap-2 px-4 border-l border-b border-slate-100 relative">
            <div className="absolute top-0 left-0 text-[8px] font-black text-slate-300 uppercase -translate-x-10">100%</div>
            <div className="absolute bottom-0 left-0 text-[8px] font-black text-slate-300 uppercase -translate-x-10 translate-y-6">Density</div>
            {[80, 40, 90, 60, 45, 75, 30, 85, 50, 95, 70, 55].map((h, i) => (
               <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-primary/80 to-primary rounded-t-lg relative group"
               >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                     {h}% Cap
                  </div>
               </motion.div>
            ))}
         </div>
         <div className="flex justify-between px-4 mt-8">
            {['00h', '02h', '04h', '06h', '08h', '10h', '12h', '14h', '16h', '18h', '20h', '22h'].map((t, i) => (
               <span key={i} className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{t}</span>
            ))}
         </div>
      </div>
    </div>
  );
};

export default TrafficDensity;
