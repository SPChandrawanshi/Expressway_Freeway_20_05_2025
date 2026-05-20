/**
 * Login.jsx - Professional Authentication & Role Selection Interface
 * 
 * Features:
 * - Multi-role selection dashboard for admin authentication
 * - Dynamic role-based navigation with 9 different admin portals
 * - Secure credential management (password/OTP authentication)
 * - Premium UI with Framer Motion animations and Tailwind styling
 * - Responsive two-column layout (branding + auth panel)
 * 
 * Role Categories:
 * 1. Super Admin - Full system control and oversight
 * 2. Highway Management - Infrastructure & traffic management
 * 3. Toll Management - Toll collection operations
 * 4. FASTag Control - Electronic toll system management
 * 5. Vehicle Monitoring - Vehicle tracking and analytics
 * 6. Traffic Analytics - Traffic pattern analysis
 * 7. Incident Management - Emergency response coordination
 * 8. Emergency Support - Emergency dispatch services
 * 9. Road Maintenance - Infrastructure maintenance ops
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, ShieldCheck, ArrowRight, User, Lock, 
  Smartphone, Globe, ChevronLeft, Building2,
  Navigation, Camera, Siren, Truck, BarChart3,
  Tv, Users, LayoutDashboard, Database, CreditCard,
  Activity, Locate, PieChart, AlertCircle, HardHat,
  Eye, EyeOff
} from 'lucide-react';

// Role definition array with icon mapping, colors, and navigation paths
const ROLES = [
  { id: 'super', name: 'Super Admin', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50/50', path: '/super-admin' },
  { id: 'highway', name: 'Highway Admin', icon: Navigation, color: 'text-emerald-600', bg: 'bg-emerald-50/50', path: '/highway-admin/dashboard' },
  { id: 'toll', name: 'Toll Management', icon: Building2, color: 'text-amber-600', bg: 'bg-amber-50/50', path: '/toll-admin/dashboard' },
  { id: 'fastag', name: 'FASTag Control', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50/50', path: '/fastag-admin/dashboard' },
  { id: 'vehicle', name: 'Vehicle Monitoring', icon: Locate, color: 'text-rose-600', bg: 'bg-rose-50/50', path: '/vehicle-admin/dashboard' },
  { id: 'traffic', name: 'Traffic Analytics', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-50/50', path: '/traffic-admin/dashboard' },
  { id: 'incident', name: 'Incident Management', icon: AlertCircle, color: 'text-purple-600', bg: 'bg-purple-50/50', path: '/incident-admin/dashboard' },
  { id: 'emergency', name: 'Emergency Support', icon: Siren, color: 'text-slate-600', bg: 'bg-slate-50/50', path: '/emergency-admin/dashboard' },
  { id: 'maintenance', name: 'Road Maintenance', icon: HardHat, color: 'text-cyan-600', bg: 'bg-cyan-50/50', path: '/maintenance-admin/dashboard' }
];

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('password');
  
  // Demo credentials (replace with API integration for production)
  const [credentials, setCredentials] = useState({
    id: 'ADMIN_7709',
    passcode: 'SECURE_GATEWAY_2026',
    phone: '+91 99887 76655'
  });

  // Handle authentication and navigation
  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedRole) {
       navigate(selectedRole.path);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8 font-inter antialiased">
      <div className="grid w-full max-w-[1100px] gap-6 xl:grid-cols-[340px_minmax(0,1fr)] mx-auto">
        {/* Left Section - Professional Branding (Compact) */}
        <div className="hidden xl:flex xl:w-[320px] 2xl:w-[360px] relative bg-[#CAD3C8] overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
          <div className="absolute inset-0">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
             <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
          </div>

          <div className="relative z-10 p-10 flex flex-col justify-between h-full w-full">
              <div className="flex items-center gap-4">
                 <div className="logo-container w-14 h-14 bg-white/95 rounded-2xl p-3 shadow-sm border border-white/50 flex items-center justify-center">
                    <Shield className="w-full h-full text-primary" strokeWidth={2.5} />
                 </div>
                 <div className="flex flex-col">
                    <h1 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.2em] leading-none">Smart Expressway</h1>
                    <p className="text-[10px] font-semibold text-slate-600 mt-1 uppercase tracking-[0.24em] opacity-70">National Grid</p>
                 </div>
              </div>

             <div className="space-y-4">
                <h1 className="text-3xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase">
                   Gateway <br /> Access.
                </h1>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
                <p className="text-slate-700 text-[10px] font-semibold uppercase tracking-[0.24em] leading-relaxed max-w-[220px]">
                   Secure administrative node for national highway intelligence.
                </p>
             </div>

             <div className="text-[10px] font-semibold text-slate-600/60 uppercase tracking-[0.24em]">
                © 2026 NHAI CENTRAL CONTROL
             </div>
          </div>
        </div>

      {/* Right Section - High-Density Role Selection / Login */}
      <div className="relative flex min-h-[700px] w-full items-center justify-center rounded-[28px] bg-white border border-slate-100 shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          {!selectedRole ? (
              <motion.div 
              key="selection"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 1.05 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="w-full max-w-[680px] rounded-[28px] bg-white border border-slate-100 shadow-lg p-10 lg:p-12"
            >
               <div className="mb-12 text-center">
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-1">Command Portals</h2>
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-widest\">Select Node for Authentication</p>
               </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
                   {ROLES.map((role, idx) => (
                     <motion.button
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.04 }}
                       whileHover={{ y: -4, scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       key={role.id}
                       onClick={() => setSelectedRole(role)}
                       className="bg-white p-4 rounded-[20px] border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all group flex flex-col items-center justify-center text-center relative min-h-[120px]"
                     >
                       <div className={`${role.color} group-hover:scale-125 transition-transform mb-2`}>
                          <role.icon size={24} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.15em]">{role.name}</h3>
                    </motion.button>
                  ))}
               </div>
            </motion.div>
          ) : (
            <motion.div 
              key="auth"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-[420px] rounded-[40px] bg-slate-50 border border-slate-200 shadow-master p-8 lg:p-10"
            >
               <button 
                 onClick={() => setSelectedRole(null)}
                 className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-[0.2em] hover:opacity-70 transition-all mb-8 group"
               >
                  <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Terminal Selection
               </button>

               <div className="mb-10">
                  <div className={`w-14 h-14 ${selectedRole.bg} ${selectedRole.color} rounded-2xl flex items-center justify-center mb-6 shadow-master border border-black/5`}>
                     <selectedRole.icon size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">{selectedRole.name}</h2>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-3">Enter Command Credentials</p>
               </div>

               <div className="flex bg-slate-50 p-1 rounded-xl mb-8 border border-black/5 shadow-inner">
                  <button 
                    onClick={() => setLoginMethod('password')}
                    className={`flex-1 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${loginMethod === 'password' ? 'bg-white text-primary shadow-master border-master' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                     Passcode
                  </button>
                  <button 
                    onClick={() => setLoginMethod('otp')}
                    className={`flex-1 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${loginMethod === 'otp' ? 'bg-white text-primary shadow-master border-master' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                     OTP Secure
                  </button>
               </div>

               <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-1.5">
                     <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Command ID</label>
                     <div className="relative group">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <input 
                          type="text" 
                          required
                          value={credentials.id}
                          onChange={(e) => setCredentials({...credentials, id: e.target.value})}
                          className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-3.5 pl-12 pr-4 text-[11px] font-black focus:bg-white focus:border-[#6D214F] outline-none transition-all placeholder:text-slate-300 uppercase tracking-widest shadow-sm"
                        />
                     </div>
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">
                        {loginMethod === 'password' ? 'Security Passcode' : 'Phone Number'}
                     </label>
                     <div className="relative group">
                        {loginMethod === 'password' ? <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" /> : <Smartphone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />}
                        <input 
                          type={loginMethod === 'password' ? (showPassword ? 'text' : 'password') : 'tel'} 
                          required
                          value={loginMethod === 'password' ? credentials.passcode : credentials.phone}
                          className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-3.5 pl-12 pr-12 text-[11px] font-black focus:bg-white focus:border-[#6D214F] outline-none transition-all placeholder:text-slate-300 shadow-sm"
                        />
                        {loginMethod === 'password' && (
                          <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                          >
                             {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        )}
                     </div>
                  </div>

                   <motion.button 
                     whileHover={{ scale: 1.02, y: -2 }}
                     whileTap={{ scale: 0.98 }}
                     type="submit"
                     className="w-full bg-slate-900 hover:bg-[#6D214F] text-white font-black py-4 rounded-2xl shadow-[rgba(0,0,0,0.35)_0px_10px_20px] hover:shadow-[rgba(0,0,0,0.5)_0px_15px_30px] border-2 border-transparent hover:border-white/20 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px] mt-4"
                   >
                     Authorize Session <ArrowRight size={16} />
                   </motion.button>
               </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </div>
  );
};

export default Login;
