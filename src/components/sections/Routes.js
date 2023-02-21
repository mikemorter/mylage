import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Trips from './Trips';

function AppRoutes() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trips" element={<Trips />} />
      </Routes>
  )
}

export default AppRoutes;
