import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './'
import './Shop';
import './Accessories';

const Home = lazy(() => import('./Home'));
const Shop = lazy(() => import('./Shop'));
const Accessories = lazy(() => import('./Accessories'));
const DaftarYuk = lazy(() => import('./DaftarYuk'));



const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/DaftarYuk" element={<DaftarYuk />} />
      </Routes>
    </Suspense>
  </Router>
);
export default App;