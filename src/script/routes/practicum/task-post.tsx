import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { tasks } from '../../component/data/practicum';
import Reveal from '../../component/reveal';
import '../../../styles/blog.css';
import '../../../styles/practicum.css';

const TaskPost = () => {
  const { id } = useParams();
  const task = tasks.find((t) => String(t.id) === id);

  if (!task) {
    return (
      <div className="blog-container">
        <p>Task not found.</p>
        <Link to="/practicum" className="rect-btn blog-back-btn">
          <ArrowLeft /><span className="button-text">back</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <Reveal>
        <Link to="/practicum" className="rect-btn blog-back-btn">
          <ArrowLeft /><span className="button-text">back</span>
        </Link>
        {task.images.length > 0 && (
          <div className="practicum-task-images practicum-task-hero">
            {task.images.map((src) => (
              <img key={src} src={src} alt={`${task.title} screenshot`} />
            ))}
          </div>
        )}
        <h1 className="blog-post-title">{task.title}</h1>
        {(task.subtitle || task.period) && (
          <div className="blog-card-meta">
            {task.subtitle && <span>{task.subtitle}</span>}
            {task.subtitle && task.period && <span>&middot;</span>}
            {task.period && <span>{task.period}</span>}
          </div>
        )}
      </Reveal>
      <Reveal delay={0.15}>
        <div className="practicum-task-detail">
          <p className="practicum-card-body">{task.description}</p>

          {task.stack.length > 0 && (
            <div className="practicum-stack">
              {task.stack.map((item) => (
                <div key={item.label} className="practicum-stack-row">
                  <span className="practicum-stack-label">{item.label}</span>
                  <span className="practicum-stack-value">{item.value}</span>
                </div>
              ))}
            </div>
          )}

          {task.workIntro && <p className="practicum-card-body">{task.workIntro}</p>}
          {task.work.length > 0 && (
            <ul className="practicum-work-list">
              {task.work.map((item) => (
                <li key={item.title}>
                  <span className="practicum-work-title">{item.title}</span> - {item.detail}
                </li>
              ))}
            </ul>
          )}

          {task.status && <p className="practicum-card-body practicum-task-status">{task.status}</p>}
        </div>
      </Reveal>
    </div>
  );
};

export default TaskPost;
