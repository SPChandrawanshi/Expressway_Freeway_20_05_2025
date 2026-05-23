import React from 'react';
import { motion } from 'framer-motion';
import { 
  Siren, Users, Timer, CheckCircle2, 
  AlertCircle, ChevronRight, Search, 
  Filter, Play, Activity, Shield
} from 'lucide-react';

const OperationalDashboard = ({ title, subtitle, items = [] }) => {
  return (
    <div className="h-full flex flex-col space-y-8 overflow-y-auto no-scrollbar">
      {/* Banner */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl flex items-center justify-between shadow-xl relative overflow-hidden">
         <div className="relative z-10 flex items-center gap-8">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
               <Activity size={32} className="text-primary animate-pulse" />
            </div>
            <div>
               <h1 className="text-2xl font-black uppercase tracking-tight mb-1">{title}</h1>
               <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{subtitle}</p>
            </div>
         </div>
         <div className="flex items-center gap-10 relative z-10">
            <div className="text-right">
               <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">Response Time</p>
               <h3 className="text-3xl font-black text-primary">04:12 <span className="text-xs text-slate-600">MIN</span></h3>
            </div>
            <div className="h-12 w-[1px] bg-slate-800"></div>
            <div className="text-right">
               <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">Active Units</p>
               <h3 className="text-3xl font-black text-emerald-400">84 <span className="text-xs text-slate-600">UNITS</span></h3>
            </div>
         </div>
      </div>

      <div className="flex-1 grid grid-cols-1 xl:grid-cols-4 gap-8">
         <div className="xl:col-span-3 bg-white rounded-3xl border border-slate-200/50 shadow-sm flex flex-col overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-3">
                  <Timer size={20} className="text-primary" /> Active Queue Control
               </h3>
               <div className="flex items-center gap-4">
                  <div className="flex items-center bg-slate-50 border border-slate-100 rounded-2xl px-4 py-2.5 w-64 focus-within:border-primary/30 transition-all">
                     <Search size={16} className="text-slate-400" />
                     <input type="text" placeholder="Filter Queue..." className="bg-transparent border-none outline-none text-[11px] px-3 w-full font-black uppercase text-slate-900 placeholder:text-slate-300" />
                  </div>
                  <button className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-400"><Filter size={18} /></button>
               </div>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar">
               {items.map((item, idx) => (
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={idx} 
                    className="flex items-center justify-between p-5 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-2xl transition-all cursor-pointer group shadow-sm hover:shadow-lg"
                 >
                    <div className="flex items-center gap-6">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${item.severity === 'critical' ? 'bg-rose-500 shadow-rose-200' : 'bg-primary shadow-primary/20'}`}>
                          {item.icon ? <item.icon size={26} strokeWidth={1.5} /> : <AlertCircle size={26} strokeWidth={1.5} />}
                       </div>
                       <div>
                          <div className="flex items-center gap-3">
                             <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-tight">{item.id} • {item.type}</h4>
                             <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-full ${item.severity === 'critical' ? 'bg-rose-100 text-rose-600' : 'bg-primary/10 text-primary'}`}>
                                {item.severity}
                             </span>
                          </div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase mt-1 tracking-widest">{item.location} • {item.timestamp}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="text-right hidden sm:block">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Handler</p>
                          <p className="text-[11px] font-black text-slate-700 uppercase tracking-tight">{item.handler}</p>
                       </div>
                       <button className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center border border-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                          <ChevronRight size={20} />
                       </button>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>

         <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm p-8 group">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-8 flex items-center gap-3">
                  <Users size={20} className="text-primary" /> Response Teams
               </h3>
               <div className="space-y-6">
                  {[
                    { n: 'Sector-A Recovery', s: 'Active', c: 'bg-emerald-500' },
                    { n: 'Ambulance-04', s: 'En-Route', c: 'bg-primary' },
                    { n: 'Police-09', s: 'Standby', c: 'bg-amber-500' }
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <div className={`w-3 h-3 rounded-full ${p.c} animate-pulse`}></div>
                       <div className="flex-1">
                          <p className="text-[11px] font-black text-slate-900 uppercase tracking-tighter mb-0.5">{p.n}</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{p.s}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest mt-8 hover:bg-black transition-all">
                  Dispatch Unit
               </button>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Operation Protocol</h3>
                  <h4 className="text-xl font-black leading-tight uppercase">All Nodes Secure</h4>
               </div>
               <div className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-150 transition-all duration-700">
                  <Shield size={140} />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default OperationalDashboard;
