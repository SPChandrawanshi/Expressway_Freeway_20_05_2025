import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Filter, MoreVertical, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

const UserListSuper = () => {
  const users = [
    { id: 'USR-001', name: 'Dr. Amitabh Kant', role: 'Super Admin', status: 'Active', email: 'a.kant@niti.gov.in', phone: '+91 11 2309 6576', joined: '12 Jan 2026' },
    { id: 'USR-002', name: 'Rajesh Kumar', role: 'Highway Admin', status: 'Active', email: 'rajesh.k@nhai.org', phone: '+91 98765 43210', joined: '15 Jan 2026' },
    { id: 'USR-003', name: 'Sanjay Malik', role: 'Toll Manager', status: 'Inactive', email: 's.malik@fastag.in', phone: '+91 99887 76655', joined: '20 Jan 2026' },
    { id: 'USR-004', name: 'Priya Singh', role: 'CCTV Lead', status: 'Active', email: 'p.singh@control.gov.in', phone: '+91 77665 54433', joined: '22 Jan 2026' },
    { id: 'USR-005', name: 'Vikram Rathore', role: 'Emergency Head', status: 'Active', email: 'v.rathore@sos.gov.in', phone: '+91 88990 01122', joined: '25 Jan 2026' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm">
         <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">National Personnel Directory</h1>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">Manage Administrative Clearance & Access Levels</p>
         </div>
         <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-50 border border-slate-100 rounded-2xl px-4 py-2.5 w-72 focus-within:border-primary/30 transition-all">
               <Search size={18} className="text-slate-400" />
               <input type="text" placeholder="Search Command ID..." className="bg-transparent border-none outline-none text-[11px] px-3 w-full font-black uppercase text-slate-900 placeholder:text-slate-300" />
            </div>
            <button className="btn-enterprise bg-primary text-white text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">
               + Create Command ID
            </button>
         </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm overflow-hidden">
         <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
            <div className="flex items-center gap-3">
               <Users size={18} className="text-primary" />
               <span className="text-[11px] font-black uppercase tracking-wider text-slate-700">All Registered Officers (524)</span>
            </div>
            <button className="p-2.5 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-primary transition-all shadow-sm">
               <Filter size={18} />
            </button>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Officer ID</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Name & Role</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact Details</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Joined On</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Clearance</th>
                     <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {users.map((user, idx) => (
                    <motion.tr 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={user.id} 
                      className="hover:bg-slate-50/50 transition-all cursor-pointer group"
                    >
                       <td className="px-8 py-6">
                          <span className="text-xs font-black text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 tracking-widest">
                             {user.id}
                          </span>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex flex-col">
                             <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{user.name}</span>
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{user.role}</span>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="space-y-1.5">
                             <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                                <Mail size={12} className="text-primary" /> {user.email}
                             </div>
                             <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                                <Phone size={12} className="text-primary" /> {user.phone}
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-2 text-[11px] font-black text-slate-600">
                             <Calendar size={14} className="text-slate-400" /> {user.joined}
                          </div>
                       </td>
                       <td className="px-8 py-6 text-center">
                          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border ${
                             user.status === 'Active' 
                             ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                             : 'bg-slate-100 text-slate-400 border-slate-200'
                          }`}>
                             <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                             {user.status}
                          </span>
                       </td>
                       <td className="px-8 py-6 text-right">
                          <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm">
                             <MoreVertical size={18} />
                          </button>
                       </td>
                    </motion.tr>
                  ))}
               </tbody>
            </table>
         </div>
         
         {/* Footer Pagination */}
         <div className="p-6 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing 5 of 524 Officers</p>
            <div className="flex items-center gap-2">
               {[1, 2, 3, '...', 52].map((p, i) => (
                 <button key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black transition-all ${p === 1 ? 'bg-primary text-white shadow-lg' : 'bg-white border border-slate-100 text-slate-400 hover:border-primary/30 hover:text-primary'}`}>
                    {p}
                 </button>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default UserListSuper;