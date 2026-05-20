import React from 'react';
import { motion } from 'framer-motion';
import { Download, Search, Filter, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const DataTable = ({ title, columns, data, onSearch, onFilter, onExport }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="premium-card overflow-hidden !p-0 shadow-premium border border-slate-200"
    >
      {/* Table Header */}
      <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-black text-slate-900">{title}</h3>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">Real-time synchronized data logs</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative group">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-700 outline-none focus:border-primary focus:bg-white transition-all w-full md:w-48"
            />
          </div>
          <button className="p-1.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm">
            <Filter size={14} />
          </button>
          <button className="p-1.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm">
            <Download size={14} />
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              {columns.map((col, idx) => (
                <th key={idx} className="px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-slate-100">
                  {col.header}
                </th>
              ))}
              <th className="px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-slate-100 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-primary/5 transition-colors group">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-5 py-3 text-xs text-slate-600 font-bold whitespace-nowrap">
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
                <td className="px-5 py-3 text-right">
                  <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-white rounded-lg transition-all shadow-sm">
                    <MoreVertical size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer / Pagination */}
      <div className="p-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          Showing <span className="text-slate-900">1-10</span> of <span className="text-slate-900">1,248</span> records
        </span>
        
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm">
            <ChevronLeft size={14} />
          </button>
          <div className="flex gap-1">
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-7 h-7 rounded-lg text-[10px] font-black transition-all ${p === 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}>
                {p}
              </button>
            ))}
          </div>
          <button className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 shadow-sm">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DataTable;
