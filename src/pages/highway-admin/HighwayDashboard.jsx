import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Map, AlertTriangle, Radio, Activity, Zap, ShieldCheck, MapPin } from 'lucide-react';

const HighwayAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
         {/* Live Operations Map HUD */}
         <div className="xl:col-span-3 bg-white p-8 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden min-h-[450px]">
            <div className="flex justify-between items-start mb-8 relative z-10">
               <div>
                  <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Highway Intelligence Matrix</h1>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Real-time Sector-wise Corridor Tracking</p>
               </div>
               <div className="flex gap-4">
                  <div className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 flex items-center gap-3">
                     <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Network Online</span>
                  </div>
               </div>
            </div>
            
            {/* Visual Corridor Representation */}
            <div className="relative h-48 bg-slate-50 rounded-[40px] border border-slate-100 mt-12 flex items-center px-12 overflow-hidden">
               <div className="absolute inset-x-0 h-4 bg-slate-200/50"></div>
               <div className="w-full flex justify-between relative z-10">
                  {[1, 2, 3, 4, 5].map((node) => (
                    <motion.div 
                      key={node}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-lg cursor-pointer group"
                    >
                       <MapPin size={20} className={node === 3 ? 'text-rose-500' : 'text-primary'} />
                       {node === 3 && (
                         <div className="absolute -top-12 bg-rose-500 text-white text-[8px] font-black px-2 py-1 rounded-lg uppercase tracking-widest">Incident</div>
                       )}
                    </motion.div>
                  ))}
               </div>
               <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
               {[
                  { label: 'Avg Transit Time', value: '1.2 Hrs', icon: Clock },
                  { label: 'Lane Utilization', value: '62%', icon: Activity },
                  { label: 'Active Patrols', value: '14 Units', icon: ShieldCheck }
               ].map((m, i) => (
                  <div key={i} className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
                     <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{m.value}</h4>
                  </div>
               ))}
            </div>
         </div>

         {/* Sector Alerts Panel */}
         <div className="bg-slate-900 rounded-[48px] p-8 text-white relative overflow-hidden group">
            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-3">
               <Radio size={20} className="text-primary animate-pulse" /> Critical Node Alerts
            </h3>
            <div className="space-y-6">
               {[
                 { t: 'Weather Alert', d: 'Heavy rain Sector 8', p: 'Medium', c: 'text-amber-500' },
                 { t: 'Congestion', d: 'KM 14 Blockage', p: 'High', c: 'text-rose-500' },
                 { t: 'Maintenance', d: 'Lane Closure KM 82', p: 'Low', c: 'text-primary' }
               ].map((alert, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                     <div className="flex justify-between mb-2">
                        <span className={`text-[9px] font-black uppercase ${alert.c}`}>{alert.t}</span>
                        <span className="text-[8px] text-slate-600 font-black uppercase tracking-widest">{alert.p}</span>
                     </div>
                     <p className="text-xs font-bold text-slate-300">{alert.d}</p>
                  </div>
               ))}
            </div>
            <button className="w-full mt-10 py-4 border border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
               Dispatch Emergency
            </button>
         </div>
      </div>
    </div>
  );
};

const Clock = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default HighwayAdminDashboard;
