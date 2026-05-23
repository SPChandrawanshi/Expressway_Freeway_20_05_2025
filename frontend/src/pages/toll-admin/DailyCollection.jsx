import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, CreditCard, Wallet, Calendar, Download, Filter, ArrowUpRight } from 'lucide-react';

const DailyCollection = () => {
  const transactions = [
    { id: 'TXN-88421', type: 'FASTag', amount: '₹420.00', time: '10:42 AM', vehicle: 'MH-04-ET-2210', status: 'Settled' },
    { id: 'TXN-88422', type: 'Cash', amount: '₹840.00', time: '10:45 AM', vehicle: 'DL-01-AB-1122', status: 'Settled' },
    { id: 'TXN-88423', type: 'FASTag', amount: '₹420.00', time: '10:50 AM', vehicle: 'HR-26-XX-0099', status: 'Settled' },
    { id: 'TXN-88424', type: 'QR Code', amount: '₹420.00', time: '10:55 AM', vehicle: 'UP-16-YY-8877', status: 'Pending' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Revenue Banner */}
      <div className="flex flex-col md:flex-row gap-6">
         <div className="flex-1 bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="relative z-10 flex items-center justify-between">
               <div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Today Total Revenue</p>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter">₹8,42,500.00</h2>
                  <div className="flex items-center gap-2 mt-4 text-[10px] font-black text-emerald-500 uppercase">
                     <ArrowUpRight size={14} /> +12.5% from yesterday
                  </div>
               </div>
               <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary border border-primary/10">
                  <DollarSign size={32} />
               </div>
            </div>
            {/* Soft Grid */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
         </div>

         <div className="grid grid-cols-2 gap-6 w-full md:w-[450px]">
            <div className="bg-slate-900 p-6 rounded-[32px] text-white shadow-xl shadow-slate-200">
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">FASTag Ratio</p>
               <h4 className="text-2xl font-black tracking-tight">94.2%</h4>
               <div className="mt-4 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[94%] h-full bg-primary"></div>
               </div>
            </div>
            <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Avg Processing</p>
               <h4 className="text-2xl font-black text-slate-900 tracking-tight">2.4 <span className="text-xs text-slate-400 uppercase">SEC</span></h4>
               <div className="mt-4 text-[9px] font-black text-primary uppercase">Optimized Phase</div>
            </div>
         </div>
      </div>

      {/* Transaction Feed */}
      <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden">
         <div className="p-8 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-3">
               <TrendingUp size={20} className="text-primary" /> Live Collection Feed
            </h3>
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-600 uppercase tracking-widest hover:bg-white hover:border-primary/20 transition-all">
                  <Calendar size={16} /> 14 May 2026
               </button>
               <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                  <Download size={16} /> Export CSV
               </button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-slate-50/50">
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction ID</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Payment Type</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Vehicle Number</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Time</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {transactions.map((tx, idx) => (
                    <motion.tr 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={tx.id} 
                      className="hover:bg-slate-50/50 transition-all cursor-pointer group"
                    >
                       <td className="px-8 py-6 text-xs font-black text-slate-900 tracking-wider">{tx.id}</td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                             {tx.type === 'FASTag' ? <CreditCard size={14} className="text-primary" /> : <Wallet size={14} className="text-amber-500" />}
                             <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight">{tx.type}</span>
                          </div>
                       </td>
                       <td className="px-8 py-6 text-sm font-black text-slate-900">{tx.amount}</td>
                       <td className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-widest">{tx.vehicle}</td>
                       <td className="px-8 py-6 text-[11px] font-bold text-slate-400">{tx.time}</td>
                       <td className="px-8 py-6 text-right">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                             tx.status === 'Settled' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-amber-50 text-amber-600 border border-amber-100'
                          }`}>
                             {tx.status}
                          </span>
                       </td>
                    </motion.tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default DailyCollection;