import React from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon, MapPin, Navigation, Info, Layers, Search } from 'lucide-react';

const HighwayMap = () => {
  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Live Highway GIS Map</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Real-time spatial monitoring & asset tracking</p>
        </div>
        <div className="flex gap-2">
           <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search KM Marker..." className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:border-primary transition-all w-48" />
           </div>
           <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-2 shadow-sm">
             <Layers size={14} /> Layers
           </button>
        </div>
      </div>

      <div className="flex-1 premium-card !p-0 relative overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center">
        {/* Map Background Placeholder */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
        </div>
        
        <div className="z-10 text-center">
           <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <MapIcon size={32} className="text-primary" />
           </div>
           <h3 className="text-lg font-black text-slate-900 uppercase">GIS Engine Loading...</h3>
           <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Fetching spatial data for NH-44 & NH-27</p>
        </div>

        {/* Legend Overlay */}
        <div className="absolute bottom-4 left-4 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-premium space-y-3">
           <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Map Legend</h4>
           <div className="space-y-2">
              {[
                { label: 'Live Vehicle', color: 'bg-primary' },
                { label: 'Active Incident', color: 'bg-rose-500' },
                { label: 'Toll Plaza', color: 'bg-amber-500' },
                { label: 'Emergency Bay', color: 'bg-success' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                   <div className={`w-2 h-2 rounded-full ${item.color}`} />
                   <span className="text-[10px] font-bold text-slate-600">{item.label}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Floating Controls */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
           <button className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:text-primary transition-colors">
              <Navigation size={16} />
           </button>
           <button className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:text-primary transition-colors">
              <Info size={16} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default HighwayMap;
