import React from 'react';
import DashboardNavbar from '../components/dashboard-navbar/dashboard-navbar';

export default function DashboardHome() {
  return (
    <div>
        <DashboardNavbar />
        <div className='ml-64 px-4 py-5'>
            Home
        </div>
    </div>
  );
}
