import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Companies } from './pages/Companies';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import Invoices from './pages/Invoices';

export default function App() {
  return (
    <BrowserRouter>
      <div className={`flex h-screen`}>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/companies" element={<Companies />}>
            <Route path=":name" element={<Companies />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
