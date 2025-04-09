import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; 
// import logoImage from '../assets/logo.jpg';

import { useAuth } from '../context/AuthContext'; 

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const { isLoggedIn, logout } = useAuth(); 

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    window.location.replace('/');
  };

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="containernav">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={"https://res.cloudinary.com/dkf7alzki/image/upload/v1744120994/logo_wx4ypx.jpg"} alt="Logo" />
          <span className="logo-text">NOVA CAPTURE</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {mainLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Register/Login and BookNow */}
        <div className="register-book-container">
          {isLoggedIn ? (
            <button className="nav-link logout-link" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/register" className="nav-link">
              Register/Login
            </Link>
          )}
          <Link to={isLoggedIn ? "/booknow" : "/register"} className="nav-link">
            BookNow
          </Link>
        </div>

        {/* Hamburger */}
        <div className="menu-bar" onClick={toggleNav}>
          {isNavOpen ? (
            <span className="close-icon">×</span>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            {mainLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
