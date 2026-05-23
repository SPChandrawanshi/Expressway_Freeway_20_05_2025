import React from 'react';
import { motion } from 'framer-motion';
import { Locate, Camera, Scan, Gauge, AlertTriangle, Play, Radio, Shield } from 'lucide-react';

const VehicleAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         {/* Live Surveillance Grid */}
         <div className="xl:col-span-2 bg-slate-900 rounded-[48px] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex justify-between items-start mb-12">
               <div>
                  <h1 className="text-2xl font-black uppercase tracking-tighter">Surveillance Hub</h1>
                  <div className="flex items-center gap-3 mt-2">
                     <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Active Multi-Point Scanning</span>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                     <Scan size={24} className="text-primary" />
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-8 relative z-10">
               {[
                  { label: 'Total Scans (1h)', value: '1,402', icon: Camera },
                  { label: 'Blacklisted Detections', value: '02', icon: AlertTriangle, color: 'text-rose-500' },
               ].map((stat, i) => (
                  <div key={i} className="p-8 bg-white/5 rounded-[32px] border border-white/5 group hover:bg-white/10 transition-all">
                     <stat.icon size={24} className={`${stat.color || 'text-primary'} mb-4`} />
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                     <h4 className="text-3xl font-black tracking-tighter">{stat.value}</h4>
                  </div>
               ))}
            </div>
            
            {/* Visual HUD Simulation */}
            <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none opacity-20">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2)_0%,transparent_70%)]"></div>
               <div className="w-full h-full border-l border-white/10 relative">
                  <motion.div 
                     animate={{ y: [0, 300, 0] }}
                     transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                     className="absolute inset-x-0 h-[1px] bg-primary shadow-[0_0_15px_rgba(37,99,235,1)]"
                  />
               </div>
            </div>
         </div>

         {/* Speed Statistics */}
         <div className="bg-white p-8 rounded-[48px] border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-8 flex items-center gap-3">
                  <Gauge size={20} className="text-primary" /> Speed Statistics
               </h3>
               <div className="space-y-8">
                  {[
                    { l: 'Avg Corridor Speed', v: '84 KM/H' },
                    { l: 'Max Logged Speed', v: '142 KM/H', c: 'text-rose-500' },
                    { l: 'Overspeed Ratio', v: '4.2%', c: 'text-amber-500' }
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-slate-50 pb-4">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.l}</span>
                       <span className={`text-xl font-black tracking-tight ${s.c || 'text-slate-900'}`}>{s.v}</span>
                    </div>
                  ))}
               </div>
            </div>
            <button className="w-full mt-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black text-slate-600 uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
               View Live ANPR
            </button>
         </div>
      </div>
    </div>
  );
};

export default VehicleAdminDashboard;
