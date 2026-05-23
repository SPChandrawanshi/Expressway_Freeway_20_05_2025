import React from 'react';
import AnalyticsDashboard from '../common/AnalyticsDashboard';
import { Users, Fingerprint, Clock, Wallet } from 'lucide-react';

const EmployeeDashboard = () => {
  const metrics = [
    { label: 'Total Staff', value: '482', change: '+2', isUp: true, icon: Users },
    { label: 'Attendance Rate', value: '96%', change: '+1.2%', isUp: true, icon: Fingerprint },
    { label: 'Pending Shifts', value: '12', change: '-3', isUp: true, icon: Clock },
    { label: 'Payroll Status', value: 'Processed', change: 'OK', isUp: true, icon: Wallet },
  ];

  return (
    <AnalyticsDashboard 
      title="Human Capital Management"
      subtitle="Staff Monitoring • Attendance & Payroll Intelligence"
      metrics={metrics}
    />
  );
};

export default EmployeeDashboard;