import React from 'react';
import { motion } from 'framer-motion';
import { Siren, Activity, Phone, ShieldCheck, MapPin, Zap, BellRing, User } from 'lucide-react';

const EmergencyAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         {/* Live Deployment Hub */}
         <div className="xl:col-span-2 bg-[#CAD3C8] rounded-[48px] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                     <Siren size={24} className="text-rose-600" />
                  </div>
                  <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Emergency Support Matrix</h1>
               </div>
               <h2 className="text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-6">
                  Ready for <br /> Immediate <br /> Deployment.
               </h2>
               <div className="flex gap-6 mt-10">
                  <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/40 min-w-[150px]">
                     <p className="text-[9px] font-black text-slate-600 uppercase mb-1">Ambulance Units</p>
                     <h4 className="text-2xl font-black text-slate-900">14 Active</h4>
                  </div>
                  <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/40 min-w-[150px]">
                     <p className="text-[9px] font-black text-slate-600 uppercase mb-1">Patrol Units</p>
                     <h4 className="text-2xl font-black text-slate-900">08 Active</h4>
                  </div>
               </div>
            </div>
            <div className="absolute right-[-5%] top-[-5%] w-[40%] h-[110%] bg-white/20 blur-[80px] rounded-full pointer-events-none"></div>
         </div>

         {/* Dispatch Alerts */}
         <div className="bg-white p-8 rounded-[48px] border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-3">
               <BellRing size={18} className="text-rose-500" /> Dispatch Feed
            </h3>
            <div className="space-y-6 flex-1 overflow-y-auto no-scrollbar pr-2">
               {[
                 { t: 'Medical SOS', l: 'Sector 4', s: 'En-Route', c: 'text-rose-500' },
                 { t: 'Fire Hazard', l: 'KM 82.1', s: 'Standby', c: 'text-amber-500' },
                 { t: 'Police Request', l: 'Toll Plaza A', s: 'On-Site', c: 'text-emerald-500' }
               ].map((feed, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer group">
                     <div className="flex justify-between mb-2">
                        <span className={`text-[9px] font-black uppercase ${feed.c}`}>{feed.t}</span>
                        <span className="text-[8px] font-black text-slate-400 uppercase">{feed.s}</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-tight">
                        <MapPin size={12} className="text-slate-400" /> {feed.l}
                     </div>
                  </div>
               ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
               Global SOS Override
            </button>
         </div>
      </div>
    </div>
  );
};

export default EmergencyAdminDashboard;
