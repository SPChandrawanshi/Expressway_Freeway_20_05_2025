import React from 'react';
import UniversalDashboard from '../common/UniversalDashboard';
import { AlertCircle } from 'lucide-react';

const FailedTxFT = () => <UniversalDashboard title='Detailed Transaction Failure Audit' subtitle='FASTag National Control Panel' icon={AlertCircle} />;
export default FailedTxFT;