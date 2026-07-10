import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../../component/section-header';
import {
  companyBackground,
  practicumLog,
  totalHours,
  requiredHours,
  tasks,
  seminars,
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
        {(task.subtitle || task.period) && (
          <p className="practicum-card-meta">
            {task.subtitle}
            {task.subtitle && task.period && <> &middot; </>}
            {task.period}
          </p>
        )}
        <p className="practicum-card-body">{task.description}</p>
      </div>
    ))}
  </div>
);

const Seminar = () => (
  <div className="practicum-card">
    <SeminarCarousel />
  </div>
);

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const SeminarCarousel = () => {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const paginate = (dir: number) =>
    setPage(([i]) => [(i + dir + seminars.length) % seminars.length, dir]);
  const entry = seminars[index];

  return (
    <>
      <div className="practicum-carousel">
        <button className="practicum-carousel-arrow" onClick={() => paginate(-1)} aria-label="Previous seminar">
          <ChevronLeft />
        </button>
        <div className="practicum-carousel-viewport">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={entry.title}
              className="practicum-seminar-row"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {entry.cert ? (
                <a
                  href={entry.cert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="practicum-cert"
                  title="Open certificate"
                >
                  {entry.cert.toLowerCase().endsWith('.pdf') ? (
                    <iframe
                      src={`${entry.cert}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      title={`${entry.title} certificate`}
                      tabIndex={-1}
                    />
                  ) : (
                    <img src={entry.cert} alt={`${entry.title} certificate`} />
                  )}
                </a>
              ) : (
                <div className="practicum-cert practicum-cert-placeholder" />
              )}
              <div className="practicum-seminar-text">
                <h3 className="practicum-card-title">{entry.title}</h3>
                <p className="practicum-card-meta">
                  {entry.type} &middot; {entry.date}
                  {entry.speaker && <> &middot; {entry.speaker}</>}
                </p>
                <p className="practicum-card-body">{entry.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="practicum-carousel-arrow" onClick={() => paginate(1)} aria-label="Next seminar">
          <ChevronRight />
        </button>
      </div>
      <div className="practicum-carousel-dots">
        {seminars.map((s, i) => (
          <button
            key={s.title}
            className={`practicum-carousel-dot${i === index ? ' active' : ''}`}
            onClick={() => setPage([i, i > index ? 1 : -1])}
            aria-label={`Go to seminar ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
};

const Synthesis = () => (
  <div className="practicum-card">
    <div className="practicum-card-title-row">
      <h3 className="practicum-card-title">Practicum Synthesis</h3>
      <Link to="/practicum/synthesis" className="section-action">
        View <span className="section-action-arrow">&rarr;</span>
      </Link>
    </div>
    <p className="practicum-card-body">{synthesis[0]}</p>
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
