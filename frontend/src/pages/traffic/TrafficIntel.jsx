import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Clock, MapPin, Activity, AlertCircle } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import AnalyticsCard from '../../components/ui/cards/AnalyticsCard';

const trafficData = [
  { time: '00:00', vehicles: 450, speed: 95 },
  { time: '04:00', vehicles: 210, speed: 102 },
  { time: '08:00', vehicles: 1200, speed: 65 },
  { time: '12:00', vehicles: 850, speed: 85 },
  { time: '16:00', vehicles: 1500, speed: 55 },
  { time: '20:00', vehicles: 900, speed: 88 },
  { time: '23:59', vehicles: 500, speed: 92 },
];

const TrafficIntel = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Traffic Intelligence Hub</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Advanced vehicle flow analytics & bottleneck detection</p>
        </div>
        <div className="flex gap-2 text-[10px] font-bold uppercase">
           <span className="text-success flex items-center gap-1 bg-success/10 px-2 py-1 rounded-lg">● Live Flow: Stable</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsCard title="Avg. Flow Rate" value="1,240 v/hr" icon={TrendingUp} trend="up" trendValue={5} color="blue" />
        <AnalyticsCard title="Mean Speed" value="84 km/h" icon={Activity} trend="down" trendValue={2} color="indigo" />
        <AnalyticsCard title="Active Incidents" value="03 Cases" icon={AlertCircle} trend="up" trendValue={1} color="rose" />
        <AnalyticsCard title="Congestion Level" value="12%" icon={BarChart3} trend="down" trendValue={4} color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 premium-card"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Vehicle Volume Forecast</h3>
            <select className="bg-slate-50 border border-slate-200 text-[10px] font-bold rounded-lg px-2 py-1 outline-none">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVehicles" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="vehicles" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorVehicles)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="premium-card"
        >
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-4">Top Bottlenecks</h3>
          <div className="space-y-4">
            {[
              { loc: 'Interchange Alpha', load: 85, color: 'bg-rose-500' },
              { loc: 'Bridge Entrance', load: 62, color: 'bg-amber-500' },
              { loc: 'Toll Plaza South', load: 45, color: 'bg-blue-500' },
              { loc: 'Service Road Exit', load: 28, color: 'bg-success' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-slate-600">{item.loc}</span>
                  <span className="text-slate-900">{item.load}% Load</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.load}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-3 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex gap-2 items-start text-primary">
              <Activity size={14} className="mt-0.5" />
              <div>
                <p className="text-[10px] font-black uppercase">AI Flow Suggestion</p>
                <p className="text-[9px] font-bold text-primary/80 mt-0.5">Activate Lane 4 at Toll Alpha to reduce current 12% peak load.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrafficIntel;
