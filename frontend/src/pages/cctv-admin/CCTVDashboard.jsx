import React from 'react';
import MapDashboard from '../common/MapDashboard';
import { Camera, Monitor, ShieldCheck, Activity } from 'lucide-react';

const CCTVDashboard = () => {
  const stats = [
    { label: 'Active Cameras', value: '482/500', icon: Camera },
    { label: 'AI Detection', value: 'Live', icon: Activity },
    { label: 'Storage Health', value: '94%', icon: ShieldCheck },
    { label: 'Monitor Wall', value: '16 Grid', icon: Monitor },
  ];

  return (
    <MapDashboard 
      title="Surveillance Command Center"
      subtitle="Visual Intelligence • AI Motion Detection Matrix"
      stats={stats}
    />
  );
};

export default CCTVDashboard;