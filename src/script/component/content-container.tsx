import React, { useState, useEffect } from 'react';
import '../../styles/navbar.css';
import Moon from '../../assets/lucide/moon.tsx';
import Sunn from '../../assets/lucide/sun.tsx';

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar-container">
      <div className="nav-links-wrapper">
        <div className="nav-links">
          <a href="#home" className="nav-item">Home</a>
          <a href="#education" className="nav-item">Education</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        <span className="icon-sun-moon">
          {theme === 'dark' ? <Sunn /> : <Moon /> }
        </span> 
      </button>
    </nav>
  );
};

const Layout = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className="layout-root">      
      <div className="content-wrapper">        
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="profile-section">
          <div className="img-container">
            <img src="../src/assets/profile-1.png" alt="Profile" />
          </div>
          <div className="profile-details">
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;