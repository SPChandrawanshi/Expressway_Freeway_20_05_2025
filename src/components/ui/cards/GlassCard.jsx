import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-primary-card/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-premium ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
