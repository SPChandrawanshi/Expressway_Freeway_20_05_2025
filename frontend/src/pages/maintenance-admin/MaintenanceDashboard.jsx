import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, ClipboardList, Hammer, Package, AlertOctagon, TrendingUp, Zap, Clock } from 'lucide-react';

const MaintenanceAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
         {/* Maintenance Logistics Hub */}
         <div className="xl:col-span-3 bg-white p-8 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-10 relative z-10">
               <div>
                  <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Infrastructure Maintenance Hub</h1>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Asset Lifecycle & Field Operations Management</p>
               </div>
               <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-100">
                  <HardHat size={32} />
               </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 relative z-10">
               {[
                  { label: 'Work Orders Open', value: '24', icon: ClipboardList, color: 'text-amber-500' },
                  { label: 'Asset Health', value: '88%', icon: Zap, color: 'text-emerald-500' },
                  { label: 'Avg Repair Time', value: '48h', icon: Clock, color: 'text-primary' }
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

         {/* Critical Repairs Panel */}
         <div className="bg-slate-900 rounded-[48px] p-8 text-white relative overflow-hidden group shadow-2xl">
            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-8">Priority Repairs</h3>
            <div className="space-y-6">
               {[
                 { t: 'Pothole Repair', l: 'Sector 4', p: 'High', c: 'text-rose-500' },
                 { t: 'Gantry Light', l: 'KM 14.5', p: 'Medium', c: 'text-amber-500' },
                 { t: 'Fence Damage', l: 'Sector 12', p: 'Low', c: 'text-primary' }
               ].map((repair, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                     <div className="flex justify-between mb-2">
                        <span className={`text-[9px] font-black uppercase ${repair.c}`}>{repair.t}</span>
                        <span className="text-[8px] text-slate-600 font-black uppercase tracking-widest">{repair.p}</span>
                     </div>
                     <p className="text-xs font-bold text-slate-300">{repair.l}</p>
                  </div>
               ))}
            </div>
            <button className="w-full mt-10 py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
               Assign Workforce
            </button>
            <div className="absolute bottom-[-10%] right-[-10%] text-white/5 group-hover:scale-110 transition-transform duration-1000">
               <Hammer size={200} />
            </div>
         </div>
      </div>
    </div>
  );
};

export default MaintenanceAdminDashboard;
