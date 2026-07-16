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
      <div className="hero-frame">
        <div className="hero-body">

          <div className="hero-top-row">
            <div className="hero-user-info">
              <div className="hero-avatar">
                <img src={profileImage} alt="Profile" />
              </div>
              <div className="hero-user-text">
                <h1 className="hero-name">Jan Gabriel Rea</h1>
                <span className="hero-eyebrow">
                  <span className="hero-eyebrow-label">Software Developer</span>
                </span>
              </div>
            </div>
            <div className="hero-actions">
              {socials.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hero-action">
                    <IconComponent />
                  </a>
                );
              })}
              <a href={resumeUrl} target="_blank" className="hero-action hero-action-text">
                <Resume />
                <span>CV</span>
              </a>
            </div>
          </div>

          <p className="hero-summary">
            I'm an Information Technology student studying at Malayan Colleges of Laguna, with 3 years of
            hands-on experience in software development. Driven by a passion for building web applications
            and workflow-boosting tools.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Home;
