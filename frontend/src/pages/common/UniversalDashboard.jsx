import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight, 
  ShieldCheck, 
  AlertTriangle,
  RefreshCw,
  Activity as ActivityIcon,
  Shield
} from 'lucide-react';

const UniversalDashboard = ({ title, subtitle, icon: Icon }) => {
  const stats = [
    { label: 'Active Units', value: '482', change: '+12.5%', isUp: true },
    { label: 'System Load', value: '24%', change: '-3.2%', isUp: false },
    { label: 'Alerts', value: '03', change: 'Normal', isUp: true, color: 'text-emerald-500' },
    { label: 'Connectivity', value: '99.9%', change: 'Stable', isUp: true },
  ];

  return (
    <div className="h-full flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar bg-[#f8fafc]">
      {/* Professional Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center shadow-master border-master text-primary">
            {Icon && <Icon size={28} strokeWidth={1.5} />}
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight uppercase">{title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{subtitle}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="btn-secondary">
            <RefreshCw size={14} />
            <span>Sync Data</span>
          </button>
          <button className="btn-premium bg-primary text-white">
            <Activity size={14} />
            <span>Live Feed</span>
          </button>
        </div>
      </div>

      {/* Intelligence Grid */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', damping: 20 }}
            whileHover={{ y: -10, scale: 1.02 }}
            key={idx} 
            className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-master hover:shadow-[rgba(0,0,0,0.4)_0px_20px_40px_-10px] hover:border-2 hover:border-[#6D214F] transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <div className={`p-1.5 rounded-lg ${stat.isUp ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                {stat.isUp ? <ArrowUpRight size={12} className="text-emerald-500" /> : <ArrowDownRight size={12} className="text-rose-500" />}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-black text-slate-900 leading-none">{stat.value}</h2>
              <span className={`text-[10px] font-bold ${stat.color || (stat.isUp ? 'text-emerald-500' : 'text-rose-500')}`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4 w-full bg-slate-100 h-1 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '70%' }}
                 transition={{ duration: 1.5, delay: idx * 0.2 }}
                 className={`h-full ${stat.isUp ? 'bg-primary' : 'bg-rose-500'}`}
               ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area (Placeholder for actual module data) */}
      <div className="flex-1 grid grid-cols-3 gap-6">
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-2 bg-white rounded-[48px] border-master shadow-master p-10 relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                 <ShieldCheck size={16} className="text-primary" />
                 Geospatial Intelligence Matrix
               </h3>
               <div className="flex gap-1">
                 <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                 <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
               </div>
            </div>
            
            {/* Professional Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="h-full w-full flex flex-col items-center justify-center text-center pb-12">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  <ActivityIcon size={32} className="text-slate-300 animate-pulse" />
               </div>
               <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2">Initializing Real-time Data Stream</h4>
               <p className="text-slate-400 text-[10px] max-w-xs font-medium uppercase tracking-tight">System is authenticating secure sockets with the National Infrastructure Grid...</p>
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[48px] border-master shadow-master p-10 flex flex-col"
          >
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" />
              Critical Events
            </h3>
            <div className="space-y-4 flex-1">
               {[1, 2, 3].map((item) => (
                 <div key={item} className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100 group">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors">
                       <Shield size={18} className="text-slate-400" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight">Security Audit #{item}029</p>
                       <p className="text-[9px] font-bold text-slate-500 mt-0.5">Verification Pending</p>
                    </div>
                 </div>
               ))}
            </div>
            <button className="btn-premium w-full mt-6">
               View All Protocols
            </button>
         </motion.div>
      </div>
    </div>
  );
};

export default UniversalDashboard;
