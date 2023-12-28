import React from 'react';
// import logo from './logo.svg'; // Make sure the path to your logo is correct
import './Header.css'; // Make sure you have a Header.css file for styling

function Header() {
  return (
    <header className="header">
      <img src={""} alt="Company Logo" className="logo" />
      <nav className="nav">
        <a href="#shipments" className="nav-link">Shipments</a>
        <a href="#new-shipment" className="nav-link">New Shipment</a>
        <a href="#update-location" className="nav-link">Update Location</a>
        <a href="#generate-receipt" className="nav-link">Generate Receipt</a>
        {/* Add more nav items if needed */}
      </nav>
    </header>
  );
}

export default Header;
