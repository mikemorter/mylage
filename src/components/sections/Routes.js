import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Trips from './Trips';
import Blog1 from '../elements/blog/Blog1';
import Blog2 from '../elements/blog/Blog2';
import Reaction from '../elements/Reaction';
import Map from '../elements/Map';

function AppRoutes() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trips" element={<Trips />} />
        <Route exact path="/blog1" element={<Blog1 />} />
        <Route exact path="/blog2" element={<Blog2 />} />
        <Route exact path="/reaction/:id" element={<Reaction />} />
        <Route exaxt path="/map" element={<Map />} />
      </Routes>
  )
}

export default AppRoutes;
