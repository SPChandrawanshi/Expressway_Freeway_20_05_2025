import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Play, Maximize2, Settings, Shield } from 'lucide-react';

const CCTVFeeds = () => {
  const feeds = [
    { id: 'CAM-01', location: 'Toll Plaza Alpha', status: 'Live', road: 'NH-44 KM 12.5' },
    { id: 'CAM-02', location: 'North Interchange', status: 'Live', road: 'NH-44 KM 45.2' },
    { id: 'CAM-03', location: 'Service Lane East', status: 'Live', road: 'NH-44 KM 08.1' },
    { id: 'CAM-04', location: 'Emergency Bay 02', status: 'Live', road: 'NH-44 KM 102.4' },
    { id: 'CAM-05', location: 'Bridge Crossing', status: 'Live', road: 'NH-44 KM 56.7' },
    { id: 'CAM-06', location: 'Entry Ramp 04', status: 'Live', road: 'NH-44 KM 22.3' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">CCTV Surveillance Wall</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Real-time multisensor feed monitoring</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
            <Settings size={14} /> Configure Grid
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feeds.map((feed, idx) => (
          <motion.div 
            key={feed.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="premium-card !p-0 overflow-hidden group"
          >
            {/* Feed Header */}
            <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-700">{feed.id} • {feed.location}</span>
              </div>
              <Maximize2 size={12} className="text-slate-400 cursor-pointer hover:text-primary transition-colors" />
            </div>

            {/* Video Feed Placeholder */}
            <div className="aspect-video bg-slate-100 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <div className="z-10 flex flex-col items-center gap-2 text-slate-400 group-hover:text-primary transition-colors">
                <Camera size={32} strokeWidth={1.5} />
                <span className="text-[9px] font-black uppercase tracking-tighter">Connecting Stream...</span>
              </div>
              
              {/* Overlay HUD */}
              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <span className="bg-black/40 backdrop-blur-md text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                  {new Date().toLocaleTimeString()}
                </span>
                <span className="bg-primary/20 backdrop-blur-md text-primary text-[8px] font-black px-1.5 py-0.5 rounded border border-primary/20">
                  {feed.road}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="p-3 flex items-center justify-between">
              <button className="flex items-center gap-1.5 text-primary text-[9px] font-black uppercase hover:underline">
                <Play size={10} fill="currentColor" /> Live Feed
              </button>
              <div className="flex gap-2">
                 <Shield size={14} className="text-slate-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CCTVFeeds;
