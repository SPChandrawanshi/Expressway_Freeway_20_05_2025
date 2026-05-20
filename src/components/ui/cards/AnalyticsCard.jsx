import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const AnalyticsCard = ({ title, value, icon: Icon, trend, trendValue, color = "primary", delay = 0 }) => {
  const colorMap = {
    primary: "from-blue-50 to-white border-blue-100 text-primary",
    success: "from-green-50 to-white border-green-100 text-success",
    danger: "from-red-50 to-white border-red-100 text-danger",
    warning: "from-amber-50 to-white border-amber-100 text-warning",
  };

  const iconBgMap = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    danger: "bg-danger/10 text-danger",
    warning: "bg-warning/10 text-warning",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden p-4 rounded-2xl border bg-gradient-to-br ${colorMap[color]} shadow-premium group hover:shadow-2xl transition-all duration-300`}
    >
      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">{title}</p>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">{value}</h3>
          
          <div className="flex items-center gap-2 mt-2">
            {trend === "up" ? (
              <span className="flex items-center text-xs font-black text-success bg-success/10 px-2 py-1 rounded-lg">
                <TrendingUp size={14} className="mr-1" /> +{trendValue}%
              </span>
            ) : (
              <span className="flex items-center text-xs font-black text-danger bg-danger/10 px-2 py-1 rounded-lg">
                <TrendingDown size={14} className="mr-1" /> -{trendValue}%
              </span>
            )}
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">vs last period</span>
          </div>
        </div>
        
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBgMap[color]} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
          <Icon size={20} />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/40 rounded-full blur-3xl group-hover:bg-white/60 transition-all" />
    </motion.div>
  );
};

export default AnalyticsCard;
