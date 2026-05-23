import React from 'react';
import AnalyticsDashboard from '../common/AnalyticsDashboard';
import { Gavel, Receipt, Clock, Gauge } from 'lucide-react';

const ChallanDashboard = () => {
  const metrics = [
    { label: 'Total Fines', value: '₹42.5 Lakh', change: '+14.2%', isUp: true, icon: Gavel },
    { label: 'Overspeed Cases', value: '1,284', change: '+8.4%', isUp: true, icon: Gauge },
    { label: 'Pending Payments', value: '482', change: '-2.5%', isUp: false, icon: Clock },
    { label: 'Settled Challans', value: '84%', change: '+5.2%', isUp: true, icon: Receipt },
  ];

  return (
    <AnalyticsDashboard 
      title="Enforcement & Fine Center"
      subtitle="Violation Tracking • Revenue Collection & Legal Audits"
      metrics={metrics}
    />
  );
};

export default ChallanDashboard;