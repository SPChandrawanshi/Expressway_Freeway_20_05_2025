import React from 'react';
import MapDashboard from '../common/MapDashboard';
import { Zap, Signal, MapPin, Navigation } from 'lucide-react';

const RouteDashboard = () => {
  const stats = [
    { label: 'Lane Integrity', value: '98%', icon: Zap },
    { label: 'Active Signals', value: '42/42', icon: Signal },
    { label: 'Diversions Active', value: '02', icon: MapPin },
    { label: 'Reroute Requests', value: '05', icon: Navigation },
  ];

  return (
    <MapDashboard 
      title="Route Intelligence Matrix"
      subtitle="Lane Monitoring • Smart Signals & Rerouting Control"
      stats={stats}
    />
  );
};

export default RouteDashboard;