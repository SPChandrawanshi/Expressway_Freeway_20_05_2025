import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Info, ChevronRight, Activity } from 'lucide-react';

const ModulePlaceholder = ({ title, subtitle, role }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 bg-[#f8fafc]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[40px] border border-slate-200 shadow-xl max-w-xl w-full text-center relative overflow-hidden group"
      >
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
        
        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 mx-auto border border-slate-100 shadow-inner group-hover:rotate-12 transition-transform">
           <ShieldCheck size={40} className="text-primary" />
        </div>

        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-2">{title}</h1>
        <div className="flex items-center justify-center gap-3 mb-8">
           <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">{role}</div>
           <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Calibration Status: Active</div>
        </div>

        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 px-4">
          The <span className="text-slate-900 font-bold">{title}</span> module is currently synchronized with the National Intelligence Grid. 
          Real-time data feeds are active, and full administrative control is being provisioned.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
           <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left">
              <Activity size={18} className="text-emerald-500 mb-2" />
              <p className="text-[9px] font-black text-slate-400 uppercase">Latency</p>
              <p className="text-xs font-black text-slate-900 uppercase">0.04 ms</p>
           </div>
           <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left">
              <Info size={18} className="text-primary mb-2" />
              <p className="text-[9px] font-black text-slate-400 uppercase">Encryption</p>
              <p className="text-xs font-black text-slate-900 uppercase">AES-256 Bit</p>
           </div>
        </div>

        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-black hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
           View Technical Docs <ChevronRight size={18} />
        </button>
      </motion.div>
    </div>
  );
};

export default ModulePlaceholder;
