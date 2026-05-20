import React from 'react';
import { motion } from 'framer-motion';
import { Siren, Phone, MapPin, Activity, ShieldCheck, Zap, Radio, BellRing } from 'lucide-react';

const AmbulanceTracking = () => {
  const units = [
    { id: 'UNIT-SOS-01', location: 'KM 14.5 (North)', status: 'En-Route', crew: 'Paramedic Team A', eta: '3 mins' },
    { id: 'UNIT-SOS-04', location: 'Sector 12 Hub', status: 'Standby', crew: 'Paramedic Team D', eta: '-' },
    { id: 'UNIT-SOS-09', location: 'KM 82.1 (South)', status: 'On-Site', crew: 'Paramedic Team K', eta: 'Reached' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         {/* Live SOS Map Simulation */}
         <div className="xl:col-span-2 bg-slate-100 rounded-[40px] border border-slate-200 shadow-sm relative h-[450px] overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/80.12,27.12,10,0/800x450?access_token=your_token')] bg-cover bg-center opacity-40 grayscale"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-32 h-32 bg-rose-500/20 rounded-full flex items-center justify-center border border-rose-500/30 backdrop-blur-sm"
               >
                  <div className="w-4 h-4 bg-rose-600 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.8)]"></div>
               </motion.div>
            </div>
            <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-sm">
               <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Active SOS Node: KM 42.1</span>
            </div>
            <div className="absolute bottom-6 right-6 flex flex-col gap-3">
               <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-100 text-primary hover:scale-110 transition-all">
                  <Maximize2 size={20} />
               </button>
            </div>
         </div>

         {/* Unit Deployment */}
         <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm p-8 overflow-hidden">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-8 flex items-center gap-3">
               <BellRing size={20} className="text-rose-500 animate-bounce" /> Unit Deployment
            </h3>
            <div className="space-y-6">
               {units.map((u, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-slate-100 hover:border-primary/30 transition-all group">
                     <div className={`absolute left-[-5px] top-0 w-2 h-2 rounded-full ${u.status === 'En-Route' ? 'bg-amber-500' : u.status === 'On-Site' ? 'bg-rose-500' : 'bg-emerald-500'}`}></div>
                     <div className="flex justify-between items-start mb-1">
                        <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{u.id}</h4>
                        <span className="text-[8px] font-black text-primary uppercase tracking-widest">{u.status}</span>
                     </div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{u.location}</p>
                     <div className="mt-3 flex items-center justify-between">
                        <span className="text-[9px] font-black text-slate-600 uppercase">{u.crew}</span>
                        <span className="text-[10px] font-black text-primary uppercase">{u.eta}</span>
                     </div>
                  </div>
               ))}
            </div>
            <button className="w-full mt-10 py-4 bg-rose-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-rose-200 hover:bg-rose-700 transition-all">
               Emergency Broadcast
            </button>
         </div>
      </div>
    </div>
  );
};

const Maximize2 = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
);

export default AmbulanceTracking;