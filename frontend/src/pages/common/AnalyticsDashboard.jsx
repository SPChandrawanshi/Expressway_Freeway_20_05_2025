import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, DollarSign, Download, 
  Calendar, ArrowUpRight, ArrowDownRight, Filter
} from 'lucide-react';

const AnalyticsDashboard = ({ title, subtitle, metrics = [] }) => {
  return (
    <div className="h-full flex flex-col space-y-8 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm">
         <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{title}</h1>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">{subtitle}</p>
         </div>
         <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-3 bg-slate-50 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100">
               <Calendar size={16} /> Last 30 Days
            </button>
            <button className="flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
               <Download size={16} /> Export Reports
            </button>
         </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm group hover:border-primary/30 transition-all"
          >
             <div className="flex justify-between mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                   {m.icon ? <m.icon size={24} /> : <TrendingUp size={24} />}
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1 ${m.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                   {m.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {m.change}
                </div>
             </div>
             <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</h4>
             <h3 className="text-3xl font-black text-slate-900 tracking-tight">{m.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Charts Block */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/50 shadow-sm p-8 flex flex-col relative overflow-hidden group">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-8 flex items-center gap-3">
               <BarChart3 size={20} className="text-primary" /> Performance Trends (2026)
            </h3>
            
            <div className="flex-1 flex items-end gap-4 pb-6 min-h-[200px]">
               {[40, 70, 45, 90, 65, 80, 55, 75, 60, 85, 95, 70].map((h, idx) => (
                 <div key={idx} className="flex-1 flex flex-col items-center gap-4 group/bar">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: idx * 0.05, duration: 1 }}
                      className={`w-full rounded-t-xl transition-all duration-500 ${idx === 10 ? 'bg-primary' : 'bg-slate-100 group-hover/bar:bg-primary/20'}`}
                    ></motion.div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][idx]}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm p-8 flex flex-col justify-between">
            <div>
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-8">Role Distribution</h3>
               <div className="space-y-6">
                  {[
                    { l: 'Revenue Flow', v: '84%', c: 'bg-primary' },
                    { l: 'System Integrity', v: '99%', c: 'bg-emerald-500' },
                    { l: 'Alert Response', v: '12%', c: 'bg-amber-500' }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-3">
                       <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                          <span className="text-slate-400">{item.l}</span>
                          <span className="text-slate-900">{item.v}</span>
                       </div>
                       <div className="w-full h-2.5 bg-slate-50 rounded-full overflow-hidden p-0.5 border border-slate-100">
                          <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: item.v }}
                             transition={{ duration: 1.5, delay: 0.5 }}
                             className={`h-full rounded-full ${item.c}`}
                          ></motion.div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
               <p className="text-[11px] font-black text-primary uppercase tracking-widest">AI Consensus Active</p>
               <h4 className="text-sm font-black text-slate-900 uppercase mt-2 tracking-tighter">Optimization Phase 4.2</h4>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
