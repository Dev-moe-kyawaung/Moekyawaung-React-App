// src/App.js
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import BackToTop from './components/BackToTop';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  return (
    <div className="app" data-theme={darkMode ? 'dark' : 'light'}>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(prev => !prev)}
      />
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <div className="footer-section">
        <footer className="footer">
          <p>© 2026 Moe Kyaw Aung – Senior Android Developer</p>
          <p>Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
