import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import GovernmentHeader from '../components/navbar/GovernmentHeader';

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-row w-full h-screen bg-[#f8fafc] overflow-hidden antialiased font-inter">
      {/* Sidebar - Controlled Collapse */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content Node */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full">
        {/* Universal Command Header (80px) */}
        <GovernmentHeader collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Dynamic Intelligence Viewport */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative no-scrollbar bg-[#f8fafc]">
           {/* Subtle Professional Grid Background */}
           <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
           
           {/* Content Inset */}
           <div className="p-6 lg:p-8 min-h-full relative z-10">
              <Outlet />
           </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
