import React from 'react';
import Email from '@/assets/lucide/email.tsx';
import Gith from '@/assets/lucide/github.tsx';
import Linkin from '@/assets/lucide/linkedin.tsx';
import Website from '@/assets/lucide/website.tsx';
import Resume from '@/assets/lucide/resume.tsx';
import Copyr from '@/assets/lucide/copyr.tsx';
import { socials, footerText } from '@/script/component/data/socials-data';

const iconMap: { [key: string]: React.FC } = {
  email: Email,
  github: Gith,
  linkedin: Linkin,
  website: Website,
  resume: Resume,
};

const handleSocialClick = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const FooterBar = () => {
  return (
    <div className="footer-wrapper">      
      <footer className="footer-container">
        <div className="footer-left">
          <Copyr /> 2026 {footerText}
        </div>
        <div className="footer-right">
          {socials.map((social) => {
            const IconComponent = iconMap[social.icon];
            return (
              <a 
                key={social.name} 
                href={social.url} 
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick(social.url);
                }} 
                className="icon-link"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default FooterBar;
