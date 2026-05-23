import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Filter, CheckCircle2, AlertOctagon, User, CreditCard } from 'lucide-react';

const FASTagVerify = () => {
  const records = [
    { tagId: 'FT-8842-X9', owner: 'Rahul Sharma', vehicle: 'MH-02-CP-4455', type: 'Class 4', status: 'Verified', balance: '₹4,500' },
    { tagId: 'FT-1120-P2', owner: 'Anita Deshmukh', vehicle: 'DL-10-RS-1100', type: 'Class 4', status: 'Warning', balance: '₹120' },
    { tagId: 'FT-7763-Q1', owner: 'Global Logistics', vehicle: 'HR-55-TR-8899', type: 'Class 12', status: 'Blacklisted', balance: '₹0' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-3xl border border-slate-200/50 shadow-sm">
         <div>
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">FASTag Verification Node</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Authenticate Electronic Toll Tags in Real-Time</p>
         </div>
         <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 w-64 focus-within:border-primary/20 transition-all">
               <Search size={16} className="text-slate-400" />
               <input type="text" placeholder="Scan Tag ID..." className="bg-transparent border-none outline-none text-[10px] px-3 w-full font-black uppercase text-slate-900" />
            </div>
            <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">Verify Tag</button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {records.map((r, i) => (
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               key={i} 
               className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
               <div className="flex justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                     <CreditCard size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                     r.status === 'Verified' ? 'bg-emerald-50 text-emerald-600' : 
                     r.status === 'Warning' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                  }`}>
                     {r.status}
                  </span>
               </div>
               <h3 className="text-lg font-black text-slate-900 tracking-tighter uppercase">{r.tagId}</h3>
               <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-slate-400">Owner</span>
                     <span className="text-slate-900">{r.owner}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-slate-400">Vehicle</span>
                     <span className="text-slate-900">{r.vehicle}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-slate-400">Balance</span>
                     <span className="text-emerald-600">{r.balance}</span>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
    </div>
  );
};

export default FASTagVerify;