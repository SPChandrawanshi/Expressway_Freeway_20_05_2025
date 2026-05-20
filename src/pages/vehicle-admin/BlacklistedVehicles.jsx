import React from 'react';
import UniversalDashboard from '../common/UniversalDashboard';
import { ShieldAlert } from 'lucide-react';

const BlacklistedVehicles = () => <UniversalDashboard title='Flagged & Stolen Vehicle Database' subtitle='National Vehicle Monitoring Command' icon={ShieldAlert} />;
export default BlacklistedVehicles;