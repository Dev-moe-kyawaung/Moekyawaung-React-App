// src/components/NavBar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = new URLSearchParams(location.search).get('lang') || 'en';

  const navItems = [
    { path: '/', label: lang === 'en' ? 'Home' : 'ပင်မ' },
    { path: '/resume', label: lang === 'en' ? 'Resume' : 'CV' },
    { path: '/certificates', label: lang === 'en' ? 'Certificates' : 'လက်မှတ်' },
    { path: '/projects', label: lang === 'en' ? 'Projects' : 'ပရောဂျက်' },
    { path: '/app-collection', label: lang === 'en' ? 'App Collection' : 'App Collection' },
    { path: '/github-collections', label: lang === 'en' ? 'GitHub Collections' : 'GitHub Collections' },
    { path: '/lovable-links', label: lang === 'en' ? 'Lovable Links' : 'Lovable Links' },
    { path: '/mail-collections', label: lang === 'en' ? 'Mail Collections' : 'Mail Collections' },
    { path: '/blog', label: lang === 'en' ? 'Blog' : 'ဘလော့ဂ်' },
    { path: '/contact', label: lang === 'en' ? 'Contact' : 'ဆက်သွယ်ရန်' },
  ];

  const toggleLang = () =>
    navigate(
      `${location.pathname}?lang=${lang === 'en' ? 'mm' : 'en'}`,
      { replace: true }
    );

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button
          className="nav-logo"
          onClick={() => navigate('/?lang=' + lang, { replace: true })}
        >
          <span className="glow-text">MKA</span>
        </button>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => navigate(item.path + '?lang=' + lang)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-right">
          <button
            className="nav-lang-toggle"
            onClick={toggleLang}
          >
            {lang === 'en' ? 'MM' : 'EN'}
          </button>

          <button
            className="nav-theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
