import '../../styles/navbar.css';
import '../../styles/content.css';
import '../../styles/theme.css';
import Quotes from '../../assets/lucide/quote.tsx';
import Email from '@/assets/lucide/email.tsx';
import Gith from '@/assets/lucide/github.tsx';
import Linkin from '@/assets/lucide/linkedin.tsx';
import Resume from '@/assets/lucide/resume.tsx';

const Home = () => {
  return (
    <div className="profile-section">
      <div className="img-container">
        <img src="../src/assets/profile-1.png" alt="Profile" />
      </div>
      
      <div className="profile-details" id="#home">
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
  );
};

export default Home;