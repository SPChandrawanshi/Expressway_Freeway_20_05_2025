import React from 'react';
import UniversalDashboard from '../common/UniversalDashboard';
import { Gauge } from 'lucide-react';

const OverspeedAlert = () => <UniversalDashboard title='AI Overspeeding Detection Center' subtitle='National Vehicle Monitoring Command' icon={Gauge} />;
export default OverspeedAlert;