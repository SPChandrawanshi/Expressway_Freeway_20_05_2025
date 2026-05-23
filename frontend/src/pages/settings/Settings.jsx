import React from 'react';
import { Settings as SettingsIcon, Bell, Lock, Eye, Globe, Database, ShieldCheck, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">System Configurations</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Global parameters, security protocols & notification preferences</p>
        </div>
        <button className="bg-primary text-white px-5 py-2 rounded-xl text-[10px] font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105 transition-all">
          <Save size={14} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Settings Sidebar */}
         <div className="lg:col-span-1 space-y-2">
            {[
              { label: 'General Settings', icon: SettingsIcon, active: true },
              { label: 'Security & Auth', icon: Lock },
              { label: 'Notification Hub', icon: Bell },
              { label: 'Interface Display', icon: Eye },
              { label: 'Region & Language', icon: Globe },
              { label: 'Database Backup', icon: Database },
            ].map((item, idx) => (
              <button key={idx} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-black text-[10px] uppercase tracking-tight ${
                item.active ? 'bg-primary text-white shadow-premium' : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
              }`}>
                 <item.icon size={16} />
                 {item.label}
              </button>
            ))}
         </div>

         {/* Settings Form */}
         <div className="lg:col-span-2 space-y-6">
            <div className="premium-card">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-primary" /> Core System Parameters
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Command Center Title</label>
                     <input type="text" defaultValue="NHAI National HQ" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-900 outline-none focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Automatic Refresh Rate (sec)</label>
                     <input type="number" defaultValue="30" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-900 outline-none focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Default Map Center</label>
                     <input type="text" defaultValue="23.2599° N, 77.4126° E" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-900 outline-none focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Emergency Threshold</label>
                     <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-900 outline-none focus:border-primary transition-all">
                        <option>High Sensitivity</option>
                        <option>Standard</option>
                        <option>Operational Only</option>
                     </select>
                  </div>
               </div>
            </div>

            <div className="premium-card">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-4">Notification Hooks</h3>
               <div className="space-y-3">
                  {[
                    { label: 'Critical Incident SMS Alerts', enabled: true },
                    { label: 'Daily Revenue Email Reports', enabled: true },
                    { label: 'Unauthorized Access Push Notifications', enabled: false },
                  ].map((hook, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                       <span className="text-[10px] font-bold text-slate-700 uppercase">{hook.label}</span>
                       <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${hook.enabled ? 'bg-primary' : 'bg-slate-300'}`}>
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${hook.enabled ? 'left-6' : 'left-1'}`} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Settings;
