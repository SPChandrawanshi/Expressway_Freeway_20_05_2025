import React from 'react';
import MapDashboard from '../common/MapDashboard';
import { Tv, Bell, Cpu, Map as MapIcon } from 'lucide-react';

const ControlDashboard = () => {
  const stats = [
    { label: 'CCTV Wall Nodes', value: '16/16', icon: Tv },
    { label: 'System Alerts', value: '04', icon: Bell },
    { label: 'AI Compute Load', value: '24%', icon: Cpu },
    { label: 'Map Sync Status', value: 'OK', icon: MapIcon },
  ];

  return (
    <MapDashboard 
      title="National Control Terminal"
      subtitle="Strategic Intelligence • Centralized Expressway Command"
      stats={stats}
    />
  );
};

export default ControlDashboard;