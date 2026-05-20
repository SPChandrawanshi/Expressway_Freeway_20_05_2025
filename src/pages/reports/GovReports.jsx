import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Filter, FileBarChart, PieChart, ArrowUpRight } from 'lucide-react';

const GovReports = () => {
  const reports = [
    { name: 'Monthly Revenue Audit', date: 'May 2026', size: '2.4 MB', type: 'PDF', status: 'Verified' },
    { name: 'Traffic Volume Analysis', date: 'April 2026', size: '5.1 MB', type: 'XLSX', status: 'Verified' },
    { name: 'FASTag Transaction Log', date: 'Q1 2026', size: '12.8 MB', type: 'CSV', status: 'Draft' },
    { name: 'Accident Frequency Report', date: 'YTD 2026', size: '1.2 MB', type: 'PDF', status: 'Verified' },
    { name: 'NHAI Maintenance Audit', date: 'March 2026', size: '3.3 MB', type: 'PDF', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Government Reporting Archive</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Official analytics, revenue audits & operational logs</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-2 shadow-sm">
            <Filter size={14} /> Advanced Filter
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
            <FileText size={14} /> Generate Custom Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Monthly Overview Card */}
         <div className="premium-card bg-slate-50 border-slate-200">
            <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-premium border border-slate-100">
                  <FileBarChart size={24} className="text-primary" />
               </div>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fiscal Summary</span>
            </div>
            <h3 className="text-lg font-black text-slate-900">May 2026 Performance</h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase mt-1 leading-relaxed">System-wide traffic is up 12% compared to last month. Toll revenue verified at ₹8.4 Cr.</p>
            
            <div className="grid grid-cols-3 gap-3 mt-6">
               <div className="bg-white p-3 rounded-xl border border-slate-100">
                  <p className="text-[8px] font-black text-slate-400 uppercase">Growth</p>
                  <p className="text-xs font-black text-success">+12.4%</p>
               </div>
               <div className="bg-white p-3 rounded-xl border border-slate-100">
                  <p className="text-[8px] font-black text-slate-400 uppercase">Audit</p>
                  <p className="text-xs font-black text-primary">Clean</p>
               </div>
               <div className="bg-white p-3 rounded-xl border border-slate-100">
                  <p className="text-[8px] font-black text-slate-400 uppercase">Compliance</p>
                  <p className="text-xs font-black text-indigo-600">98%</p>
               </div>
            </div>
         </div>

         <div className="premium-card">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-4">Quick Analysis Tools</h3>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Revenue Forecast', icon: PieChart, color: 'bg-indigo-50 text-indigo-600' },
                 { label: 'Traffic Trends', icon: TrendingUp, color: 'bg-emerald-50 text-emerald-600' },
                 { label: 'Violation Stats', icon: ShieldAlert, color: 'bg-rose-50 text-rose-600' },
                 { label: 'Asset Logs', icon: Layers, color: 'bg-blue-50 text-blue-600' },
               ].map((tool, idx) => (
                 <button key={idx} className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-slate-50 transition-all group">
                    <tool.icon size={20} className={`${tool.color} mb-2 group-hover:scale-110 transition-transform`} />
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{tool.label}</span>
                 </button>
               ))}
            </div>
         </div>
      </div>

      <div className="premium-card !p-0">
         <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Document Archive</h3>
            <span className="text-[9px] font-black text-primary uppercase">Showing 5 of 124 Files</span>
         </div>
         <div className="divide-y divide-slate-50">
            {reports.map((report, idx) => (
               <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-all group">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <FileText size={18} />
                     </div>
                     <div>
                        <h4 className="text-sm font-black text-slate-900">{report.name}</h4>
                        <div className="flex items-center gap-3 mt-1">
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{report.date}</span>
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">•</span>
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{report.size}</span>
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">•</span>
                           <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">{report.type}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${
                       report.status === 'Verified' ? 'bg-success/10 text-success' : 'bg-slate-100 text-slate-400'
                     }`}>
                        {report.status}
                     </span>
                     <button className="p-2 bg-white border border-slate-100 rounded-lg text-slate-400 hover:text-primary hover:border-primary/20 shadow-sm transition-all">
                        <Download size={14} />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

// Internal icon for usage
const TrendingUp = ({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
const ShieldAlert = ({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
const Layers = ({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;

export default GovReports;
