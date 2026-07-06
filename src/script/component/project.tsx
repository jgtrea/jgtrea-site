import RightArrow from '../../assets/lucide/arrow';
import Website from "@/assets/lucide/website";
import Gith from '@/assets/lucide/github';
import { ProjectData } from './data/project-data';
import { Link } from 'react-router-dom';
import Reveal from './reveal';

const Project = () => {
    const latestProjects = [...ProjectData].reverse().slice(0, 2);

    return (        
        <div className="project-container">
            <Reveal delay={0.3}>
                <div className="project-titlebar">
                    <span className="intro-text"><b>My Projects</b></span>
                    <Link to="/projects" className="rect-btn">
                        <span className='button-text'>others</span>
                        <RightArrow />
                    </Link>
                </div>
            </Reveal>

            <div className="project-wrapper">
                {latestProjects.map((project, cardIndex) => (
                    <Reveal delay={0.45 + Math.floor(cardIndex / 2) * 0.15} key={project.id}>
                    <div className="project-display">
                        {project.image ? (
                            <a href={project.image} target="_blank" rel="noreferrer" className="project-image-link">
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    className="project-image"
                                    style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                                />
                            </a>
                        ) : (
                            <div className="project-display-dots" />
                        )}
                        
                        <div className="project-display-content">
                            <h1><b><i>{project.title}</i></b></h1>  
                            <p>{project.description}</p>
                            
                            {project.stack && project.stack.length > 0 && (
                                <div className="stack-wrapper">
                                    {project.stack.map((tech, index) => (
                                        <span key={index} className="stack-box">{tech}</span>
                                    ))}
                                </div>
                            )}
                            
                            <div className="src-wrapper">
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noreferrer" className="rect-btn">
                                        <Website /><span className='button-text'>website</span>
                                    </a>
                                )}

                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="rect-btn">
                                        <Gith /><span className='button-text'>source</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Project;