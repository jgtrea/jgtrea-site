import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Moon from '../assets/lucide/moon.tsx';
import Sunn from '../assets/lucide/sun.tsx';
import Home from './routes/home.tsx';
import Projects from './routes/projects.tsx';
import Education from './component/education.tsx';
import Project from './component/project.tsx';
import FooterBar from './routes/footer.tsx';
import ScrollTop from './component/scroll-top.tsx';
import '../styles/navbar.css';
import '../styles/footer.css';
import '../styles/content.css';
import '../styles/education.css';
import '../styles/project.css';
import '../styles/theme.css';

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar-container">
      <div className="nav-links-wrapper">
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
        </div>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        <span className="icon-sun-moon">
          {theme === 'light' ? <Moon /> : <Sunn /> }
        </span> 
      </button>
    </nav>
  );
};

const HomePage = () => (
  <main className="layout-root">      
    <div className="content-wrapper">        
      <Home />    
      <span id="education"><Education /></span>    
      <span id="projects"><Project /></span>
      <FooterBar />
    </div>
  </main>
);

function App() {  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <ScrollTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<main className="layout-root"><div className="content-wrapper"><Projects /><FooterBar /></div></main>} />
      </Routes>
    </>
  );
};

export default App
