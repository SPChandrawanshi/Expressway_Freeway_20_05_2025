import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Globe, Activity, TrendingUp, 
  Users, AlertTriangle, Zap, ArrowUpRight,
  BarChart3, PieChart, Clock, ShieldAlert
} from 'lucide-react';

const SuperAdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Executive Hero Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 bg-[#CAD3C8] rounded-[48px] p-10 flex flex-col justify-between min-h-[350px] relative overflow-hidden shadow-master hover:border-2 hover:border-[#6D214F] transition-all group">
            <div className="relative z-10">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                     <ShieldCheck size={24} className="text-slate-900" />
                  </div>
                  <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Super Admin Command Center</h1>
               </div>
               <h2 className="text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-6">
                  National <br /> Intelligence <br /> Overview.
               </h2>
               <p className="text-slate-700 text-sm font-bold uppercase tracking-widest max-w-sm leading-relaxed">
                  Real-time visualization of expressway telemetry, revenue flows, and emergency nodes.
               </p>
            </div>
            {/* Soft Metrics Overlay */}
            <div className="relative z-10 flex gap-8 mt-10">
               <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/40 min-w-[140px]">
                  <p className="text-[9px] font-black text-slate-600 uppercase mb-1">Active Nodes</p>
                  <h4 className="text-2xl font-black text-slate-900">1,204</h4>
               </div>
               <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/40 min-w-[140px]">
                  <p className="text-[9px] font-black text-slate-600 uppercase mb-1">Grid Health</p>
                  <h4 className="text-2xl font-black text-slate-900">99.8%</h4>
               </div>
            </div>
            {/* Background Decor */}
            <div className="absolute right-[-10%] top-[-10%] w-[60%] h-[120%] bg-white/20 blur-[100px] rounded-full pointer-events-none"></div>
         </div>

         <div className="bg-slate-900 rounded-[48px] p-8 text-white flex flex-col justify-between relative overflow-hidden group shadow-master hover:border-2 hover:border-[#6D214F] transition-all">
            <div className="relative z-10">
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Live Revenue Flow</p>
               <h3 className="text-4xl font-black tracking-tighter">₹4.2 Cr <span className="text-xs text-slate-600 uppercase">Today</span></h3>
               <div className="mt-6 space-y-4">
                  {[
                    { label: 'FASTag Revenue', value: '₹3.8 Cr', p: '90%' },
                    { label: 'Manual Toll', value: '₹0.4 Cr', p: '10%' }
                  ].map((r, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                          <span className="text-slate-400">{r.label}</span>
                          <span>{r.value}</span>
                       </div>
                       <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: r.p }}
                             className="h-full bg-primary"
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <button className="btn-premium bg-white text-slate-900 hover:text-white mt-10">
               Executive Report
            </button>
            <div className="absolute bottom-[-20%] right-[-10%] text-primary/5 group-hover:scale-110 transition-transform duration-1000">
               <TrendingUp size={240} />
            </div>
         </div>
      </div>

      {/* Grid of Intel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
            { label: 'Traffic Density', value: '74%', icon: Activity, color: 'text-blue-500' },
            { label: 'Emergency SOS', value: '02 Active', icon: ShieldAlert, color: 'text-rose-500' },
            { label: 'System Uptime', value: '284 Days', icon: Zap, color: 'text-amber-500' },
            { label: 'Global Nodes', value: 'Synced', icon: Globe, color: 'text-emerald-500' }
         ].map((card, i) => (
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 + 0.5 }}
               whileHover={{ y: -10, scale: 1.02 }}
               key={i} 
               className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-master hover:shadow-[rgba(0,0,0,0.4)_0px_20px_40px_-10px] hover:border-2 hover:border-[#6D214F] transition-all group cursor-pointer"
            >
               <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100 ${card.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <card.icon size={20} />
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{card.label}</p>
               <h4 className="text-xl font-black text-slate-900 tracking-tight mt-1">{card.value}</h4>
            </motion.div>
         ))}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
