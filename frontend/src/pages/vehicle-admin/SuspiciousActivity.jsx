import React from 'react';
import UniversalDashboard from '../common/UniversalDashboard';
import { AlertOctagon } from 'lucide-react';

const SuspiciousActivity = () => <UniversalDashboard title='AI Flagged Suspicious Behaviors' subtitle='National Vehicle Monitoring Command' icon={AlertOctagon} />;
export default SuspiciousActivity;