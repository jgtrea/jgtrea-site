import RightArrow from '../../assets/lucide/arrow';
import Website from "@/assets/lucide/website";
import Gith from '@/assets/lucide/github';
import { ProjectData } from './data/project-data';
import { Link } from 'react-router-dom';

const Project = () => {
    const latestProjects = [...ProjectData].reverse().slice(0, 2);

    return (        
        <div className="project-container">
            <div className="project-titlebar">
                <span className="intro-text"><b>My Projects</b></span>
                <Link to="/projects" className="rect-btn">
                    <span className='button-text'>others</span>
                    <RightArrow />
                </Link>              
            </div>       

            <div className="project-wrapper">
                {latestProjects.map((project) => (
                    <div className="project-display" key={project.id}>
                        <div className="project-screen">                    
                            {project.image ? (
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} preview`} 
                                    className="project-image" 
                                />
                            ) : (
                                <div className="project-display-url">
                                    WIP
                                </div>
                            )}
                        </div>
                        
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
                ))}
            </div>              
        </div>
    );
};

export default Project;