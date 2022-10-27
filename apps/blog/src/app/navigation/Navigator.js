import { useAuthState } from '@blog-management/shared-logic';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import DashboardHome from '../pages/DashboardHome';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export default function Navigator() {
  const user = useAuthState();

  return (
    <Routes>
      {user?.userDetails ? (
        <Route path="/" element={<Dashboard />} >
          <Route path='home' element={<DashboardHome />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </>
      )}
    </Routes>
  );
}
