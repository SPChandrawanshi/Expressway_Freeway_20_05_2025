import React from 'react';
import UniversalDashboard from '../common/UniversalDashboard';
import { AlertCircle } from 'lucide-react';

const FailedTransactions = () => <UniversalDashboard title='Transaction Failure Analysis' subtitle='Toll Operations Command Center' icon={AlertCircle} />;
export default FailedTransactions;