import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, History, TrendingUp, Search, BarChart3, PieChart, CreditCard } from 'lucide-react';

const TollAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
         {[
            { label: 'Today Revenue', value: '₹8.4L', delta: '+12%', icon: DollarSign, color: 'text-emerald-500' },
            { label: 'Active Lanes', value: '24 / 24', delta: 'OK', icon: Zap, color: 'text-amber-500' },
            { label: 'FASTag Ratio', value: '94.2%', delta: '+2%', icon: CreditCard, color: 'text-primary' },
            { label: 'Avg Wait Time', value: '2.4s', delta: '-0.5s', icon: History, color: 'text-indigo-500' }
         ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-master relative overflow-hidden group hover:shadow-[rgba(0,0,0,0.4)_0px_20px_40px_-10px] hover:border-2 hover:border-[#6D214F] transition-all cursor-pointer">
               <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-100 ${stat.color} group-hover:rotate-12 transition-transform`}>
                     <stat.icon size={24} />
                  </div>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${stat.delta.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                     {stat.delta}
                  </span>
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
               <h3 className="text-2xl font-black text-slate-900 tracking-tighter mt-1">{stat.value}</h3>
            </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Live Collection Flow */}
         <div className="lg:col-span-2 bg-white p-8 rounded-[48px] border border-slate-200 shadow-master hover:border-2 hover:border-[#6D214F] transition-all">
            <div className="flex items-center justify-between mb-10">
               <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-3">
                     <TrendingUp size={20} className="text-primary" /> Live Collection Flow
                  </h3>
               </div>
               <div className="flex gap-2">
                  <button className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-500">Hourly</button>
               </div>
            </div>
            {/* Visual Flow Representation */}
            <div className="h-64 flex items-end gap-3 px-4 relative">
               {[40, 60, 45, 80, 55, 90, 75, 40, 60, 85, 45, 70].map((h, i) => (
                  <motion.div 
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ delay: i * 0.05, duration: 1 }}
                     key={i} 
                     className="flex-1 bg-primary/10 rounded-t-xl relative group hover:bg-primary transition-all cursor-pointer"
                  >
                     <div className="absolute inset-x-0 top-0 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></div>
                  </motion.div>
               ))}
               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.05]">
                  <div className="border-t border-slate-900 w-full"></div>
                  <div className="border-t border-slate-900 w-full"></div>
                  <div className="border-t border-slate-900 w-full"></div>
               </div>
            </div>
            <div className="flex justify-between px-4 mt-6">
               {['08h', '10h', '12h', '14h', '16h', '18h'].map((t, i) => (
                  <span key={i} className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{t}</span>
               ))}
            </div>
         </div>

         {/* Lane Distribution Hub */}
         <div className="bg-[#CAD3C8] rounded-[48px] p-8 flex flex-col justify-between relative overflow-hidden group shadow-master hover:border-2 hover:border-[#6D214F] transition-all">
            <div className="relative z-10">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-8">Lane Load Balancing</h3>
               <div className="space-y-6">
                  {[
                    { l: 'Express Lane 1', v: '92%', c: 'bg-emerald-500' },
                    { l: 'Express Lane 2', v: '84%', c: 'bg-emerald-500' },
                    { l: 'Manual Lane 3', v: '42%', c: 'bg-amber-500' },
                    { l: 'Oversize Lane 4', v: '18%', c: 'bg-indigo-500' }
                  ].map((lane, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2 text-slate-700">
                          <span>{lane.l}</span>
                          <span>{lane.v}</span>
                       </div>
                       <div className="h-1.5 bg-white/40 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: lane.v }}
                             className={`h-full ${lane.c}`}
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <button className="btn-premium bg-slate-900 text-white mt-12">
               Detailed Analytics
            </button>
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/20 blur-[80px] rounded-full pointer-events-none"></div>
         </div>
      </div>
    </div>
  );
};

export default TollAdminDashboard;
