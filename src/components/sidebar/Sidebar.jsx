import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Activity, Globe, ShieldCheck, FileText, 
  Users, Settings, LogOut, ChevronDown, Camera, 
  Navigation, Siren, Zap, BarChart3, Map, 
  CreditCard, HardHat, AlertCircle, Cpu, 
  ShieldAlert, Lock, Palette, Truck, DollarSign, 
  Search, History, CheckCircle2, Clock, TrendingUp, 
  Locate, Scan, Gauge, AlertOctagon, PieChart, 
  MessageSquare, Timer, Activity as ActivityIcon,
  Shield, ClipboardList, Briefcase, Package
} from 'lucide-react';

const MENU_CONFIG = {
  super: {
    label: "Super Admin",
    groups: [
      { title: "Dashboard", items: [{ name: 'Executive Overview', path: '/super-admin', icon: LayoutDashboard }] },
      { title: "National Monitoring", icon: Globe, items: [
        { name: 'Highway Status', path: '/super-admin/highway-status', icon: Map },
        { name: 'Traffic Overview', path: '/super-admin/traffic-overview', icon: Activity },
      ]},
      { title: "Personnel", icon: Users, items: [
        { name: 'Officers List', path: '/super-admin/users', icon: Users },
        { name: 'Access Control', path: '/super-admin/access', icon: ShieldCheck },
      ]},
    ]
  },
  highway: {
    label: "Highway Admin",
    groups: [
      { title: "Dashboard", items: [{ name: 'Operations Hub', path: '/highway-admin/dashboard', icon: LayoutDashboard }] },
      { title: "Operations", icon: Navigation, items: [
        { name: 'Highway Status', path: '/highway-admin/status', icon: Map },
        { name: 'Route Intel', path: '/highway-admin/route', icon: Navigation },
      ]},
    ]
  },
  toll: {
    label: "Toll Management",
    groups: [
      { title: "Dashboard", items: [{ name: 'Plaza Hub', path: '/toll-admin/dashboard', icon: LayoutDashboard }] },
      { title: "Operations", icon: Zap, items: [
        { name: 'Active Lanes', path: '/toll-admin/active-lanes', icon: Zap },
        { name: 'Daily Collection', path: '/toll-admin/collection', icon: DollarSign },
      ]},
    ]
  },
  fastag: {
    label: "FASTag Control",
    groups: [
      { title: "Dashboard", items: [{ name: 'FASTag Hub', path: '/fastag-admin/dashboard', icon: CreditCard }] },
      { title: "Transactions", icon: DollarSign, items: [
        { name: 'Successful Tx', path: '/fastag-admin/success-tx', icon: CheckCircle2 },
        { name: 'Failed Tx', path: '/fastag-admin/failed-tx', icon: AlertOctagon },
      ]},
    ]
  },
  vehicle: {
    label: "Vehicle Monitoring",
    groups: [
      { title: "Dashboard", items: [{ name: 'Surveillance Hub', path: '/vehicle-admin/dashboard', icon: Locate }] },
      { title: "Tracking", icon: Scan, items: [
        { name: 'ANPR Detection', path: '/vehicle-admin/anpr', icon: Camera },
        { name: 'Overspeed Alerts', path: '/vehicle-admin/overspeed', icon: Gauge },
      ]},
    ]
  },
  traffic: {
    label: "Traffic Analytics",
    groups: [
      { title: "Dashboard", items: [{ name: 'Intelligence Hub', path: '/traffic-admin/dashboard', icon: Activity }] },
      { title: "Analytics", icon: PieChart, items: [
        { name: 'Traffic Density', path: '/traffic-admin/density', icon: PieChart },
        { name: 'Peak Hours', path: '/traffic-admin/peak-hours', icon: Clock },
      ]},
    ]
  },
  incident: {
    label: "Incident Management",
    groups: [
      { title: "Dashboard", items: [{ name: 'Incident Center', path: '/incident-admin/dashboard', icon: AlertCircle }] },
      { title: "Emergency", icon: Siren, items: [
        { name: 'Accident Reports', path: '/incident-admin/accidents', icon: AlertOctagon },
        { name: 'Response Tracking', path: '/incident-admin/response', icon: Timer },
      ]},
    ]
  },
  emergency: {
    label: "Emergency Support",
    groups: [
      { title: "Dashboard", items: [{ name: 'SOS Command', path: '/emergency-admin/dashboard', icon: Siren }] },
      { title: "Response", icon: Shield, items: [
        { name: 'Ambulance Tracking', path: '/emergency-admin/ambulance', icon: ActivityIcon },
        { name: 'Police Support', path: '/emergency-admin/police', icon: ShieldCheck },
      ]},
    ]
  },
  maintenance: {
    label: "Road Maintenance",
    groups: [
      { title: "Dashboard", items: [{ name: 'Maint. Hub', path: '/maintenance-admin/dashboard', icon: HardHat }] },
      { title: "Operations", icon: ClipboardList, items: [
        { name: 'Work Orders', path: '/maintenance-admin/work-orders', icon: Package },
        { name: 'Damage Reports', path: '/maintenance-admin/damage', icon: AlertOctagon },
      ]},
    ]
  }
};

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState([]);
  
  const roleKeys = Object.keys(MENU_CONFIG);
  const currentRoleKey = roleKeys.find(key => location.pathname.startsWith(`/${key}`)) || 'super';
  const roleConfig = MENU_CONFIG[currentRoleKey];

  const toggleGroup = (title) => {
    setOpenGroups(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <aside className={`h-screen bg-[#CAD3C8] border-r border-black/5 flex flex-col transition-all duration-500 shadow-master z-[60] shrink-0 ${collapsed ? 'w-[70px]' : 'w-[240px]'}`}>
      {/* Brand Header */}
      <div className="p-6 border-b border-black/10 space-y-3 bg-white/20 backdrop-blur-md">
         <div className="flex items-center gap-4">
            <div className="logo-container w-12 h-12 bg-white rounded-2xl p-2.5 shadow-master border border-black/5 flex items-center justify-center shrink-0">
               <Shield className="w-full h-full text-primary" strokeWidth={2.5} />
            </div>
            {!collapsed && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="overflow-hidden"
              >
                <h1 className="text-[12px] font-black text-slate-900 uppercase tracking-tighter leading-none">Smart Expressway</h1>
                <p className="text-[8px] font-bold text-slate-600 mt-1 uppercase tracking-[0.2em] opacity-60">National Grid</p>
              </motion.div>
            )}
         </div>
      </div>

      {/* Role Banner */}
      <div className={`px-4 py-3 border-b border-slate-200/50 bg-white/30 ${collapsed ? 'text-center' : ''}`}>
         {!collapsed ? (
            <h2 className="text-[9px] font-black text-slate-600 uppercase tracking-widest flex items-center gap-2">
               <div className="w-1 h-1 bg-primary rounded-full"></div>
               {roleConfig.label}
            </h2>
         ) : (
            <ShieldCheck size={14} className="text-slate-400 mx-auto" />
         )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto no-scrollbar py-3 px-2.5 space-y-1">
        {roleKeys.map((key, idx) => (
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={key}
            onClick={() => navigate(`/${key}${key === 'super' ? '' : '-admin/dashboard'}`)}
            className={`w-full flex items-center gap-3 p-2.5 rounded-2xl transition-all duration-300 border-2 ${currentRoleKey === key ? 'bg-white text-primary shadow-master border-[#6D214F] -translate-y-1' : 'border-transparent text-slate-600 hover:bg-white/60 hover:text-slate-900 hover:border-[#6D214F] hover:-translate-y-1 hover:shadow-xl'} ${collapsed ? 'justify-center' : ''}`}
          >
             <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${currentRoleKey === key ? 'bg-primary text-white' : 'bg-slate-200/50 text-slate-500'}`}>
                <Shield size={16} strokeWidth={2.5} />
             </div>
             {!collapsed && <span className="text-[10px] font-black uppercase tracking-tight truncate">{key} Portal</span>}
          </motion.button>
        ))}

        <div className="my-3 border-t border-slate-200/50 opacity-50"></div>

        {roleConfig.groups.map((group, gIdx) => (
          <div key={gIdx} className="mb-1.5">
             {group.icon ? (
               <>
                 <button 
                   onClick={() => toggleGroup(group.title)}
                   className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/40 transition-all group"
                 >
                    <div className="flex items-center gap-2.5">
                       <group.icon size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                       {!collapsed && <span className="text-[9px] font-black uppercase text-slate-600 tracking-wider truncate">{group.title}</span>}
                    </div>
                    {!collapsed && <ChevronDown size={12} className={`text-slate-400 transition-transform ${openGroups.includes(group.title) ? 'rotate-180' : ''}`} />}
                 </button>
                 <AnimatePresence>
                   {openGroups.includes(group.title) && !collapsed && (
                     <motion.div 
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="overflow-hidden space-y-1 mt-1 ml-5 border-l border-slate-200/50 pl-2.5"
                     >
                        {group.items.map((item) => {
                          const isActive = location.pathname === item.path;
                          return (
                            <button
                              key={item.path}
                              onClick={() => navigate(item.path)}
                              className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl transition-all ${isActive ? 'bg-primary text-white shadow-master font-black' : 'text-slate-500 hover:text-primary hover:bg-white/40'}`}
                            >
                              <item.icon size={12} />
                              <span className="text-[8px] uppercase tracking-tight whitespace-nowrap">{item.name}</span>
                            </button>
                          );
                        })}
                     </motion.div>
                   )}
                 </AnimatePresence>
               </>
             ) : (
               group.items.map((item) => {
                 const isActive = location.pathname === item.path;
                 return (
                    <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className={`w-full flex items-center gap-2.5 p-2 rounded-xl transition-all ${isActive ? 'bg-primary text-white shadow-master' : 'text-slate-600 hover:bg-white/40'}`}
                    >
                        <item.icon size={16} />
                        {!collapsed && <span className="text-[9px] font-black uppercase tracking-tight truncate">{item.name}</span>}
                    </button>
                 );
               })
             )}
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-slate-200 bg-white/20">
        <button 
          onClick={() => navigate('/login')}
          className={`w-full flex items-center gap-2.5 p-2 rounded-lg text-rose-600 hover:bg-rose-50/50 transition-all font-black uppercase text-[9px] ${collapsed ? 'justify-center' : ''}`}
        >
          <LogOut size={16} />
          {!collapsed && <span>Exit Session</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
