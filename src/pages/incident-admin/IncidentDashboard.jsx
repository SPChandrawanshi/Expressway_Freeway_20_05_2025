import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Siren, Timer, MapPin, ShieldAlert, Zap, Radio, PhoneCall } from 'lucide-react';

const IncidentAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
         <div className="xl:col-span-3 bg-white p-8 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-10 relative z-10">
               <div>
                  <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Incident Command Center</h1>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Real-time Emergency Response & Field Operations</p>
               </div>
               <div className="flex gap-4">
                  <div className="bg-rose-50 px-4 py-2 rounded-xl border border-rose-100 flex items-center gap-3">
                     <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Active SOS: 02</span>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 relative z-10">
               {[
                  { label: 'Avg Response Time', value: '4.2 MIN', icon: Timer, color: 'text-rose-500' },
                  { label: 'Active Incidents', value: '08', icon: AlertCircle, color: 'text-amber-500' },
                  { label: 'Resolved (Today)', value: '14', icon: ShieldAlert, color: 'text-emerald-500' }
               ].map((stat, i) => (
                  <div key={i} className="p-8 bg-slate-50/50 rounded-[32px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                     <stat.icon size={28} className={`${stat.color} mb-4`} />
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                     <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{stat.value}</h4>
                  </div>
               ))}
            </div>
            
            <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         </div>

         <div className="bg-rose-600 rounded-[48px] p-8 text-white relative overflow-hidden group shadow-2xl shadow-rose-200">
            <h3 className="text-[11px] font-black text-rose-200 uppercase tracking-widest mb-8 flex items-center gap-3">
               <PhoneCall size={20} className="animate-bounce" /> Dispatch Hotline
            </h3>
            <div className="space-y-6">
               <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-[9px] font-black text-rose-200 uppercase tracking-widest mb-1">Last Emergency Call</p>
                  <h4 className="text-lg font-black tracking-tight">Sector 8 Junction</h4>
                  <p className="text-[10px] font-bold mt-2 opacity-70">Ambulance dispatched - ETA 3m</p>
               </div>
            </div>
            <button className="w-full mt-12 py-4 bg-white text-rose-600 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all font-inter">
               Emergency Broadcast
            </button>
            <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:scale-125 transition-transform duration-1000">
               <Siren size={200} />
            </div>
         </div>
      </div>
    </div>
  );
};

export default IncidentAdminDashboard;
