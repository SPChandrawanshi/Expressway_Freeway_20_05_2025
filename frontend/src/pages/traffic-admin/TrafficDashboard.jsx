import React from 'react';
import { motion } from 'framer-motion';
import { Activity, PieChart, TrendingUp, BarChart3, Clock, Zap, Map, Share2 } from 'lucide-react';

const TrafficAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10">
            <div>
               <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Traffic Intelligence</h1>
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-2">Data-driven highway flow optimization</p>
               
               <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 flex items-center gap-6">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100">
                        <TrendingUp size={24} />
                     </div>
                     <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Growth Forecast</p>
                        <h4 className="text-xl font-black text-slate-900">+14.2% <span className="text-[10px] text-emerald-500 uppercase font-black ml-1">UP</span></h4>
                     </div>
                  </div>
                  <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 flex items-center gap-6">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-slate-100">
                        <Clock size={24} />
                     </div>
                     <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg Congestion</p>
                        <h4 className="text-xl font-black text-slate-900">4.2m <span className="text-[10px] text-slate-400 uppercase font-black ml-1">DELAY</span></h4>
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-full md:w-[350px] space-y-6">
               <div className="p-8 bg-slate-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Density Distribution</p>
                  <div className="flex items-end gap-2 h-24 mb-6">
                     {[40, 70, 45, 90, 60, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-lg relative group-hover:bg-primary transition-all cursor-pointer">
                           <div className={`absolute bottom-0 inset-x-0 bg-primary rounded-t-lg`} style={{ height: `${h}%` }}></div>
                        </div>
                     ))}
                  </div>
                  <button className="w-full py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all">
                     View Heatmap
                  </button>
               </div>
            </div>
         </div>
         {/* Background Visual */}
         <div className="absolute right-[-10%] top-[-10%] opacity-5 text-primary pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
            <Activity size={400} />
         </div>
      </div>
    </div>
  );
};

export default TrafficAdminDashboard;
