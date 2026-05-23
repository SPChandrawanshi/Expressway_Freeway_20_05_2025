import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, ClipboardList, Clock, CheckCircle2, AlertOctagon, User, Hammer, MapPin } from 'lucide-react';

const WorkOrders = () => {
  const orders = [
    { id: 'WRK-2026-001', task: 'Pothole Repair - Sector 4', priority: 'High', technician: 'Manoj Singh', status: 'In-Progress', deadline: 'Today' },
    { id: 'WRK-2026-002', task: 'Expansion Joint Service', priority: 'Medium', technician: 'Karan Patel', status: 'Pending', deadline: 'Tomorrow' },
    { id: 'WRK-2026-003', task: 'Gantry Light Replacement', priority: 'Low', technician: 'David Lee', status: 'Completed', deadline: 'Yesterday' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {orders.map((order, i) => (
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               key={order.id} 
               className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
            >
               <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors border border-slate-100 shadow-inner">
                     <Hammer size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                     order.priority === 'High' ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                     {order.priority} Priority
                  </span>
               </div>
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">{order.task}</h3>
               <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                  <MapPin size={12} className="text-primary" /> Sector Node: {order.id.split('-')[2]}
               </div>
               <div className="space-y-3 pt-4 border-t border-slate-50">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-slate-400">Technician</span>
                     <span className="text-slate-900">{order.technician}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-slate-400">Deadline</span>
                     <span className="text-slate-900">{order.deadline}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-slate-400">Status</span>
                     <span className={`${order.status === 'Completed' ? 'text-emerald-600' : 'text-amber-600'}`}>{order.status}</span>
                  </div>
               </div>
               <button className="w-full mt-6 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-600 hover:bg-primary hover:text-white hover:border-primary/20 transition-all shadow-sm">
                  Update Progress
               </button>
            </motion.div>
         ))}
      </div>
    </div>
  );
};

export default WorkOrders;
