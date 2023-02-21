import React from 'react';
import AppRoutes from './Routes';
import NavBar from './NavBar';
import Home from './Home';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <AppRoutes />
    </div>
  )
}

export default Layout;
