import React from 'react';
import Card from 'react-bootstrap/Card';
import '/style.css'; 

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <Card className="header-card">
      <Card.Body className="header-body">
          <Card.Text className="header-text">
            <img 
              src="assets/kar no buff.png" 
              alt="KC Air Repair Logo" 
              className="logo" 
              style={{ width: '200px', height: 'auto' }} 
            />
          </Card.Text>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                onClick={() => handlePageChange('Services')}
                className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#coupons"
                onClick={() => handlePageChange('Coupons')}
                className={currentPage === 'Coupons' ? 'nav-link active' : 'nav-link'}
              >
                Special Offers
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </>
  );
}

export default Header;