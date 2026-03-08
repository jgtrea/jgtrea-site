import React, { useState, useEffect } from 'react';
import '../../styles/navbar.css';
import '../../styles/content.css';
import '../../styles/theme.css';
import Moon from '../../assets/lucide/moon.tsx';
import Sunn from '../../assets/lucide/sun.tsx';
import Quotes from '../../assets/lucide/quote.tsx';
import Email from '@/assets/lucide/email.tsx';
import Gith from '@/assets/lucide/github.tsx';
import Linkin from '@/assets/lucide/linkedin.tsx';
import Resume from '@/assets/lucide/resume.tsx';

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
            <div className="top-right-icon">
              <Quotes />
            </div>
            
            <div className="profile-content">
              <p className="intro-text">Hi, I'm Jan</p>              
              
              <h1 className="main-headline">
                I am a student at Mapúa Malayan <br />
                Colleges Laguna, studying for a <br />
                Bachelor’s degree in <b><i>Information Technology</i></b>.
              </h1>

              <h1 className="main-headline">
                Looking to work as a <b><i>Software Developer</i></b> or <br />
                <b><i>Network Administrator</i></b>.
              </h1>
            </div>

            <div className="bottom-actions">
              <a href="mailto:@email.com" className="sq-btn"><Email /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="sq-btn"><Gith /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="sq-btn"><Linkin /></a>
              <a href="/path-to-resume.pdf" target="_blank" className="rect-btn">
                <Resume />
                <span>resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;