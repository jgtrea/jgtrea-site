import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, LayoutGroup } from 'framer-motion';
import Moon from '../assets/lucide/moon.tsx';
import Sunn from '../assets/lucide/sun.tsx';
import Home from './routes/home.tsx';
import Projects from './routes/projects.tsx';
import Blog from './routes/blog.tsx';
import BlogPost from './routes/blog-post.tsx';
import Practicum from './routes/practicum/practicum.tsx';
import TaskPost from './routes/practicum/task-post.tsx';
import Education from './component/education.tsx';
import Project from './component/project.tsx';
import BlogPreview from './component/blog-preview.tsx';
import FooterBar from './routes/footer.tsx';
import ScrollTop from './component/scroll-top.tsx';
import Reveal from './component/reveal.tsx';
import '../styles/navbar.css';
import '../styles/footer.css';
import '../styles/content.css';
import '../styles/education.css';
import '../styles/project.css';
import '../styles/theme.css';

const navLinkFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.45, duration: 0.25, ease: 'easeOut' },
} as const;

const navMountFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
} as const;

const pracNavLinks = [
  { id: 'prac-overview', label: 'Overview' },
  { id: 'prac-background', label: 'Background' },
  { id: 'prac-tasks', label: 'Tasks' },
  { id: 'prac-seminar', label: 'Seminar' },
  { id: 'prac-synthesis', label: 'Synthesis' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top, behavior: 'smooth' });
};

let pendingModeSwitch = false;
const modeSwitchKeys = new Set<string>();
const useModeSwitch = () => {
  const location = useLocation();
  if (pendingModeSwitch) {
    modeSwitchKeys.add(location.key);
    pendingModeSwitch = false;
  }
  return modeSwitchKeys.has(location.key);
};

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const inPracticum = location.pathname.startsWith('/practicum');
  const modeSwitch = useModeSwitch();

  return (
    <motion.nav layoutRoot className="navbar-container">
      <div className="nav-links-wrapper">
        <LayoutGroup>
          <div className="nav-links">
            <motion.button
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ opacity: { duration: 0.5, ease: 'easeOut' }, layout: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } }}
              className="nav-mode-btn"
              style={{ order: inPracticum ? -1 : 1 }}
              onClick={() => { window.scrollTo(0, 0); pendingModeSwitch = true; navigate(inPracticum ? '/' : '/practicum'); }}
            >
              {inPracticum ? 'Home' : 'Practicum'}
            </motion.button>
            {inPracticum ? (
              <motion.div
                key="prac-links"
                className="nav-group nav-group-practicum"
                {...(modeSwitch ? navLinkFade : navMountFade)}
              >
                {pracNavLinks.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="nav-item"
                    onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
                  >
                    {s.label}
                  </a>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="main-links"
                className="nav-group"
                {...(modeSwitch ? navLinkFade : navMountFade)}
              >
                <Link to="/" className="nav-item" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                <Link to="/projects" className="nav-item" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
                <Link to="/blog" className="nav-item" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
              </motion.div>
            )}
          </div>
        </LayoutGroup>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        <span className="icon-sun-moon">
          {theme === 'light' ? <Moon /> : <Sunn /> }
        </span>
      </button>
    </motion.nav>
  );
};

const HomeContent = () => (
  <>
    <Reveal><Home /></Reveal>
    <Reveal delay={0.15}><span id="education"><Education /></span></Reveal>
    <span id="projects"><Project /></span>
    <span id="blog"><BlogPreview /></span>
    <Reveal delay={0.75}><FooterBar /></Reveal>
  </>
);

const AfterShift =({ enabled, children }: { enabled: boolean; children: React.ReactNode }) => {
  const [show, setShow] = useState(!enabled);
  useEffect(() => {
    if (show) return;
    const t = setTimeout(() => setShow(true), 550);
    return () => clearTimeout(t);
  }, [show]);
  return show ? <>{children}</> : null;
};

const HomeRoute =() => {
  const modeSwitch = useModeSwitch();
  return (
    <main className="layout-root">
      <div className="content-wrapper">
        <AfterShift enabled={modeSwitch}><HomeContent /></AfterShift>
      </div>
    </main>
  );
};

const PracticumContent = () => (
  <>
    <Reveal><Practicum /></Reveal>
    <Reveal delay={0.3}><FooterBar /></Reveal>
  </>
);

const PracticumRoute = () => {
  const modeSwitch = useModeSwitch();
  return (
    <main className="layout-root">
      <div className="content-wrapper">
        <AfterShift enabled={modeSwitch}><PracticumContent /></AfterShift>
      </div>
    </main>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');

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
        <Route path="/" element={<HomeRoute />} />
        <Route path="/projects" element={<main className="layout-root"><div className="content-wrapper"><Projects /><Reveal delay={0.5}><FooterBar /></Reveal></div></main>} />
        <Route path="/blog" element={<main className="layout-root"><div className="content-wrapper"><Blog /><Reveal delay={0.5}><FooterBar /></Reveal></div></main>} />
        <Route path="/blog/:id" element={<main className="layout-root"><div className="content-wrapper"><BlogPost /><Reveal delay={0.5}><FooterBar /></Reveal></div></main>} />
        <Route path="/practicum" element={<PracticumRoute />} />
        <Route path="/practicum/task/:id" element={<main className="layout-root"><div className="content-wrapper"><TaskPost /><Reveal delay={0.5}><FooterBar /></Reveal></div></main>} />
      </Routes>
    </>
  );
};

export default App
