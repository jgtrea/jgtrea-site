import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { synthesis } from '../../component/data/practicum';
import Reveal from '../../component/reveal';
import '../../../styles/blog.css';
import '../../../styles/practicum.css';

const SynthesisPost = () => (
  <div className="blog-container">
    <Reveal>
      <Link to="/practicum" className="rect-btn blog-back-btn">
        <ArrowLeft /><span className="button-text">back</span>
      </Link>
      <h1 className="blog-post-title">Practicum Synthesis</h1>
    </Reveal>
    <Reveal delay={0.15}>
      <div className="practicum-task-detail">
        {synthesis.map((paragraph, i) => (
          <p key={i} className="practicum-card-body">{paragraph}</p>
        ))}
      </div>
    </Reveal>
  </div>
);

export default SynthesisPost;
