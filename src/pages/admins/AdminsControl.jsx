import React from 'react';
import { UserCircle, Shield, Key, Mail, Phone, Calendar } from 'lucide-react';
import DataTable from '../../components/ui/tables/DataTable';

const AdminsControl = () => {
  const columns = [
    { 
      header: 'Admin Name', 
      accessor: 'name',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-[10px]">
             {row.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-black text-slate-900">{row.name}</p>
            <p className="text-[9px] text-slate-400 uppercase tracking-widest">{row.id}</p>
          </div>
        </div>
      )
    },
    { header: 'Role', accessor: 'role' },
    { 
      header: 'Department', 
      accessor: 'dept',
      render: (row) => (
        <span className="bg-slate-50 border border-slate-200 px-2 py-1 rounded text-[9px] font-black uppercase text-slate-600">
           {row.dept}
        </span>
      )
    },
    { 
      header: 'Security Level', 
      accessor: 'level',
      render: (row) => (
        <div className="flex items-center gap-1.5">
          <Shield size={10} className={row.level === 'L3' ? 'text-primary' : 'text-slate-400'} />
          <span className="font-bold">{row.level} Authorization</span>
        </div>
      )
    },
    { 
      header: 'Last Login', 
      accessor: 'lastLogin' 
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (row) => (
        <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase ${
          row.status === 'Active' ? 'bg-success/10 text-success' : 'bg-slate-100 text-slate-400'
        }`}>
          {row.status}
        </span>
      )
    }
  ];

  const adminData = [
    { name: 'Dr. Rajesh Kumar', id: 'NHAI-ADM-001', role: 'Super Admin', dept: 'Command Center', level: 'L3', lastLogin: '10 mins ago', status: 'Active' },
    { name: 'Sanjay Vishwakarma', id: 'NHAI-ADM-004', role: 'Traffic Analyst', dept: 'Surveillance', level: 'L2', lastLogin: '2 hours ago', status: 'Active' },
    { name: 'Priya Sharma', id: 'NHAI-ADM-007', role: 'Emergency Lead', dept: 'Safety', level: 'L3', lastLogin: 'Yesterday', status: 'Active' },
    { name: 'Amitabh Singh', id: 'NHAI-ADM-009', role: 'IT Support', dept: 'Tech Ops', level: 'L1', lastLogin: '3 days ago', status: 'Offline' },
    { name: 'Anjali Gupta', id: 'NHAI-ADM-012', role: 'Report Manager', dept: 'Audit', level: 'L2', lastLogin: '5 mins ago', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Administrative Control Panel</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Manage government officials and system access levels</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
            <UserCircle size={14} /> Add New Admin
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Admins', val: '48', icon: UserCircle, color: 'text-primary' },
          { label: 'High Security', val: '12', icon: Shield, color: 'text-indigo-600' },
          { label: 'Active Now', val: '18', icon: Key, color: 'text-success' },
          { label: 'Pending Access', val: '03', icon: Mail, color: 'text-amber-500' },
        ].map((stat, idx) => (
          <div key={idx} className="premium-card p-4 flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                <stat.icon size={20} className={stat.color} />
             </div>
             <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-xl font-black text-slate-900">{stat.val}</h3>
             </div>
          </div>
        ))}
      </div>

      <DataTable 
        title="Official System Admins"
        columns={columns}
        data={adminData}
      />
    </div>
  );
};

export default AdminsControl;
