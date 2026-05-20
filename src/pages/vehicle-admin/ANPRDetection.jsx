import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Scan, AlertTriangle, Play, Shield, Maximize2 } from 'lucide-react';

const ANPRDetection = () => {
  const feeds = [
    { camera: 'CAM-01 (Sector 4)', plate: 'UP-16-BX-1109', speed: '94 KM/H', time: '10:42:01 AM', status: 'Optimal' },
    { camera: 'CAM-08 (Sector 12)', plate: 'DL-04-CA-8872', speed: '124 KM/H', time: '10:42:05 AM', status: 'Overspeeding' },
    { camera: 'CAM-03 (Sector 9)', plate: 'HR-26-TY-0092', speed: '82 KM/H', time: '10:42:09 AM', status: 'Optimal' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         {/* Main Live Feed View */}
         <div className="xl:col-span-2 bg-slate-900 rounded-[32px] overflow-hidden relative aspect-video shadow-2xl group border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-6 left-6 flex items-center gap-3">
               <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.8)]"></div>
               <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Live Stream: Sector-4 Junction</span>
            </div>
            <div className="absolute top-6 right-6 flex gap-2">
               <button className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all border border-white/10">
                  <Maximize2 size={16} />
               </button>
            </div>
            {/* Simulation of a scanning HUD */}
            <div className="absolute inset-x-20 inset-y-20 border-2 border-primary/20 rounded-[40px] pointer-events-none flex items-center justify-center">
               <div className="w-full h-[2px] bg-primary/40 animate-scan-y shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
            </div>
            <div className="absolute bottom-8 left-8">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Optical Recognition Engine</p>
               <h4 className="text-2xl font-black text-white tracking-tighter uppercase">ANPR Mode: Active</h4>
            </div>
         </div>

         {/* Detection Log */}
         <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-6 overflow-hidden">
            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-3">
               <Scan size={18} className="text-primary" /> Detection Log
            </h3>
            <div className="space-y-4">
               {feeds.map((f, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all cursor-pointer group">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-black text-slate-400 uppercase">{f.camera}</span>
                        <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase ${f.status === 'Optimal' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
                           {f.status}
                        </span>
                     </div>
                     <div className="flex justify-between items-center">
                        <h4 className="text-sm font-black text-slate-900 tracking-wider group-hover:text-primary transition-colors">{f.plate}</h4>
                        <span className="text-[10px] font-black text-slate-600">{f.speed}</span>
                     </div>
                  </div>
               ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-black transition-all">View All Activity</button>
         </div>
      </div>
    </div>
  );
};

export default ANPRDetection;