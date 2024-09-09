import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import Coupons from './pages/Coupons';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Heating from './pages/Heating'; // Import the Heating component
import Cooling from './pages/Cooling';
import Maintenance from './pages/Maintenance';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Coupons':
        return <Coupons />;
      case 'Services':
        return <Services handlePageChange={handlePageChange} />;
      case 'Heating':
        return <Heating handlePageChange={handlePageChange} />;
      case 'Cooling':
        return <Cooling />;
      case 'Maintenance':
        return <Maintenance />;
      default:
        return <Contact />;
    }
  };

  return (
    <div className="page-container">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
