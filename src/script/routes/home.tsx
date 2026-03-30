import '../../styles/navbar.css';
import '../../styles/content.css';
import '../../styles/theme.css';
import Email from '@/assets/lucide/email.tsx';
import Gith from '@/assets/lucide/github.tsx';
import Linkin from '@/assets/lucide/linkedin.tsx';
import Resume from '@/assets/lucide/resume.tsx';
import profileImage from '@/assets/profile-image-picture.JPG';
import { socials, resumeUrl } from '@/script/component/data/socials-data';

const iconMap: { [key: string]: React.FC } = {
  email: Email,
  github: Gith,
  linkedin: Linkin,
};

const Home = () => {
  return (
    <div className="profile-section" id="home">
      <div className="profile-details">
        
        <div className="top-row">
          <div className="user-info">
            <div className="img-container">
              <img src={profileImage} alt="Profile" />
            </div>
            <div className="user-text">
              <p className="intro-text"><b>Jan Gabriel Rea</b></p>
              <p className="main-headline">Software Developer</p>
            </div>
          </div>

          <div className="social-icons">
            {socials.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <IconComponent />
                </a>
              );
            })}
            
            <a href={resumeUrl} target="_blank" className="rect-btn">
              <Resume />
              <span className='button-text'>CV</span>
            </a>
          </div>
        </div>

        <div className="summary-content">
          <p className="main-headline">
            I'm an Information Technology student studying at Malayan Colleges of Laguna, with 3 years of 
            hands-on experience in software development. Currently looking for an OJT opportunity to apply my skills.
          </p>
        </div>                
      </div>          
    </div>
  );
};

export default Home;