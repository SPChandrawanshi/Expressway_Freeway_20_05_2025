import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Phone, Shield, MapPin, Clock, CheckCircle2, Siren } from 'lucide-react';

const EmergencyAlerts = () => {
  const alerts = [
    { id: 'SOS-882', type: 'Vehicle Breakdown', severity: 'Medium', location: 'KM 45.2 North', time: '2 mins ago', status: 'Dispatched' },
    { id: 'SOS-881', type: 'Medical Emergency', severity: 'Critical', location: 'Toll Plaza Alpha', time: '5 mins ago', status: 'On Site' },
    { id: 'SOS-880', type: 'Accident Report', severity: 'Critical', location: 'KM 102.4 South', time: '12 mins ago', status: 'Resolved' },
    { id: 'SOS-879', type: 'Debris on Road', severity: 'Low', location: 'Service Lane East', time: '18 mins ago', status: 'Resolved' },
  ];

  const getSeverityStyle = (sev) => {
    switch(sev) {
      case 'Critical': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'Medium': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-blue-50 text-blue-600 border-blue-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Emergency Response Center</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Live SOS tracking & rapid action coordination</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-rose-600 text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg shadow-rose-200 flex items-center gap-2">
            <Siren size={14} /> Broadcast Alert
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Active Stats */}
        <div className="premium-card bg-rose-50/30 border-rose-100">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                 <AlertTriangle size={20} />
              </div>
              <div>
                 <p className="text-rose-600 text-[10px] font-black uppercase tracking-widest">Active SOS</p>
                 <h3 className="text-2xl font-black text-slate-900">02</h3>
              </div>
           </div>
           <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed italic">Immediate dispatch required for 1 medical emergency.</p>
        </div>

        <div className="premium-card">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                 <Shield size={20} />
              </div>
              <div>
                 <p className="text-primary text-[10px] font-black uppercase tracking-widest">Dispatch Teams</p>
                 <h3 className="text-2xl font-black text-slate-900">08</h3>
              </div>
           </div>
           <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed">6 Ambulance & 2 Highway Patrol units online.</p>
        </div>

        <div className="premium-card">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center text-white shadow-lg">
                 <CheckCircle2 size={20} />
              </div>
              <div>
                 <p className="text-success text-[10px] font-black uppercase tracking-widest">Resolved Today</p>
                 <h3 className="text-2xl font-black text-slate-900">14</h3>
              </div>
           </div>
           <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed">Average response time: 4.2 minutes.</p>
        </div>
      </div>

      <div className="premium-card !p-0 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
           <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Recent Incident Log</h3>
        </div>
        <div className="divide-y divide-slate-50">
          {alerts.map((alert, idx) => (
            <motion.div 
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-black text-xs ${getSeverityStyle(alert.severity)}`}>
                   {alert.id.split('-')[1]}
                </div>
                <div>
                   <h4 className="text-sm font-black text-slate-900">{alert.type}</h4>
                   <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase"><MapPin size={10} /> {alert.location}</span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase"><Clock size={10} /> {alert.time}</span>
                   </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase border ${
                   alert.status === 'Resolved' ? 'bg-success/10 text-success border-success/20' : 
                   alert.status === 'Dispatched' ? 'bg-primary/10 text-primary border-primary/20' : 
                   'bg-amber-500/10 text-amber-500 border-amber-500/20'
                 }`}>
                    {alert.status}
                 </span>
                 <button className="p-2 text-slate-400 hover:text-primary hover:bg-white rounded-lg transition-all shadow-sm border border-slate-100">
                    <Phone size={14} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlerts;
