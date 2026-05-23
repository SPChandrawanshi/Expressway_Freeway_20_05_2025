import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, Activity, PhoneCall, 
  MessageSquare, Bell, ShieldCheck, 
  MapPin, Clock, Search
} from 'lucide-react';

const PublicDashboard = () => {
  const services = [
    { name: 'Toll Calculator', icon: Calculator, color: 'bg-primary', desc: 'Calculate your trip cost instantly' },
    { name: 'Traffic Updates', icon: Activity, color: 'bg-emerald-500', desc: 'Real-time lane & route status' },
    { name: 'Emergency SOS', icon: PhoneCall, color: 'bg-rose-500', desc: 'Quick access to highway support' },
    { name: 'File Complaint', icon: MessageSquare, color: 'bg-amber-500', desc: 'Report issues or feedback' },
  ];

  return (
    <div className="h-full flex flex-col space-y-8 p-4">
      {/* Hero Welcome */}
      <div className="relative h-48 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex items-center px-12">
         <div className="relative z-10">
            <h1 className="text-3xl font-black text-white tracking-tighter">Citizen Portal</h1>
            <p className="text-slate-400 text-sm font-medium mt-2 max-w-sm">Welcome to the NHAI Smart Expressway Services. Access real-time updates and emergency support 24/7.</p>
         </div>
         {/* Background Visual */}
         <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/20 to-transparent"></div>
         <motion.div 
           animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
         ></motion.div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            key={i} 
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 cursor-pointer group hover:shadow-xl transition-all"
          >
             <div className={`w-14 h-14 ${s.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-current/10`}>
                <s.icon size={28} />
             </div>
             <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">{s.name}</h3>
             <p className="text-xs text-slate-400 font-medium mt-2 leading-relaxed">{s.desc}</p>
             <div className="mt-6 flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Access Now <Search size={14} />
             </div>
          </motion.div>
        ))}
      </div>

      {/* Live Notice Board */}
      <div className="flex-1 grid grid-cols-3 gap-8">
         <div className="col-span-2 bg-white rounded-3xl border border-slate-100 p-8">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
               <Bell size={18} className="text-amber-500" /> Active Highway Notices
            </h3>
            <div className="space-y-6">
               {[
                 { t: 'Lane Closure: KM 45-52', d: 'Scheduled maintenance work on North-bound lane until 6 PM.', s: 'Maintenance' },
                 { t: 'Rain Alert: Heavy Downpour', d: 'Visibility reduced. Speed limit restricted to 60 KMPH.', s: 'Weather' }
               ].map((n, i) => (
                 <div key={i} className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                       <ShieldCheck size={24} />
                    </div>
                    <div>
                       <div className="flex items-center gap-3">
                          <h4 className="text-sm font-black text-slate-900">{n.t}</h4>
                          <span className="text-[8px] font-black uppercase bg-slate-200 px-2 py-0.5 rounded-full">{n.s}</span>
                       </div>
                       <p className="text-xs text-slate-500 mt-1 font-medium">{n.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20 flex flex-col justify-between">
            <div>
               <h3 className="text-xs font-black uppercase tracking-widest mb-2 opacity-70">Need Help?</h3>
               <h4 className="text-2xl font-black leading-tight">24/7 National Expressway Helpline</h4>
            </div>
            <div className="space-y-4">
               <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                  <PhoneCall size={24} />
                  <div>
                     <p className="text-[10px] font-black uppercase opacity-70">Toll Free</p>
                     <p className="text-lg font-black tracking-widest">1033</p>
                  </div>
               </div>
               <button className="w-full py-4 bg-white text-primary rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
                  Request Assistance
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PublicDashboard;