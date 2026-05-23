import React from 'react';
import { motion } from 'framer-motion';
import { AlertOctagon, Timer, MapPin, ClipboardList, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

const AccidentReports = () => {
  const incidents = [
    { id: 'INC-2026-042', sector: 'Sector 8 (KM 42)', type: 'Vehicle Collision', priority: 'Critical', status: 'Dispatched', time: '2 mins ago' },
    { id: 'INC-2026-041', sector: 'Sector 15 (KM 88)', type: 'Tire Burst', priority: 'Medium', status: 'On-Site', time: '14 mins ago' },
    { id: 'INC-2026-040', sector: 'Sector 2 (KM 12)', type: 'Animal Hazard', priority: 'Low', status: 'Resolved', time: '42 mins ago' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-rose-50 border border-rose-100 p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
         <div className="relative z-10">
            <h1 className="text-2xl font-black text-rose-900 uppercase tracking-tight">Active Incident Response</h1>
            <p className="text-[10px] font-bold text-rose-600/70 uppercase tracking-widest mt-1">Real-time Emergency Dispatch & Field Reports</p>
            <div className="flex gap-4 mt-6">
                <button className="btn-premium bg-rose-600 text-white hover:bg-rose-700 shadow-xl shadow-rose-200">
                   + Log New Incident
                </button>
                <button className="btn-secondary text-rose-600">
                   View Heatmap
                </button>
            </div>
         </div>
         <div className="relative z-10 w-full md:w-64 space-y-4">
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-rose-100">
               <p className="text-[9px] font-black text-rose-400 uppercase mb-1">Response Time (Avg)</p>
               <h4 className="text-xl font-black text-rose-900">4.2 MIN</h4>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-rose-100">
               <p className="text-[9px] font-black text-rose-400 uppercase mb-1">Critical Tickets</p>
               <h4 className="text-xl font-black text-rose-900">02</h4>
            </div>
         </div>
         <div className="absolute right-[-5%] top-[-10%] w-[30%] h-[120%] bg-rose-500/5 blur-[80px] rounded-full"></div>
      </div>

      <div className="space-y-4">
         {incidents.map((inc, i) => (
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               whileHover={{ y: -10, scale: 1.01 }}
               key={inc.id} 
               className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-master hover:shadow-[rgba(0,0,0,0.4)_0px_20px_40px_-10px] hover:border-2 hover:border-[#6D214F] transition-all cursor-pointer group"
            >
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6 w-full">
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                        inc.priority === 'Critical' ? 'bg-rose-50 text-rose-500 border-rose-100' : 
                        inc.priority === 'Medium' ? 'bg-amber-50 text-amber-500 border-amber-100' : 'bg-emerald-50 text-emerald-500 border-emerald-100'
                     }`}>
                        <AlertOctagon size={28} />
                     </div>
                     <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                           <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{inc.type}</h3>
                           <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase ${
                              inc.priority === 'Critical' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-500'
                           }`}>
                              {inc.priority}
                           </span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                           <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                              <MapPin size={12} className="text-primary" /> {inc.sector}
                           </div>
                           <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                              <Timer size={12} className="text-primary" /> {inc.time}
                           </div>
                           <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                              <FileText size={12} className="text-primary" /> ID: {inc.id}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 w-full md:w-auto">
                     <div className="text-right flex-1 md:flex-none">
                        <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Field Status</p>
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase">
                           <div className={`w-2 h-2 rounded-full ${inc.status === 'Resolved' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                           {inc.status}
                        </div>
                     </div>
                      <button className="btn-secondary">
                         Details
                      </button>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
    </div>
  );
};

export default AccidentReports;