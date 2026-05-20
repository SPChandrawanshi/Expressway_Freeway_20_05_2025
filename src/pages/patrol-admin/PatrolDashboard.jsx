import React from 'react';
import MapDashboard from '../common/MapDashboard';
import { Fuel, Truck, UserCheck, Locate } from 'lucide-react';

const PatrolDashboard = () => {
  const stats = [
    { label: 'Active Patrols', value: '12 Units', icon: Truck },
    { label: 'Fuel Integrity', value: '94%', icon: Fuel },
    { label: 'Officer Attendance', value: '42/48', icon: UserCheck },
    { label: 'KM Covered (Today)', value: '1,240', icon: Locate },
  ];

  return (
    <MapDashboard 
      title="Patrol & Logistics Hub"
      subtitle="Fleet Tracking • Fuel Management & Field Support"
      stats={stats}
    />
  );
};

export default PatrolDashboard;