import React from 'react';
import AnalyticsDashboard from '../common/AnalyticsDashboard';
import { FileDown, FileSpreadsheet, Cpu, Layers } from 'lucide-react';

const ReportsDashboard = () => {
  const metrics = [
    { label: 'Generated Reports', value: '1,240', change: '+12%', isUp: true, icon: FileDown },
    { label: 'AI Analytics Hits', value: '84K', change: '+24%', isUp: true, icon: Cpu },
    { label: 'Exported Data', value: '4.2 TB', change: '+8%', isUp: true, icon: FileSpreadsheet },
    { label: 'System Accuracy', value: '99.9%', change: 'Stable', isUp: true, icon: Layers },
  ];

  return (
    <AnalyticsDashboard 
      title="Government Reporting Engine"
      subtitle="Data Intelligence • National Level Analytics & Exports"
      metrics={metrics}
    />
  );
};

export default ReportsDashboard;