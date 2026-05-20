import React from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon, Locate, Shield, Maximize2, Settings, Layers, Camera, Radio } from 'lucide-react';

const MapDashboard = ({ title, subtitle, stats = [] }) => {
  return (
    <div className="h-full flex flex-col space-y-8">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm flex items-center gap-5 group hover:border-primary/30 transition-all">
             <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-all border border-slate-100 shadow-inner">
                {s.icon ? <s.icon size={26} strokeWidth={1.5} /> : <Locate size={26} strokeWidth={1.5} />}
             </div>
             <div>
                <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1.5">{s.label}</p>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{s.value}</h3>
             </div>
          </div>
        ))}
      </div>

      {/* Map Area */}
      <div className="flex-1 bg-slate-100 rounded-3xl relative overflow-hidden group border border-slate-200 shadow-sm">
         {/* Map Mock */}
         <div className="absolute inset-0 opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/0,0,1/1200x800?access_token=pk.eyJ1IjoiZGV2LWtpYWFuIiwiYSI6ImNscW9xbmZuejBybnUyanBqYm5xZ3BqbmkifQ')] bg-cover bg-center"></div>
         
         {/* Overlays */}
         <div className="absolute top-8 left-8 flex flex-col gap-3">
            <button className="w-11 h-11 bg-white/90 backdrop-blur rounded-xl shadow-sm text-slate-400 hover:text-primary transition-all border border-slate-100"><Maximize2 size={18} /></button>
            <button className="w-11 h-11 bg-white/90 backdrop-blur rounded-xl shadow-sm text-slate-400 hover:text-primary transition-all border border-slate-100"><Layers size={18} /></button>
         </div>

         <div className="absolute top-8 right-8 flex items-center gap-4">
            <div className="px-5 py-2.5 bg-emerald-500 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 flex items-center gap-2">
               <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
               Live Surveillance Matrix
            </div>
            <button className="w-11 h-11 bg-white rounded-xl shadow-sm text-primary border border-slate-100"><Settings size={18} /></button>
         </div>

         {/* Reticle */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
               <div className="w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] border-4 border-white animate-bounce"></div>
               <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-xl shadow-lg border border-slate-100 whitespace-nowrap">
                  <p className="text-[11px] font-black uppercase text-slate-900 tracking-widest">Sector NH-44 Alpha Node</p>
               </div>
            </div>
         </div>

         {/* Legend */}
         <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between bg-white/80 backdrop-blur p-5 rounded-2xl border border-slate-200/50 shadow-lg">
            <div className="flex gap-10">
               <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">Patrol Units</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 bg-primary rounded-full"></div>
                  <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">CCTV Nodes</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse"></div>
                  <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">Active Incidents</span>
               </div>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GIS Integration Status: Optimized</p>
         </div>
      </div>
    </div>
  );
};

export default MapDashboard;
