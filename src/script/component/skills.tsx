import SectionHeader from './section-header';
import { skills } from './data/skills-data';
import '../../styles/skills.css';

const Skills = () => (
  <div className="skills-section">
    <SectionHeader title="Skills" />
    <div className="edu-section skills-card">
      {skills.map((group) => (
        <div key={group.category} className="skills-row">
          <span className="skills-category">{group.category}</span>
          <div className="skills-tags">
            {group.items.map((item) => (
              <span key={item} className="stack-box">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
