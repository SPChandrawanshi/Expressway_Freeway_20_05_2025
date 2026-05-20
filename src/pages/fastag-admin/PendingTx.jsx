import React from 'react';
import UniversalDashboard from '../common/UniversalDashboard';
import { Clock } from 'lucide-react';

const PendingTx = () => <UniversalDashboard title='Transactions Awaiting Bank Settlement' subtitle='FASTag National Control Panel' icon={Clock} />;
export default PendingTx;