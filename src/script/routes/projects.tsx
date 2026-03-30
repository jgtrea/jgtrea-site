import Website from '../../assets/lucide/website.tsx';
import Gith from '../../assets/lucide/github.tsx';
import { ProjectData } from '../component/data/project-data'; 

const Projects = () => {
    const reversedProjects = [...ProjectData].reverse();

    return (
        <div className="project-container">
            <div className="project-titlebar">
                <span className="intro-text"><b>My Projects</b></span>
            </div>

            <div className="project-wrapper">
                {reversedProjects.map((project) => (
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

export default Projects;