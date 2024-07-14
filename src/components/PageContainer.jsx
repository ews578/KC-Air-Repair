import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import Coupons from './pages/Coupons';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Heating from './pages/Heating';
import Cooling from './pages/Cooling';
import Maintenance from './pages/Maintenance';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Coupons') {
      return <Coupons />;
    }
    if (currentPage === 'Services') {
      return <Services handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'Heating') {
      return <Heating />;
    }
    if (currentPage === 'Cooling') {
      return <Cooling />;
    }
    if (currentPage === 'Maintenance') {
      return <Maintenance />;
    }
    return <Contact />;
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}