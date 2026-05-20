import React from 'react';
import { motion } from 'framer-motion';
import { Map, MapPin, Activity, ShieldCheck, Zap, AlertTriangle, Radio, Navigation } from 'lucide-react';

const HighwayStatus = () => {
  const sections = [
    { id: 'SEC-A', name: 'Yamuna Expressway (KM 0-50)', status: 'Optimal', health: 98, traffic: 'Low', icon: Zap },
    { id: 'SEC-B', name: 'Yamuna Expressway (KM 50-120)', status: 'Warning', health: 74, traffic: 'Heavy', icon: AlertTriangle },
    { id: 'SEC-C', name: 'Agra Connection (KM 120-165)', status: 'Optimal', health: 92, traffic: 'Moderate', icon: Activity },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Visual Header */}
      <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
         <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="flex items-center gap-8">
               <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center border border-primary/30 backdrop-blur-xl">
                  <Navigation size={40} className="text-primary" />
               </div>
               <div>
                  <h1 className="text-3xl font-black uppercase tracking-tighter">Highway Corridor Status</h1>
                  <div className="flex items-center gap-4 mt-2">
                     <span className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        National Grid: Synced
                     </span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-l border-slate-700 pl-4">
                        Asset Node: HW-AGRA-NODE-01
                     </span>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-8">
               <div className="text-right">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Distance</p>
                  <h4 className="text-2xl font-black tracking-tight">165.23 <span className="text-xs text-slate-600 uppercase ml-1">KM</span></h4>
               </div>
               <div className="h-12 w-[1px] bg-slate-800"></div>
               <div className="text-right">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Active Assets</p>
                  <h4 className="text-2xl font-black tracking-tight">1,204 <span className="text-xs text-slate-600 uppercase ml-1">NODES</span></h4>
               </div>
            </div>
         </div>
         {/* Background Visual */}
         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         {/* Section List */}
         <div className="xl:col-span-2 space-y-6">
            {sections.map((sec, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={sec.id} 
                className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer group"
              >
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                       <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                          sec.status === 'Optimal' ? 'bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white' : 'bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white'
                       }`}>
                          <sec.icon size={32} />
                       </div>
                       <div>
                          <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{sec.id}</h4>
                          <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{sec.name}</h3>
                          <div className="flex items-center gap-3 mt-2">
                             <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase">
                                <Activity size={12} /> Traffic: <span className={sec.traffic === 'Heavy' ? 'text-rose-500' : 'text-emerald-500'}>{sec.traffic}</span>
                             </div>
                             <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                             <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase">
                                <ShieldCheck size={12} /> Status: <span className={sec.status === 'Optimal' ? 'text-emerald-500' : 'text-rose-500'}>{sec.status}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Corridor Health</p>
                       <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{sec.health}%</h3>
                    </div>
                 </div>
                 {/* Health Bar */}
                 <div className="mt-8 w-full h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                    <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${sec.health}%` }}
                       transition={{ duration: 1, delay: 0.5 }}
                       className={`h-full rounded-full ${sec.status === 'Optimal' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                    ></motion.div>
                 </div>
              </motion.div>
            ))}
         </div>

         {/* Sidebar Intel */}
         <div className="space-y-8">
            <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden group">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-8 flex items-center gap-3">
                  <Radio size={20} className="text-primary animate-pulse" /> Telemetry Feed
               </h3>
               <div className="space-y-6">
                  {[
                    { l: 'Weather Status', v: 'Clear / 32°C', c: 'text-amber-500' },
                    { l: 'Network Latency', v: '12ms', c: 'text-emerald-500' },
                    { l: 'Storage Grid', v: '84% Full', c: 'text-primary' },
                    { l: 'Protocol Link', v: 'SECURE', c: 'text-primary' }
                  ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all cursor-pointer">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.l}</span>
                       <span className={`text-[10px] font-black uppercase ${t.c}`}>{t.v}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-primary p-8 rounded-[40px] text-white shadow-xl shadow-primary/20 group cursor-pointer relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Emergency Link</p>
                  <h4 className="text-xl font-black uppercase leading-tight tracking-tighter">Direct Node Access: <br /> Sector-A Central</h4>
                  <button className="mt-8 w-full py-4 bg-white text-primary rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all">
                     Initiate Protocol
                  </button>
               </div>
               <div className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-125 transition-transform duration-1000">
                  <MapPin size={160} />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HighwayStatus;