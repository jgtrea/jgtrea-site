import { Link } from 'react-router-dom';
import SectionHeader from '../../component/section-header';
import {
  companyBackground,
  practicumLog,
  totalHours,
  requiredHours,
  tasks,
  seminar,
  synthesis,
} from '../../component/data/practicum';
import '../../../styles/education.css';
import '../../../styles/practicum.css';

const Overview = () => (
  <>
    <div className="practicum-hours-card">
      <div className="practicum-hours-stat">
        <span className="practicum-hours-value">{totalHours}</span>
        <span className="practicum-hours-label">Total Hours Rendered</span>
      </div>
      <div className="practicum-hours-bar">
        <div
          className="practicum-hours-fill"
          style={{ width: `${Math.min((totalHours / requiredHours) * 100, 100)}%` }}
        />
      </div>
      <span className="practicum-hours-caption">
        {totalHours} / {requiredHours} required hours
      </span>
    </div>
    <div className="practicum-log">
      {practicumLog.map((entry) => (
        <div key={entry.week} className="practicum-log-row">
          <span className="practicum-log-week">{entry.week}</span>
          <span className="practicum-log-summary">{entry.summary}</span>
          <span className="practicum-log-hours">{entry.hours} hrs</span>
        </div>
      ))}
    </div>
  </>
);

const Background = () => (
  <div className="practicum-card">
    <h3 className="practicum-card-title">{companyBackground.name}</h3>
    <p className="practicum-card-meta">
      {companyBackground.role}
      {companyBackground.period && <> &middot; {companyBackground.period}</>}
      {companyBackground.location && <> &middot; {companyBackground.location}</>}
    </p>
    <p className="practicum-card-body">{companyBackground.description}</p>
  </div>
);

const Tasks = () => (
  <div className="practicum-assignments">
    {tasks.map((task) => (
      <div key={task.id} className="practicum-card">
        <div className="practicum-card-title-row">
          <h3 className="practicum-card-title">{task.title}</h3>
          <Link to={`/practicum/task/${task.id}`} className="section-action">
            View <span className="section-action-arrow">&rarr;</span>
          </Link>
        </div>
        {task.subtitle && <p className="practicum-card-meta">{task.subtitle}</p>}
        <p className="practicum-card-body">{task.description}</p>
      </div>
    ))}
  </div>
);

const Seminar = () => (
  <div className="practicum-card">
    <h3 className="practicum-card-title">{seminar.title}</h3>
    <p className="practicum-card-meta">{seminar.date}</p>
    <p className="practicum-card-body">{seminar.description}</p>
  </div>
);

const Synthesis = () => (
  <div className="practicum-card">
    <p className="practicum-card-body">{synthesis}</p>
  </div>
);

const pracSections = [
  { id: 'prac-overview', label: 'Overview', Body: Overview },
  { id: 'prac-background', label: 'Background', Body: Background },
  { id: 'prac-tasks', label: 'Tasks', Body: Tasks },
  { id: 'prac-seminar', label: 'Seminar', Body: Seminar },
  { id: 'prac-synthesis', label: 'Synthesis', Body: Synthesis },
];

const Practicum = () => {
  return (
    <div className="practicum-sections">
      {pracSections.map((s) => (
        <section key={s.id} id={s.id} className="practicum-section">
          <SectionHeader title={s.label} />
          <div className="practicum-section-content">
            <s.Body />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Practicum;
