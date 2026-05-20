import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, Clock, ShieldAlert, User, Menu } from 'lucide-react';

const GovernmentHeader = ({ collapsed, setCollapsed }) => {
  return (
    <header className="h-[70px] border-b border-black/5 bg-white/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40 shadow-master">
      {/* Title & Toggle */}
      <div className="flex items-center gap-5">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="w-9 h-9 bg-slate-50/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-black/5 shadow-master"
        >
          <Menu size={18} />
        </button>
        
        <div className="flex flex-col">
          <h1 className="text-lg font-black text-slate-900 tracking-tight uppercase leading-none">Smart Expressway</h1>
          <div className="flex items-center gap-2 text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1">
            <span className="text-primary/70">Command Node</span>
            <span className="opacity-20">|</span>
            <span className="text-slate-500">Security v4.2</span>
          </div>
        </div>
      </div>

      {/* Operations Panel */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="hidden xl:flex items-center bg-slate-50/50 border border-black/5 rounded-xl px-4 py-2 w-64 focus-within:border-primary/20 focus-within:bg-white transition-all shadow-sm">
          <Search size={14} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search Intelligence..." 
            className="bg-transparent border-none outline-none text-[10px] text-slate-700 px-3 w-full placeholder:text-slate-300 font-bold uppercase tracking-wider"
          />
        </div>

        {/* Clock */}
        <div className="hidden lg:flex flex-col items-end px-5 border-l border-r border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-black text-sm tracking-tight leading-none">
            <Clock size={14} className="text-primary/60" />
            16:35:14
          </div>
          <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest mt-1">14 MAY 2026</span>
        </div>

        {/* Alerts */}
        <div className="flex items-center gap-2.5">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-9 h-9 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center cursor-pointer border border-rose-100 relative shadow-master"
          >
            <ShieldAlert size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-rose-500 rounded-full border-2 border-white animate-pulse" />
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-9 h-9 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center cursor-pointer border border-black/5 relative shadow-master"
          >
            <Bell size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full border-2 border-white" />
          </motion.div>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 pl-5 border-l border-slate-100 cursor-pointer group">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-[10px] font-black text-slate-900 leading-tight uppercase">Officer</span>
            <span className="text-[8px] text-primary font-black uppercase tracking-widest mt-0.5">Level 9</span>
          </div>
          <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-200 border border-black/5 transition-all overflow-hidden relative shadow-master">
            <User size={20} className="text-slate-400" />
            <div className="absolute bottom-0.5 right-0.5 w-2 h-2 bg-emerald-500 border border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GovernmentHeader;
