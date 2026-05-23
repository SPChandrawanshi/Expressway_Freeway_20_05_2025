import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Zap, ShieldCheck, Search, Filter, Download } from 'lucide-react';
import DataTable from '../../components/ui/tables/DataTable';

const FASTagControl = () => {
  const columns = [
    { header: 'Tag ID', accessor: 'tagId' },
    { header: 'Vehicle No.', accessor: 'vehicle' },
    { header: 'Issuer Bank', accessor: 'bank' },
    { header: 'Balance', accessor: 'balance' },
    { 
      header: 'Auth Status', 
      accessor: 'status',
      render: (row) => (
        <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${
          row.status === 'Verified' ? 'bg-success/10 text-success' : 'bg-rose-50 text-rose-600'
        }`}>
          {row.status}
        </span>
      )
    }
  ];

  const tagData = [
    { tagId: 'FT-99210-22', vehicle: 'DL 01 AA 1234', bank: 'ICICI Bank', balance: '₹1,240', status: 'Verified' },
    { tagId: 'FT-99210-23', vehicle: 'UP 16 BC 9988', bank: 'HDFC Bank', balance: '₹450', status: 'Verified' },
    { tagId: 'FT-99210-24', vehicle: 'HR 26 Z 5544', bank: 'Paytm Payments', balance: '₹12', status: 'Low Balance' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">FASTag Control Center</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Digital tolling oversight & blacklist management</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-2 shadow-sm">
             <Download size={14} /> Export Logs
           </button>
           <button className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
             <Zap size={14} /> Resolve Conflicts
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="premium-card flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-100">
               <CreditCard size={24} />
            </div>
            <div>
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">System Adoption</p>
               <h3 className="text-xl font-black text-slate-900">98.4%</h3>
            </div>
         </div>
         <div className="premium-card flex items-center gap-4">
            <div className="w-12 h-12 bg-success/10 text-success rounded-2xl flex items-center justify-center border border-success/20">
               <ShieldCheck size={24} />
            </div>
            <div>
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Valid Transactions</p>
               <h3 className="text-xl font-black text-slate-900">1.2M Today</h3>
            </div>
         </div>
         <div className="premium-card flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center border border-rose-100">
               <Zap size={24} />
            </div>
            <div>
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Blacklisted Tags</p>
               <h3 className="text-xl font-black text-slate-900">124 Tags</h3>
            </div>
         </div>
      </div>

      <DataTable 
        title="Live FASTag Transaction Stream"
        columns={columns}
        data={tagData}
      />
    </div>
  );
};

export default FASTagControl;
