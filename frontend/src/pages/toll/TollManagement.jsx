import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, Users, AlertCircle, ArrowUpRight, BarChart3 } from 'lucide-react';
import AnalyticsCard from '../../components/ui/cards/AnalyticsCard';
import DataTable from '../../components/ui/tables/DataTable';

const TollManagement = () => {
  const columns = [
    { header: 'Plaza ID', accessor: 'plazaId' },
    { header: 'Location', accessor: 'location' },
    { header: 'Daily Revenue', accessor: 'revenue' },
    { header: 'Active Lanes', accessor: 'lanes' },
    { 
      header: 'System Health', 
      accessor: 'health',
      render: (row) => (
        <span className="text-success font-bold text-[10px]">● {row.health}</span>
      )
    }
  ];

  const plazaData = [
    { plazaId: 'PLZ-ALPHA', location: 'KM 12.5 North', revenue: '₹4.2L', lanes: '12/12', health: 'Optimal' },
    { plazaId: 'PLZ-BETA', location: 'KM 45.2 South', revenue: '₹3.8L', lanes: '10/12', health: 'Maintenance' },
    { plazaId: 'PLZ-GAMMA', location: 'KM 88.0 East', revenue: '₹2.1L', lanes: '06/08', health: 'Optimal' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Toll Operations Command</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Revenue tracking & plaza lane management</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
           <BarChart3 size={14} /> Settlement Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <AnalyticsCard title="Total Revenue" value="₹12.4 Cr" icon={DollarSign} trend="up" trendValue={8} color="blue" />
        <AnalyticsCard title="Total Transactions" value="48.2K" icon={CreditCard} trend="up" trendValue={12} color="indigo" />
        <AnalyticsCard title="Plaza Staff" value="124 Off." icon={Users} trend="down" trendValue={2} color="emerald" />
        <AnalyticsCard title="Discrepancies" value="02 Cases" icon={AlertCircle} trend="up" trendValue={1} color="rose" />
      </div>

      <DataTable 
        title="Active Toll Plaza Performance"
        columns={columns}
        data={plazaData}
      />
    </div>
  );
};

export default TollManagement;
